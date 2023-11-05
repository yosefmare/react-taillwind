
const CardComponent = () => {
  type repeater = {
    title: string
    imgUrl: string
    alt: string
  }
  const cardContent = [
    {
      title: 'light mane',
      imgUrl: 'https://images.unsplash.com/photo-1682685795463-0674c065f315?auto=format&fit=crop&q=60&w=700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8',
      alt: 'light man img'
    },
    {
      title: 'land',
      imgUrl: 'https://images.unsplash.com/photo-1698615033858-25c422f3e076?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'land img'
    },
    {
      title: 'colors',
      imgUrl: 'https://images.unsplash.com/photo-1698434295643-ada57b48fc2b?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8',
      alt: 'colors img'
    },
    {
      title: 'rocks',
      imgUrl: 'https://images.unsplash.com/photo-1682687219570-4c596363fd96?auto=format&fit=crop&q=80&w=1550&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'rocks img'
    },
    {
      title: 'lavenders',
      imgUrl: 'https://images.unsplash.com/photo-1696240547240-af6ae0c64953?auto=format&fit=crop&q=80&w=1332&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'lavenders img'
    },
    {
      title: 'mounts mane',
      imgUrl: 'https://images.unsplash.com/photo-1698414805297-2578132f62fb?auto=format&fit=crop&q=80&w=1529&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'mounts img'
    }
  ]

  const elements = cardContent.map((content: repeater): JSX.Element => {
    return (
      <div key={content.title} className=" bg-gray-200 grid grid-cols-2 gap-2 shadow-xl ">
        <div>
          <img className=" rounded-l-lg h-full object-cover object-center" src={content.imgUrl} alt={content.alt} />
        </div>
        <div>
          <div className="my-2">
            <h1 className="font-medium sm:text-1xl sm:text-xl"> {content.title}</h1>
          </div>
          <p className="sm:text-xl md:text-sm xl:text-1xl text-gray-800">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempore doloremque architecto laudantium! Doloremque distinctio dicta hic quisquam molestiae</p>
          <a className="sm:text-lg text-indigo-500 hover: underline" href="#">link to website</a>
        </div>
      </div>
    )
  })
  return (
    <>
      {elements}
    </>
  )
}

export default CardComponent
