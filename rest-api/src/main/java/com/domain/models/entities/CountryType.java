package com.domain.models.entities;

public enum CountryType {
  ARGENTINA ("Argentina"),
  PORTUGAL("Portugal"),
  INDONESIA ("Indonesia"),
  RUSIA ("Rusia");

  private final String country;

  CountryType(String country) {
    this.country = country;
  }

  public String getCountry() {
    return country;
  }
}
