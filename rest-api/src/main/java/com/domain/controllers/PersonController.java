package com.domain.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.domain.dto.SearchData;
import com.domain.models.entities.Person;
import com.domain.services.PersonService;

@RestController
@RequestMapping("/api/person")
public class PersonController {
  
  @Autowired
  private PersonService personService;

  @PostMapping
  public Person create(@RequestBody Person person) {
    return personService.save(person);
  } 

  @GetMapping
  public Iterable<Person> findAll(){
    return personService.findAll();
  }

  @GetMapping("/{nik}")
  public Person findOne(@PathVariable("nik") Long nik) {
    return personService.findOne(nik);
  }

  @PostMapping("/search")
  public Person getPersonName(@RequestBody SearchData searchData) {
    return personService.findByName(searchData.getKeyName());
  }

  @PutMapping
  public Person update(@RequestBody Person person) {
    return personService.updatePerson(person);
  }

  @DeleteMapping("/{nik}")
  public void delete(@PathVariable("nik") Long nik) {
    personService.removeOne(nik);
  }

}
