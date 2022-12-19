package com.domain.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/home")
public class Welcome {
  
  @GetMapping
  public String welcome() {
    return "Welcome to Spring Boot API";
  }
}
