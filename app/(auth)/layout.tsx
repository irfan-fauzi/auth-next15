const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <main className='2xl:h-screen xl:flex '>{children}</main>
      <footer className="bg-gray-900 h-[200px] mt-5 flex justify-center items-center lg:justify-start">
        <div className="max-w-[200px] lg:max-w-[400px] text-gray-100 text-center lg:text-left lg:px-10">
          <p>Genius is the world’s biggest collection of song lyrics and musical knowledge</p>
          <p className="text-xs mt-5">© Copirygt by irfan.fauzi</p>
       </div>
      </footer>
    </>
  );
};

export default AuthLayout;
