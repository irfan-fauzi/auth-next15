import Border from "@/ui/auth/Border";
import Buton from "@/ui/auth/Buton";
import ButonContainer from "@/ui/auth/ButonContainer";
import FormLogin from "@/ui/auth/FormLogin";
import GlassBoxLogin from "@/ui/auth/GlassBoxLogin";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  return (
    <main className='flex flex-row max-w-screen-xl w-full m-auto  bg-[#F0F2F5] h-[750px]'>
      <section className='flex-grow'>
        <div className='flex justify-between px-5 py-2 mt-5'>
          <Image src='/logo2.png' width={120} height={100} alt='logo' />
          <Link href='/register' className='flex items-center gap-2'>
            <span className='text-sm'>Dont have an account ?</span>
            <span className='text-green-700'>Sign up</span>
          </Link>
        </div>
        <div className='flex justify-center mt-11'>
          <div className='text-gray-700 w-full max-w-[28rem] px-3'>
            <h1 className='text-center text-3xl font-bold'>Welcome Back</h1>
            <p className='text-center text-sm mt-2'>Login into your Account</p>
            <ButonContainer>
              <Buton>
                <FcGoogle />
                <span>Google</span>
              </Buton>
              <Buton>
                <FaFacebookSquare />
                <span>Facebook</span>
              </Buton>
            </ButonContainer>
            <Border />
            <FormLogin />
          </div>
        </div>
      </section>
      <section className='w-2/5 hidden relative lg:block h-[750px]'>
        <Image
          src='/login.webp'
          alt='woman in office'
          fill
          className='object-cover'
          priority
        />
        <GlassBoxLogin />
      </section>
    </main>
  );
};

export default LoginPage;
