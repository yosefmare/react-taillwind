import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

type objPropsTypes = {
  icon: JSX.Element;
  info: string;
};

const contactsOptions: objPropsTypes[] = [
  {
    icon: <HiLocationMarker />,
    info: 'Cappadocia'
  },
  {
    icon: <HiPhone />,
    info: '000 0000 000'
  },
  {
    icon: <HiMail />,
    info: 'website@mail.co.il'
  },
];

const elements: JSX.Element[] = contactsOptions.map((item, index) => {
  return (
    <div key={index} className='flex gap-2 items-center justify-center'>
    <div>
      {item.icon}
    </div>
    <div>
      <span>{item.info}</span>
    </div>
  </div>
  )
})

const Contact = () => {
  return (
    <div className='text-center'>
      <h3 className="text-2xl">contact</h3>
      {
        elements
      }
    </div>
  );
};

export default Contact;
