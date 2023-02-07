package com.stockViewWeb.dto;

import java.math.BigInteger;

public class StockDTO {
	public StockDTO () {
		
	}
	public StockDTO(String stockItemName, String openPrice, String closePrice) {
		super();
		this.stockItemName = stockItemName;
		this.openPrice = openPrice;
		this.closePrice = closePrice;
	}
	public StockDTO(Integer id) {
		super();
		this.id = id;
	}
	public StockDTO(Integer id ,String stockItemName, String openPrice, String closePrice) {
		super();
		this.id = id;
		this.stockItemName = stockItemName;
		this.openPrice = openPrice;
		this.closePrice = closePrice;
	}
	private Integer id;
	private String itemCode;
	private String marketSegmentation;
	private String presence;
	private String prepare;
	private String fluctuationRate;
	private String highPrice;
	private String lowPrice;
	private String tradingVolume;
	private BigInteger transactionAmount;

	public String getItemCode() {
		return itemCode;
	}
	public void setItemCode(String itemCode) {
		this.itemCode = itemCode;
	}
	public String getMarketSegmentation() {
		return marketSegmentation;
	}
	public void setMarketSegmentation(String marketSegmentation) {
		this.marketSegmentation = marketSegmentation;
	}
	public String getPresence() {
		return presence;
	}
	public void setPresence(String presence) {
		this.presence = presence;
	}
	public String getPrepare() {
		return prepare;
	}
	public void setPrepare(String prepare) {
		this.prepare = prepare;
	}
	public String getFluctuationRate() {
		return fluctuationRate;
	}
	public void setFluctuationRate(String fluctuationRate) {
		this.fluctuationRate = fluctuationRate;
	}
	public String getHighPrice() {
		return highPrice;
	}
	public void setHighPrice(String highPrice) {
		this.highPrice = highPrice;
	}
	public String getLowPrice() {
		return lowPrice;
	}
	public void setLowPrice(String lowPrice) {
		this.lowPrice = lowPrice;
	}
	public String getTradingVolume() {
		return tradingVolume;
	}
	public void setTradingVolume(String tradingVolume) {
		this.tradingVolume = tradingVolume;
	}
	public BigInteger getTransationAmount() {
		return transactionAmount;
	}
	public void setTransationAmount(BigInteger transactionAmount) {
		this.transactionAmount = transactionAmount;
	}
	private String stockItemName;
	private String openPrice;
	private String closePrice;
	public String getStockItemName() {
		return stockItemName;
	}
	public void setStockItemName(String stockItemName) {
		this.stockItemName = stockItemName;
	}
	public String getOpenPrice() {
		return openPrice;
	}
	public void setOpenPrice(String openPrice) {
		this.openPrice = openPrice;
	}
	public String getClosePrice() {
		return closePrice;
	}
	public void setClosePrice(String closePrice) {
		this.closePrice = closePrice;
	}
	@Override
	public String toString() {
		return "StockDTO [stockItemName=" + stockItemName + ", openPrice=" + openPrice + ", closePrice=" + closePrice
				+ "]";
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
	
}
