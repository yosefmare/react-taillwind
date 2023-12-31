import Contact from "./Contact"
import MiniExplanation from "./MiniExplanation"
import QuickLinks from "./QuickLinks"

const Footer = (): JSX.Element => {
    return (
        <div className="w-full bg-indigo-600 text-white grid lg:grid-cols-3 sm: grid-cols-1 gap-6">
            <MiniExplanation/>
            <QuickLinks/>
            <Contact/>
        </div>
    )
}

export default Footer
