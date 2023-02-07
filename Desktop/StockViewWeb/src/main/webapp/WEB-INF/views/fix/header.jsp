<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<a href="/stockViewWeb">home으로</a>
<h3><%= session.getAttribute("memberName") %> 님 환영합니다 </h3>	

<a href="member/detail?id=<%= session.getAttribute("id") %>" > 내 정보보기 </a>
<%
if (session.getAttribute("memberName") == null) response.sendRedirect("/stockViewWeb/member/login");
%>
