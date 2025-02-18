import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import Formregister from "@/ui/auth/form-register";

const RegisterPage = () => {
  return (
    <main className='flex flex-row max-w-screen-xl w-full m-auto  bg-[#F0F2F5] '>
      <section className='bg-register-img bg-cover bg-center w-2/5 hidden lg:block'>
        <div className='mt-5 ml-5'>
          <Image src='/logo.png' width={170} height={100} alt='logo' />
        </div>
      </section>
      <section className='flex-grow '>
        <div className='flex justify-end mt-5 mr-5'>
          <Link href='/login'>
            have an account ? <span className='text-green-600'>Sign in</span>
          </Link>
        </div>
        <div className='flex justify-center mt-10 mb-10'>
          <div className='border  text-gray-700 w-full max-w-[28rem] px-3'>
            <h1 className='text-center text-xl font-bold'>
              Get Started with MAKER
            </h1>
            <p className='text-center text-sm mt-2'>getting started is easy</p>
            <div className='flex justify-center mt-5 gap-2'>
              <button className='border border-red-300 flex items-center justify-center gap-2 px-5 py-3 rounded-md'>
                <FcGoogle />
                <span>Google</span>
              </button>
              <button className='border border-red-300  flex items-center justify-center gap-1 px-5 py-3 rounded-md'>
                <FaFacebookSquare />
                <span>facebook</span>
              </button>
            </div>
            <div className='flex justify-between gap-5 items-center mt-4'>
              <span className='bg-gray-400 w-full h-[1px] flex-1'></span>
              <span className='text-xs flex-2'>or continue with</span>
              <span className='bg-gray-400 w-full h-[1px] flex-1'></span>
            </div>
            <Formregister />
          </div>
        </div>
      </section>
    </main>
  );
};

export default RegisterPage;
