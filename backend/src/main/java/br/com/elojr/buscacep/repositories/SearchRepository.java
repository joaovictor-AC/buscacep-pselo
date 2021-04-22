package br.com.elojr.buscacep.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.elojr.buscacep.entities.Search;

@Repository
public interface SearchRepository extends JpaRepository<Search, Long>{
}
