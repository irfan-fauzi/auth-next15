import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import Formregister from "@/ui/auth/FormRegister";
import Buton from "@/ui/auth/Buton";
import Border from "@/ui/auth/Border";
import ButonContainer from "@/ui/auth/ButonContainer";

import Image from "next/image";
import FeaturedRegister from "@/ui/auth/FeaturedRegister";

const RegisterPage = () => {
  return (
    <main className='flex flex-row max-w-screen-xl w-full m-auto  bg-[#F0F2F5] '>
      <section className='w-2/5 hidden relative lg:block h-[750px]'>
        <Image
          src='/register-img.webp'
          alt='woman in office'
          fill
          className='object-cover'
          priority
        />
        <div className='absolute top-4 left-8'>
          <Link href='/'>
            <Image src='/logo2.png' width={150} height={50} alt='logo' />
          </Link>
          <FeaturedRegister />
        </div>
      </section>
      <section className='flex-grow'>
        <div className='flex justify-end mt-5 mr-5'>
          <Link href='/login'>
            have an account ? <span className='text-green-600'>Sign in</span>
          </Link>
        </div>
        <div className='flex justify-center mt-10 mb-10'>
          <div className='text-gray-700 w-full max-w-[28rem] px-3'>
            <h1 className='text-center text-2xl font-bold'>
              Get Started with MAKER
            </h1>
            <p className='text-center text-sm mt-2'>getting started is easy</p>
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
            <Formregister />
          </div>
        </div>
      </section>
    </main>
  );
};

export default RegisterPage;
