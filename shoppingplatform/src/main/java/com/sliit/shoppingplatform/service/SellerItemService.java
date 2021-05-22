package com.sliit.shoppingplatform.service;

import java.util.List;

import com.sliit.shoppingplatform.entity.SellerItem;



public interface SellerItemService {

	public SellerItem saveSellerItem(SellerItem sellerItem);

	public List<SellerItem> getSellerItems();

	public SellerItem  updateSellerItem(Long id, SellerItem sellerItem);

	public void deleteSellerItem(Long id);

}
