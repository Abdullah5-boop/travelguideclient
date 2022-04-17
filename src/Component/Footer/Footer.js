import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee,faCopyright} from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <div className='h-100 d-flex align-items-center'>
            <div className='w-100 bg-dark text-light text-center p-5'>
                Vist with me any place in Bangladesh <br />
                2022<FontAwesomeIcon icon={faCopyright} ></FontAwesomeIcon>
                best travel guide in BD <br />
                IamTravelGuide.com
            </div>
        </div>
    );
};

export default Footer;