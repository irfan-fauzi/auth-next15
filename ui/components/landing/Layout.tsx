import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='relative -mt-[21rem] bg-[#f5f5f5] pt-[21rem]'>
      {children}
    </div>
  )
}

export default Layout