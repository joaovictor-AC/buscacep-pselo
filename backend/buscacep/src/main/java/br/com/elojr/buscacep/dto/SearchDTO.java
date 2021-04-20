package br.com.elojr.buscacep.dto;

import java.time.Instant;

import br.com.elojr.buscacep.entities.Search;

public class SearchDTO {

	private Long id;
	private String cep;
	private String logradouro;
	private String bairro;
	private String localidade;
	private Instant createdAt;
	private String uf;
	
	public SearchDTO() {
		
	}

	public SearchDTO(Long id, String cep, String logradouro, String bairro, String localidade, Instant createdAt,
			String uf) {
		super();
		this.id = id;
		this.cep = cep;
		this.logradouro = logradouro;
		this.bairro = bairro;
		this.localidade = localidade;
		this.createdAt = createdAt;
		this.uf = uf;
	}
	
	public SearchDTO(Search entity) {
		super();
		this.id = entity.getId();
		this.cep = entity.getCep();
		this.logradouro = entity.getLogradouro();
		this.bairro = entity.getBairro();
		this.localidade = entity.getLocalidade();
		this.createdAt = entity.getCreatedAt();
		this.uf = entity.getUf();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getLogradouro() {
		return logradouro;
	}

	public void setLogradouro(String logradouro) {
		this.logradouro = logradouro;
	}

	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	public String getLocalidade() {
		return localidade;
	}

	public void setLocalidade(String localidade) {
		this.localidade = localidade;
	}

	public Instant getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Instant createdAt) {
		this.createdAt = createdAt;
	}

	public String getUf() {
		return uf;
	}

	public void setUf(String uf) {
		this.uf = uf;
	}
}
