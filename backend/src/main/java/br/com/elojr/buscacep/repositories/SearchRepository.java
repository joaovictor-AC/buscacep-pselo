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
			+ "(LOWER(obj.localidade) LIKE LOWER(CONCAT('%',:localidade,'%'))) AND "
			+ "(LOWER(obj.logradouro) LIKE LOWER(CONCAT('%',:logradouro,'%'))) AND "
			+ "(LOWER(obj.uf) LIKE LOWER(CONCAT('%',:uf,'%'))) "
			+ "ORDER BY obj.createdAt DESC")
	Page<Search> find(User user, String localidade, String logradouro, String uf, Pageable pageable);
}
