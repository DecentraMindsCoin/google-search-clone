import Image from 'next/image';
import { useRouter } from 'next/router';
import {useRef} from "react"
import { MicrophoneIcon, XIcon, SearchIcon } from '@heroicons/react/solid';
import Avatar from './Avatar';


function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = e => {
        e.preventDefault();
        const term = searchInputRef.current.value;


        if (!term) return;

        router.push(`./search?term=${term}`);
    }

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image
            src='https://www.purepng.com/public/uploads/large/purepng.com-google-logo-2015brandlogobrand-logoiconssymbolslogosgoogle-6815229372333mqrr.png'
            height={40}
            width={120}
            onClick={() => router.push("/")}
            className="cursor-pointer" />
            <form className='px-6 py-3 ml-10 mr-5 flex-grow flex border border-gray-200 rounded-full shadow-lg '>
                <input ref={searchInputRef} type='text' className='flex-grow w-full focus:outline-none' type='text' />
                <XIcon className='h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125'
                onClick={() =>(searchInputRef.current.value = "")}/>
                <MicrophoneIcon className='mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300' />
                <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex'/>
                <button hidden type="submit" onClick={search}>Search</button>
            </form> 
            <Avatar url='https://'/>
            </div>
           
        </header>
    )
}

export default Header
