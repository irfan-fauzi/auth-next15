import { ReactNode } from "react";

const ButonContainer = ({ children }: { children: ReactNode }) => {
  return <div className='flex justify-center mt-7 gap-3'>{children}</div>;
};

export default ButonContainer;
