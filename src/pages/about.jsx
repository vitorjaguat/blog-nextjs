import Header from '@/components/Header';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

export default function about() {
  return (
    <>
      <Header />
      <div className='w-full'>
        <div className='max-w-[1240px] mx-auto'>
          <div className='rounded-md bg-slate-200 my-5'>
            <div className='px-16 py-16'>
              <h2>About us</h2>
              <p className='mt-10'>
                Our technology collective is a diverse group of individuals who
                share a passion for ethical considerations in the tech industry.
                As a group comprised of LGBTs, non-white people, women, and
                disabled individuals, we bring unique perspectives and
                experiences to the table.
              </p>

              <p className='mt-6'>
                Our website serves as a platform for discussing the intersection
                of technology and ethics, with a particular focus on how new
                technologies impact marginalized communities. We strive to
                amplify the voices of those often ignored in tech conversations.
              </p>
              <p className='mt-6'>
                Through our articles, podcasts, and events, we aim to create a
                space where important ethical issues can be discussed and
                debated in a respectful and inclusive manner. We believe that
                technology has the power to do good, but only if it is developed
                and used with ethics in mind.
              </p>
              <p className='mt-6'>
                As a collective, we are dedicated to promoting diversity,
                equity, and inclusion in the tech industry. We believe that the
                best way to do this is by actively seeking out and elevating the
                perspectives of underrepresented groups.
              </p>
              <p className='mt-6'>
                Join us as we work towards a more just and equitable tech
                industry for all.
              </p>
              <div className='pt-20'>
                <p className='uppercase tracking-widest text-[#5651e5] text-center'>
                  Let's connect
                </p>
                <div className='flex items-center justify-center gap-8 my-4 w-full'>
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
    </>
  );
}
