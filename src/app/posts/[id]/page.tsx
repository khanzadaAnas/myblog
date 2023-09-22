import Image from "next/image";
import a from "/public/a.jpeg"
import { TPost } from "@/app/data/posts";
import { posts } from "./../../data/posts";




type Params = {
    id: number
 
}

type PostDetailProps = {
    params: Params
   
}
// console.log("show this : " ,posts)

export default async function PostDetail(props: PostDetailProps) {
    // const currentPost = posts.find((post) => post.id == props.params.id)
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.params.id}`);
    const currentPost : TPost = await response.json();
    if (!currentPost) {
        
        return <div>Post not found</div>;
    }
    return (<section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <Image src={a}  alt="img"  className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"/>
            <div className="text-center lg:w-2/3 w-full">
            <p className="mb-8 leading-relaxed">{currentPost.id}</p>
                <p className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{currentPost.title}</p>
                <p className="mb-8 leading-relaxed">{currentPost.body}</p>
            </div>
        </div>
    </section>)
}







// import Image from "next/image";
// import { posts } from "./../../data/posts";
// import a from "/public/a.jpeg"

// type Params = {
//     id: number
// }
// type PostDetailProps = {
//     params: Params
// }

// export default function PostDetail(props: PostDetailProps) {
//     const currentPost = posts.find((post) => post.id === props.params.id);

//     if (!currentPost) {
//         return <div>Post not found</div>;
//     }

//     return (
//         <section className="text-gray-600 body-font">
//             <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
//                 <Image
//                     src={a}  // Assuming there's an "imageSrc" property in your post object
//                     alt="img"
//                     className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
//                     width={600} // Adjust width and height as needed
//                     height={400}
//                 />
//                 <div className="text-center lg:w-2/3 w-full">
//                     <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{currentPost.name}</h1>
//                     <p className="mb-8 leading-relaxed">{currentPost.description}</p>
//                 </div>
//             </div>
//         </section>
//     );
// }
























// import Image from "next/image";
// import a from "/public/a.jpeg";

// export default function DynamicPage() {
//   return (
//     <section className="text-gray-600 body-font">
//       <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
//         <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
//           <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
//             Sunset (disambiguation).
//           </h1>
//           <p className="mb-8 leading-relaxed">
//             Sunset (or sundown) is the disappearance of the Sun below the
//             horizon due to Earth's rotation. As viewed from everywhere on Earth,
//             it is a phenomenon that happens once every 24 hours except in areas
//             close to the poles. The equinox Sun sets due west at the moment of
//             both the spring and autumn equinoxes. As viewed from the Northern
//             Hemisphere, the Sun sets to the northwest (or not at all) in the
//             spring and summer, and to the southwest in the autumn and winter;
//             these seasons are reversed for the Southern Hemisphere. The time of
//             sunset is defined in astronomy as the moment when the upper limb of
//             the Sun disappears below the horizon.[1] Near the horizon,
//             atmospheric refraction causes sunlight rays to be distorted to such
//             an extent that geometrically the solar disk is already about one
//             diameter below the horizon when a sunset is observed. Sunset is
//             distinct from twilight, which is divided into three stages. The
//             first one is civil twilight, which begins once the Sun has
//             disappeared below the horizon, and continues until it descends to 6
//             degrees below the horizon. The second phase is nautical twilight,
//             between 6 and 12 degrees below the horizon. The third phase is
//             astronomical twilight, which is the period when the Sun is between
//             12 and 18 degrees below the horizon.[2] Dusk is at the very end of
//             astronomical twilight, and is the darkest moment of twilight just
//             before night.[3] Finally, night occurs when the Sun reaches 18
//             degrees below the horizon and no longer illuminates the sky.[4] You
//             can find sunset all over the world .Like Sunset in Nsukka UNN. and
//             other places all over the world Locations further north than the
//             Arctic Circle and further south than the Antarctic Circle experience
//             no full sunset or sunrise on at least one day of the year, when the
//             polar day or the polar night persists continuously for 24 hours. At
//             latitudes greater than within half a degree of either pole, the sun
//             cannot rise or set on the same date on any day of the year, since
//             the sun's angular elevation between solar noon and midnight is less
//             than one degree.
//           </p>
//           <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
//             Occurrence.
//           </h1>
//           <p className="mb-8 leading-relaxed">
//             The time of sunset varies throughout the year, and is determined by
//             the viewer's position on Earth, specified by latitude and longitude,
//             altitude, and time zone. Small daily changes and noticeable
//             semi-annual changes in the timing of sunsets are driven by the axial
//             tilt of the Earth, daily rotation of the Earth, the planet's
//             movement in its annual elliptical orbit around the Sun, and the
//             Earth and Moon's paired revolutions around each other. During winter
//             and spring, the days get longer and sunsets occur later every day
//             until the day of the latest sunset, which occurs after the summer
//             solstice. In the Northern Hemisphere, the latest sunset occurs late
//             in June or in early July, but not on the summer solstice of June 21.
//             This date depends on the viewer's latitude (connected with the
//             Earth's slower movement around the aphelion around July 4).
//             Likewise, the earliest sunset does not occur on the winter solstice,
//             but rather about two weeks earlier, again depending on the viewer's
//             latitude. In the Northern Hemisphere, it occurs in early December or
//             late November (influenced by the Earth's faster movement near its
//             perihelion, which occurs around January 3).[citation needed]
//             Likewise, the same phenomenon exists in the Southern Hemisphere, but
//             with the respective dates reversed, with the earliest sunsets
//             occurring some time before June 21 in winter, and latest sunsets
//             occurring some time after December 21 in summer, again depending on
//             one's southern latitude. For a few weeks surrounding both solstices,
//             both sunrise and sunset get slightly later each day. Even on the
//             equator, sunrise and sunset shift several minutes back and forth
//             through the year, along with solar noon. These effects are plotted
//             by an analemma.[5][6] Neglecting atmospheric refraction and the
//             Sun's non-zero size, whenever and wherever sunset occurs, it is
//             always in the northwest quadrant from the March equinox to the
//             September equinox, and in the southwest quadrant from the September
//             equinox to the March equinox. Sunsets occur almost exactly due west
//             on the equinoxes for all viewers on Earth. Exact calculations of the
//             azimuths of sunset on other dates are complex, but they can be
//             estimated with reasonable accuracy by using the analemma.[citation
//             needed] As sunrise and sunset are calculated from the leading and
//             trailing edges of the Sun, respectively, and not the center, the
//             duration of a daytime is slightly longer than nighttime (by about 10
//             minutes, as seen from temperate latitudes). Further, because the
//             light from the Sun is refracted as it passes through the Earth's
//             atmosphere, the Sun is still visible after it is geometrically below
//             the horizon. Refraction also affects the apparent shape of the Sun
//             when it is very close to the horizon. It makes things appear higher
//             in the sky than they really are. Light from the bottom edge of the
//             Sun's disk is refracted more than light from the top, since
//             refraction increases as the angle of elevation decreases. This
//             raises the apparent position of the bottom edge more than the top,
//             reducing the apparent height of the solar disk. Its width is
//             unaltered, so the disk appears wider than it is high. (In reality,
//             the Sun is almost exactly spherical.) The Sun also appears larger on
//             the horizon, an optical illusion, similar to the moon
//             illusion.[citation needed] Locations north of the Arctic Circle and
//             south of the Antarctic Circle experience no sunset or sunrise at
//             least one day of the year, when the polar day or the polar night
//             persist continuously for 24 hours.[
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
