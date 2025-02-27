import { auth } from "@/auth";

const DashboardPage = async () => {
  const session = await auth();

  return (
    <>
      <header className='bg-gray-800 w-full h-[70px] items-center flex'>
        <nav className='max-w-screen-xl w-full mx-auto flex  items-center justify-between px-5'>
          <h1 className='text-3xl text-gray-50'>Dashboard</h1>
          <p className='text-white'>{session?.user?.name}</p>
        </nav>
      </header>
    </>
  );
};

export default DashboardPage;
