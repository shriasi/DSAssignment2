package com.sliit.shoppingplatform.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sliit.shoppingplatform.entity.CartItem;
import com.sliit.shoppingplatform.service.CartItemService;

@CrossOrigin(origins = "http://localhost:3001")
@RestController
@RequestMapping("/cartitem")
public class CartItemController {

	@Autowired
	private CartItemService cartItemService;
	
	@PostMapping("/save")
	public CartItem saveCartItem(@RequestBody CartItem cartItem) {
		return cartItemService.saveCartItem(cartItem);
	}
	
	@GetMapping("/list")
	public List<CartItem> getCartItems() {
		return cartItemService.getCartItems();
	}
	
	@PutMapping("/update/{item_id}")
	public CartItem updateCartItem(@RequestBody CartItem cartItem, @PathVariable("item_id") Long id) {
		return cartItemService.updateCartItem(id, cartItem);
	}
	
	@DeleteMapping("/delete/{item_id}")
	public String deleteCartItem(@PathVariable("item_id") Long id) {
		cartItemService.deleteCartItem(id);
		 return "deleted succesfully.";
	}
}