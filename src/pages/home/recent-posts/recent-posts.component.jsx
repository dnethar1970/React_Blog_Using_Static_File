import React from 'react';
import './recent-posts.styles.css';

import Card from '../../../components/ui/card/card.component';

const RecentPosts = (props) => {
    return (
        <div style={props.style}>
            <Card style={{marginBottom:'20px'}}>
                <div className="postImageWraper">
                    <img src="/images/memories-from.jpg" alt="" />
                </div>
                <div style={{textAlign:'center'}}>
                    <span>Featured</span>
                    <h2>Fitness Mantra</h2>
                    <span>posted on July</span>
                    <p className="postDesc">Purus Convallis nascetur diam torquent sit id adipiscing in netus praesent etiam enim nec massa fusce orci nam potenti hac tortorPurus Convallis nascetur diam torquent sit id adipiscing in netus praesent etiam enim nec massa fusce orci nam potenti hac tortorPurus Convallis nascetur diam torquent sit id adipiscing in netus praesent etiam enim nec massa fusce orci nam potenti hac tortorPurus Convallis nascetur diam torquent sit id adipiscing in netus praesent etiam enim nec massa fusce orci nam potenti hac tortorPurus Convallis nascetur diam torquent sit id adipiscing in netus praesent etiam enim nec massa fusce orci nam potenti hac tortorPurus Convallis nascetur diam torquent sit id adipiscing in netus praesent etiam enim nec massa fusce orci nam potenti hac tortor</p>
                    <button>Read More</button>
                </div>
            </Card>
        </div>
    )
};

export default RecentPosts;