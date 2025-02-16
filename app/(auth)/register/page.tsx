import Formregister from "@/ui/auth/form-register";
import Image from "next/image";
const RegisterPage = () => {
  return (
    <>
      <div className='flex-1 bg-white rounded-lg mt-0 hidden lg:block'>
        <Image
          src='/register-image.png'
          width={0}
          height={0}
          alt='building'
          objectFit="cover"
          
          className='w-full h-full object-cover hidden lg:block'
          sizes='100vw'
        />
      </div>
      <div className=' bg-white rounded-lg mt-0 flex-1 py-5 px-5 text-sm'>
        <h1 className='text-3xl font-bold text-gray-700 text-center'>
          Register
        </h1>

        <Formregister />
      </div>
    </>
  );
};

export default RegisterPage;
