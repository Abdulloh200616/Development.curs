import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import menimg from '../img/men-img.webp'
import { Sidebar } from "flowbite-react";
import { Rating } from "flowbite-react";
import logo1 from '../img/Logo (1).png'
import rivesImg1 from '../img/rives img 1.webp'
import rivesImg2 from '../img/rives img 2.jpg'
import rivesImg3 from '../img/rives img 3.jpg'
import video from '../Vedio/Project-video.mp4'
import { Link } from 'react-router-dom';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from "react-icons/hi"
import { MdOutlineStar } from "react-icons/md";



function Detail() {
  return (  
    <Container className="detail-container">
        <h1 className="detail-title">How to become an Expert<br></br>
         Web Developer</h1>
         <i className="detail-star">
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <p className="detail-text">4,7/5 (1023 Reviews) 20327 Student</p>
          </i>
          
          <img className='detail-img' src={menimg}></img>
          <p className="detail_text2">Pak Arif Satria Kecek ulalala</p>
          <div className="detail-bts">
            <button className="detail-btn1">Add To Wishlist <i className="fa-solid fa-plus"></i></button>
            <button className="detail-btn2">Share <i style={{color:'#F72585'}} className=" fa-solid fa-share"></i></button>
          </div>
         <div className="row">
            <div className="col-6">
              <div className="left-card">
              <h1>What you’ll learn from this course</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in orci, nunc amet libero. Nam scelerisque vestibulum bibendum a turpis. Ante feugiat lectus massa, odio amet. Auctor sit mattis non id proin elit placerat. Lectus morbi amet et aliquam magna mauris. Proin pulvinar fringilla nunc, tristique urna, massa, tincidunt. </p>
              <br></br>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in orci, nunc amet libero. Nam scelerisque vestibulum bibendum a turpis. Ante feugiat lectus massa, odio amet. Auctor sit mattis non id proin elit placerat. Lectus morbi amet et aliquam magna mauris. Proin pulvinar fringilla nunc, tristique urna, massa, tincidunt. </p>
              <br></br>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in orci, nunc amet libero. Nam scelerisque vestibulum bibendum a turpis. Ante feugiat lectus massa, odio amet. Auctor sit mattis non id proin elit placerat</p>
              <br></br>
              <h1 className="detail-text3">Objectives Features</h1>
              <div className="box-pink1">
               <Col>
                  <i class="fa-solid fa-check"></i>
                <p className="pink-text">Build fully websites and web apps<br></br>
                 for your startup or business.</p>
                <br></br>
                <i class="fa-solid fa-check"></i>
                <p className="pink-text">Build fully websites and web apps<br></br>
                 for your startup or business.</p>
                <br></br>
                <i class="fa-solid fa-check"></i>
                <p className="pink-text">Build fully websites and web apps<br></br>
                 for your startup or business.</p>
                <br></br>
                <i class="fa-solid fa-check"></i>
                <p className="pink-text">Build fully websites and web apps<br></br>
                 for your startup or business.</p>
                <br></br>
                <i class="fa-solid fa-check"></i>
                <p className="pink-text">Build fully websites and web apps<br></br>
                 for your startup or business.</p>
                <br></br>
               </Col>
               <Col>
                <i class="fa-solid fa-check"></i>
                <p className="pink-text">Build fully websites and web apps<br></br>
                 for your startup or business.</p>
                <br></br>
                <i class="fa-solid fa-check"></i>
                <p className="pink-text">Build fully websites and web apps<br></br>
                 for your startup or business.</p>
                <br></br>
                <i class="fa-solid fa-check"></i>
                <p className="pink-text">Build fully websites and web apps<br></br>
                 for your startup or business.</p>
                <br></br>
                <i class="fa-solid fa-check"></i>
                <p className="pink-text">Build fully websites and web apps<br></br>
                 for your startup or business.</p>
                <br></br>
                <i class="fa-solid fa-check"></i>
                <p className="pink-text">Build fully websites and web apps<br></br>
                 for your startup or business.</p>
                <br></br>
               </Col>
               


              </div>
              <h1>Requirement </h1>
                <div className="box-pink2">
                  <i class="fa-solid fa-check"></i>
                    <p className="pink-text">No programming experience needed - I'll teach you everything you need to know</p>
                    <br></br>
                    <i class="fa-solid fa-check"></i>
                    <p className="pink-text">A Mac or PC computer with access to the internet</p>
                    <br></br>
                    <i class="fa-solid fa-check"></i>
                    <p className="pink-text">No previous coding experience is needed</p>
                    <br></br>
                    <i class="fa-solid fa-check"></i>
                    <p className="pink-text">All tools and software used in this course will be free</p>
                    <br></br>
                    <i class="fa-solid fa-check"></i>
                    <p className="pink-text">Any operating system: Mac, PC, Linux</p>
                    <br></br>
                </div>
                <h1>Module Courses</h1>
                <div className="box-pink3">
                <Sidebar style={{width:'729px',backgroundColor:'#fff5F9'}} aria-label="Sidebar with multi-level dropdown example">
                <Sidebar.Items >
                  <Sidebar.ItemGroup style={{padding:'20px 10px'}}>
                    <Sidebar.Collapse icon={HiShoppingBag} label="Introducing to Web Development">
                      <Sidebar.Item href="#">
                      <div class="flex items-center">
                      <p className="side-texts">Welcome !</p> 
                        <i  className="vedio fa-solid fa-circle-play"></i>
                          <p className="side-text">01:24</p>
                      </div>  
                      </Sidebar.Item>
                      <Sidebar.Item href="#">
                      <div class="flex items-center">
                      <p className="side-texts1">Syllabus download</p> 
                      <i class="vedio1 fa-solid fa-clipboard"></i>
                          <p className="side-text">01:24</p>
                      </div>                      
                      </Sidebar.Item>
                      <Sidebar.Item href="#">
                      <div class="flex items-center">
                      <p className="side-texts">Courses resources</p> 
                      <i class="vedio2 fa-solid fa-clipboard"></i>
                          <p className="side-text">01:24</p>
                      </div>                      
                      </Sidebar.Item>
                      <Sidebar.Item href="#">
                      <div class="flex items-center">
                      <p className="side-texts">Join online group classes</p> 
                      <i class="vedio3 fa-solid fa-clipboard"></i>
                          <p className="side-text">01:24</p>
                      </div>                       
                      </Sidebar.Item>
                      <Sidebar.Item href="#">
                      <div class="flex items-center">
                      <p className="side-texts">How do website actually work?</p> 
                        <i  className="vedio4 fa-solid fa-circle-play"></i>
                          <p className="side-text">01:24</p>
                      </div>  
                      </Sidebar.Item>
                      <Sidebar.Item href="#">
                      <div class="flex items-center">
                      <p className="side-texts">What is Internet?</p> 
                        <i  className="vedio5 fa-solid fa-circle-play"></i>
                          <p className="side-text">01:24</p>
                      </div>  
                      </Sidebar.Item>
                      <Sidebar.Item href="#">
                      <div class="flex items-center">
                      <p className="side-texts">Download 10 rules code</p> 
                      <i class="vedio6 fa-solid fa-clipboard"></i>
                          <p className="side-text">01:24</p>
                      </div>                       
                      </Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Collapse icon={HiShoppingBag} label="How the Internet works">
                      
                    </Sidebar.Collapse>
                    <Sidebar.Collapse icon={HiShoppingBag} label="Introducing HTML">
                      
                    </Sidebar.Collapse>
                    <Sidebar.Collapse icon={HiShoppingBag} label="Introducing CSS">
                      
                    </Sidebar.Collapse>
                    <Sidebar.Collapse icon={HiShoppingBag} label="Intermediate CSS">
                      
                      
                    </Sidebar.Collapse>
                    <Sidebar.Collapse icon={HiShoppingBag} label="Introduction Bootstrap">
                      
                    </Sidebar.Collapse>
                    
                  
                  
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </Sidebar >
              <button className="big-blog-btn">17 More Modules</button>
                </div>
                <div className="mini-box1">
                  <h1 style={{marginTop:'80px'}} className="mini-title">Mentor</h1>
                  <img className="mini-img" src={menimg}></img>
                  <h1  className="mini-text1">Arif kecek</h1>
                  <p className="mini-text2">Senior developer expert instructor</p>
                  <i className="mini-star">
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <p  className="mini-text3"><span >4,7/7</span> (1023 Reviews) 20327 Student</p>
                  </i>
                  <br></br>
                  <p className="mini-text4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in orci, nunc amet libero. Nam scelerisque vestibulum bibendum a turpis.</p>
                  <div className="mini-btns">
                    <button></button><p>12 Courses</p>
                    <button></button><p>2583 Student</p>
                  </div>

                </div>
                <div className="mini-box2">
                  <h1 style={{marginTop:'80px'}} className="mini-title">Feedback</h1>
                  <p className="number-mini">5.0</p>
                  <i className="mini-star2">
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <p  className="m-text">Course Rating</p>
                  </i>
                  <div className="renge-btn">
                  <button className="renge-btn1" style={{backgroundColorcolor:'gold',width:'250px'}}></button>
                  <button className="renge-btn2" style={{backgroundColor:'grey' }}></button>
                  <div className="range-star">

                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px',marginTop:'-10px'}} className="fulstar fa-solid fa-star"></i>
                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px',marginTop:'-10px'}} className="fulstar fa-solid fa-star"></i>
                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px',marginTop:'-10px'}} className="fulstar fa-solid fa-star"></i>
                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px',marginTop:'-10px'}} className="fulstar fa-solid fa-star"></i>
                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px',marginTop:'-10px'}} className="fulstar fa-solid fa-star"></i>
                  <p>500 Reviews</p>
                  </div>
                  </div>
                  <div className="renge-btn">
                  <button className="renge-btn3" style={{backgroundColorcolor:'gold',width:'210px'}}></button>
                  <button className="renge-btn4" style={{backgroundColor:'grey' }}></button>
                  <div className="range-star">

                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px',marginTop:'-10px'}} className="fulstar fa-solid fa-star"></i>
                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px',marginTop:'-10px'}} className="fulstar fa-solid fa-star"></i>
                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px',marginTop:'-10px'}} className="fulstar fa-solid fa-star"></i>
                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px',marginTop:'-10px'}} className="fulstar fa-solid fa-star"></i>
                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px'}} className="lowstart fa-regular fa-star"></i>
                  <p>500 Reviews</p>
                  </div>
                  </div>
                  <div className="renge-btn">
                  <button className="renge-btn5" style={{backgroundColorcolor:'gold',width:'180px'}}></button>
                  <button className="renge-btn6" style={{backgroundColor:'grey' }}></button>
                  <div className="range-star">

                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px',marginTop:'-10px'}} className="fulstar fa-solid fa-star"></i>
                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px',marginTop:'-10px'}} className="fulstar fa-solid fa-star"></i>
                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px',marginTop:'-10px'}} className="fulstar fa-solid fa-star"></i>
                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px'}} className="lowstart fa-regular fa-star"></i>
                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px'}} className="lowstart fa-regular fa-star"></i>
                  <p>500 Reviews</p>
                  </div>
                  </div>
                  <div className="renge-btn">
                  <button className="renge-btn7" style={{backgroundColorcolor:'gold',width:'150px'}}></button>
                  <button className="renge-btn8" style={{backgroundColor:'grey' }}></button>
                  <div className="range-star">

                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px',marginTop:'-10px'}} className="fulstar fa-solid fa-star"></i>
                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px',marginTop:'-10px'}} className="fulstar fa-solid fa-star"></i>
                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px'}} className="lowstart fa-regular fa-star"></i>
                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px'}} className="lowstart fa-regular fa-star"></i>
                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px'}} className="lowstart fa-regular fa-star"></i>
                  <p>500 Reviews</p>
                  </div>
                  </div>
                  <div className="renge-btn">
                  <button className="renge-btn9" style={{backgroundColorcolor:'gold',width:'120px'}}></button>
                  <button className="renge-btn10" style={{backgroundColor:'grey' }}></button>
                  <div className="range-star">

                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px',marginTop:'-10px'}} className="fulstar fa-solid fa-star"></i>
                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px'}} className="lowstart fa-regular fa-star"></i>
                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px'}} className="lowstart fa-regular fa-star"></i>
                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px'}} className="lowstart fa-regular fa-star"></i>
                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px'}} className="lowstart fa-regular fa-star"></i>
                  <p>500 Reviews</p>
                  </div>
                  </div>

                </div>
                <div className="Revies-box">
                  <h1 className="revis-title">Reviews</h1>
                  <button>All Ratings <i class="fa-solid fa-caret-down"></i></button>
                </div>
                <div className="rives-card">
                <img  src={rivesImg1}></img>
                  <p className="rives-card-text1">Mas Ehan</p>
                  <div className="rives-card-icon">
                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px',marginTop:'-10px'}} className="fulstar fa-solid fa-star"></i>
                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px',marginTop:'-10px'}} className="fulstar fa-solid fa-star"></i>
                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px',marginTop:'-10px'}} className="fulstar fa-solid fa-star"></i>
                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px',marginTop:'-10px'}} className="fulstar fa-solid fa-star"></i>
                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px',marginTop:'-10px'}} className="fulstar fa-solid fa-star"></i>
                  
                  </div>
                  <div className="riverse-card-icon2">
                  <i style={{fontSize:'33px',marginRight:'50px'}} class="fa-regular fa-thumbs-up"></i>
                  <i style={{fontSize:'33px'}} class="fa-regular fa-thumbs-down"></i>
                  </div>
                  <p className="rives-card-text2">2 month ago</p>
                  <br></br>
                  <p className="rives-card-text3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae non id interdum massa enim posuere. Tempus, risus varius rhoncus ipsum, sed egestas nisi pellentesque. Sapien quam varius euismod in velit diam posuere netus nec. A consectetur nec ac sed convallis adipiscing. Aenean enim cursus a mattis ac velit, quis. Nibh id dui, justo, at tempus. Mauris egestas nunc morbi dignissim.</p>
                

                </div>
                <div className="rives-card">
                <img  src={rivesImg2}></img>
                  <p className="rives-card-text1">Malik</p>
                  <div className="rives-card-icon">
                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px',marginTop:'-10px'}} className="fulstar fa-solid fa-star"></i>
                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px',marginTop:'-10px'}} className="fulstar fa-solid fa-star"></i>
                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px',marginTop:'-10px'}} className="fulstar fa-solid fa-star"></i>
                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px',marginTop:'-10px'}} className="fulstar fa-solid fa-star"></i>
                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px',marginTop:'-10px'}} className="fulstar fa-solid fa-star"></i>
                  
                  </div>
                  <div className="riverse-card-icon2">
                  <i style={{fontSize:'33px',marginRight:'50px'}} class="fa-regular fa-thumbs-up"></i>
                  <i style={{fontSize:'33px'}} class="fa-regular fa-thumbs-down"></i>
                  </div>
                  <p className="rives-card-text2">2 month ago</p>
                  <br></br>
                  <p className="rives-card-text3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae non id interdum massa enim posuere. Tempus, risus varius rhoncus ipsum, sed egestas nisi pellentesque. Sapien quam varius euismod in velit diam posuere netus nec. A consectetur nec ac sed convallis adipiscing. Aenean enim cursus a mattis ac velit, quis. Nibh id dui, justo, at tempus. Mauris egestas nunc morbi dignissim.</p>
                

                </div>
                <div className="rives-card">
                <img  src={rivesImg3}></img>
                  <p className="rives-card-text1">Pakjoo</p>
                  <div className="rives-card-icon">
                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px',marginTop:'-10px'}} className="fulstar fa-solid fa-star"></i>
                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px',marginTop:'-10px'}} className="fulstar fa-solid fa-star"></i>
                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px',marginTop:'-10px'}} className="fulstar fa-solid fa-star"></i>
                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px',marginTop:'-10px'}} className="fulstar fa-solid fa-star"></i>
                  <i style={{color:'gold',fontSize:'22px',marginLeft:'10px',marginTop:'-10px'}} className="fulstar fa-solid fa-star"></i>
                  
                  </div>
                  <div className="riverse-card-icon2">
                  <i style={{fontSize:'33px',marginRight:'50px'}} class="fa-regular fa-thumbs-up"></i>
                  <i style={{fontSize:'33px'}} class="fa-regular fa-thumbs-down"></i>
                  </div>
                  <p className="rives-card-text2">2 month ago</p>
                  <br></br>
                  <p className="rives-card-text3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae non id interdum massa enim posuere. Tempus, risus varius rhoncus ipsum, sed egestas nisi pellentesque. Sapien quam varius euismod in velit diam posuere netus nec. A consectetur nec ac sed convallis adipiscing. Aenean enim cursus a mattis ac velit, quis. Nibh id dui, justo, at tempus. Mauris egestas nunc morbi dignissim.</p>
                

                </div>







              </div>
            </div>
           
            <div className="col-6">
              <div className="right-card">
                <video src={video} width='100%' height='313px' controls/>
                <p className='number-3'>$53<strike className="number">$124</strike></p>
                <br></br>
                <hr style={{color:'black'}}></hr>
                <div className="vedio-card-title">64 Document<br></br> courses</div>
                <button className="vedio-card-btn">50% OFF</button>
                <div className="ddd">
                <button className="vedio-card-btn-1"><i class="fa-solid fa-check"></i></button>
                <p className="vedio-text1">24 Modules</p>
                <button className="vedio-card-btn-1"><i class="fa-solid fa-check"></i></button>
                <p className="vedio-text1">Full time access</p>
                <button className="vedio-card-btn-1"><i class="fa-solid fa-check"></i></button>
                <p className="vedio-text1">20 resources </p>
                <button className="vedio-card-btn-1"><i class="fa-solid fa-check"></i></button>
                <p className="vedio-text1">12 exercises </p>
                <button className="vedio-card-btn-1"><i class="fa-solid fa-check"></i></button>
                <p className="vedio-text1">Certificate </p>
           
                </div>
                <Link to='/signup'>
                <button className="vedio-big-btn1">Add To Cart</button>
                </Link>
                <br></br>
                <Link to='/signup'>
                <button className="vedio-big-btn2">Add To Cart</button>
                </Link>

              </div>
             
          </div>
         </div>
         <div className='Footer'>
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
            </div>
     
    </Container>
  );
}

export default Detail;
