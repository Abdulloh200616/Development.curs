import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import logo1 from '../img/Logo (1).png'
import businesimg from '../img/cards-img-2.jpg'
import businessimg2 from '../img/top-img-2.jpg'
import artimg2 from '../img/top-img-5.webp'
import artimg from '../img/top-img-1.jpg'
import devepimg from '../img/cards-img-3.jpg'
import devepimg2 from '../img/top-img-8.jpg'
import merketimg from '../img/top-img-4.jpg'
import marketimg2 from '../img/cards-img.jpg'
import cursimg1 from '../img/curs img 1.webp'
import cursimg2 from '../img/curs img 2.png'
import cursimg3 from '../img/curs img 4.png'
import cursimg4 from '../img/curs img.jpg'
import cursimg5 from '../img/cards-img-8.jpg'
import cursimg6 from '../img/top-img-8.jpg'
import cursimg7 from '../img/curs img 6.jpg'
import cursimg8 from '../img/curs img 7.jpg'








import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";
import { MdOutlineStar } from "react-icons/md";


function Courses() {
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
        <div className="row">
            <h1 className="curs-ttile">Programming Courses</h1>
            <p className="curs-text1">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus </p>
            <p className="curs-text2">Most Popular Development Courses</p>
            <Carousel responsive={responsive}>
            <div className='cards'>
                <img src={ devepimg} alt='img'></img>
                <p style={{textAlign:'left'}} className='card-text'>Interpersonal skills - work better with others!</p>
                <p style={{textAlign:'left'}} className='c-title-2'>Tanah Air Team</p>
                <i >
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <p>(2078)</p>
                </i>
                <br></br>
                <p style={{textAlign:'left'}} className='number-2'><strike className="number">$640</strike>$384</p>
                
              </div>
              <div className='cards'>
                <img src={businesimg} alt='img'></img>
                 <p style={{textAlign:'left'}} className='card-text'>Interpersonal skills - work better with others!</p>
                <p  style={{textAlign:'left'}} className='c-title-2'>Tanah Air Team</p>
                <i>
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <p>(2078)</p>
                </i>
                <br></br>
                <p style={{textAlign:'left'}} className='number-2'><strike className="number">$640</strike>$384</p>
                
              </div>
              <div className='cards'>
                <img src={businessimg2} alt='img'></img>
                <p style={{textAlign:'left'}} className='card-text'>Interpersonal skills - work better with others!</p>
                <p style={{textAlign:'left'}} className='c-title-2'>Tanah Air Team</p>
                <i>
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <p>(2078)</p>
                </i>
                <br></br>
                <p style={{textAlign:'left'}} className='number-2'><strike className="number">$640</strike>$384</p>
                
              </div>
              <div className='cards'>
                <img src={artimg2} alt='img'></img>
                <p style={{textAlign:'left'}} className='card-text'>Interpersonal skills - work better with others!</p>
                <p style={{textAlign:'left'}} className='c-title-2'>Tanah Air Team</p>
                <i>
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <p>(2078)</p>
                </i>
                <br></br>
                <p style={{textAlign:'left'}} className='number-2'><strike className="number">$640</strike>$384</p>
                
              </div>
              <div className='cards'>
                <img src={artimg} alt='img'></img>
                <p style={{textAlign:'left'}} className='card-text'>Interpersonal skills - work better with others!</p>
                <p style={{textAlign:'left'}} className='c-title-2'>Tanah Air Team</p>
                <i>
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <p>(2078)</p>
                </i>
                <br></br>
                <p style={{textAlign:'left'}} className='number-2'><strike className="number">$640</strike>$384</p>
                
              </div>
              <div className='cards'>
                <img src={devepimg2} alt='img'></img>
                <p style={{textAlign:'left'}} className='card-text'>Interpersonal skills - work better with others!</p>
                <p style={{textAlign:'left'}} className='c-title-2'>Tanah Air Team</p>
                <i>
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <p>(2078)</p>
                </i>
                <br></br>
                <p style={{textAlign:'left'}} className='number-2'><strike className="number">$640</strike>$384</p>
                
              </div>
              <div className='cards'>
                <img src={merketimg} alt='img'></img>
                <p style={{textAlign:'left'}} className='card-text'>Interpersonal skills - work better with others!</p>
                <p style={{textAlign:'left'}} className='c-title-2'>Tanah Air Team</p>
                <i>
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <p>(2078)</p>
                </i>
                <br></br>
                <p style={{textAlign:'left'}} className='number-2'><strike className="number">$640</strike>$384</p>
                
              </div>
            </Carousel>


            <div className="Topic-container">
                <div>
                    <h1>Programming Topics</h1>                   
                    <Link to='/detail'>
                      <button >See All</button>
                    </Link>
                    <div className='box1'>
                    <div className='img-card'>
                      <img src={ cursimg1}></img>
                      <p style={{color:'black'}}>Python</p>
                    </div>
                    <div className='img-card'>
                      <img src={ cursimg2}></img>
                      <p style={{color:'black'}}>Javascript</p>
                    </div>
                    <div className='img-card'>
                      <img src={cursimg3}></img>
                      <p style={{color:'black'}}>CSS</p>
                    </div>
                    <div md={6} className='img-card'>
                      <img src={cursimg3}></img>
                      <p style={{color:'black'}}>C#</p>
                    </div>
                  </div>
                  <div className='box2'>
                  <div className='img-card'>
                      <img src={cursimg5}></img>
                      <p style={{color:'white'}}>Web Development</p>
                    </div>
                    <div className='img-card'>
                      <img src={cursimg6}></img>
                      <p style={{color:'black'}}>Data Science</p>
                    </div>
                    <div className='img-card'>
                      <img src={cursimg7}></img>
                      <p style={{color:'black'}}>Java</p>
                    </div>
                    <div md={6} className='img-card'>
                      <img src={cursimg8}></img>
                      <p style={{color:'black'}}>SQL</p>
                    </div>
                  </div>
                </div>
            </div>
            <div  className="All-curses-cotainer">
              <h1>All Courses</h1>
              
              <div className="col-4 sidebar-box">
              <Sidebar aria-label="Sidebar with multi-level dropdown example">
                <Sidebar.Items>
                  <Sidebar.ItemGroup style={{padding:'20px 10px'}}>
                    <Sidebar.Collapse icon={HiShoppingBag} label="Rayting">
                      <Sidebar.Item href="#">
                      <div class="flex items-center">
                          <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                          <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                          <i className="side-icons" >
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <br></br>
                        <p className="side-text">5(2048)</p>
                        </i>
                      </div>
                       
                        
                      </Sidebar.Item>
                      <Sidebar.Item href="#">
                      <div class="flex items-center">
                          <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                          <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                          <i className="side-icons" >
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <br></br>
                        <p className="side-text">5(2048)</p>
                        </i>
                      </div>
                      
                      </Sidebar.Item>
                      <Sidebar.Item href="#">
                      <div class="flex items-center">
                          <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                          <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                          <i className="side-icons" >
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <br></br>
                        <p className="side-text">5(2048)</p>
                        </i>
                      </div>
                       
                      </Sidebar.Item>
                      <Sidebar.Item href="#">
                      <div class="flex items-center">
                          <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                          <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                          <i className="side-icons" >
                          <MdOutlineStar />
                          <MdOutlineStar />
                          <br></br>
                          <p className="side-text">5(2048)</p>
                          </i>
                        </div>
                        
                      </Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Collapse icon={HiShoppingBag} label="Durations">
                      <Sidebar.Item href="#">
                      <div class="flex items-center">
                          <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                          <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                          <p className="side-text">1-3 Hours(1242)</p>
                      </div>

                      </Sidebar.Item>
                      <Sidebar.Item href="#">
                      <div class="flex items-center">
                          <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                          <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                          <p className="side-text">3-6 Hours(2145)</p>
                      </div>
                      </Sidebar.Item>
                      <Sidebar.Item href="#">
                      <div class="flex items-center">
                          <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                          <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                          <p className="side-text">6-12 Hours(224)</p>
                      </div>
                      </Sidebar.Item>
                      <Sidebar.Item href="#">
                      <div class="flex items-center">
                          <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                          <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                          <p className="side-text">13+ Hours(2049)</p>
                      </div>
                      </Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Collapse icon={HiShoppingBag} label="Categories">
                      <Sidebar.Item href="#">
                      <div class="flex items-center">
                          <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                          <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                          <p className="side-text">Golang(1242)</p>
                      </div>
                      </Sidebar.Item>
                      <Sidebar.Item href="#">
                      <div class="flex items-center">
                          <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                          <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                          <p className="side-text">Java(2145)</p>
                      </div>
                      </Sidebar.Item>
                      <Sidebar.Item href="#">
                      <div class="flex items-center">
                          <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                          <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                          <p className="side-text">Flutter(224)</p>
                      </div>
                      </Sidebar.Item>
                      <Sidebar.Item href="#">
                      <div class="flex items-center">
                          <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                          <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                          <p className="side-text">CSS(2049)</p>
                      </div>
                      </Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Collapse icon={HiShoppingBag} label="Level">
                      <Sidebar.Item href="#">
                      <div class="flex items-center">
                          <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                          <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                          <p className="side-text">Beginner(2049)</p>
                      </div>
                      </Sidebar.Item>
                      <Sidebar.Item href="#">
                      <div class="flex items-center">
                          <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                          <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                          <p className="side-text">Intermediate(2049)</p>
                      </div>
                      </Sidebar.Item>
                      <Sidebar.Item href="#">
                      <div class="flex items-center">
                          <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                          <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                          <p className="side-text">Expert(2049)</p>
                      </div>
                      </Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Collapse icon={HiShoppingBag} label="Language">
                      <Sidebar.Item href="#">
                      <div class="flex items-center">
                          <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                          <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                          <p className="side-text">English(2049)</p>
                      </div>
                      </Sidebar.Item>
                      <Sidebar.Item href="#">
                      <div class="flex items-center">
                          <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                          <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                          <p className="side-text">Espanol(2049)</p>
                      </div>
                      </Sidebar.Item>
                      <Sidebar.Item href="#">
                      <div class="flex items-center">
                          <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                          <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                          <p className="side-text">Meluya(2049)</p>
                      </div>
                      </Sidebar.Item>
                      <Sidebar.Item href="#">
                      <div class="flex items-center">
                          <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                          <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                          <p className="side-text">Bahasa Indonesia(2049)</p>
                      </div>
                      </Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Collapse icon={HiShoppingBag} label="Present">
                      <Sidebar.Item href="#">
                      <div class="flex items-center">
                          <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                          <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                          <i className="side-icons" >
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <br></br>
                        <p className="side-text">5(2048)</p>
                        </i>
                      </div>
                       
                        
                      </Sidebar.Item>
                      <Sidebar.Item href="#">
                      <div class="flex items-center">
                          <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                          <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                          <i className="side-icons" >
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <br></br>
                        <p className="side-text">5(2048)</p>
                        </i>
                      </div>
                      
                      </Sidebar.Item>
                      <Sidebar.Item href="#">
                      <div class="flex items-center">
                          <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                          <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                          <i className="side-icons" >
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <br></br>
                        <p className="side-text">5(2048)</p>
                        </i>
                      </div>
                      </Sidebar.Item>
                      
                    </Sidebar.Collapse>
                    <Sidebar.Collapse icon={HiShoppingBag} label="Featurest">
                      <Sidebar.Item href="#">
                      <div class="flex items-center">
                          <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                          <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                          <i className="side-icons" >
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <br></br>
                        <p className="side-text">5(2048)</p>
                        </i>
                      </div>
                      </Sidebar.Item>
                    </Sidebar.Collapse>
                    
                  
                  
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </Sidebar >
              </div>
              <div className="col-8 allcurs-box-card">
              <div className='allcards'>
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
                <p className='number-2'><strike className="number">$640</strike>$735</p> 
                
              </div>
              <div className='allcards'>
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
                <p className='number-2'><strike className="number">$640</strike>$735</p> 
                
              </div>
              <div className='allcards'>
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
                <p className='number-2'><strike className="number">$640</strike>$735</p> 
                
              </div>
              <div className='allcards'>
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
                <p className='number-2'><strike className="number">$640</strike>$735</p> 
                
              </div>

              </div>
              <div className="col-8 allcurs-box-card2">
              <div className='allcards'>
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
                <p className='number-2'><strike className="number">$640</strike>$735</p> 
                
              </div>
              <div className='allcards'>
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
                <p className='number-2'><strike className="number">$640</strike>$735</p> 
                
              </div>
              <div className='allcards'>
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
                <p className='number-2'><strike className="number">$640</strike>$735</p> 
                
              </div>
              <div className='allcards'>
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
                <p className='number-2'><strike className="number">$640</strike>$735</p> 
                
              </div>

              </div>
              <div className="col-8 allcurs-box-card3">
              <div className='allcards'>
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
                <p className='number-2'><strike className="number">$640</strike>$735</p> 
                
              </div>
              <div className='allcards'>
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
                <p className='number-2'><strike className="number">$640</strike>$735</p> 
                
              </div>
              <div className='allcards'>
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
                <p className='number-2'><strike className="number">$640</strike>$735</p> 
                
              </div>
              <div className='allcards'>
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
                <p className='number-2'><strike className="number">$640</strike>$735</p> 
                
              </div>

              </div>
              <div className="col-8 allcurs-box-card4">
              <div className='allcards'>
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
                <p className='number-2'><strike className="number">$640</strike>$735</p> 
                
              </div>
              <div className='allcards'>
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
                <p className='number-2'><strike className="number">$640</strike>$735</p> 
                
              </div>
              <div className='allcards'>
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
                <p className='number-2'><strike className="number">$640</strike>$735</p> 
                
              </div>
              <div className='allcards'>
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
                <p className='number-2'><strike className="number">$640</strike>$735</p> 
                
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


        </div>
       </Container>
     );
}

export default Courses;