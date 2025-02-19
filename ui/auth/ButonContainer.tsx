import { ReactNode } from "react";

const ButonContainer = ({ children }: { children: ReactNode }) => {
  return <div className='flex justify-center mt-5 gap-2'>{children}</div>;
};

export default ButonContainer;
