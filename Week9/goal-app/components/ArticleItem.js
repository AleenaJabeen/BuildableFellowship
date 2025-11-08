import Link from 'next/link'
import React from 'react'

function ArticleItem({article}) {
  return (
    <Link className='border border-gray-100 rounded-md shadow shadow-gray-400 transition p-2' href="/article/[id]" as={`/article/${article.id}`}>
        <div>
            <h3 className='text-lg font-medium'>{article.title} &rarr;</h3>
            <p className='py-1 text-justify text-base'>{article.excerpt}</p>
        </div>
      
    </Link>
  )
}

export default ArticleItem
