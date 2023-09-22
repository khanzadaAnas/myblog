export type TPost = {
    id: number;
    name: string;
    description: string;
    body: string;
    title: string;
    email: string;
   
}
import Image from "next/image";
import a from "/public/a.jpeg";
import { url } from "inspector";


export const posts: TPost[] = [
    {
        id: 1,
        name: 'THE SUN SET',
        description: ' Sunset (or sundown) is the disappearance of the Sun below the horizon due to Earth rotation.As viewed from everywhere on Earth.' ,
        body: "string",
        title: "string",
        email:'string',
    },
    {
        id: 2,
        name: 'THE WATER',
        description: ' Water is an inorganic compound with the chemical formula H2O. It is a transparent, tasteless, odorless, and nearly colorless chemical substance.',
        body: "string",
        title: "string",
        email:'string',
    },
    {
        id: 3,
        name: 'THE CITY',
        description: 'A city is a human settlement of a notable size. It can be defined as a permanent and densely settled place with administratively defined boundaries.',
        body: "string",
        title: "string",
        email:'string',
    },
    {
        id: 4,
        name: 'THE ATMOSPHERE',
        description: 'Mixture of all things',
        body: "string",
        title: "string",
        email:'string',
        
    },

];

export type TComment = {
    id: number;
    name: string;
    description: string;
    body: string;
    title: string;
    email: string;
   
}


export const comments: TComment[] = [
    {
        id: 1,
        name: 'THE SUN SET',
        description: ' Sunset (or sundown) is the disappearance of the Sun below the horizon due to Earth rotation.As viewed from everywhere on Earth.' ,
        body: "string",
        title: "string",
        email:'string',
    },
]