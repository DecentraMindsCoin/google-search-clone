import Image from 'next/image';
import { useRouter } from 'next/router';
import {useRef} from "react"
import { MicrophoneIcon, XIcon, Searchz } from '@heroicons/react/solid';


function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);

    return (
        <header>
            <Image
            src='https://www.purepng.com/public/uploads/large/purepng.com-google-logo-2015brandlogobrand-logoiconssymbolslogosgoogle-6815229372333mqrr.png'
            height={40}
            width={120}
            onClick={() => router.push("/")}
            className="cursor-pointer" />
            <form className='px-6 py-3 ml-10 mr-5 flex border border-gray-200 rounded-full shadow-lg '>
                <input ref={searchInputRef} type='text' className='flex-grow w-full focus:outline-none' type='text' />
                <XIcon className='h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125'
                onClick={() =>(searchInputRef.current.value = "")}/>
                <MicrophoneIcon className='mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300' />
                <SearchIcon />
            </form>
        </header>
    )
}

export default Header
