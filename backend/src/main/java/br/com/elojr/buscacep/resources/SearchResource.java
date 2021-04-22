package br.com.elojr.buscacep.resources;

import java.net.URI;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.elojr.buscacep.dto.SearchDTO;
import br.com.elojr.buscacep.dto.SearchInsertDTO;
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
	public ResponseEntity<Page<SearchDTO>> findListOfSearchesMadeByUserAuthenticated(
			@RequestParam(value = "localidade", defaultValue = "") String localidade,
			@RequestParam(value = "logradouro", defaultValue = "") String logradouro,
			@RequestParam(value = "uf", defaultValue = "") String uf,
			@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "size", defaultValue = "12") Integer size) {

		PageRequest pageRequest = PageRequest.of(page, size);

		Page<SearchDTO> list = service.listOfCurrentUser(localidade.trim(), logradouro.trim(), uf.trim(), pageRequest);
		return ResponseEntity.ok().body(list);
	}

	@PostMapping
	public ResponseEntity<SearchDTO> insert(@Valid @RequestBody SearchInsertDTO dto) {
		SearchDTO newDto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(newDto);
	}
}
