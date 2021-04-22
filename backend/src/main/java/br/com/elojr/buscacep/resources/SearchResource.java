package br.com.elojr.buscacep.resources;

import java.net.URI;
import java.util.Iterator;
import java.util.List;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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
			@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "size", defaultValue = "12") Integer size) {
		
		PageRequest pageRequest = PageRequest.of(page, size);
		
		Page<SearchDTO> list = new Page<SearchDTO>() {
			
			@Override
			public Iterator<SearchDTO> iterator() {
				return null;
			}
			
			@Override
			public Pageable previousPageable() {
				return null;
			}
			
			@Override
			public Pageable nextPageable() {
				return null;
			}
			
			@Override
			public boolean isLast() {
				return false;
			}
			
			@Override
			public boolean isFirst() {
				return false;
			}
			
			@Override
			public boolean hasPrevious() {
				return false;
			}
			
			@Override
			public boolean hasNext() {
				return false;
			}
			
			@Override
			public boolean hasContent() {
				return false;
			}
			
			@Override
			public Sort getSort() {
				return null;
			}
			
			@Override
			public int getSize() {
				return 0;
			}
			
			@Override
			public int getNumberOfElements() {
				return 0;
			}
			
			@Override
			public int getNumber() {
				return 0;
			}
			
			@Override
			public List<SearchDTO> getContent() {
				return null;
			}
			
			@Override
			public <U> Page<U> map(Function<? super SearchDTO, ? extends U> converter) {
				return null;
			}
			
			@Override
			public int getTotalPages() {
				return 0;
			}
			
			@Override
			public long getTotalElements() {
				return 0;
			}
		};
		
		if (localidade.length() == 0) {
			list = service.listOfCurrentUserWithoutParams(pageRequest);
		} else {
			list = service.listOfCurrentUser(localidade, pageRequest);
		}
		return ResponseEntity.ok().body(list);
	}
	
	@PostMapping
	public ResponseEntity<SearchDTO> insert(@RequestBody SearchInsertDTO dto) {
		SearchDTO newDto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(newDto);
	}
}
