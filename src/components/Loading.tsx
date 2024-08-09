import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="max-w-sm mx-auto rounded-lg overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <img className='w-[220px] h-[82px]' src='/image/logo/logo.png' />
      </div>
    </div>
  );
};

export default Loading;
