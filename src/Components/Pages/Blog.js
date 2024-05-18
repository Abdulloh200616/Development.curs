import React from "react";
import { Container, Row } from "react-bootstrap";
import blogimg1 from '../img/la.jpg'
import blogimg2 from '../img/lastblog img-1.jpg'
import blogimg3 from '../img/lastblog img-2.webp'
import blogimg4 from '../img/lastblog img-3.jpg'
import logo1 from '../img/Logo (1).png'


function Blog() {
    return (
        <Container className="blog-container">
          <Row>
              <h1 className="blog-title">Latest Blogs</h1>
              <div className="new-container row">
                <div className="col-6  ">
                  <div className="left-blog">
                  <img className="blog-img" src={blogimg1}></img>
                  
                  <img className="blog-img" src={blogimg2}></img>
                  <img className="blog-img" src={blogimg3}></img>
                  <img className="blog-img" src={blogimg4}></img>
                  </div>
                </div>
                <div className="col-6">
                <div className=" right-blog ">
                  <h1 className="blog-text1">How to experience powerful education free of charge</h1>
                  <p className="blog-text2">3 May 20215 min read </p>
                  <p className="blog-text3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla urna dolor quis enim, convallis vitae maecenas. Orci, erat enim adipiscing mattis elit nunc, sed facilisis. Enim, dui, diam sit at. Urna, sit sit eget placerat eget hendrerit consequat. Risus, cursus nibh aliquet facilisis laoreet sagittis quis. Aliquam amet, vel aliquam cursus aliquet pellentesque aenean. Sit vestibulum malesuada eget pharetra. Risus consequat bibendum dictum placerat convallis donec malesuada in porttitor. 
                  Sag</p>
                  <button className="blog-btn">Read More</button>
                  <h1 className="blog-text1" style={{marginTop:'10px'}}>How to experience powerful education free of charge</h1>
                  <p className="blog-text2">3 May 20215 min read </p>
                  <p className="blog-text3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla urna dolor quis enim, convallis vitae maecenas. Orci, erat enim adipiscing mattis elit nunc, sed facilisis. Enim, dui, diam sit at. Urna, sit sit eget placerat eget hendrerit consequat. Risus, cursus nibh aliquet facilisis laoreet sagittis quis. Aliquam amet, vel aliquam cursus aliquet pellentesque aenean. Sit vestibulum malesuada eget pharetra. Risus consequat bibendum dictum placerat convallis donec malesuada in porttitor. 
                  Sag</p>
                  <button className="blog-btn">Read More</button>
                  <h1 className="blog-text1" style={{marginTop:'10px'}}>How to experience powerful education free of charge</h1>
                  <p className="blog-text2">3 May 20215 min read </p>
                  <p className="blog-text3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla urna dolor quis enim, convallis vitae maecenas. Orci, erat enim adipiscing mattis elit nunc, sed facilisis. Enim, dui, diam sit at. Urna, sit sit eget placerat eget hendrerit consequat. Risus, cursus nibh aliquet facilisis laoreet sagittis quis. Aliquam amet, vel aliquam cursus aliquet pellentesque aenean. Sit vestibulum malesuada eget pharetra. Risus consequat bibendum dictum placerat convallis donec malesuada in porttitor. 
                  Sag</p>
                  <button className="blog-btn">Read More</button>
                  <h1 className="blog-text1" style={{marginTop:'10px'}}>How to experience powerful education free of charge</h1>
                  <p className="blog-text2">3 May 20215 min read </p>
                  <p className="blog-text3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla urna dolor quis enim, convallis vitae maecenas. Orci, erat enim adipiscing mattis elit nunc, sed facilisis. Enim, dui, diam sit at. Urna, sit sit eget placerat eget hendrerit consequat. Risus, cursus nibh aliquet facilisis laoreet sagittis quis. Aliquam amet, vel aliquam cursus aliquet pellentesque aenean. Sit vestibulum malesuada eget pharetra. Risus consequat bibendum dictum placerat convallis donec malesuada in porttitor. 
                  Sag</p>
                  <button className="blog-btn">Read More</button>
                </div>
                </div>
                {/* <div className='Footer'>
              <div className='foter-left'>
                <img style={{}}  src={logo1}></img>
                <div>
                  <ul >
                    <li><p>About</p></li>
                    <li>About us</li>
                    <li>Courses</li>
                    <li>Mentor</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
                <div >
                  <ul >
                    <li><p>Suppor</p></li>
                    <li>Careers</li>
                    <li>Help & Support</li>
                    <li>Blog</li>
                  </ul>
                </div>
                <div >
                  <ul >
                    <li><p>Company</p></li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Code of Conduct</li>
                  </ul>
                </div>
               
              </div>

             
              <div >
                <p className='footer-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet <br></br>
                tristique placerat eleifend aliquam pellentesque facilisis<br></br> ultrices. Imperdiet mus urna egestas at tellus. </p>
              </div>
              <div className='foterend'>
                <p>Privacy Policy</p>
                <p>Terms and Condition</p>
                
              </div>
              <div>
              <p className='lastP' >@2020 TanahAir Studio. All rights reserved.</p>
              </div>
            </div> */}
                
                
                
                
                
                
              </div>
          </Row>
        </Container>
      );
}

export default Blog;