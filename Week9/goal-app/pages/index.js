import Image from "next/image";
import {server} from '../config'
import { Geist, Geist_Mono } from "next/font/google";
import ArticleList from "@/components/ArticleList";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home({articles}) {
  return (
   <>
   
   <ArticleList articles={articles}/>
   </>
  );
}

// export const getStaticProps=async()=>{
//   const res=await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
//   const articles=await res.json();
//   return{
//     props:{articles}
//   }

// }


export const getStaticProps=async()=>{
  const res=await fetch(`${server}/api/articles`);
  const articles=await res.json();
  return{
    props:{articles}
  }

}
