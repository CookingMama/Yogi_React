package com.stockViewWeb.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.stockViewWeb.dto.MemberDTO;
import com.stockViewWeb.service.MemberServiceImpl;



@Controller
public class MemberController {
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	
	@Autowired
	 MemberServiceImpl memberService;
	
	@RequestMapping(value = "/member/login", method = RequestMethod.GET)
	public String getLogin() {
		return "member/login";
	}
	
	@RequestMapping (value = "member/login", method = RequestMethod.POST) 
	public ModelAndView postLogin(
			@ModelAttribute MemberDTO dto,
			HttpServletRequest req) {
		ModelAndView mav = new ModelAndView();
		
		try {
			MemberDTO member = memberService.login(dto);
			mav.setViewName("redirect:/");
			HttpSession session = req.getSession();
			session.setMaxInactiveInterval(60);
			session.setAttribute("id", member.getId());
			session.setAttribute("memberId", member.getMemberId());
			session.setAttribute("memberName", member.getMemberName());
			session.setAttribute("memberPW", member.getMemberPW());
			session.setAttribute("memberBirth", member.getMemberBirth());
			mav.addObject("member",member);
			System.out.println(member);
			
			
		} catch (NullPointerException e) {

			mav.setViewName("redirect:/member/login");
			mav.addObject("errCode", e.getMessage());
		}
		
		
		
		
		return mav;
	}
	
	@RequestMapping(value="/member/signin", method = RequestMethod.GET) 
	public String signup() {
		return "/member/signin";
		
	}
	
	@RequestMapping(value="/member/signin", method = RequestMethod.POST) 
	public ModelAndView signupPost(
			@RequestParam("memberId") String memberId,
			@RequestParam("memberPW") String memberPW,
			@RequestParam("memberName") String memberName,
			@RequestParam("memberBirth") int memberBirth
			) {
		MemberDTO dto = new MemberDTO(memberId, memberPW, memberName,memberBirth);
		int insertRows = memberService.signin(dto);
		ModelAndView mav = new ModelAndView();
		if(insertRows==0) {
			mav.setViewName("redirect:/member/signin");
		}else {
			mav.setViewName("redirect:/");
		}
		return mav;
		
	}
	
	@RequestMapping(value = "/member/member_update", method = RequestMethod.GET)
	public ModelAndView getUpdate(
			@RequestParam("id") Integer id
			) {
		ModelAndView mav = new ModelAndView();
		MemberDTO dto = memberService.findOne(id);
		mav.setViewName("/member/member_update");
		mav.addObject("member", dto);
		return mav;
	}
	@RequestMapping(value = "/member/member_update", method = RequestMethod.POST)
	
	public ModelAndView postUpdate(
			@RequestParam("id") Integer id,
			@RequestParam("memberId") String memberId,
			@RequestParam("memberPW") String memberPW,
			@RequestParam("memberName") String memberName,
			@RequestParam("memberBirth") String memberBirth,
			@ModelAttribute MemberDTO modelDTO,
			HttpServletRequest req
			) {
		logger.info(modelDTO.toString());
		ModelAndView mav = new ModelAndView();
		if (memberService.updateMemberInfoById(modelDTO) == 0) {
			mav.setViewName("redirect:/member/member_update");
		} else {
			mav.setViewName("redirect:/");
			req.getSession().setAttribute("memberName", memberName);;
		}
		mav.addObject("id",modelDTO.getId() );
		return mav;
		
	}
	@RequestMapping(value="/member/detail", method = RequestMethod.GET)
	//받는 url
	public ModelAndView detail(@RequestParam(required = false, value="id") Integer id) {
		MemberDTO members = memberService.findOne(id);
		ModelAndView mav = new ModelAndView();
		mav.setViewName("/member/member_data");
		//jsp 연
		if(members.getId()==null) mav.setViewName("redirect:/");
		mav.addObject("members", members);
		return mav;
	}
// 할일 :
//	member_detail 은 말 그대로 findOne 해서보여쥬눈 공간,이거 만들것.
//	그후 update.jps 만들고 update문 끝낼것...
//			
			
}
