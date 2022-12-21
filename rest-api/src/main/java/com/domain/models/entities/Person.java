package com.domain.models.entities;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;

@Entity
@Table(name = "persons")
public class Person implements Serializable {
  @Id
  @Column(unique = true)
  private Long nik;

  @NotEmpty(message = "Name is required")
  @Column(length = 20)
  private String fullName;

  @Enumerated(EnumType.STRING)
  @Column(length = 10)
  private GenderType gender;

  @NotEmpty(message = "address must be required")
  @Column(length = 100)
  private String address;

  @NotEmpty(message = "dateOfBirth must be required")
  @Column(nullable = false)
  private String dateOfBirth;

  @Enumerated(EnumType.STRING)
  @Column(length = 10)
  private CountryType country;

  public Person() {}

  public Person(Integer id, Long nik, String fullName, GenderType gender, String address, String dateOfBirth,
      CountryType country) {
    this.nik = nik;
    this.fullName = fullName;
    this.gender = gender;
    this.address = address;
    this.dateOfBirth = dateOfBirth;
    this.country = country;
  }

  public Long getNik() {
    return nik;
  }

  public void setNik(Long nik) {
    this.nik = nik;
  }

  public String getFullName() {
    return fullName;
  }

  public void setFullName(String fullName) {
    this.fullName = fullName;
  }

  public GenderType getGender() {
    return gender;
  }

  public void setGender(GenderType gender) {
    this.gender = gender;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public String getDateOfBirth() {
    return dateOfBirth;
  }

  public void setDateOfBirth(String dateOfBirth) {
    this.dateOfBirth = dateOfBirth;
  }

  public CountryType getCountry() {
    return country;
  }

  public void setCountry(CountryType country) {
    this.country = country;
  }
}
