import React, { useContext } from 'react';
import StoreContext from '../context/StoreContext';
import BgImg from '../assets/img/bg.svg';
import { TfiBag, TfiLock } from 'react-icons/tfi';

const Home = () => {
  const { isLoggedIn } = useContext(StoreContext);

  return (
    <section id='showcase' className='text-text-gray'>
      <div className='container py-10'>
        <div className='card relative z-10'>
          <div className='flex items-center absolute top-7 right-7'>
            <img src={BgImg} className='w-7' alt='' />
            <h1 className='text-base leading-6 ml-4'>Your Logo</h1>
          </div>
          <div className='mb-10'>
            <h1 className='section-title mb-1'>Sign Into</h1>
            <h1 className='section-title'>Your Account</h1>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className='flex items-end mb-8'>
              <div className='mr-5 mb-3'>
                <TfiBag className='text-primary' size={20} />
              </div>
              <div className='w-full'>
                <p className='input-placeholder'>Company ID</p>
                <input type='text' className='input' />
              </div>
            </div>
            <div className='flex items-end mb-8'>
              <div className='mr-5 mb-3'>
                <TfiLock className='text-primary' size={20} />
              </div>
              <div className='w-full'>
                <p className='input-placeholder'>Password</p>
                <input type='text' className='input' />
              </div>
            </div>
            <div className='flex items-center mb-12'>
              <input id='default-checkbox' type='checkbox' className='w-5 h-5 bg-bg-gray border-gray-300 rounded' />
              <label htmlFor='default-checkbox' className='ml-5 input-placeholder'>
                Remember Me
              </label>
            </div>
            <div>
              <button className='w-full bg-gradient-to-r from-primary-one to-primary-two py-[10px] text-white rounded-[5px] font-bold'>
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='w-20 h-20 bg-gradient-to-r from-primary-one to-primary-two rounded-full absolute -top-9 -right-6'></div>
      <img src={BgImg} alt='img' className='w-72 absolute -bottom-6 -right-28' />
    </section>
  );
};

export default Home;
