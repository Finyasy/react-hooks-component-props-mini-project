import React from "react";
import blogData from "../data/blog";

function Article(){
    const {posts} = blogData;
    return(
        <article>
            {/* an <h3> element displaying the title of the article, passed as a prop */}

            {posts.map(post => <h3 key={post.id}>{post.title}</h3>)}
            {posts.map(post => (post.date) ? <small key={post.id}>{post.date}</small> : "January 1, 1970")}
            {posts.map(post => <p key={post.id}>{post.preview}</p>)}
        </article>
    )
}

export default Article;