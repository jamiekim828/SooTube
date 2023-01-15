import React from 'react';

export default function Spinner() {
  return (
    <div className='flex items-center w-full justify-center py-3'>
      <div className='w-10 h-10 border-2 br-red-600 border-solid rounded-full animate-spin border-t'></div>
    </div>
  );
}
