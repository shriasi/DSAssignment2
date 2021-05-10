package com.sliit.shoppingplatform.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sliit.shoppingplatform.entity.SellerItem;
import com.sliit.shoppingplatform.service.SellerItemService;


@RestController
@RequestMapping("/selleritem")
public class SellerItemController {

	@Autowired
	private SellerItemService sellerItemService;
	
	@PostMapping("/save")
	public SellerItem saveSellerItem(@RequestBody SellerItem sellerItem) {
		return sellerItemService.saveSellerItem(sellerItem);
	}
	
	@GetMapping("/list")
	public List<SellerItem> getSellerItems() {
		return sellerItemService.getSellerItems();
	}
	
	@PutMapping("/update/{item_id}")
	public SellerItem updateSellerItem(@RequestBody SellerItem sellerItem, @PathVariable("item_id") Long id) {
		return sellerItemService.updateSellerItem(id, sellerItem);
	}
	
	@DeleteMapping("/delete/{item_id}")
	public String deleteSellerItem(@PathVariable("item_id") Long id) {
		sellerItemService.deleteSellerItem(id);
		 return "deleted succesfully.";
	}
}
