import { FaCheckCircle } from "react-icons/fa";

import { ReactNode } from "react";

const ListFeature = ({ children, status }: { children: ReactNode; status: string }) => {
 
  return (
    <li className='flex items-center gap-2'>
      <FaCheckCircle color={status} />
      {children}
    </li>
  );
};

export default ListFeature;
