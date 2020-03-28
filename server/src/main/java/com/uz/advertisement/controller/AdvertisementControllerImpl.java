package com.uz.advertisement.controller;

import com.uz.advertisement.model.Advertisement;
import com.uz.advertisement.model.Category;
import com.uz.advertisement.repositories.AdvertisementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AdvertisementControllerImpl implements AdvertisementController {

  @Autowired
  private AdvertisementRepository repository;

  @Override
  public Advertisement getOneById(String id) {
    return repository.findOneById(id);
  }

  @Override
  public List<Advertisement> getAll(Pageable pageable) {
    return repository.findAll(pageable).toList();
  }

  @Override
  public List<Advertisement> getByCategory(Category category, Pageable pageable) {
    return repository.findAllByCategory(category, pageable);
  }

  @Override
  public Advertisement save(Advertisement advertisement) {
    return repository.save(advertisement);
  }

  @Override
  public Advertisement update(Advertisement advertisement) {
    return repository.save(advertisement);
  }

  @Override
  public void deleteById(String id) {
    repository.deleteById(id);
  }
}
