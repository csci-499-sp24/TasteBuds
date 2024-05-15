import Link from "next/link";
import {BsGithub, BsTwitterX, BsInstagram, BsFacebook} from "react-icons/bs";

function Footer(){
    const current_year = new Date().getFullYear()
    return (
        <div id="section_footer">
          <div className='text-center py-4'>
            <Link href="#" className='btn btn-link'>
              About Us
            </Link>
            <span> | </span>
            <Link href="#" className='btn btn-link'>
              Contact Us
            </Link>
            <span> | </span>
            <Link href="#" className='btn btn-link'>
              FAQ
            </Link>
            <br></br>
            <Link href="#" className='btn btn-link'>
              <button>
                <BsTwitterX />
              </button>
            </Link>
            <span>      </span>
            <Link href="#" className='btn btn-link'>
              <button>
                <BsInstagram />
              </button>
            </Link>
            <span>      </span>
            <Link href="#" className='btn btn-link'>
              <button>
                <BsFacebook/>
              </button>
            </Link>
            <span> </span>
            <Link href="#" className='btn btn-link'>
              <button>
                <BsGithub />
              </button>
            </Link>
            <p>Copyright © {current_year}, TasteBuds. All Rights Reserved.</p>
          </div>
        </div>
      );
}
export default Footer;