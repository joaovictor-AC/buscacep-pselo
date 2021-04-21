package br.com.elojr.buscacep.dto;

import java.io.Serializable;

import javax.validation.constraints.Size;

import br.com.elojr.buscacep.services.validations.UserInsertValid;

@UserInsertValid
public class UserInsertDTO extends UserDTO  implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Size(min = 6, max = 20)
	private String password;
	
	public UserInsertDTO() {
		
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
