package com.uz.advertisement.controller;

import com.uz.advertisement.model.Advertisement;
import com.uz.advertisement.model.Category;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping(path = "advertisements")
public interface AdvertisementController {

  @GetMapping(value = "/{id}")
  Advertisement getOneById(@PathVariable final String id);

  @GetMapping
  List<Advertisement> getAll(final Pageable pageable);

  @GetMapping(value = "category/{category}")
  List<Advertisement> getByCategory(@PathVariable Category category, final Pageable pageable);

  @PostMapping
  Advertisement save(@RequestBody Advertisement advertisement);

  @PutMapping
  Advertisement update(@RequestBody Advertisement advertisement);

  @DeleteMapping(value = "/{id}")
  void deleteById(final String id);
}
