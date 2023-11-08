// import img from  

const images = [
    {
        title: 'anjala gozalish',
        img: '/poqratet 1.jpg',
        alt: 'poqratet 1'
    },
    {
        title: 'jasica collen',
        img: '/poqratet 2.jpg',
        alt: 'poqratet 2'
    },
]

const TestimonialsComponent = (): JSX.Element => {

    const content = images.map((item, index) => {
        return (
            <div key={index}  className=" bg-slate-200 flex max-h-[440px] overflow-hidden mx-5 mb-10 shadow-lg rounded-md">
                <div>
                    <img className="max-w-md rounded-l-md" src={item.img} alt="" />
                </div>
                <div>
                <h2 className=" text-lg">{item.title}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, nemo deserunt incidunt possimus iusto illo at aut. Delectus ea voluptate dolores possimus accusamus cumque corporis, ad laudantium, neque distinctio eveniet.</p>
                </div>
            </div>
        )
    })


    return (
        <div>
            <h1 className=" text-4xl text-center my-16">what people say</h1>
            <div className=" grid lg:grid-cols-2 gap-10 sm: grid-cols-1">
                {content}
            </div>
        </div>
    )
}

export default TestimonialsComponent
