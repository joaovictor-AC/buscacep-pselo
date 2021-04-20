package br.com.elojr.buscacep.services;

import org.springframework.beans.factory.annotation.Autowired;
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
public class UserService {

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

}
