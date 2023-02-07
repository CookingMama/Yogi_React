<%@page import= "com.stockViewWeb.exception.ErrorCode" %>

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h2><%= new ErrorCode().get(request.getParameter("errCode")) %></h2>
	<form method="post">
		<input name="memberId">
		<input name="memberPW" type="password">
		<input type="submit">
	</form>
</body>
</html>