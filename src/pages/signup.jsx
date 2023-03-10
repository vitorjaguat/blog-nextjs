import { projectAuth } from '@/firebase/config';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useAuthContext } from '@/utils/useAuthContext';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { dispatch } = useAuthContext();
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLogin) {
      try {
        const userCredential = await projectAuth.createUserWithEmailAndPassword(
          email,
          password
        );
        await userCredential.user.updateProfile({
          displayName: name,
        });
        console.log(userCredential.user);
        dispatch({ type: 'LOGIN', payload: userCredential.user });

        router.push('/');
      } catch (err) {
        alert(err.message);
      }
    } else {
      try {
        const userCredential = await projectAuth.signInWithEmailAndPassword(
          email,
          password
        );
        dispatch({ type: 'LOGIN', payload: userCredential.user });
        router.push('/');
      } catch (err) {
        alert(err.message);
      }
    }
  };

  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='rounded-md w-[75%] md:w-[400px] lg:w-[500px] bg-slate-300 p-10 '>
        <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
          <h2 className='text-center mb-6'>{isLogin ? 'Login' : 'Sign up'}</h2>

          {!isLogin && (
            <div className='w-full flex items-center justify-between '>
              <label className='w-fit' htmlFor='name'>
                Username:
              </label>
              <input
                className='ml-4 rounded-md p-2 w-full'
                style={{ fontFamily: 'inherit' }}
                type='text'
                id='name'
                name='name'
                placeholder='Create a username...'
                onChange={(e) => setName(e.target.value)}
                required
                min={4}
              />
            </div>
          )}
          <div className='w-full flex items-center justify-between '>
            <label className='whitespace-nowrap' htmlFor='email'>
              E-mail:
            </label>
            <input
              className='ml-4 rounded-md p-2 w-full'
              style={{ fontFamily: 'inherit' }}
              type='email'
              name='email'
              id='email'
              placeholder='E-mail...'
              onChange={(e) => setEmail(e.target.value)}
              required
              min={10}
            />
          </div>
          <div className='w-full flex items-center justify-between '>
            <label className='whitespace-nowrap' htmlFor='email'>
              Password:
            </label>
            <input
              className='ml-4 rounded-md p-2 w-full'
              style={{ fontFamily: 'inherit' }}
              type='password'
              name='password'
              id='password'
              placeholder='Password...'
              onChange={(e) => setPassword(e.target.value)}
              min={6}
            />
          </div>
          <button className='p-2 '>Submit</button>
        </form>
        <p
          className='text-center mt-2 cursor-pointer underline'
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? 'Create an account!' : 'Already has an account?'}
        </p>
      </div>
    </div>
  );
}
