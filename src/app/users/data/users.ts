import Image from "next/image";
import a from "/public/a.jpeg";

export type TUser = {
  id: number;
  name: string;
  occupation: string;
  city: string;
  introduction: string;
  age: number ;
  status: string;
  fee: number;
  website: string;
  phone : number,
  username: string,
  email: string,
  
};

export const users: TUser[]  = [
  {
    id: 1,
    name: "Talha Khanzada",
    occupation: "Labour",
    city: "Karachi",
    introduction:
      "I am pleased to introduce you to our head of account management, Mrs. Morgado. Mrs. Morgado, Miss Nelson has just signed a one-year contract with our organization for social media management and content creation for the local restaurant she owns, Trendy Meals and Treats.",
    age: 32,
    status: "single",
    fee: 90,
    website: "single",
    phone : 632783,
    username: "xyz",
    email:"xyz@email.com",
  },
  {
    id: 2,
    name: "Amjad Kaimkhani",
    occupation: "Unempolyee",
    city: "Lahore",
    introduction:
      "After informing the parties of your intent to make an introduction, state the name of the person you are introducing. In most situations, this is usually the younger person, has a lower-ranking title or who you know the least about. If you are introducing more than two people to each other, state the name of each person in ranking order beginning with the highest rank and working your way down.",
    age: 23,
    status: "single",
    fee: 87,
    website: "single",
    phone : 632783,
    username: "xyz",
    email:"xyz@email.com",
  },
 
  {
    id: 3,
    name: "Azeem Shahikail",
    occupation: "Labour",
    city: "Afghanistan",
    introduction:
      "my name is Azeem. Ive heard a lot of good things about you from our mutual friend, Tiffany. It is a pleasure to finally meet you.",
    age: 43,
    status: "Married",
    fee: 32,
    website: "single",
    phone : 632783,
    username: "xyz",
    email:"xyz@email.com",
  },
  {
    id: 4,
    name: "Waqar Zardari",
    occupation: "Studend",
    city: "Larkana",
    introduction:
      "my name is Waqar. Ive heard a lot of good things about you from our mutual friend, Tiffany. It is a pleasure to finally meet you.",
    age: 27,
    status: "single",
    fee: 99,
    website: "single",
    phone : 632783,
    username: "xyz",
    email:"xyz@email.com",
  },
  {
    id: 5,
    name: "Wajid Memon",
    occupation: "business man",
    city: "Hyderabad",
    introduction:
      " I would like you to meet my friend, Heather. We met in our after-school Junior Chemists Club and have become good friends since. Heather, this is my grandfather, Mr. Ward Adams. He has been a Chemist for 40 years and is the person who inspired my passion for Chemistry.",
    age: 19,
    status: "single",
    fee: 21,
    website: "single",
    phone : 632783,
    username: "xyz",
    email:"xyz@email.com",
  },
  {
    id: 6,
    name: "Gazanfer Daud",
    occupation: "Labour",
    city: "Chamber",
    introduction:
      "my name is Gazanfar. Ive heard a lot of good things about you from our mutual friend, Tiffany. It is a pleasure to finally meet you.",
    age: 30,
    status: "Married",
    fee: 73,
    website: "single",
    phone : 632783,
    username: "xyz",
    email:"xyz@email.com",
  },
  {
    id: 7,
    name: "Mehar Dras",
    occupation: "Employee",
    city: "Umarkot",
    introduction:
      "After informing the parties of your intent to make an introduction, state the name of the person you are introducing. In most situations, this is usually the younger person, has a lower-ranking title or who you know the least about. If you are introducing more than two people to each other, state the name of each person in ranking order beginning with the highest rank and working your way down.",
    age: 43,
    status: "Diversed",
    fee: 32,
    website: "single",
    phone : 632783,
    username: "xyz",
    email:"xyz@email.com",
  },
  {
    id: 8,
    name: "Waseem Khanzada",
    occupation: "Airforce Cadit",
    city: "Radhan",
    introduction:
      " I would like you to meet my friend, Heather. We met in our after-school Junior Chemists Club and have become good friends since. Heather, this is my grandfather, Mr. Ward Adams. He has been a Chemist for 40 years and is the person who inspired my passion for Chemistry.",
    age: 22,
    status: "single",
    fee: 90,
    website: "single",
    phone : 632783,
    username: "xyz",
    email:"xyz@email.com",
  },
  {
    id: 9,
    name: "Kirshan Kumar",
    occupation: "Shopkeeper",
    city: "Dehli-India",
    introduction:
      "it is my pleasure to introduce you to Ms. Taylor King. Ms. King is the certified personal trainer you will work with to achieve your goals. Ms. King, this is Mr. Gomez. His goal is to create a healthy meal plan and find a safe and effective exercise plan to help him lose excess weight and build his muscles.",
    age: 14,
    status: "single",
    fee: 88,
    website: "single",
    phone : 632783,
    username: "xyz",
    email:"xyz@email.com",
  },
  {
    id: 10,
    name: "Atif Aslam",
    occupation: "Singer",
    city: "UAE",
    introduction:
      "After informing the parties of your intent to make an introduction, state the name of the person you are introducing. In most situations, this is usually the younger person, has a lower-ranking title or who you know the least about. If you are introducing more than two people to each other, state the name of each person in ranking order beginning with the highest rank and working your way down.",
    age: 32,
    status: "single",
    fee: 20,
    website: "single",
    phone : 632783, 
    username: "xyz",
    email:"xyz@email.com",
  },
  {
    id: 11,
    name: "Maira khan",
    occupation: "Actor",
    city: "Islambad",
    introduction:
      "my name is Maira. Ive heard a lot of good things about you from our mutual friend, Tiffany. It is a pleasure to finally meet you.",
    age: 33,
    status: "Married",
    fee: 23,
    website: "single",
    phone : 632783,
    username: "xyz",
    email:"xyz@email.com",
  },
  {
    id: 12,
    name: "Rohan Basheer",
    occupation: "Policeman",
    city: "Karachi",
    introduction:
      "it is my pleasure to introduce you to Ms. Taylor King. Ms. King is the certified personal trainer you will work with to achieve your goals. Ms. King, this is Mr. Gomez. His goal is to create a healthy meal plan and find a safe and effective exercise plan to help him lose excess weight and build his muscles.",
    age: 52,
    status: "single",
    fee: 87,
    website: "single",
    phone : 632783,
    username: "xyz",
    email:"xyz@email.com",
  },
];
