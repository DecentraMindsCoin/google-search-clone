import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid"

import Link from "next/link";
import { useRouter } from "next/router";

function PaginationButtons() {
    const router = useRouter();

    const startIndex = Number [router.query.start]|| 0;
    return (
        <div>
            
        </div>
    )
}

export default PaginationButtons
