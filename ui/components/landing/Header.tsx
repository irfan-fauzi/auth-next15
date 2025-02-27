import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav className=''>
        <ul className='flex justify-between items-center max-w-screen-xl mx-auto border mt-[2rem]'>
          <li>
            <Link href='/'>
              <Image
                src='/logo2.png'
                width={120}
                height={75}
                alt='logo zafira'
              />
            </Link>
          </li>
          <li>
            <ul className="flex items-center gap-5 px-1 py-1 rounded-full font-medium text-lg bg-gray-100 text-gray-800">
              <li className="nav-landing nav-active">Home</li>
              <li className="nav-landing">Features</li>
              <li className="nav-landing">Pricing</li>
              <li className="nav-landing">Why us</li>
            </ul>
          </li>
          <li>
            <Link href="/">
              <button className="bg-blue-800 text-gray-50 px-10 py-3 rounded-full text-lg font-medium shadow-lg hover:bg-blue-600 transition-colors">Free Trial</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
