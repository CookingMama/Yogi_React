package com.stockViewWeb.repository;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.stockViewWeb.dto.MemberDTO;

@Repository
public class MemberRepository {
		@Autowired
		private SqlSessionTemplate sessionTemplate;
	//	public UserRepository(SqlSessionTemplate sessionTemplate) {ß
	//		this.sessionTemplate = sessionTemplate;
	//	}
	public MemberDTO findOne (MemberDTO id) {
		return sessionTemplate.selectOne("member.findOne", id);
	}
	public MemberDTO login(MemberDTO dto) {
		
		return sessionTemplate.selectOne("member.login", dto);
	}
	public int signin(MemberDTO dto) {
		
		return sessionTemplate.insert("member.signin",dto );
	}
	public Integer updateMemberInfoById(MemberDTO dto) {
		return sessionTemplate.update("member.updateMemberInfoById", dto);
	}

}
