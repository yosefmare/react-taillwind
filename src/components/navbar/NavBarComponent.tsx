import Buttons from "./Buttons"
import ToggleNavButton from "./ToggleNavButton"

const NavBarComponent = (): JSX.Element => {

    return (
            <div className="flex items-center justify-between py-5 sticky top-0 bg-slate-300 shadow-lg z-50">
                <div className="lg:block sm:hidden">
                    <Buttons linkType="btn" style="btn-primary" />
                </div>
                <ToggleNavButton/>
                <div className="mr-10">
                    <input className="p-2 rounded-md" placeholder="Search" type="text" />
                </div>
            </div>
    )
}

export default NavBarComponent
