
import { ReactNode } from "react";

const Buton = ({ children }: { children: ReactNode }) => {
  return (
    <button className='bg-white shadow-md flex items-center justify-center gap-2 px-5 py-3 rounded-md'>
      {children}
    </button>
  );
};

export default Buton;
