import React, {useEffect, useState} from 'react';
import Card from '../ui/card/card.component';
import './sidebar.styles.css';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';

const SideBar = (props) => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        const posts = blogPost.data;
        setPosts(posts);
    }, [posts]);

    return (
        <div className="sideBarContainer">
            <Card style={{marginBottom:'20px', padding:'20px', boxSizing:'border-box'}}> 
                <div className="cardHeader">
                    <span>About Us</span>
                </div>
                <div className="profileImageContainer">
                    <img src="/images/profile.jpg" alt=""/>
                </div>
                <div className="cardBody">
                    <p className="personalBio">My name is David. I am a software developer and agile coach</p>
                </div>
            </Card>

            <Card style={{marginBottom:'20px', padding:'20px', boxSizing:'border-box'}}> 
                <div className="cardHeader">
                    <span>Social Network</span>
                </div>
            </Card>

            <Card style={{marginBottom:'20px', padding:'20px', boxSizing:'border-box'}}>
                <div className="cardHeader">
                    <span>Recent Posts</span>
                </div>
                <div className="recentPosts">
                {
                    posts.map(post => {
                        return (
                            <NavLink key={post.id} to={`/posts/${post.id}`}>
                                <div className="recentPost">
                                    <h3 className="recentPostTitle">{post.blogTitle}</h3>
                                    <span>{post.postedOn}</span>
                                </div>
                            </NavLink>
                        );                
                    })
                }
                </div>
            </Card>
        </div>

    )
};

export default SideBar;