package com.sliit.shoppingplatform.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.sliit.shoppingplatform.entity.DeliveryServiceItem;



public interface DeliveryServiceRepository extends MongoRepository<DeliveryServiceItem, Long> {

}