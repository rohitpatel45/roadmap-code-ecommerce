// components/Footer.tsx

import Link from "next/link";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";


const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-900 text-white py-8 mt-2">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">About Us</h2>
              <p>
                The Best Shop for all the trending and latest fashion product. 24*7 product availablity, customer Support.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
              <p>Email: rohit.patel@gmail.com</p>
              <p>Phone: +8369538645</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-300 hover:text-white">
                <CiFacebook />

                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                <CiInstagram />

                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                <FaWhatsapp />

                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500">
            &copy; 2024 @roadmap-code-ecommerce. All Rights Reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  