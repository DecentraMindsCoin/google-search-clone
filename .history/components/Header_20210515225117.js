import Image from 'next/image';
import { useRouter } from 'next/router';
import {useRef} from "react"

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
            <form>
                <input ref={searchInputRef} type='text' className='' />
            </form>
        </header>
    )
}

export default Header
