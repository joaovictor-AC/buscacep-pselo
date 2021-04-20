package br.com.elojr.buscacep.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.elojr.buscacep.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
	User findByEmail(String email);
}
