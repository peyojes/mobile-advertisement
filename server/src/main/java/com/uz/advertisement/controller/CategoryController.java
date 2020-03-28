package com.uz.advertisement.controller;

import com.uz.advertisement.model.Category;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping(path = "categories")
public interface CategoryController {

  @GetMapping
  Category[] getAll();
}
