import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { server } from '@/config';
import Meta from '@/components/Meta';

function article({article}) {
    // const router=useRouter();
    // const {id}=router.query
  return (
    <>
    <Meta title={`${article.title}`} />
    <div className='p-5'>
     <h3 className='text-2xl font-bold'>
        {article.title}
     </h3>
     <p>
        {article.body}
     </p>
     <br/>
     <Link href="/"> Go back</Link>
    </div>
    </>
  )
}

// export const getStaticProps=async(context)=>{
//     const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//     const article=await res.json();

//     return {
//         props:{
//             article
//         }
//     }

// }
// export const getStaticPaths=async()=>{
//      const res=await fetch(`https://jsonplaceholder.typicode.com/posts`);
//     const articles=await res.json();
// const ids=articles.map(article=>article.id);
// const paths=ids.map(id=>({params:{id:id.toString()}}))

//     return {
//         paths,
//         fallback:false
//     }

// }

export const getStaticProps=async(context)=>{
    const res=await fetch(`${server}/api/articles/${context.params.id}`);
    const article=await res.json();

    return {
        props:{
            article
        }
    }

}
export const getStaticPaths=async()=>{
     const res=await fetch(`${server}/api/articles`);
    const articles=await res.json();
const ids=articles.map(article=>article.id);
const paths=ids.map(id=>({params:{id:id.toString()}}))

    return {
        paths,
        fallback:false
    }

}



export default article;
