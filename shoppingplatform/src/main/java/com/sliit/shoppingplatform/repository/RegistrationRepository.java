package com.sliit.shoppingplatform.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.sliit.shoppingplatform.entity.Registration;



public interface RegistrationRepository extends MongoRepository<Registration, Long> {

}