import { FaCheckCircle } from "react-icons/fa";

const PriceCard = () => {
  const nonActive = "#dee3ff";
  const active = "#5c6bc0";
  return (
    <div className='border border-red-400 bg-white rounded-lg p-5 max-w-[340px]'>
      <h3 className='text-2xl font-semibold text-blue-600'>Basic</h3>
      <p className='text-md'>Perfect plan to get started</p>
      <p className='text-3xl font-semibold flex items-center gap-1 mt-3'>
        IDR 129.000{" "}
        <span className='text-gray-500 text-sm font-normal'>/mounth</span>
      </p>
      <p className='mt-3'>Features you get by buying basic</p>
      <ul className='flex flex-col gap-2 mt-2'>
        <li>Basic POS features</li>
        <li className='flex items-center gap-2'>
          <FaCheckCircle color={active} />
          Digital Cashier Application
        </li>
        <li className='flex items-center gap-2'>
          <FaCheckCircle color={nonActive} />
          Integration with popular tools
        </li>
      </ul>
      <ul className='flex flex-col gap-2 mt-2'>
        <li>Payment Receipt</li>
        <li className='flex items-center gap-2'>
          <FaCheckCircle color={active} />
          Digital Payment Through QRIS
        </li>
      </ul>
      <ul className='flex flex-col gap-2 mt-2'>
        <li>Payment Receipt</li>
        <li className='flex items-center gap-2'>
          <FaCheckCircle color={active} /> Dashboard Laporan Realtime
        </li>
        <li className='flex items-center gap-2'>
          <FaCheckCircle color={nonActive} /> Raw Material Management
        </li>
        <li className='flex items-center gap-2'>
          <FaCheckCircle color={nonActive} /> Prescriptian Management
        </li>
        <li className='flex items-center gap-2'>
          <FaCheckCircle color={nonActive} /> Cost of God Sold
        </li>
      </ul>
      <ul className='flex flex-col gap-2 mt-2'>
        <li>Other Support</li>
        <li className='flex items-center gap-2'>
          <FaCheckCircle color={active} />
          Online Education & Training
        </li>
        <li className='flex items-center gap-2'>
          <FaCheckCircle color={active} />
          Call Center Support
        </li>
        <li className='flex items-center gap-2'>
          <FaCheckCircle color={active} />
          Whatsapp Support
        </li>
      </ul>
      <button className='bg-blue-800 w-full py-2 text-gray-50 rounded-full mt-5'>
        Free trial
      </button>
    </div>
  );
};

export default PriceCard;
