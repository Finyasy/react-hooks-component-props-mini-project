import React from "react";
import blogData from "../data/blog";

function ArticleList(){
    const {posts} = blogData;
    return(
        <main>
            {/* an array of Article components (one component for each post passed down as a prop to ArticleList) */}
            {posts.map(post => <article key={post.id} post={post}></article> )}
        </main>
    )
}

export default ArticleList;