<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ page session="false" %>
<html>
<head>
	<title>Member Update Info</title>
</head>
<body>
<h1>
	Hello world!  
</h1>

<form method = "post">	
		<input name = "id" value = "${member.id}" type = "hidden" >
		<input name = "memberId" 
			value = "${member.memberId}" type = "hidden" >
		<input name = "memberPW" 
			value = "${member.memberPW}">
		<input name = "memberName" 
			value = "${member.memberName}">
		<input name = "memberBirth" 
			value = "${member.memberBirth}">
			
		<input type = "submit">
	</form>		
</body>
</html>



