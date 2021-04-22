package br.com.elojr.buscacep.services;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.elojr.buscacep.dto.SearchDTO;
import br.com.elojr.buscacep.dto.SearchInsertDTO;
import br.com.elojr.buscacep.dto.UserDTO;
import br.com.elojr.buscacep.entities.Search;
import br.com.elojr.buscacep.entities.User;
import br.com.elojr.buscacep.repositories.SearchRepository;
import br.com.elojr.buscacep.repositories.UserRepository;

@Service
public class SearchService {

	@Autowired
	SearchRepository repository;
	
	@Autowired
	AuthService authService;
	
	@Autowired
	UserRepository userRepository;
	
	@Transactional(readOnly = true)
	public Page<SearchDTO> listOfCurrentUser(String localidade, String logradouro, String uf, Pageable pageable) {
		User user = authService.authenticated();
		Page<Search> page = repository.find(user, localidade, logradouro, uf, pageable);
		return page.map(x -> new SearchDTO(x));
	}
	
	@Transactional
	public SearchDTO insert(SearchInsertDTO dto) {
		User user = authService.authenticated();
		UserDTO userDto = new UserDTO(user, user.getSearches());
		boolean isFound = false;
		
		for (SearchDTO searchDto : userDto.getSearches()) {
			if (searchDto.getCep().equals(dto.getCep())) {
				Search searchEntity = repository.getOne(searchDto.getId());
				searchEntity.setCreatedAt(Instant.now());
				searchEntity = repository.save(searchEntity);
				return new SearchDTO(searchEntity);
			}
		}
		if (isFound == false) {
			Search entity = new Search();
			copyDtoToEntity(dto, entity);
			entity = repository.save(entity);
			return new SearchDTO(entity);
		}
		return null; // unreachable code
	}

	private void copyDtoToEntity(SearchInsertDTO dto, Search entity) {
		entity.setCep(dto.getCep());
		entity.setBairro(dto.getBairro());
		entity.setLocalidade(dto.getLocalidade());
		entity.setCreatedAt(Instant.now());
		entity.setUf(dto.getUf());
		entity.setLogradouro(dto.getLogradouro());
		
		User user = userRepository.getOne(dto.getUser().getId());
		entity.setUser(user);
	}

}