<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<html>
<head>
	<title>Home</title>
</head>
<body>

<%@ include file="../fix/header.jsp" %>


	<h1>유저정보 상세</h1>
	<p> 현제 비밀번호  : ${members.memberPW}</p>
	<p> 유저 이름 : ${members.memberName}</p>
	<p> 생년월일 : ${members.memberBirth} </p>
	
	<p>
	<a href= "member_update?id=${members.id}">정보수정 </a>
	</p>
	
</body>
</html>


