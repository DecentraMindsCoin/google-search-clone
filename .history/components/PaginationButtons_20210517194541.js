import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid"

import Link from "next/link";
import { useRouter } from "next/router";

function PaginationButtons() {
    const router = useRouter();

    const startIndex = Number [router.query.start) || 0;
    return (
        <div>
            {startIndex >= 10 && (
                <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
                <div>
                    <ChevronLeftIcon />
                    <p>Previous</p>
                </div>
                </Link>
            )}

            <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
            <div>
                <ChevronRightIcon />
                <p>Next</p>
            </div>
            </Link>
            
        </div>
    )
}

export default PaginationButtons
