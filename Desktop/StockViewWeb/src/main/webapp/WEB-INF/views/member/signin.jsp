<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ page session="false" %>
<html>
<head>
	<title>Home</title>
</head>
<body>
<h1>
	Hello world!  
</h1>

<P>  The time on the server is ${serverTime}. </P>
<form method="post">
		<input name="memberId" placeholder = "아이디를 입력하세요"/>
		<input name="memberPW" type="password" placeholder = "비밀번호를 입력하세요"/>
		<input name="memberName" placeholder="이름을 입력하세요"/>
		<input name="memberBirth" placeholder="생년월일을 입력하세요 (YYMMDD)"/>
		
		<input type="submit" value = "등록"/>
	</form>
</body>
</html>



	