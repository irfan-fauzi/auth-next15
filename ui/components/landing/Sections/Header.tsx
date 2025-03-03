import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className='nav-container'>
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
          <li className='hidden lg:block'>
            <ul className='menu-container '>
              <li className='nav-landing nav-active'>Home</li>
              <li className='nav-landing'>Features</li>
              <li className='nav-landing'>Pricing</li>
              <li className='nav-landing'>Why us</li>
            </ul>
          </li>
          <li>
            <Link href='/'>
              <button className='btn-trial'>Free Trial</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
