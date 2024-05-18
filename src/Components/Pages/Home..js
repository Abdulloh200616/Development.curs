import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import logo from '../img/Group.png'
import logo1 from '../img/Logo (1).png'
import mentorimg from '../img/mentor-img1.webp'
import businesimg from '../img/cards-img-2.jpg'
import businesimg2 from '../img/top-img-2.jpg'
import artimg2 from '../img/top-img-5.webp'
import artimg from '../img/top-img-1.jpg'
import devepimg from '../img/cards-img-3.jpg'
import devepimg2 from '../img/top-img-8.jpg'
import merketimg from '../img/top-img-4.jpg'
import marketimg2 from '../img/cards-img.jpg'
import topimg1 from '../img/cards-img-5.jpg'
import topimg2 from '../img/hero img.jpg'
import topimg3 from '../img/topimg-11.jpeg'
import topimg4 from '../img/cards-img-5.jpg'
import topimg5 from '../img/top-img-7.jpg'
import topimg6 from '../img/top-img-6.jpg'
import topimg7 from '../img/top-img9.jpeg'
import topimg8 from '../img/cards-img-4.jpg'
import firstimg from '../img/cards-img-2.jpg'
import iconsimg from '../img/05.png'
import iconsimg2 from '../img/Group-2.png'
import lastcard1 from '../img/images last1.jpg'
import lastcard2 from '../img/image last2.avif'
import lastcard3 from '../img/image last 2.jpg'




import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdStopwatch } from "react-icons/io";
import { MdVideoLibrary } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";
import { LuUsers2 } from "react-icons/lu";
import { FaRegFlag } from "react-icons/fa";

