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
    setSecondaryRole((prev) => {
      const nextIndex =
        roles.findIndex((role) => role.title === prev.title) + 1;

      if (nextIndex >= roles.length) {
        return roles[0];
      } else {
        return roles[nextIndex];
      }
    });
  };

  return (
    <header className='flex min-h-screen w-full flex-col'>
      <div className='my-auto flex w-full flex-col items-center justify-center gap-12 md:flex-row md:gap-24'>
        <div className='flex flex-col items-center justify-center gap-1 md:items-start'>
          <h1 className='text-4xl font-bold sm:text-5xl'>Hi! I'm Jonathan.</h1>
          <div className='text-2xl sm:text-3xl'>I'm a full-stack developer</div>
          <div className='text-2xl sm:text-3xl'>
            and <span>{secondaryRole.title}.</span>
          </div>
          <div className='mt-2 flex w-full flex-row items-center justify-around'></div>
        </div>
        <div className='flex flex-col' onClick={setNewRole}>
          <div className='flex flex-col justify-center shadow-xl'>
            <div className='h-56 w-48 -rotate-6 bg-neutral-300 pt-4 shadow-xl md:h-96 md:w-72'></div>
            <div className='-mt-56 h-56 w-48 rotate-12 bg-neutral-200 pt-4 shadow-xl md:-mt-96 md:h-96 md:w-72'></div>
            <div className='-mt-56 h-56 w-48 rotate-2 bg-neutral-100 pt-4 shadow-xl md:-mt-96 md:h-96 md:w-72'>
              <img
                src={secondaryRole.photo}
                alt=''
                className='mx-auto h-2/3 sm:h-3/4'
              />
            </div>
          </div>
        </div>
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        viewBox='0 0 24 24'
        className='mx-auto mb-8 text-4xl lg:text-6xl'
      >
        <path
          fill='currentColor'
          d='M16.59 5.59L18 7l-6 6l-6-6l1.41-1.41L12 10.17l4.59-4.58m0 6L18 13l-6 6l-6-6l1.41-1.41L12 16.17l4.59-4.58Z'
        ></path>
      </svg>
    </header>
  );
};

export default Header;
