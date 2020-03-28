package com.uz.advertisement.controller;

import com.uz.advertisement.model.Category;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CategoryControllerImpl implements CategoryController {

  @Override
  public Category[] getAll() {
    return Category.values();
  }
}
