package br.com.elojr.buscacep.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.elojr.buscacep.entities.Search;
import br.com.elojr.buscacep.entities.User;

@Repository
public interface SearchRepository extends JpaRepository<Search, Long>{

	@Query("SELECT obj FROM Search obj WHERE"
			+ "(obj.user = :user) AND "
			+ "(obj.localidade = :localidade )"
			+ "ORDER BY obj.createdAt DESC")
	Page<Search> find(User user, String localidade, Pageable pageable);
	
	@Query("SELECT obj FROM Search obj WHERE"
			+ "(obj.user = :user)"
			+ "ORDER BY obj.createdAt DESC")
	Page<Search> findWithoutParams(User user, Pageable pageable);
}
