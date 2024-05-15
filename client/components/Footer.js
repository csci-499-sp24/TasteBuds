import Link from "next/link";
import {BsGithub, BsTwitterX, BsInstagram, BsFacebook} from "react-icons/bs";

function Footer(){
    const current_year = new Date().getFullYear()
    return (
        <div id="section_footer">
          <div className='text-center py-4'>
            <Link href="https://github.com/csci-499-sp24/TasteBuds" className='btn btn-link'>
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