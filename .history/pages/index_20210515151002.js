import Head from 'next/head';
import Avatar from '../components/Avatar';
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { SearchIcon } from '@heroicons/react/outline';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Google 2.0</title>
        <link rel="icon" href="/favicon.icon" />
      </Head>
      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        
          {/* left */}
        <div className='flex space-x-4 items-center'>
        <p className="link">About</p>
        <p className="link">Store</p>

        </div>

        {/* right */}
        <div className='flex space-x-4 items-center'>
        <p className='link'>Gmail</p>
        <p className='link'>Images </p>
        {/* Icon */}

        <ViewGridIcon className='h-10 w-10 p-2
        rounded-full hover:bg-gray-100 cursor-pointer' />
       {/* Avatar */}
        <Avatar url='https://coaching.papareact.com/ai9' />    
        </div>
      </header>
      {/* Body */}
      <form className='flex flex-col items-center mt-44 flex-grow'>
        <Image
      src='https://www.purepng.com/public/uploads/large/purepng.com-google-logo-2015brandlogobrand-logoiconssymbolslogosgoogle-6815229372333mqrr.png'
      height={100}
      width={300} />
      <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
        <SearchIcon className='h-5 mr-3r text-gray-500 '/>
        <input type='text' className='flex-grow focus:outline-none'/>
        <MicrophoneIcon className='h-5'/>
      </div>
      <div>
        <button></button>
      </div>
      </form>

      {/* Footer */} 
    </div>
    
  );
}