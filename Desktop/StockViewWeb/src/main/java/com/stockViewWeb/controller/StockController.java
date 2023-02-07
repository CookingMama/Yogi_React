package com.stockViewWeb.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.stockViewWeb.dto.MemberDTO;
import com.stockViewWeb.dto.StockDTO;
import com.stockViewWeb.service.StockServiceImpl;

@Controller
public class StockController {
	private static final Logger logger = LoggerFactory.getLogger(StockController.class);
	@Autowired
	private StockServiceImpl stockService;
	
	
	
	@RequestMapping(value="/stock/home", method = RequestMethod.GET)
	public ModelAndView home(
			@ModelAttribute MemberDTO dto
			) {
		
		List<StockDTO> stocks = stockService.viewTop10();
		ModelAndView mav = new ModelAndView();
		mav.setViewName("/stock/stock");
		mav.addObject("stocks", stocks);
		return mav;
	}
	@RequestMapping(value="/stock/detail", method = RequestMethod.GET)
	public ModelAndView detail(@RequestParam(required = false, value="id") Integer id) {
		StockDTO stocks = stockService.findOne(id);
		//item code 앞에 0 붙여서 6자리로 만드는 코드 
		for (int i = stocks.getItemCode().length(); stocks.getItemCode().length()<6; i++) {
			stocks.setItemCode("0" + stocks.getItemCode());
		}
		
		
		ModelAndView mav = new ModelAndView();
		mav.setViewName("/stock/detail");
		if(stocks.getId()==null) mav.setViewName("redirect:/stock/stock");
		mav.addObject("stocks", stocks);
		return mav;
	}
	
		
}
	


