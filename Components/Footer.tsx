import Image from 'next/image';
import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="pb-[2rem] pt-[7rem] bg-gray-100 ">
      <div className="w-[90%] mx-auto items-start grid grid-cols-1 border-b-2 pb-[2rem] md:grid-cols-2 lg:grid-cols-4 gap-[3rem] ">
        <div>
          <h1 className="footer-heading">Support</h1>
          <div>
            <a className="footer-link" href="#">
              Help Center
            </a>
            <a className="footer-link" href="#">
              Safety Information
            </a>
            <a className="footer-link" href="#">
              Cancellation options
            </a>
            <a className="footer_-link" href="#">
              Medical Doctor
            </a>
          </div>
        </div>
        <div>
          <h1 className="footer-heading">Company</h1>
          <div>
            <a className="footer-link" href="#">
              About Us
            </a>
            <a className="footer-link" href="#">
              Community Blog
            </a>
            <a className="footer-link" href="#">
              Careers
            </a>
            <a className="footer-link" href="#">
              Privacy policy
            </a>
            <a className="footer-link" href="#">
              Terms of Service
            </a>
          </div>
        </div>
        <div>
          <h1 className="footer-heading">Contact</h1>
          <div>
            <a className="footer-link" href="#">
              Partnerships
            </a>
            <a className="footer-link" href="#">
              FAQ
            </a>
            <a className="footer-link" href="#">
              Get in Touch
            </a>
          </div>
        </div>
        <div>
          <h1 className="footer-heading">Social</h1>
          <div className="flex items-center space-x-4 text-white text-[1.3rem]">
            <div className="footer-icon bg-[#0165e1]">
              <FaFacebookF />
            </div>
            <div className="footer-icon bg-[#cd486b]">
              <FaInstagram />
            </div>
            <div className="footer-icon bg-[#1da1f2]">
              <FaTwitter />
            </div>
            <div className="footer-icon bg-[#cd201f]">
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[1rem] grid grid-cols-1 gap-[1.4rem] sm:grid-cols-2 justify-between w-[90%] mx-auto">
        <p className="text-[17px] text-black opacity-60 font-semibold">
          © Copyright webdevWarriors 2024
        </p>
        <Image
          alt="pay"
          width={230}
          height={230}
          className="object-contain sm:ml-auto"
          src="/images/pay.svg"
        />
      </div>
    </div>
  );
}

export default Footer
