package com.sliit.shoppingplatform.service.impl;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sliit.shoppingplatform.entity.CartItem;
import com.sliit.shoppingplatform.repository.CartItemRepository;
import com.sliit.shoppingplatform.service.CartItemService;


@Service
public class CartItemServiceImpl implements CartItemService {

	@Autowired
	private CartItemRepository cartItemRepository;

	@Override 
	public CartItem saveCartItem(CartItem cartItem) {
	
		return cartItemRepository.save(cartItem);
	}

	@Override
	public List<CartItem> getCartItems() {
		
		return cartItemRepository.findAll();
	}

	@Override
	public CartItem updateCartItem(Long id, CartItem cartItem) {
		Optional<CartItem> findById = cartItemRepository.findById(id);
		
		if (findById.isPresent()) {
			
			CartItem cartItemEntity = findById.get();
			
			if (cartItemEntity.getItem_name() != null && !cartItem.getItem_name().isEmpty())
				cartItemEntity.setItem_name(cartItem.getItem_name());
			
			if (cartItem.getItem_quantity() != 0 && !cartItem.getItem_name().isEmpty())
				cartItemEntity.setItem_quantity(cartItem.getItem_quantity());		
			
			if (cartItem.getItem_price() != 0)
				cartItemEntity.setItem_price(cartItem.getItem_price());			
			
			return cartItemRepository.save(cartItemEntity);
		}
		
		return null;
	} 

	@Override
	public void deleteCartItem(Long id) {
		cartItemRepository.deleteById(id);
	}


}