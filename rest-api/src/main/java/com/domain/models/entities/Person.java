package com.domain.models.entities;

import java.io.Serializable;

import org.springframework.lang.NonNull;

import jakarta.annotation.Nonnull;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "persons")
public class Person implements Serializable {

  @GeneratedValue(strategy=GenerationType.UUID)
  private Long id;

  @Id
  private Long nik;

  private String fullName;

  private GenderType gender;

  private String address;

  private String dateOfBirth;

  private CountryType country;

  public Person() {
  }

  public Person(Long id, Long nik, String fullName, GenderType gender, String address, String dateOfBirth,
      CountryType country) {
    this.id = id;
    this.nik = nik;
    this.fullName = fullName;
    this.gender = gender;
    this.address = address;
    this.dateOfBirth = dateOfBirth;
    this.country = country;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
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
