package com.sliit.shoppingplatform.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.sliit.shoppingplatform.entity.CartItem;



public interface CartItemRepository extends MongoRepository<CartItem, Long> {

}