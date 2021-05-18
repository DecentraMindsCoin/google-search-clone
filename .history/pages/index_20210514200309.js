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
        <div>
        <p>About</p>
        <p>Store</p>

        </div>

        {/* right */}
        <div>
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
