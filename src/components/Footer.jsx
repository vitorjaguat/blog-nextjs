import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

export default function Footer() {
  return (
    <div className='w-full h-[70px] bg-slate-300 flex-col justify-center'>
      <div className='h-full lg:w-[1240px] mx-auto flex items-center justify-between'>
        <p className='px-6'>&copy; n-o-t</p>
        <div className='flex gap-4'>
          <div className='rounded-full shadow-md p-2 cursor-pointer hover:scale-110 ease-in duration-300'>
            <FaLinkedinIn />
          </div>
          <div className='rounded-full shadow-md p-2 cursor-pointer hover:scale-110 ease-in duration-300'>
            <FaGithub />
          </div>
          <div className='rounded-full shadow-md p-2 cursor-pointer hover:scale-110 ease-in duration-300'>
            <AiOutlineMail />
          </div>
          <div className='rounded-full shadow-md p-2 cursor-pointer hover:scale-110 ease-in duration-300'>
            <BsFillPersonLinesFill />
          </div>
        </div>
        <p className='px-6'>2023</p>
      </div>
    </div>
  );
}
