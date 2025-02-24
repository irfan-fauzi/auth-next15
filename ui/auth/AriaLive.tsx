import { ReactNode } from 'react';

const AriaLive = ({ children }: { children: ReactNode }) => {
  return (
    <div aria-live='polite'>
      <span className='text-sm text-red-400'>
        {children}
      </span>
    </div>
  );
};

export default AriaLive;
