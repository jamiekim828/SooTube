import React from 'react';

import {
  MdHomeFilled,
  MdOutlineSlowMotionVideo,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineSmartDisplay,
  MdOutlineWatchLater,
  MdThumbUpOffAlt,
  MdSettings,
  MdOutlinedFlag,
  MdOutlineHelpOutline,
  MdOutlineFeedback,
  MdOutlineSportsVolleyball,
  MdLocalPlay,
} from 'react-icons/md';
import { TbMusic, TbDeviceGamepad2 } from 'react-icons/tb';
import { FaRegCompass, FaPlayCircle } from 'react-icons/fa';
import { GiFilmStrip } from 'react-icons/gi';
import {
  BsFillPlayBtnFill,
  BsFillPlayCircleFill,
  BsDisplay,
} from 'react-icons/bs';

export default function Sidebar() {
  const mainLinks = [
    {
      icon: <MdHomeFilled className='text-xl' />,
      name: 'Home',
    },
    {
      icon: <FaRegCompass className='text-xl' />,
      name: 'Explore',
    },
    {
      icon: <MdOutlineSlowMotionVideo className='text-xl' />,
      name: 'Shorts',
    },
    {
      icon: <MdSubscriptions className='text-xl' />,
      name: 'Subscriptions',
    },
  ];

  const secondaryLinks = [
    {
      icon: <MdOutlineVideoLibrary className='text-xl' />,
      name: 'Library',
    },
    {
      icon: <MdHistory className='text-xl' />,
      name: 'History',
    },
    {
      icon: <MdOutlineSmartDisplay className='text-xl' />,
      name: 'Your Videos',
    },
    {
      icon: <MdOutlineWatchLater className='text-xl' />,
      name: 'Watch Later',
    },
    {
      icon: <MdThumbUpOffAlt className='text-xl' />,
      name: 'Liked Videos',
    },
  ];

  const subscriptionLinks = [
    {
      icon: <TbMusic className='text-xl' />,
      name: 'Music',
    },
    {
      icon: <MdOutlineSportsVolleyball className='text-xl' />,
      name: 'Sport',
    },
    {
      icon: <TbDeviceGamepad2 className='text-xl' />,
      name: 'Gaming',
    },
    {
      icon: <GiFilmStrip className='text-xl' />,
      name: 'Films',
    },
  ];

  const moreLinks = [
    {
      icon: <BsFillPlayBtnFill className='text-xl text-red-600' />,
      name: 'SooTube Premium',
    },
    {
      icon: <MdLocalPlay className='text-xl text-red-600' />,
      name: 'Creator Studio',
    },
    {
      icon: <BsFillPlayCircleFill className='text-xl text-red-600' />,
      name: 'SooTube Music',
    },
    {
      icon: <FaPlayCircle className='text-xl text-red-600' />,
      name: 'SooTube Kids',
    },
    {
      icon: <BsDisplay className='text-xl text-red-600' />,
      name: 'SooTube TV',
    },
  ];

  const helpLinks = [
    {
      icon: <MdSettings className='text-xl' />,
      name: 'Settings',
    },
    {
      icon: <MdOutlinedFlag className='text-xl' />,
      name: 'Report history',
    },
    {
      icon: <MdOutlineHelpOutline className='text-xl' />,
      name: 'Help',
    },
    {
      icon: <MdOutlineFeedback className='text-xl' />,
      name: 'Send feedback',
    },
  ];

  const textLinks = [
    [
      'About',
      'Press',
      'Copyright',
      'Contact us',
      'Creator',
      'Advertise',
      'Developers',
    ],
    [
      'Terms',
      'Privacy',
      'Policy & Safety',
      'How YouTube works',
      'Test new features',
    ],
  ];

  return (
    <div className='w-2/12 bg-[#212121] pr-5 overflow-auto pb-8 sidebar'>
      <ul className='flex flex-col border-b-2 border-gray-700'>
        {mainLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`pl-6 py-3 hover:bg-zinc-600 ${
                name === 'Home' ? 'bg-slate-600' : ''
              }`}
            >
              <a href='#' className='flex items-center gap-5'>
                {icon} <span className='text-sm tracking-wider'>{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='flex flex-col border-b-2 border-gray-700'>
        {secondaryLinks.map(({ icon, name }) => {
          return (
            <li key={name} className={`pl-6 py-3 hover:bg-zinc-600`}>
              <a href='#' className='flex items-center gap-5'>
                {icon}
                <span className='text-sm tracking-wider'>{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='flex flex-col border-b-2 border-gray-700'>
        <span className='pl-4 py-2 text-sm'>EXPLORE</span>
        {subscriptionLinks.map(({ icon, name }) => {
          return (
            <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 `}>
              <a href='#' className='flex items-center gap-5'>
                {icon}
                <span className='text-sm tracking-wider'>{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='flex flex-col border-b-2 border-gray-700'>
        <span className='pl-4 py-2 text-sm'>MORE FROM SOOTUBE</span>
        {moreLinks.map(({ icon, name }) => {
          return (
            <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 `}>
              <a href='#' className='flex items-center gap-5'>
                {icon}
                <span className='text-sm tracking-wider'>{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='flex flex-col border-b-2 border-gray-700'>
        {helpLinks.map(({ icon, name }) => {
          return (
            <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 `}>
              <a href='#' className='flex items-center gap-5'>
                {icon}
                <span className='text-sm tracking-wider'>{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='flex gap-2 flex-wrap text-sm p-4 text-zinc-400'>
        {textLinks[0].map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
      <ul className='flex gap-2 flex-wrap text-sm p-4 text-zinc-400'>
        {textLinks[1].map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
      <span className='px-4 text-sm text-zinc-400'>&copy; 2023 </span>
      <br />
      <p className='px-4 pt-3 text-sm text-zinc-400'>
        SooTube is an individual project of YouTube clone only for practice
        ReactJS, Redux Toolkit, TypeScript and tailwind.
      </p>
    </div>
  );
}
