import Image from "next/image";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { IoIosTrendingUp } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Why = () => {
  return (
    <section className='bg-white max-w-[1250px] shadow-lg flex gap-10 mx-auto py-10 pl-12 rounded-3xl mt-20 items-center'>
      <div className='bg-blue-950 rounded-2xl py-5 px-10'>
        <Image
          src='/app.webp'
          width={400}
          height={300}
          alt='tampilan aplikasi azfira kasir'
        />
      </div>
      <div className=''>
        <h2 className='text-[3.5rem]/snug max-w-screen-sm font-black text-gray-700'>
          Why you should choose Azfira Kasir
        </h2>
        <p className='text-xl text-gray-700 max-w-screen-sm mt-5'>
          because we provide what you need, so you will feel satisfied with our
          performance.
        </p>
        <div className='flex gap-2 mt-10 visible w-[680px] overflow-x-auto px-2 py-2'>
          <div className=' max-w-[300px] p-5 bg-gray-100 rounded-lg'>
            <IoIosTrendingUp
              size={50}
              color='#374151'
              className='border-gray-700 rounded-md  border-2 p-1'
            />
            <p className='text-xl mt-5 font-bold'>Simple and Accurate</p>
            <p className='w-[230px] mt-1'>
              Monitor Outlet revenue receipts in real-time
            </p>
          </div>
          <div className=' max-w-[300px] p-5 bg-gray-100 rounded-lg'>
            <TbRosetteDiscountCheckFilled
              size={60}
              color='#374151'
              className='border-gray-700 '
            />
            <p className='text-xl mt-3 font-bold'>Affordable Price</p>
            <p className='w-[230px] mt-1'>
              Monitor Outlet revenue receipts in real-time
            </p>
          </div>
          <div className=' max-w-[300px] p-5 bg-gray-100 rounded-lg'>
            <FaLocationDot
              size={50}
              color='#374151'
              className='border-gray-700 rounded-md '
            />
            <p className='text-xl mt-5 font-bold'>Simple and Accurate</p>
            <p className='w-[230px] mt-1'>
              Monitor Outlet revenue receipts in real-time
            </p>
          </div>
        </div>
        <button className='bg-blue-900 w-[220px] py-3 text-gray-50 rounded-full font-bold mt-10 text-lg shadow-xl'>
          Try Demo
        </button>
      </div>
    </section>
  );
};

export default Why;
