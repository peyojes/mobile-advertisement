package com.uz.advertisement.model;

import com.fasterxml.jackson.annotation.JsonValue;

public enum Category {
  CAR,
  SPORT,
  ELECTRONICS,
  FASHION,
  ANIMALS,
  MUSIC;

  private String value;

  private Category(final String value) {
    this.value = value;
  }

  Category() {
    this.value = this.name();
  }

  @JsonValue
  public String getCategory() {
    return this.value;
  }
}
