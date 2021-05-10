package com.sliit.shoppingplatform.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.sliit.shoppingplatform.entity.SellerItem;



public interface SellerItemRepository extends MongoRepository<SellerItem, Long> {

}
