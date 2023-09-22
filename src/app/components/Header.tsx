"use client"

import Image from "next/image";
import logo from "public/logo.png";

export default function Header() {
  
  function onClick() {
    const userInput = prompt('Enter your username:');
    const passwordInput = prompt('Enter your password:');

    if (userInput === 'anaskz' && passwordInput === '1234') {
      alert("Login successful! You have access to the users.");
     
    } else {
      alert("Login failed. Incorrect username or password.");
    }
  }
  function service(){
    alert ("How Can I help You");
  }
  // function onClick(){
  //   alert("Not Allowed");
  // }
    return   <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <Image src={logo} alt="img" width={50} height={50} />
        <span className="ml-3 text-xl">Rightblocks</span>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a onClick={onClick} href="./users" className="mr-5 hover:text-gray-900">Our Users</a>
        <a onClick={service} href="./service" className="mr-5 hover:text-gray-900">Services</a>
        <a href="./members" className="mr-5 hover:text-gray-900">Members</a>
        <a href="./contact" className="mr-5 hover:text-gray-900">Contact Us</a>
      </nav>
      <a href="./signup">
      <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
        Sign Up
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></a>
    </div>
  </header>
}