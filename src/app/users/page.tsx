import Users from "./components/Users";
import { TUser, users } from "./data/users";

export default async function UsersPage() {
  const response = await fetch ("https://jsonplaceholder.typicode.com/users");
  const users: TUser[] = await response.json();
  console.log("user", users);

  return (
  
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
            OUR USERS
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            havenot heard of them.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
        {users.map((user) => (<Users key={user.id} user={user} />))}
       </div>
      </div>
    </section>
  );
}
