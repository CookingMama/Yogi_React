<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<link rel="stylesheet" href="/resources/home.css">
<html>
<head>
	<title>Home</title>
</head>
<body>
<h1>
	Hello world!  
</h1>

<P>  The time on the server is ${serverTime}. </P>
<table>
		<thead>
			<th>주식명</th>
			<th>시초가</th>
			<th>종가</th>
		</thead>
		<tbody>
			<c:forEach items="${stocks}" var="stock">>
				<tr>
					<td>${stock.stockItemName}</td>
					<td>${stock.openPrice}</td>
					<td>${stock.closePrice}</td>
					<td><a href="detail?id=${stock.id}">주식 상세정보</a></td>
				</tr>
			</c:forEach>
		</tbody>
</body>
</html>
