import { HiLightningBolt } from "react-icons/hi";
import { IoTelescopeOutline } from "react-icons/io5";

const FeaturedRegister = () => {
  return (
    <div className='absolute top-72 left-8 '>
          <div className='bg-[#20DC49] w-[225px] py-2 px-3 flex items-center justify-start gap-3 rounded-full'>
            <HiLightningBolt size={40} className='bg-green-800 p-[5px] rounded-full' />
            <p className='text-sm'>Royal Stock Images</p>
          </div>
          <div className='w-[250px] glass mt-8 p-6'>
            <IoTelescopeOutline
              size={50}
              className='bg-black p-2 rounded-xl'
              color='white'
            />
            <p className="text-white text-md w-[190px] font-light mt-5">Best Stock Photos and Videos from across the internet.</p>
          </div>
        </div>
  )
}

export default FeaturedRegister