function Home() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return ( 
        <Container>
            <div>
                 {/* ==========Container qismi====================== */}
      </div>
       <div md={'100%'} lg={'100%'} className='Blue-conteiner'>
        <div className='left-box'>
        <div className='box-blue'>
            <h1 className='Blue-conteiner-title'>Find the Best Courses and Amazing Mentor</h1>
            <p className='Blue-conteiner-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit<br></br> amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus </p>
            <div className='srch-box'>
          <form action="">
            <input className='srch-input' type="text" name='search' id="srch" placeholder='Search'></input>
            <button className="srch-btn-1"type="submit" ><i className='fa fa-search'></i></button>
            <button className='srch-btn-2'>Submit</button>
          </form>
          </div>
          <ul className='blue-items'>
            <li><i className='icon'><FaRegUserCircle /></i>Life Time Acces</li>
            <li><i className='icon'><IoMdStopwatch /></i>Expert Mentor</li>
            <li><i className='icon'><MdVideoLibrary /></i>100K+ Courses</li>

          </ul>
        </div>
        </div>
        <div className='right-box'>
          <div className='box-img'>
            
          </div>
          <button className='img-btn'>500+<br></br>Total Review
          <i className='card-icon'><br></br>
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
          </i></button>
        </div>
      </div>
      {/* ==================== TREDING CONTAINER */}
      <div className='treding-contener'>
          <h1 className='treding-title'>Trending Courses</h1>
          <div className='tred-btn-box'>
          <button className='tred-btn'>All</button>
          <button className='tred-btn'>Business</button>
          <button className='tred-btn'>Art & Design</button>
          <button className='tred-btn'>Development</button>
          <button className='tred-btn'>Marketing</button>
          </div>
          <div className='card-box'>
            
              <div className='cards'>
                <img src={businesimg}alt='img'></img>
                <p className='card-text'>Interpersonal skills - work better with others!</p>
                 <p className='c-title-2'>Tanah Air Team</p>
                <i>
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <p>(2078)</p>
                </i>
                <br></br>
                <p className='number-2'><strike className="number">$640</strike>$384</p> 
                
              </div>
         
              <div className='cards'>
                <img src={businesimg2} alt='img'></img>
                <p className='card-text'>Interpersonal skills - work better with others!</p>
                <p className='c-title-2'>Tanah Air Team</p>
                <i>
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <p>(2078)</p>
                </i>
                <br></br>
                <p className='number-2'><strike className="number">$640</strike>$384</p>
                
              </div>
            
           
              <div className='cards'>
                <img src={artimg2} alt='img'></img>
                 <p className='card-text'>Interpersonal skills - work better with others!</p>
                <p className='c-title-2'>Tanah Air Team</p>
                <i>
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <p>(2078)</p>
                </i>
                <br></br>
                <p className='number-2'><strike className="number">$640</strike>$384</p> 
                
              </div>
            
              <div className='cards'>
                <img src={artimg} alt='img'></img>
                 <p className='card-text'>Interpersonal skills - work better with others!</p>
                <p className='c-title-2'>Tanah Air Team</p>
                <i>
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <p>(2078)</p>
                </i>
                <br></br>
                <p className='number-2'><strike className="number">$640</strike>$384</p> 
                
              </div>
            
          </div>

          <div className='card-box-2'>
          
            <div className='cards'>
                <img src={ devepimg} alt='img'></img>
                 <p className='card-text'>Interpersonal skills - work better with others!</p>
                <p className='c-title-2'>Tanah Air Team</p>
                <i>
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <p>(2078)</p>
                </i>
                <br></br>
                <p className='number-2'><strike className="number">$640</strike>$384</p> 
                
              </div>
          
            <div className='cards'>
                <img src={devepimg2} alt='img'></img>
                 <p className='card-text'>Interpersonal skills - work better with others!</p>
                <p className='c-title-2'>Tanah Air Team</p>
                <i>
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <p>(2078)</p>
                </i>
                <br></br> 
                <p className='number-2'><strike className="number">$640</strike>$384</p> 
                
              </div>
            
            <div className='cards' >
                <img src={merketimg} alt='img'></img>
                 <p className='card-text'>Interpersonal skills - work better with others!</p>
                <p className='c-title-2'>Tanah Air Team</p>
                <i className='c-icon'>
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <p >(2078)</p>
                </i>
                <br></br>
                <p style={{marginLeft:'30px'}} className='number-2'><strike className="number">$640</strike>$384</p>
                 
              </div>
            
            <div className='cards'>
                <img src={marketimg2} alt='img'></img>
                 <p className='card-text'>Interpersonal skills - work better with others!</p>
                <p className='c-title-2'>Tanah Air Team</p>
                <i>
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <p>(2078)</p>
                </i>
                <br></br>
                <p className='number-2'><strike className="number">$640</strike>
                $384</p> 
                
            </div>
             
           
          </div>
              <Link to='/courses'>
                <button className='big-btn'>More Courses</button>
              </Link>
           
            {/* ================ TOP CATEGORY QISMI ============ */}
             <div className='top-container'>
            <h1>Top Category</h1>
            <div className='box1'>
              <div className='img-card'>
                <img src={artimg }></img>
                <p>Art & Design</p>
              </div>
              <div className='img-card'>
                <img src={topimg2 }></img>
                <p>Businedivs</p>
              </div>
              <div className='img-card'>
                <img src={topimg3}></img>
                <p>Copy Writing</p>
              </div>
              <div md={6} className='img-card'>
                <img src={topimg8}></img>
                <p>Marketing</p>
              </div>
            </div>
            <div className='box2'>
              <div  className='img-card'>
                <img src={topimg1}></img>
                <p>Programming</p>
              </div>
              <div className='img-card'>
                    <img src={topimg5}></img>
                  <p>Photography</p>
              </div>
              <div className='img-card'>
                <img src={topimg6}></img>
                <p>Videography</p>
              </div>
              <div className='img-card'>
                <img src={topimg7}></img>
                <p>Personal Development</p>

              </div>
            </div>
              <div className='Icon-box'>
                <ul className='top-icons'>
                  <li><i className='top-icon'><MdVideoLibrary style={{fontSize:'36px'}} /></i><br></br>10.000+<br></br> Courses</li>
                  <li><i className='top-icon'><LuUsers2 style={{fontSize:'36px'}} /></i><br></br>50.500 <br></br> Active Students</li>
                  <li><i className='top-icon'><IoMdStopwatch style={{fontSize:'36px'}} /></i><br></br>1000+ <br></br> Active Mentor</li>
                  <li><i className='top-icon'><FaRegFlag style={{fontSize:'36px'}}  /></i><br></br>180<br></br> Countries</li>
                </ul> 
              </div>
          </div>
          <div className='mentor-container'>
            <div className='mentor-left'>
              <img src={mentorimg}></img>
            </div>
            <div className='mentor-right'>
                <h1>Become an Mentor</h1>
                <br></br>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in orci, nunc amet libero. Nam scelerisque vestibulum bibendum a turpis. Ante feugiat lectus massa, odio amet. Auctor sit mattis non id proin elit placerat. Lectus morbi amet et aliquam magna mauris.</p>
                <br></br>
                <br></br>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in orci, nunc amet libero. Nam scelerisque vestibulum bibendum a turpis. Ante feugiat lectus massa, odio amet. Auctor sit mattis non id proin elit placerat. Lectus morbi amet et aliquam magna mauris.</p>
                <Link to='/detail'>
                <button>Start Teaching</button>
                </Link>
            </div>
          </div>
          <Carousel responsive={responsive}>
            <div class="carusel-card" style={{width:"810px"}}>
            <img className="Img "  src="https://thumbs.dreamstime.com/b/study-too-much-isolated-cartoon-vector-illustrations-nerd-boy-studying-hard-diversity-books-around-educational-process-267330445.jpg" class="card-img-top" alt="..."/>
            <div class="card-body" style={{textAlign:'start', marginLeft:'20px'}} >
                <p style={{color:'#1C3554',fontFamily:'Montserrat, sans-serif',marginTop:'50px'}} class="card-text">After studying here I gained new knowledge and insights. The mentor was very friendly and guided me to get the knowledge I wanted. Thank you!</p>
                <h5 style={{marginTop:'20px'}} class="card-title">Card title</h5>
                <br></br>
                <p style={{color:'#1C3554', fontFamily:'Montserrat, sans-serif'}}>Yang punya Surabaya nanti kapan - kapan tapi</p>
                
            </div>
            </div>
            <div class="carusel-card" style={{width:"810px"}}>
            <img className="Img "  src="https://static.vecteezy.com/system/resources/thumbnails/008/515/944/small/students-studying-at-home-vector.jpg" class="card-img-top" alt="..."/>
            <div class="card-body" style={{textAlign:'start', marginLeft:'20px'}} >
                <p style={{color:'#1C3554',fontFamily:'Montserrat, sans-serif'}} class="card-text">After studying here I gained new knowledge and insights. The mentor was very friendly and guided me to get the knowledge I wanted. Thank you!</p>
                <h5 style={{marginTop:'20px'}} class="card-title">Card title</h5>
                <br></br>
                <p style={{color:'#1C3554', fontFamily:'Montserrat, sans-serif'}}>Yang punya Surabaya nanti kapan - kapan tapi</p>
                
            </div>
            </div>
            <div class="carusel-card" style={{width:"810px"}}>
            <img className="Img "  src="https://static.vecteezy.com/system/resources/thumbnails/006/584/649/small/illustration-graphic-cartoon-character-of-home-study-free-vector.jpg" class="card-img-top" alt="..."/>
            <div class="card-body" style={{textAlign:'start', marginLeft:'20px'}} >
                <p style={{color:'#1C3554',fontFamily:'Montserrat, sans-serif'}} class="card-text">After studying here I gained new knowledge and insights. The mentor was very friendly and guided me to get the knowledge I wanted. Thank you!</p>
                <h5 style={{marginTop:'20px'}} class="card-title">Card title</h5>
                <br></br>
                <p style={{color:'#1C3554', fontFamily:'Montserrat, sans-serif'}}>Yang punya Surabaya nanti kapan - kapan tapi</p>
                
            </div>
            </div>
            <div class="carusel-card" style={{width:"810px"}}>
            <img className="Img "  src="https://thumbs.dreamstime.com/b/exhausted-student-sprawls-over-heap-books-embracing-sleep-amidst-knowledge-cartoon-vector-illustration-fatigue-etched-301215373.jpg" class="card-img-top" alt="..."/>
            <div class="card-body" style={{textAlign:'start', marginLeft:'20px'}} >
                <p style={{color:'#1C3554',fontFamily:'Montserrat, sans-serif'}} class="card-text">After studying here I gained new knowledge and insights. The mentor was very friendly and guided me to get the knowledge I wanted. Thank you!</p>
                <h5 style={{marginTop:'20px'}} class="card-title">Card title</h5>
                <br></br>
                <p style={{color:'#1C3554', fontFamily:'Montserrat, sans-serif'}}>Yang punya Surabaya nanti kapan - kapan tapi</p>
                
            </div>
            </div>
            <div class="carusel-card" style={{width:"810px"}}>
            <img className="Img "  src="https://thumbs.dreamstime.com/b/study-late-night-isolated-cartoon-vector-illustrations-tired-boy-studying-hardly-evening-educational-process-preparing-253365495.jpg" class="card-img-top" alt="..."/>
            <div class="card-body" style={{textAlign:'start', marginLeft:'20px', marginTop:'50px'}} >
                <p style={{color:'#1C3554',fontFamily:'Montserrat, sans-serif'}} class="card-text">After studying here I gained new knowledge and insights. The mentor was very friendly and guided me to get the knowledge I wanted. Thank you!</p>
                <h5 style={{marginTop:'20px'}} class="card-title">Card title</h5>
                <br></br>
                <p style={{color:'#1C3554', fontFamily:'Montserrat, sans-serif'}}>Yang punya Surabaya nanti kapan - kapan tapi</p>
                
            </div>
            </div>
        </Carousel>
        <div>
          <h1 className='Icons-container'>Trusted by Company</h1>
            <div className='Iconbox1'>
              <div><img   src={iconsimg}></img> </div>
             < div><img src={iconsimg2}></img></div>
              <div> <img src={logo}></img></div>
              <div><img src={iconsimg}></img></div>
            </div>  
            <div className='Iconbox2'>
            <img src={iconsimg2}></img>
            <img className='trust-img' src={logo}></img>
            </div>
        </div>
        <h1 style={{marginTop:'70px', marginLeft:'20px'}}>The Latest Blog</h1>
        <div className='last-cards'>
         
            <div className='cards'>
                <img src={lastcard1} alt='img'></img>
                <p className='last-card-text'>3, Mei 2021  3 min read</p>
                <h2>10 graphic design trends to get you inspired in 2021</h2>
                <p className='last-card-title-2'>Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod.</p>
                <a href='#' target='blank'>Read More</a>
            </div>
            <div className='cards'>
                <img src={lastcard2} alt='img'></img>
                <p className='last-card-text'>3, Mei 2021  3 min read</p>
                <h2>10 graphic design trends to get you inspired in 2021</h2>
                <p className='last-card-title-2'>Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod.</p>
                <a href='#' target='blank'>Read More</a>
            </div>
            <div className='cards'>
                <img src={lastcard3} alt='img'></img>
                <p className='last-card-text'>3, Mei 2021  3 min read</p>
                <h2>10 graphic design trends to get you inspired in 2021</h2>
                <p className='last-card-title-2'>Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod.</p>
                <a href='#' target='blank'>Read More</a>
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
            </div>
        </Container>
     );
}

export default Home;