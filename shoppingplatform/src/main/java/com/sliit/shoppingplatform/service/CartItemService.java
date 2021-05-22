package com.sliit.shoppingplatform.service;

import java.util.List;

import com.sliit.shoppingplatform.entity.CartItem;


public interface CartItemService {

	public CartItem saveCartItem(CartItem cartItem);

	public List<CartItem> getCartItems();

	public CartItem  updateCartItem(Long id, CartItem cartItem);

	public void deleteCartItem(Long id);

}