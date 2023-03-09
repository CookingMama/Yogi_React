/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";

// 입력값의 state
export default function SignUp() {
  const [user, setUser] = useState({
    userId: "",
    userPw: "",
    nickName: "",
    birth: "",
    phoneNumber: "",
    email: "",
  });

  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    const response = //
      await api("post", "/user/signup", user); //
    // .catch((e) => {
    //   alert(e.response.data);
    // });
    console.log(response);
    if (response?.status === 201) {
      navigate("/login")
    };
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <form className="mt-8 space-y-6" onSubmit={onSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <input
                  id="userId"
                  name="userId"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="아이디를 입력하세요."
                  onChange={onChangeHandler}
                />
              </div>
              <div>
                <input
                  id="userPw"
                  name="userPw"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="비밀번호를 입력하세요."
                  onChange={onChangeHandler}
                />
              </div>
              <div>
                <input
                  id="nickName"
                  name="nickName"
                  type="text"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="닉네임을 입력해주세요."
                  onChange={onChangeHandler}
                />
              </div>
              <div>
                <input
                  id="birth"
                  name="birth"
                  type="number"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="생년월일을 입력해주세요. 예)230101"
                  onChange={onChangeHandler}
                />
              </div>
              <div>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="number"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="전화번호를 입력해주세요. 예)01012341234"
                  onChange={onChangeHandler}
                />
              </div>
              <div>
                <input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="이메일을 입력해주세요."
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                회원가입
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
