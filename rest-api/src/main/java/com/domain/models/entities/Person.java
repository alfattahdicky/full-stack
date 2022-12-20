package com.domain.models.entities;

import java.io.Serializable;

import jakarta.annotation.Nonnull;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "persons")
public class Person implements Serializable {
  @GeneratedValue(strategy=GenerationType.UUID)
  @Column(nullable = true)
  private Integer id;

  @Id
  @Nonnull
  @Column(unique = true)
  private Long nik;

  @Column(length = 20)
  private String fullName;

  @Enumerated(EnumType.STRING)
  @Column(length = 10)
  private GenderType gender;

  @Column(length = 100)
  private String address;

  @Column(nullable = false)
  private String dateOfBirth;

  @Enumerated(EnumType.STRING)
  @Column(length = 10)
  private CountryType country;

  public Person() {}

  public Person(Integer id, Long nik, String fullName, GenderType gender, String address, String dateOfBirth,
      CountryType country) {
    this.id = id;
    this.nik = nik;
    this.fullName = fullName;
    this.gender = gender;
    this.address = address;
    this.dateOfBirth = dateOfBirth;
    this.country = country;
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
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
