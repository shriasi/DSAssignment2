package com.sliit.shoppingplatform.service.impl;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sliit.shoppingplatform.entity.SellerItem;
import com.sliit.shoppingplatform.repository.SellerItemRepository;
import com.sliit.shoppingplatform.service.SellerItemService;


@Service
public class SellerItemServiceImpl implements SellerItemService {

	@Autowired
	private SellerItemRepository sellerItemRepository;

	@Override
	public SellerItem saveSellerItem(SellerItem sellerItem) {
	
		return sellerItemRepository.save(sellerItem);
	}

	@Override
	public List<SellerItem> getSellerItems() {
		
		return sellerItemRepository.findAll();
	}

	@Override
	public SellerItem updateSellerItem(Long id, SellerItem sellerItem) {
		Optional<SellerItem> findById = sellerItemRepository.findById(id);
		if (findById.isPresent()) {
			SellerItem sellerItemEntity = findById.get();
			if (sellerItemEntity.getItem_name() != null && !sellerItem.getItem_name().isEmpty())
				sellerItemEntity.setItem_name(sellerItem.getItem_name());
			if (sellerItem.getItem_description() != null && !sellerItem.getItem_name().isEmpty())
				sellerItemEntity.setItem_description(sellerItem.getItem_description());		
			if (sellerItem.getItem_price() != 0)
				sellerItemEntity.setItem_price(sellerItem.getItem_price());			
			return sellerItemRepository.save(sellerItemEntity);
		}
		return null;
	}

	@Override
	public void deleteSellerItem(Long id) {
		sellerItemRepository.deleteById(id);
	}


}