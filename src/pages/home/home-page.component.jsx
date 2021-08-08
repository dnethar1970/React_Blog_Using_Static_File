import React from 'react';

import './home-page.styles.css';

import Card from '../../components/ui/card/card.component';
import SideBar from '../../components/sidebar/sidebar.component';
import RecentPosts from './recent-posts/recent-posts.component';

import blogData from '../../data/blog.json';

const SideImage = props => {
    return (
        <div style={{ height: `${props.height}px` }}>
            <img src={props.src} alt="" />
        </div>
    );
}

const ImageGallery = props => (
    <div className="galleryPost" style={props.galleryStyle}>
                <section style={{width:'70%'}}>
                    <div className="mainImageWrapper">
                        <img src={props.imagesArray[0]} />
                    </div> 
                </section>
                <section className="sideImageWrapper" style={{width:'30%'}}>
                    <SideImage
                        height={props.sideImageHeight} 
                        src={props.imagesArray[1]}/>
                    <SideImage
                        height={props.sideImageHeight} 
                        src={props.imagesArray[2]}/>
                    <SideImage
                        height={props.sideImageHeight} 
                        src={props.imagesArray[3]}/>
                </section>
           </div>   
);

const Home = props => {
    const galleryHeight = 450;
    const galleryStyle = {
        height: galleryHeight+'px',
        overflow:'hidden'
    };

    const sideImageHeight = galleryHeight / 3;

    const imgArr = blogData.data.map(post => post.blogImage)

    return (
       <div>
           <Card>
            <ImageGallery 
                largeWidth="70%"
                smallWidth="30%"
                sideImageHeight = {sideImageHeight}
                galleryStyle = {galleryStyle}
                imagesArray = {imgArr}
                />

           </Card>

            <section className="homeContainer">
                <RecentPosts style={{width:'70%'}} />
                <SideBar /> 
            </section>
       </div>
    )
};

export default Home;