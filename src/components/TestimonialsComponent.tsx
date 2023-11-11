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
                    <img className="max-w-md rounded-l-md" src={item.img} alt={item.alt} />
                </div>
                <div className="sm:mx-4 flex flex-col gap-10">
                <h2 className="text-3xl font-medium mt-5">{item.title}</h2>
                    <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, nemo deserunt incidunt possimus iusto illo at aut. Delectus ea voluptate dolores possimus accusamus cumque corporis, ad laudantium, neque distinctio eveniet.</p>
                    <button className="btn btn-primary sm:mx-10">more posts</button>
                </div>
            </div>
        )
    })


    return (
        <>
            <h1 className=" text-4xl text-center my-16 font-medium">what people say</h1>
            <div className=" grid lg:grid-cols-2 gap-10 sm: grid-cols-1">
                {content}
            </div>
        </>
    )
}

export default TestimonialsComponent
