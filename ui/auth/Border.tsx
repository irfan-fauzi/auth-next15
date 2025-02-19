import React from "react";

const Border = () => {
  return (
    <div className='flex justify-between gap-5 items-center mt-4 mb-4'>
      <span className='bg-gray-300 w-full h-[1px] flex-1'></span>
      <span className='text-xs flex-2'>or continue with</span>
      <span className='bg-gray-300 w-full h-[1px] flex-1'></span>
    </div>
  );
};

export default Border;
