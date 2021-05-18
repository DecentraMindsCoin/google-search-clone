import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid"

import Link from "next/link";
import { useRouter } from "next/router";

function PaginationButtons() {
    const router = useRouter();

    const startIndex = Number [router.query.start] || 0;
    return (
        <div>
            {startIndex >= 10 && (
                <Link>
                <div>
                    <ChevronLeftIcon />
                    <p>Previous</p>
                    <Chevron
                </div>
                </Link>
            )}
            
        </div>
    )
}

export default PaginationButtons
