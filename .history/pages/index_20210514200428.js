import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <header>
        
          {/* left */}
        <div className='flex space-x=4 itemso=-center'>
        <p>About</p>
        <p>Store</p>

        </div>

        {/* right */}
        <div className='flex space-x-4 items-center'>
        <p>Gmail</p><p>
          Images
        </p>

        </div>
      </header>
      {/* Body */}
      {/* Footer */} 
      
    </div>
    
  )
}
