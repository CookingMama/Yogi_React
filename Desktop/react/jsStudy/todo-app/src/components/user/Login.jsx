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
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { api } from '../../api/api';
import { login } from '../store/user/userSlice';

export default function Login() {
  const {data, error, status} = useSelector((state) => state.user);
  const [user,setUser ] = useState({
    memberId: '',
    memberPw: '',
});
const navigate = useNavigate();
const dispatch = useDispatch();
const onSubmit = async(e) => {
  e.preventDefault();
  dispatch(login(user))
  // console.log(user);
 
  //  .catch((e) => {
  //         if (response?.status === 401) {
  //           alert("아이디와 비밀번호를 확인해 주세요.")
  //         }
  //         else {
  //           alert(response?.status)
  //         }

  //       }
  //     )
  // console.log(response);
  // const {token, name, phoneNumber} = response.data;
  // localStorage.setItem("token", token);
  // localStorage.setItem("name", name);
  // localStorage.setItem("phoneNumber", phoneNumber);
  
  
 

}
useEffect(() => {
  if (status === "succeeded" && data.token) {
    alert(`로그인이 완료됐습니다. ${data.name}님 환영합니다` );
    navigate("/");
  }
},[status,data]);
const onChangeHandler = (e) => {
  const {name, value} = e.target;
  setUser({ ...user, [name] : value
  })
}

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
                <label htmlFor="memberId" className="sr-only">
                memberId
                </label>
                <input
                  id="memberId"
                  name="memberId"
                  onChange = {onChangeHandler}
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="User ID"
                />
              </div>
              <div>
                <label htmlFor="memberPw" className="sr-only">
                  Password
                </label>
                <input
                  id="memberPw"
                  name="memberPw"
                  onChange = {onChangeHandler}
                  type="password"
                  autoComplete="memberPw"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>            

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}