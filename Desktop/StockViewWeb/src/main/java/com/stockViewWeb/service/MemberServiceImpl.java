package com.stockViewWeb.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.stockViewWeb.dto.MemberDTO;
import com.stockViewWeb.repository.MemberRepository;





@Service
public class MemberServiceImpl {
	@Autowired
	private MemberRepository repository;
	
	public MemberDTO login(MemberDTO dto) {
		MemberDTO member = repository.login(dto);
		if (member == null) {
			throw new NullPointerException("00001");
			
		}
	
		
		
		return member;
	}
	public int signin(MemberDTO dto) {
		return repository.signin(dto);
	}
	
	public Integer updateMemberInfoById (MemberDTO dto) {
		return repository.updateMemberInfoById(dto);
	}
	public MemberDTO findOne(Integer id) {
		MemberDTO dto = new MemberDTO(id);
		return repository.findOne(dto);
	}
}
