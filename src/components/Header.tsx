import { useState } from 'react';

const Header = () => {
  const roles = [
    { title: 'sports writer', photo: '/tiles-g095d99ed0_640.jpg' },
    {
      title: 'former football coach',
      photo: '/tiles-ga931800d8_640.jpg',
    },
    { title: 'keyboard builder', photo: '/tiles-g095d99ed0_640.jpg' },
    { title: 'HK milk tea enjoyer', photo: '/tiles-ga931800d8_640.jpg' },
    { title: 'photographer', photo: '/tiles-g095d99ed0_640.jpg' },
  ];

  const [secondaryRole, setSecondaryRole] = useState(roles[0]);

  const setNewRole = () => {
    const currentIndex = roles.findIndex(
      (role) => role.title === secondaryRole.title
    );
    let newIndex = -2;
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
          and <span>{secondaryRole.title}.</span>
        </div>
        <button
          className='hidden rounded-full bg-blue-400 p-3 sm:block'
          onClick={setNewRole}
        >
          What else am I?
        </button>
      </div>
      <div className='h-72 w-56 rotate-2 bg-neutral-100 pt-4 shadow-xl sm:h-96 sm:w-72'>
        <img
          src={secondaryRole.photo}
          alt=''
          className='mx-auto h-2/3 sm:h-3/4'
        />
      </div>

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
