import Head from 'next/head';
import Avatar from '../components/Avatar';
import { ViewGridIcon } from '@heroicons/react/solid';
import Image from 'next/image';


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
      <form><Image
      src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.SqEICC59PL1VrdefhGEqqgHaCg%26pid%3DApi&f=1'
      height={100}
      width={300} /></form>

      {/* Footer */} 
    </div>
    
  );
}