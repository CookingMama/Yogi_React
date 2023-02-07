package com.stockViewWeb.repository;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.stockViewWeb.dto.StockDTO;


@Repository
public class StockRepository {
	@Autowired
	private SqlSessionTemplate sessionTemplate;
	
	public List<StockDTO> viewTop10() {
		return sessionTemplate.selectList("stock.viewTop10");
	}
	
	public StockDTO findOne(StockDTO id) {
		return sessionTemplate.selectOne("stock.findOne", id);
	}
	

}