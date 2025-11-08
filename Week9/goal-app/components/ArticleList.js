import React from "react";
import ArticleItem from "./ArticleItem";

function ArticleList({ articles }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-4">
      {articles.map((article) => {
        return(
        <>
         <ArticleItem article={article} key={article.id}/>
        </>);
      })}
    </div>
  );
}

export default ArticleList;
