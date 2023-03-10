import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { MdOutlineLogout } from 'react-icons/md';
import { useAuthContext } from '@/utils/useAuthContext';
import { projectAuth } from '@/firebase/config';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const { user, dispatch } = useAuthContext();

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

  const handleLogout = async () => {
    try {
      await projectAuth.signOut();
      dispatch({ type: 'LOGOUT' });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <motion.div className='navbar' initial={{ y: -50 }} animate={{ y: 0 }}>
      {/* <div className='fixed z-[99] shadow-md bg-slate-600 w-full h-[70px]'></div> */}
      <div
        className={
          shadow
            ? 'fixed w-full h-16 shadow-lg z-[100] ease-in duration-300 bg-slate-200'
            : 'fixed w-full h-16 shadow-md z-[100] ease-in duration-200 bg-slate-200'
        }
      >
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 max-w-[1240px] mx-auto'>
          <Link href='/' scroll={false}>
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
              <Link href={user ? '/new-post' : '/signup'} scroll={false}>
                <li className='ml-8 text-sm uppercase hover:border-b text-[#999999]'>
                  New Post
                </li>
              </Link>
              {!user && (
                <Link href='/signup' scroll={false}>
                  <li className='ml-8 text-sm uppercase hover:border-b text-[#999999]'>
                    Login
                  </li>
                </Link>
              )}

              <Link href='/about' scroll={false}>
                <li className='ml-8 text-sm uppercase hover:border-b text-[#999999]'>
                  About
                </li>
              </Link>
              {user && (
                <>
                  <li>
                    <p className='ml-16 text-sm tracking-wider'>
                      hello, {user.displayName}!
                    </p>
                  </li>
                  <li>
                    <MdOutlineLogout
                      className='ml-4 text-slate-700'
                      size={19}
                      onClick={handleLogout}
                    />
                  </li>
                </>
              )}
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
                ? 'fixed left-0 top-0 w-[65%] sm:w-[50%] md:w-[35%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                : 'fixed left-[-100%] p-10 ease-in duration-500'
            }
          >
            <div>
              <div className='flex w-full items-center justify-between'>
                <Link
                  className='font-bold italic text-lg'
                  href='/'
                  scroll={false}
                >
                  n - o - t
                </Link>
                <div
                  onClick={handleNav}
                  className='rounded-full shadow-sm p-2 bg-slate-200 cursor-pointer'
                >
                  <AiOutlineClose />
                </div>
              </div>

              <div className='pb-6 my-4'>
                <div className='w-[85%] md:w-[90%] py-4'>
                  {user && (
                    <li className='flex'>
                      <p className=' text-md tracking-wider'>
                        hello, {user.displayName}!
                      </p>
                      <MdOutlineLogout
                        className='ml-10 text-slate-700'
                        size={18}
                        onClick={handleLogout}
                      />
                    </li>
                  )}
                </div>
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
                <Link href={user ? '/new-post' : '/signup'} scroll={false}>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    New Post
                  </li>
                </Link>
                {!user && (
                  <Link href='/signup' scroll={false}>
                    <li onClick={() => setNav(false)} className='py-4 text-sm'>
                      Login
                    </li>
                  </Link>
                )}
                <Link href='/about' scroll={false}>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    About
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
