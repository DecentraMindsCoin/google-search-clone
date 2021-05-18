import Image from 'next/image';
import { useRouter } from 'next/router';

function Header() {
    const router = useRouter();

    return (
        <header>
            <Image
            src='https://www.purepng.com/public/uploads/large/purepng.com-google-logo-2015brandlogobrand-logoiconssymbolslogosgoogle-6815229372333mqrr.png'
            height={40}
            width={120}
            className="cursor-pointer" />
            <form>
                <input ref/>
            </form>
        </header>
    )
}

export default Header
