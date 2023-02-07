package com.stockViewWeb.exception;

public class ErrorCode {
	private String [] errMsg = new String[] {"", "찾는 유저가 없음"};
	
	public String get(String errCode) {
		
		
		try {
			return errMsg[Integer.parseInt(errCode)];
			
		}catch (Exception e){
			return "";
		}
	}
}
