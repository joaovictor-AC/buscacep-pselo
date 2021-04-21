package br.com.elojr.buscacep.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.elojr.buscacep.entities.Search;

public interface SearchRepository extends JpaRepository<Search, Long>{
	Search findByCep(String cep);
}
