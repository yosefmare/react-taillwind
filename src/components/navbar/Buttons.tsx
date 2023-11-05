
const Buttons = (): JSX.Element => {
    return (
        <>
            <ul className="flex gap-5 ml-10 lg:flex-row sm: flex-col">
                <li><a className="btn btn-primary" href="#">hero</a></li>
                <li><a className="btn btn-primary" href="#">cards</a></li>
                <li><a className="btn btn-primary" href="#">testimonials</a></li>
                <li><a className="btn btn-primary" href="#">footer</a></li>
            </ul>
        </>
    )
}

export default Buttons
