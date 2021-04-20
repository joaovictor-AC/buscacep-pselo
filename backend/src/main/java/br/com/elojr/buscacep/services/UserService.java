package br.com.elojr.buscacep.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.elojr.buscacep.dto.SearchDTO;
import br.com.elojr.buscacep.dto.UserDTO;
import br.com.elojr.buscacep.dto.UserInsertDTO;
import br.com.elojr.buscacep.entities.Search;
import br.com.elojr.buscacep.entities.User;
import br.com.elojr.buscacep.repositories.SearchRepository;
import br.com.elojr.buscacep.repositories.UserRepository;

@Service
public class UserService implements UserDetailsService {

	private static Logger logger = LoggerFactory.getLogger(UserService.class);
	
	@Autowired
	private UserRepository repository;
	
	@Autowired
	private SearchRepository searchRepository;
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	@Transactional
	public UserDTO insert(UserInsertDTO dto) {
		User entity = new User();
		copyDtoToEntity(dto, entity);
		entity.setPassword(passwordEncoder.encode(dto.getPassword()));
		entity = repository.save(entity);
		return new UserDTO(entity, entity.getSearches());
	}
	
	private void copyDtoToEntity(UserInsertDTO dto, User entity) {
		entity.setEmail(dto.getEmail());
		entity.getSearches().clear();

		for (SearchDTO searchDto : dto.getSearches()) {
			Search search = searchRepository.getOne(searchDto.getId());
			entity.getSearches().add(search);
		}
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = repository.findByEmail(username);
		if (user == null) {
			logger.error("Usuário não encontrado: " + username);
			throw new UsernameNotFoundException("Email não encontrado");
		}
		logger.info("Usuário encontrado: " + username);
		return user;
	}

}
