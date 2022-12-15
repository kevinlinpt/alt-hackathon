import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import baseballCategoryHeader from "../images/baseball_category_header.png";
import "./BaseballPage.scss";
import "./Discussion.scss";


const Discussion = (props) => {
  return (
    <>
        <Navbar />

        <div className="community-hero">
            <img src={baseballCategoryHeader}></img>
        </div>

        <div className="discussion">
            <div className="discussion__container">
                
                <div className="discussion__header">
                    <img className="info-icon" src={require('../images/discuss_icon.png')} alt='Discussion' />
                    <h1 className="info-header">Discussion</h1>
                </div>

                <div className="discussion__subheader">
                    <label className="info-labelGreen">Trending:</label>
                </div>

                <div className="discussion__item">
                    <div className="discussion__subitem">
                        <div className="discussion__subitem-aside">
                            <img src={require('../images/profile_picture.png')} className='iconProfile' alt='Profile' />
                            <h3 className="info-subheader">John Doe</h3>
                            <label className="info-caption">12 h</label>
                        </div>

                        <div className="discussion__subitem-aside">
                            <a href='#'>
                                <img src={require('../images/bookmark_icon.png')} className='info-icon' alt='Bookmark' />
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="discussion__item">
                    <div className="discussion__subitem">
                        <ul>
                            <li><img src={require('../images/card_1.png')} alt='' /></li>
                            <li><img src={require('../images/card_2.png')} alt='' /></li>
                            <li><img src={require('../images/card_3.png')} alt='' /></li>
                        </ul>
                    </div>
                </div>

                <div className="discussion__item">

                    <div className="discussion__message">
                        <div className="discussion__message-card">
                            <h3>My New Collection</h3>
                            
                            <p>I started collecting sports cards on this platform about 8 months ago.
                                Last week, I purchased these 3 baseball cards to add to my portfolio,
                                and they've gone up 8% in value! Sweet. (P.s. I'm currently selling
                                2 exclusive basketball cards, checkout my profile for more info).
                            </p>
                        </div>

                        <div className="discussion__message-card">
                            <div className="discussion__message-nav">
                                <div className="discussion__message-btn">
                                    <a href='#'>
                                        <img src={require('../images/icon_arrow_up.png')} className='iconMessage' alt='Upvotes' />
                                    </a>
                                    42 Upvotes
                                </div>

                                <div className="discussion__message-btn">
                                    <a href='#'>
                                        <img src={require('../images/icon_arrow_down.png')} className='iconMessage' alt='Downvotes' />
                                    </a>
                                    7 Downvotes
                                </div>

                                <div className="discussion__message-btn">
                                    <a href='#'>
                                        <img src={require('../images/icon_message.png')} className='iconMessage' alt='Comments' />
                                    </a>
                                    11 Comments
                                </div>

                                <div className="discussion__message-btn">
                                    <a href='#'>
                                        <img src={require('../images/icon_share.png')} className='iconMessage' alt='Share' />
                                    </a>
                                    2 Shares
                                </div>
                            </div>

                            <div className="discussion__message-card">
                                <textarea className="textMessage" placeholder="Write something here..." cols="30" rows="5" />
                                <div className="discussion__message-action">
                                    <input type="button" class="btnMessage" value="Clear" />
                                    <input type="button" class="btnMessage" value="Comment" />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
            

        </div>
    
        <hr></hr>

        
    </>
  );
}

export default Discussion;
