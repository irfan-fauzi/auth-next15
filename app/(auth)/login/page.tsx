import FormLogin from "@/ui/auth/form-login";
import React from "react";

const LoginPage = () => {
  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold text-gray-700 text-center'>
        Welcome Back
      </h1>
      
      <FormLogin />
    </div>
  );
};

export default LoginPage;
