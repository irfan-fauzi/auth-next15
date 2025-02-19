import Footer from "@/ui/auth/footer";

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <main className='2xl:h-screen xl:flex '>{children}</main>
      <Footer />
    </>
  );
};

export default AuthLayout;
