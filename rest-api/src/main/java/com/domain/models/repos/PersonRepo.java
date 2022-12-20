package com.domain.models.repos;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.domain.models.entities.Person;

public interface PersonRepo extends CrudRepository<Person, Integer> {
  
  List<Person> findByFullNameAndNik(String fullNameString, Long nik);
}
