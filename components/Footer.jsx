import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare, faInstagramSquare, faPinterestSquare } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'




const Footer = () => {

  return (
    <div className="text-center my-10">
      <div className="flex justify-center gap-x-5 mb-4">
        <Link href="https://www.facebook.com">
          <FontAwesomeIcon className="text-4xl text-stone-900 cursor-pointer"icon={faFacebookSquare} />
        </Link>
        <Link href="https://twitter.com">
          <FontAwesomeIcon className="text-4xl text-stone-900 cursor-pointer" icon={faTwitterSquare} />
        </Link>  
        <Link href="https://instagram.com">
          <FontAwesomeIcon className="text-4xl text-stone-900 cursor-pointer" icon={faInstagramSquare} />
        </Link>
        <Link href="https://pinterest.com">
          <FontAwesomeIcon className="text-4xl text-stone-900 cursor-pointer" icon={faPinterestSquare} />
        </Link>
      </div>
       
  
        <div>
            <span className="text-xl mb-3 "><span className='text-sky-600 text-2xl logoTitle'>Coastal</span> <span className='text-2xl logoTitle' >Culture </span> - copyright 2022</span>
        </div>
    </div>
  );
};

export default Footer;