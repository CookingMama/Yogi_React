<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%@ include file="../fix/header.jsp" %>
	<h1>게시글 상세</h1>
	<p> 주식 코드 : ${stocks.itemCode } </p>
	<p> 주식명 : ${stocks.stockItemName}</p>
	<p> 시장 분류 : ${stocks.marketSegmentation } 
	<p> 소속부 : ${stocks.presence } </p>
	<p> 종가 : ${stocks.closePrice} </p>
	<p> 대비 : ${stocks.prepare} </p>
	<p> 등락률 : ${stocks.fluctuationRate} </p>
	<p> 시초가 : ${stocks.openPrice}</p>
	<p> 고가 : ${stocks.highPrice} </p>
	<p> 저가 : ${stocks.lowPrice} </p>
	<p> 거래량 : ${stocks.tradingVolume} </p>
	<a href = "https://finance.naver.com/item/main.naver?code=${stocks.itemCode } ">네이버에서 보기 </a>
	
	<img id="img_chart_area" src="https://ssl.pstatic.net/imgfinance/chart/item/area/day/${stocks.itemCode}.png?sidcode=1675672026998" width="700" height="289" alt="이미지 차트" onerror="this.src='https://ssl.pstatic.net/imgstock/chart3/world2008/error_700x289.png'">
	s
</body> 
</html>