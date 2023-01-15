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
} from 'react-icons/md';
import { TbMusic, TbDeviceGamepad2 } from 'react-icons/tb';
import { FaRegCompass } from 'react-icons/fa';
import { GiFilmStrip } from 'react-icons/gi';

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
      <ul className='flex flex-col border-b-2 border-gray-700'></ul>
      <ul className='flex flex-col border-b-2 border-gray-700'></ul>
      <ul className='flex flex-col border-b-2 border-gray-700'></ul>
      <ul className='flex flex-col border-b-2 border-gray-700'></ul>
      <ul className='flex gap-2 flex-wrap text-sm p-4 text-zinc-400'></ul>
      <ul className='flex gap-2 flex-wrap text-sm p-4 text-zinc-400'></ul>
      <span className='px-4 text-sm text-zinc-400'>&copy; 2023 </span>
      <br />
      <p className='px-4 pt-3 text-sm text-zinc-400'>
        SooTube is an individual project cloning YouTube only for practice
        ReactJS, Redux Toolkit and TypeScript.
      </p>
    </div>
  );
}
