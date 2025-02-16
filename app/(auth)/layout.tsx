const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className='bg-gray-100 h-screen'>
      <div className='flex flex-col items-center justify-center h-full mx-auto px-6 py-8'>
        <div className='flex border border-gray-200 bg-white rounded-lg shadow-lg w-full max-w-screen-sm lg:max-w-[800px]'>
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
