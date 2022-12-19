package com.domain.models.entities;

public enum GenderType {
  LAKI ("Laki - Laki"),
  PEREMPUAN ("Perempuan");

  private final String gender;

  GenderType(String gender) {
    this.gender = gender;
  }

  public String getGender() {
    return gender;
  }


}
