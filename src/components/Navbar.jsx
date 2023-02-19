import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='navbar'>
      {/* <div className='fixed z-[99] shadow-md bg-slate-600 w-full h-[70px]'></div> */}
      <div
        className={
          shadow
            ? 'fixed w-full h-16 shadow-lg z-[100] ease-in duration-300 bg-slate-200'
            : 'fixed w-full h-16 shadow-md z-[100] ease-in duration-200 bg-slate-200'
        }
      >
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 max-w-[1240px] mx-auto'>
          <Link href='/#home' scroll={false}>
            {/* <div className='h-1 w-[200px] bg-slate-800'></div> */}
            <div className='px-1 text-xl font-bold italic'>n - o - t</div>
          </Link>
          <div>
            <ul className='hidden md:flex'>
              <Link href='/' scroll={false}>
                <li className='ml-8 text-sm uppercase hover:border-b text-[#999999]'>
                  Home
                </li>
              </Link>
              <Link href='/posts' scroll={false}>
                <li className='ml-8 text-sm uppercase hover:border-b text-[#999999]'>
                  Posts
                </li>
              </Link>
              <Link href='/new-post' scroll={false}>
                <li className='ml-8 text-sm uppercase hover:border-b text-[#999999]'>
                  New Post
                </li>
              </Link>
              <Link href='/signup' scroll={false}>
                <li className='ml-8 text-sm uppercase hover:border-b text-[#999999]'>
                  Sign up
                </li>
              </Link>

              <Link href='/#contact' scroll={false}>
                <li className='ml-8 text-sm uppercase hover:border-b text-[#999999]'>
                  About
                </li>
              </Link>
            </ul>
            <div onClick={handleNav} className='md:hidden text-[#999999]'>
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>

        <div
          className={
            nav ? 'fixed md:hidden left-0 top-0 w-full h-full bg-black/70' : ''
          }
        >
          <div
            className={
              nav
                ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                : 'fixed left-[-100%] p-10 ease-in duration-500'
            }
          >
            <div>
              <div className='flex w-full items-center justify-between'>
                <Link className='font-bold italic' href='/' scroll={false}>
                  n - o - t
                </Link>
                <div
                  onClick={handleNav}
                  className='rounded-full shadow-md p-3 cursor-pointer'
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className='border-b border-gray-300 my-4'>
                <p className='w-[85%] md:w-[90%] py-4 font-thin'>
                  notes on technology
                </p>
              </div>
            </div>
            <div className='py-4 flex flex-col'>
              <ul className='uppercase'>
                <Link href='/' scroll={false}>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    Home
                  </li>
                </Link>
                <Link href='/posts' scroll={false}>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    Posts
                  </li>
                </Link>
                <Link href='/new-post' scroll={false}>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    New Post
                  </li>
                </Link>
                <Link href='/signup' scroll={false}>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    Sign up
                  </li>
                </Link>
                <Link href='/#contact' scroll={false}>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    Contact
                  </li>
                </Link>
              </ul>
              <div className='pt-40'>
                <p className='uppercase tracking-widest text-[#5651e5]'>
                  Let's connect
                </p>
                <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                  <div className='rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                    <FaLinkedinIn />
                  </div>
                  <div className='rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                    <FaGithub />
                  </div>
                  <div className='rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                    <AiOutlineMail />
                  </div>
                  <div className='rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
