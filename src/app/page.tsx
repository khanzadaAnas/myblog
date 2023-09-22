import Header from "./components/Header";
import Footer from "./components/Footer";
import Post from "./components/Post";
// import { posts } from "./data/posts";
import { TPost } from "./data/posts";


export default async function Home() {
  // fetch ('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then((posts) => console.log("posts", posts));
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: TPost[] = await response.json();
 

  return (
    <main>
      <Header />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
