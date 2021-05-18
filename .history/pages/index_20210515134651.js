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
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
</svg>