package com.uz.advertisement;

import com.uz.advertisement.model.Advertisement;
import com.uz.advertisement.model.Category;
import com.uz.advertisement.repositories.AdvertisementRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.Instant;

@SpringBootApplication
public class AdvertisementApplication {

  public static void main(String[] args) {

    SpringApplication.run(AdvertisementApplication.class, args);
  }


  @Bean
  public CommandLineRunner loadData(AdvertisementRepository repository) {
    return (args -> {
      repository.save(new Advertisement("1", Category.ANIMALS, 100D, "Nice dog", "I have to sell a nice white dog.", Instant.now()));
      repository.save(new Advertisement("2", Category.CAR, 10000D, "Audi A3", "Black hatchback", Instant.now()));
      repository.save(new Advertisement("3", Category.ELECTRONICS, 2000D, "Dell e5470", "The computer in good state with 8 GB RAM", Instant.now()));
      repository.save(new Advertisement("4", Category.FASHION, 100D, "Black Dress", "Size 42", Instant.now()));
      repository.save(new Advertisement("5", Category.MUSIC, 20D, "Nirvana CD", "Nevermind", Instant.now()));
      repository.save(new Advertisement("6", Category.SPORT, 150D, "Ball to volleyball", "MIKASA MVA 200 ", Instant.now()));
    });
  }

}
