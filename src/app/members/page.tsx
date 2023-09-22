import Image from "next/image";
import team from "/public/team.png";
import faizan from "public/faizan.jpeg"
import amaan from "public/amaan.jpeg"
import pic2 from "public/pic2.jpeg"
import usama from "public/usama.jpeg"
import shahmeel from "public/shahmeel.jpeg"
import zia from "public/zia.jpeg"
import abdurrehamn from "public/abdurrehamn.jpeg"
import shaheer from "public/shaheer.jpeg"


export default function Member (){
    return <div>     
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably havent heard of them.</p>
    </div>
    <div className="flex flex-wrap -m-2">
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image src={faizan } alt="img" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"/>
          <a href="members/00"><div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Faizan Khanzada</h2>
            <p className="text-gray-500">ID 00</p>
            <p className="text-gray-500">UI Designer</p>
          </div></a>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image src={amaan } alt="img" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" />
         <a href="members/01"> <div className="flex-grow">
            
            <h2 className="text-gray-900 title-font font-medium">Aman Shahid</h2>
            <p className="text-gray-500">ID 01</p>
            <p className="text-gray-500">CTO</p>
          </div></a>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image src={pic2 } alt="img" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" />
          <a href="members/02"><div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Anas Khanzada</h2>
            <p className="text-gray-500">ID 02</p>
            <p className="text-gray-500">Founder</p>
          </div></a>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image src={usama } alt="img"className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" />
          <a href="members/03"> <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Usama Ahmed</h2>
            <p className="text-gray-500">ID 03</p>
            <p className="text-gray-500">DevOps</p>
          </div></a>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image src={shaheer } alt="img" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" />
          <a href="members/04"><div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Shaheer Khanzada</h2>
            <p className="text-gray-500">ID 04</p>
            <p className="text-gray-500">Software Engineer</p>
          </div></a>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image src={abdurrehamn } alt="img" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" />
          <a href="members/05"> <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Abdur Rehaman</h2>
            <p className="text-gray-500">ID 05</p>
            <p className="text-gray-500">UX Researcher</p>
          </div></a>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image src={zia } alt="img" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"  />
          <a href="members/06"><div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Zia Khalid</h2>
            <p className="text-gray-500">ID 06</p>
            <p className="text-gray-500">QA Engineer</p>
          </div></a>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image src={shahmeel } alt="img" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"/>
          <a href="members/07"><div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Shameel</h2>
            <p className="text-gray-500">ID 07</p>
            <p className="text-gray-500">System</p>
          </div></a>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image src={team } alt="img" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"  />
          <a href="members/08"><div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Karamat Khan</h2>
            <p className="text-gray-500">ID 08</p>
            <p className="text-gray-500">Product Manager</p>
          </div></a>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
}