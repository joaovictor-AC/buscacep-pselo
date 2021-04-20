package br.com.elojr.buscacep.resources;

import java.net.URI;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.elojr.buscacep.dto.SearchDTO;
import br.com.elojr.buscacep.dto.SearchInsertDTO;
import br.com.elojr.buscacep.entities.Search;
import br.com.elojr.buscacep.entities.User;
import br.com.elojr.buscacep.services.AuthService;
import br.com.elojr.buscacep.services.SearchService;

@RestController
@RequestMapping(value = "/searches")
public class SearchResource {
	
	@Autowired
	SearchService service;
	
	@Autowired
	AuthService authService;
	
	@GetMapping
	@Transactional
	public List<SearchDTO> findListOfSearchesMadeByUserAuthenticated() {
		User user = authService.authenticated();
		Set<Search> list = user.getSearches();
		return list.stream().map(x -> new SearchDTO(x)).collect(Collectors.toList());
	}
	
	@PostMapping
	public ResponseEntity<SearchDTO> insert(@RequestBody SearchInsertDTO dto) {
		SearchDTO newDto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(newDto);
	}
}
