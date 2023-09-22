import { TComment } from "@/app/data/posts";

type Params = {
  id: number;
};
type commentProps = {
  params: Params;
};

export default async function comment(props: commentProps) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${props.params.id}`
  );
  const currentComment: TComment = await response.json();
  if (!currentComment) {
    return <div>Post not found</div>;
  }

  return (

 
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">

            
          {currentComment.id} : {currentComment.name}
        </h2>
        <div className="md:w-3/5 md:pl-6">
          <p className="leading-relaxed text-base">
            <b>Email:</b> {currentComment.email}
          </p>
          <div className="flex md:mt-4 mt-6">
            <p className="leading-relaxed text-base border">
              <b>Comment:</b> {currentComment.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );


}


