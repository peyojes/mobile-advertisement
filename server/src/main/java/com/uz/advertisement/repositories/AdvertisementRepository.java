package com.uz.advertisement.repositories;

import com.uz.advertisement.model.Advertisement;
import com.uz.advertisement.model.Category;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface AdvertisementRepository extends PagingAndSortingRepository<Advertisement, String> {

  List<Advertisement> findAllByCategory(Category category, Pageable pageable);

  Advertisement findOneById(String id);
}
