package com.stockViewWeb.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stockViewWeb.dto.StockDTO;
import com.stockViewWeb.repository.StockRepository;

@Service
public class StockServiceImpl {
	@Autowired
	private StockRepository repository;
	
	public List<StockDTO> viewTop10() {
		return repository.viewTop10();
	}
	public StockDTO findOne(Integer id) {
		StockDTO dto = new StockDTO(id);
		return repository.findOne(dto);
	}
}
