import { useState } from 'react';

const Header = () => {
  const [secondaryRole, setSecondaryRole] = useState('a sports writer');

  const roles = [
    'a sports writer',
    'a former football coach',
    'a keyboard builder',
  ];

  const setNewRole = () => {
    const currentIndex = roles.indexOf(secondaryRole);
    let newIndex = -1;

    do {
      newIndex = Math.floor(Math.random() * roles.length);
    } while (currentIndex === newIndex);
    setSecondaryRole(roles[newIndex]);
  };

  return (
    <header className='flex h-screen w-full flex-col items-center justify-center gap-12 sm:flex-row sm:gap-24'>
      <div className='flex flex-col items-center justify-center sm:items-start'>
        <h1 className='text-4xl font-bold sm:text-5xl'>Hi! I'm Jonathan.</h1>
        <div className='text-2xl sm:text-3xl'>I'm a full-stack developer</div>
        <div className='text-2xl sm:text-3xl'>
          and <span>{secondaryRole}.</span>
        </div>
        <button
          className='hidden rounded-full bg-blue-400 p-3 sm:block'
          onClick={setNewRole}
        >
          What else am I?
        </button>
      </div>
      <div className='h-48 w-48 bg-black'></div>
      <button
        className='block rounded-full bg-blue-400 p-3 sm:hidden'
        onClick={setNewRole}
      >
        What else am I?
      </button>
    </header>
  );
};

export default Header;
