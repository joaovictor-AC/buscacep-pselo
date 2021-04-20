package br.com.elojr.buscacep.dto;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import br.com.elojr.buscacep.entities.Search;
import br.com.elojr.buscacep.entities.User;

public class UserDTO {

	private Long id;
	private String email;
	private List<SearchDTO> searches = new ArrayList<>();
	
	public UserDTO() {
		
	}

	public UserDTO(Long id, String email) {
		super();
		this.id = id;
		this.email = email;
	}
	
	public UserDTO(User entity) {
		super();
		this.id = entity.getId();
		this.email = entity.getEmail();
	}
	
	public UserDTO(User entity, Set<Search> searches) {
		this(entity);
		searches.forEach(search -> this.searches.add(new SearchDTO(search)));
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public List<SearchDTO> getSearches() {
		return searches;
	}

	public void setSearches(List<SearchDTO> searches) {
		this.searches = searches;
	}
}
