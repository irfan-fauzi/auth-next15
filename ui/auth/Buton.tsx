import { ReactNode } from "react";

const Buton = ({ children }: { children: ReactNode }) => {
  return (
    <button className='bg-white shadow-md flex items-center border justify-center gap-2 w-[150px] py-3 rounded-md hover:border-green-400 hover:bg-green-100 hover:shadow-lg  transition-all duration-300 hover:scale-105 '>
      {children}
    </button>
  );
};

export default Buton;
