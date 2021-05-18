import Head from 'next/head';
import Avatar from '../components/Avatar';
import { MicrophoneIcon, ViewGridIcon } from "heroicons"


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
        <div className='flex space-x-4 items-center'>'
        <p className='link'>Gmail</p>
        <p className='link'>Images </p>
        <ViewGridIcon />
        <Avatar url='https://coaching.papareact.com/ai9' />
      

        </div>
      </header>
      {/* Body */}
      {/* Footer */} 
      
    </div>
    
  );
}
