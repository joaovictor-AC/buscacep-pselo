package br.com.elojr.buscacep.resources;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.elojr.buscacep.dto.SearchDTO;
import br.com.elojr.buscacep.entities.Search;
import br.com.elojr.buscacep.entities.User;
import br.com.elojr.buscacep.services.AuthService;

@RestController
@RequestMapping(value = "/searches")
public class SearchResource {
	
	@Autowired
	AuthService authService;
	
	@GetMapping
	@Transactional
	public List<SearchDTO> findListOfSearchesMadeByUserAuthenticated() {
		User user = authService.authenticated();
		Set<Search> list = user.getSearches();
		return list.stream().map(x -> new SearchDTO(x)).collect(Collectors.toList());
	}
	
	//Endpoint de inserir uma busca
}
