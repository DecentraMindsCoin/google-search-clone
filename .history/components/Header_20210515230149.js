import Image from 'next/image';
import { useRouter } from 'next/router';
import {useRef} from "react"
import { XIcon } from '@heroicons/react/solid';


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
                <XIcon className='h-7 curs'/>
            </form>
        </header>
    )
}

export default Header
