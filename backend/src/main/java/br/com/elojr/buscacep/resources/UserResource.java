package br.com.elojr.buscacep.resources;

import java.net.URI;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.elojr.buscacep.dto.UserDTO;
import br.com.elojr.buscacep.dto.UserInsertDTO;
import br.com.elojr.buscacep.services.UserService;

@RestController
@RequestMapping(value = "/register")
public class UserResource {

	@Autowired
	private UserService service;
	
	@PostMapping
	public ResponseEntity<UserDTO> insertUser(@Valid @RequestBody UserInsertDTO dto) {
		UserDTO newDto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(newDto.getId()).toUri();
		return ResponseEntity.created(uri).body(newDto);
	}
}
