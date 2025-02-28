import Alphawave from "@/ui/components/landing/Alphawave";
import Header from "@/ui/components/landing/Header";

const Home = () => {
  return (
    <>
      <Header />
      <section className='mt-14 flex flex-col items-center mx-3'>
        <h1 className='lg:text-6xl/snug text-[2.1rem] font-black text-center text-gray-700 lg:max-w-screen-lg max-w-sm'>
          Zafira Digital Cashier Monitor Outlet Revenue Receipt
        </h1>
        <h2 className='text-gray-600 font-medium max-w-screen-sm text-center mt-5 lg:px-10 px-2 text-md'>
          we developed an innovative and efficient point-of-sale (POS)
          application specifically designed for the Indonesian MSME market.
        </h2>
        <div className='flex mt-10 gap-7 flex-col lg:flex-row'>
          <button className=' w-[180px] py-3 rounded-full shadow-md bg-blue-700 text-gray-50 font-medium text-lg hover:bg-blue-500'>
            Get Started
          </button>
          <button className='shadow-md  w-[180px] py-2 rounded-full font-medium text-lg text-blue-900 hover:bg-blue-500 transition-colors hover:text-white'>
            Register
          </button>
        </div>
        <div>
          <Alphawave />
          <div className='cursor-pointer'></div>
        </div>
      </section>
    </>
  );
};

export default Home;
