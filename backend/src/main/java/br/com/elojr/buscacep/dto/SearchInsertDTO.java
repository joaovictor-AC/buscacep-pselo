package br.com.elojr.buscacep.dto;

import java.io.Serializable;

public class SearchInsertDTO extends SearchDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private UserDTO user;

	public SearchInsertDTO() {
		
	}
	
	public SearchInsertDTO(UserDTO user) {
		super();
		this.user = user;
	}

	public UserDTO getUser() {
		return user;
	}

	public void setUser(UserDTO user) {
		this.user = user;
	}
	
	

}
