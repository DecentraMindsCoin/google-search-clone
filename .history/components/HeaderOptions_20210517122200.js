import HeaderOption from "./HeaderOption";
import {
    DotVerticalIcon, MapIcon, NewspaperIcon, PhotographIcon, PLayIcon, SearchIcon,
} from "@heroicons/react/outline"


function HeaderOptions() {
    return (
        <div>
            {/* left */}
           <div className="flex-x-6">
               <HeaderOption Icon={SearchIcon}  title="All" selected/>
               <HeaderOption Icon={PhotographIcon} title="Images" />
               

           </div>
                {/* right */}
            <div className="flex space-x-4"> 
                <p className="link">Settings</p>
                <p className="link">Tools</p>
            </div>
        </div>
    )
}

export default HeaderOptions
