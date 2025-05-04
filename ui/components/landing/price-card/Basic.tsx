import ListFeature from "./ListFeature";

const Basic = () => {
  const nonActive = "#dee3ff";
  const active = "#5c6bc0";
  return (
    <div className=' bg-white rounded-lg p-5 min-w-[350px]'>
      <h3 className='text-2xl font-semibold text-blue-600'>Basic</h3>
      <p className='text-md'>Perfect plan to get started</p>
      <p className='text-3xl font-semibold flex items-center gap-1 mt-3'>
        IDR 129.000{" "}
        <span className='text-gray-500 text-sm font-normal'>/mounth</span>
      </p>
      <p className='mt-3'>Features you get by buying basic</p>
      <ul className='flex flex-col gap-2 mt-2'>
        <li>Basic POS features</li>
        <ListFeature status={active}>Digital Cashier Aplication</ListFeature>
        <ListFeature status={active}>Integration with popular tools</ListFeature>
      </ul>
      <ul className='flex flex-col gap-2 mt-2'>
        <li>Payment Receipt</li>
        <ListFeature status={active}>Digital Payment Through QRIS</ListFeature>
      </ul>
      <ul className='flex flex-col gap-2 mt-2'>
        <li>Payment Receipt</li>
        <ListFeature status={active}>Dashboard Laporan Realtime</ListFeature>
        <ListFeature status={nonActive}>Raw Material Management</ListFeature>
        <ListFeature status={nonActive}>Prescriptian Management</ListFeature>
        <ListFeature status={nonActive}>Cost of God Sold</ListFeature>
      </ul>
      <ul className='flex flex-col gap-2 mt-2'>
        <li>Other Support</li>
        <ListFeature status={active}>24/7 Support</ListFeature>
        <ListFeature status={active}>Online Education & Training</ListFeature>
        <ListFeature status={active}>Call Center Support</ListFeature>
        <ListFeature status={active}>Whatsapp Support</ListFeature>
      </ul>
      <button className='bg-blue-800 w-full py-2 text-gray-50 rounded-full mt-5'>
        Free trial
      </button>
    </div>
  );
};

export default Basic;
