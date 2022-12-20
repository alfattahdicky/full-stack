package com.domain.models.repos;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.domain.models.entities.Person;

import jakarta.websocket.server.PathParam;

public interface PersonRepo extends CrudRepository<Person, Long> {

  Person findByFullName(String fullName);

  // Person findByFullNameAndNik(String fullName, Long id);

}
