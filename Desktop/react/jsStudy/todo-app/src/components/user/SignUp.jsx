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
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../api/api';

export default function SignUp() {
    const [user,setUser ] = useState({
        memberId: '',
        memberPw: '',
        name: '',
        phoneNumber: '',
    });
    const navigate = useNavigate();
    const onSubmit = async(e) => {
        e.preventDefault();
        
        const response = await api("post", "member/signup", user)
        .catch((e) => {
          alert(e.response.data);
        })
        console.log(response);
        if (response?.status === 201) {
          navigate("/login");
        }
    }

  
    
    
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
         
          <form className="mt-8 space-y-6"   onSubmit={onSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="memberId" className="sr-only">
                memberId
                </label>
                <input
               
                  id="memberId"
                  name="memberId"
                  required
                  onChange = {onChangeHandler}
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="memberId"
                />
              </div>
              <div>
                <label htmlFor="memberPw" className="sr-only">
                  Password
                </label>
                <input
                  id="memberPw"
                  name="memberPw"
                  type="password"
                  onChange = {onChangeHandler}
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="sr-only">
                  phoneNumber
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  required
                  onChange = {onChangeHandler}
                  className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Phone number"
                />
              </div>
               <div>
                <label htmlFor="name" className="sr-only">
                name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  onChange = {onChangeHandler}
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter your name"
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
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}