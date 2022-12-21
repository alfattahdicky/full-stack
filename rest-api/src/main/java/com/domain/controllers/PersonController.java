package com.domain.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.integration.IntegrationProperties.Error;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.domain.dto.Response;
import com.domain.dto.SearchData;
import com.domain.models.entities.Person;
import com.domain.services.PersonService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/person")
@CrossOrigin
public class PersonController {

  @Autowired
  private PersonService personService;

  @PostMapping
  public ResponseEntity<Response<Person>> create(@Valid @RequestBody Person person, Errors errors) {
    Response<Person> responseData = new Response<>();
    HttpHeaders responseHeaders = new HttpHeaders();
    responseHeaders.set("Content-type", "application/json");

    if(errors.hasErrors()) {
      for(ObjectError error : errors.getAllErrors()) {
        responseData.getMessages().add(error.getDefaultMessage());
      }
      responseData.setStatus(HttpStatus.BAD_REQUEST.value());
      responseData.setPayload(null);
      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseData);
    }
    if(personService.checkingDataPerson(person.getNik())) {
      responseData.setStatus(HttpStatus.BAD_REQUEST.value());
      responseData.setPayload(null);
      responseData.setMessages(List.of("NIK is already created"));
      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseData);
    }
    responseData.setStatus(HttpStatus.OK.value());
    responseData.setPayload(personService.save(person));
    return ResponseEntity.ok().headers(responseHeaders).body(responseData);
  } 

  @GetMapping
  public ResponseEntity<Iterable<Person>> findAll(){;
    Response<Person> responseData = new Response<>();

    responseData.setStatus(HttpStatus.OK.value());
    return ResponseEntity.ok(personService.findAll());
  }

  @GetMapping("/{nik}")
  public ResponseEntity<Response<Person>> findOne(@PathVariable("nik") Long nik) {
    Response<Person> responseData = new Response<>();

    if(!personService.checkingDataPerson(nik)) {
      responseData.setMessages(List.of("NIK is Not found"));
      responseData.setStatus(HttpStatus.BAD_REQUEST.value());
      responseData.setPayload(personService.findOne(nik));
      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseData);
    }
    responseData.setStatus(HttpStatus.OK.value());
    responseData.setPayload(personService.findOne(nik));
    return ResponseEntity.ok(responseData);
  }

  @PostMapping("/search")
  public ResponseEntity<Response<Person>> getPersonName(@Valid @RequestBody SearchData searchData, Errors errors) {
    Response<Person> responseData = new Response<>();

    if(errors.hasErrors()) {
      for(ObjectError error : errors.getAllErrors()) {
        responseData.getMessages().add(error.getDefaultMessage());
      }
      responseData.setStatus(HttpStatus.BAD_REQUEST.value());
      responseData.setPayload(null);
      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseData);
    }
    responseData.setStatus(HttpStatus.OK.value());
    responseData.setPayload(personService.findByName(searchData.getKeyName()));
    return ResponseEntity.ok(responseData);
  }

  @PutMapping
  public ResponseEntity<Response<Person>> update(@Valid @RequestBody Person person, Errors errors) {
    Response<Person> responseData = new Response<>();

    if(errors.hasErrors()) {
      for(ObjectError error : errors.getAllErrors()) {
        responseData.getMessages().add(error.getDefaultMessage());
      }
      responseData.setStatus(HttpStatus.BAD_REQUEST.value());
      responseData.setPayload(null);
      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseData);
    }
    responseData.setStatus(HttpStatus.OK.value());
    responseData.setPayload(personService.updatePerson(person));
    return ResponseEntity.ok(responseData);
  }

  @DeleteMapping("/{nik}")
  public ResponseEntity<Response<Person>> delete(@PathVariable("nik") Long nik) {
    Response<Person> responseData = new Response<>();

    if(!personService.checkingDataPerson(nik)) {
      responseData.setMessages(List.of("Id not found"));
      responseData.setStatus(HttpStatus.BAD_REQUEST.value());
      responseData.setPayload(null);
      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseData);
    }
    responseData.setStatus(HttpStatus.OK.value());
    responseData.setPayload(null);
    personService.removeOne(nik);
    return ResponseEntity.ok(responseData);
  }

}
