package br.com.elojr.buscacep.services;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.elojr.buscacep.dto.SearchDTO;
import br.com.elojr.buscacep.dto.SearchInsertDTO;
import br.com.elojr.buscacep.entities.Search;
import br.com.elojr.buscacep.entities.User;
import br.com.elojr.buscacep.repositories.SearchRepository;
import br.com.elojr.buscacep.repositories.UserRepository;

@Service
public class SearchService {

	@Autowired
	SearchRepository repository;
	
	@Autowired
	UserRepository userRepository;
	
	public SearchDTO insert(SearchInsertDTO dto) {
		if (repository.findByCep(dto.getCep()) != null) {
			Search entityFound = repository.findByCep(dto.getCep());
			entityFound.setCreatedAt(Instant.now());
			entityFound = repository.save(entityFound);
			return new SearchDTO(entityFound);
		} else {
			Search entity = new Search();
			copyDtoToEntity(dto, entity);
			entity = repository.save(entity);
			return new SearchDTO(entity);
		}
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