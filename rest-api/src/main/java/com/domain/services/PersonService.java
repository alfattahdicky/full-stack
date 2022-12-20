package com.domain.services;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.domain.models.entities.Person;
import com.domain.models.repos.PersonRepo;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class PersonService {

  @Autowired
  private PersonRepo personRepo;

  public Person save(Person person) {
    return personRepo.save(person);
  }

  public Person findOne(Integer id) {
    Optional<Person> temp = personRepo.findById(id);

    if(!temp.isPresent()) {
      return null;
    }
    return personRepo.findById(id).get();
  }

  public Iterable<Person> findAll() {
    return personRepo.findAll();
  }

  public void removeOne(Integer id) {
    personRepo.deleteById(id);
  }

  public List<Person> findByNameAndNik(String fullName, long nik) {
    return personRepo.findByFullNameAndNik(fullName, nik);
  }

}
