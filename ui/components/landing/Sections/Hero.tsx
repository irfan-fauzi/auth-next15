import Image from "next/image";
import Alphawave from "@/ui/components/landing/partner/Alphawave";
import FushionX from "@/ui/components/landing/partner/FushionX";
import Maxiwave from "@/ui/components/landing/partner/Maxiwave";
import Opticore from "@/ui/components/landing/partner/Opticore";
import Stellar from "@/ui/components/landing/partner/Stellar";

const Hero = () => {
  return (
    <section className='mt-14 flex flex-col items-center mx-3'>
      <h1 className='lg:text-6xl/snug text-[2.1rem] font-black text-center text-gray-700 lg:max-w-screen-lg max-w-sm'>
        Azfira Digital Cashier Monitor Outlet Revenue Receipt
      </h1>
      <h2 className='text-gray-600 font-medium max-w-screen-sm text-center mt-5 lg:px-10 px-2 text-md'>
        we developed an innovative and efficient point-of-sale (POS) application
        specifically designed for the Indonesian MSME market.
      </h2>
      <div className='flex mt-10 gap-7 flex-col lg:flex-row'>
        <button className=' w-[180px] py-3 rounded-full shadow-md bg-blue-700 text-gray-50 font-medium text-lg hover:bg-blue-950 transition-colors'>
          Get Started
        </button>
        <button className='shadow-md  w-[180px] py-2 rounded-full font-medium text-lg text-blue-900 hover:border transition-colors hover:border-blue-800'>
          Register
        </button>
      </div>
      <div className='mt-20 flex max-w-screen-lg w-full justify-between items-center'>
        <Alphawave className='hover:fill-blue-900 fill-[#9e9e9e] transition-colors' />
        <FushionX className='hover:fill-blue-900 fill-[#9e9e9e] transition-colors' />
        <Opticore className='hover:fill-blue-900 fill-[#9e9e9e] transition-colors' />
        <Maxiwave className='hover:fill-blue-900 fill-[#9e9e9e] transition-colors' />
        <Stellar className='hover:fill-blue-900 fill-[#9e9e9e] transition-colors' />
      </div>
      <picture className='flex justify-center w-full mt-20 relative z-10'>
        <Image
          src='/hero.webp'
          width={1000}
          height={400}
          priority
          alt='tampilan aplikasi azfira'
        />
      </picture>
    </section>
  );
};

export default Hero;
