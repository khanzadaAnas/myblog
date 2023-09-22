import Image from "next/image";
import team from "/public/team.png";
import { TUser } from "../data/users";
// import { TUser } from "@/app/users/data/users";
 
type UserProps ={
  user: TUser
}


export default function User(props: UserProps) {
  return (
    <div className="p-4 lg:w-1/4 md:w-1/2">
      <div className="h-full flex flex-col items-center text-center">
        <Image src={team} alt="img" width={150} height={150} />
        <div className="w-full">
          <h2 className="title-font font-medium text-lg text-gray-900">
            {props.user.name}
          </h2>
          <h3 className="text-gray-500 mb-3">{props.user.occupation}</h3>
          <p className="mb-4">{props.user.city}</p>
              <a href={`/users/${props.user.id}`}
           className="text-indigo-500 inline-flex items-center mt-3">
            For More Details
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
