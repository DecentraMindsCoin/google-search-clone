import Head from 'next/head';
import Avatar from '../components/Avatar';
import { ViewGridIcon } from '@heroicons/react/solid';


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
        <ViewGridIcon className='h-10 w-10' />
        <Avatar url='https://coaching.papareact.com/ai9' />
      
        </div>
      </header>
      {/* Body */}
      {/* Footer */} 
      
    </div>
    
  );
}
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
</svg>