package com.stockViewWeb.dto;

public class MemberDTO {
	private Integer id;
	private String memberId;
	private String memberPW;
	private String memberName;
	private int memberBirth;
	public MemberDTO() {
			
		}
	public MemberDTO(Integer id) {
		super();
		this.id = id;
	}
	
	public MemberDTO(String memberId, String memberPW, String memberName, int memberBirth) {
		super();
		this.memberId = memberId;
		this.memberPW = memberPW;
		this.memberName = memberName;
		this.memberBirth = memberBirth;
	}
	
	public MemberDTO(Integer id, String memberId, String memberPW, String memberName, int memberBirth) {
		super();
		this.id = id;
		this.memberId = memberId;
		this.memberPW = memberPW;
		this.memberName = memberName;
		this.memberBirth = memberBirth;
	}
	
	public Integer getId() {
		return id;
	}
	@Override
	public String toString() {
		return "MemberDTO [id=" + id + ", memberId=" + memberId + ", memberPW=" + memberPW + ", memberName=" + memberName + ", memberBirth="
				+ memberBirth + "]";
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getMemberId() {
		return memberId;
	}
	public void setMemberId(String memberId) {
		this.memberId = memberId;
	}
	public String getMemberPW() {
		return memberPW;
	}
	
	public void setMemberPW(String memberPW) {
		this.memberPW = memberPW;
	}
	public int getMemberBirth() {
		return memberBirth;
	}
	public void setMemberBirth(int memberBirth) {
		this.memberBirth = memberBirth;
	}
	public String getMemberName() {
		return memberName;
	}
	public void setMemberName(String memberName) {
		this.memberName = memberName;
	}
	
}
