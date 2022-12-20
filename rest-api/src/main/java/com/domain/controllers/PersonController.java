package com.domain.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

  @GetMapping("/{id}")
  public Person findOne(@PathVariable("id") Integer id) {
    return personService.findOne(id);
  }

  @PutMapping
  public Person update(@RequestBody Person person) {
    return personService.save(person);
  }

  @DeleteMapping("/{id}")
  public void delete(@PathVariable("id") Integer id) {
    personService.removeOne(id);
  }

}
