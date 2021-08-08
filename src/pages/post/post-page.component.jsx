import React from 'react';
import './post-page.styles.css';

import BlogPost from '../../components/blog-post/blog-post.component';
import SideBar from '../../components/sidebar/sidebar.component';

const Post = (props) => {
    //console.log(props);
    return (
        <section className="container">
            <BlogPost {...props}/>
            <SideBar {...props}/>
        </section>
    )
};

export default Post;