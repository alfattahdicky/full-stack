package com.domain.services;

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
    System.out.println(personRepo.findById(person.getNik()).isPresent());
    return personRepo.save(person);
  }

  public boolean checkingDataPerson(Long nik) {
    return personRepo.findById(nik).isPresent();
  }

  public Person updatePerson(Person person) {
    Person updatePerson = personRepo.findById(person.getNik()).orElse(null);
    updatePerson.setNik(person.getNik());
    updatePerson.setAddress(person.getAddress());
    updatePerson.setFullName(person.getFullName());
    updatePerson.setCountry(person.getCountry());
    updatePerson.setDateOfBirth(person.getDateOfBirth());
    updatePerson.setGender(person.getGender());

    return personRepo.save(updatePerson);
  }

  public Person findOne(Long nik) {
    Optional<Person> temp = personRepo.findById(nik);

    if(!temp.isPresent()) {
      return null;
    }
    // System.out.println(personRepo.findById(nik).isPresent());
    return personRepo.findById(nik).get();
  }

  public Iterable<Person> findAll() {
    return personRepo.findAll();
  }

  public void removeOne(Long nik) {
    personRepo.deleteById(nik);
  }

  public Person findByName(String fullName) {
    return personRepo.findByFullName(fullName);
  }

}
