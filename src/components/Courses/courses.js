import {Motherboard, Snapchat} from 'react-bootstrap-icons';
import {Button} from 'react-bootstrap';

import './courses.css';


const Course =() =>{ 
    return(
        <div className='maincoursescontainer'>
            <h4 style={{color:'green'}}>OUR COURSES</h4>
            <h1>Explore our popular online courses</h1>
            <div className='hellocourse'>
        <div className="courseComponent">
            <div className='courseInfo'>
            <Snapchat className='info'></Snapchat>
            <h2 className='infocontent'>Learn react fundamentals</h2>
            </div>
            <div style={{paddingTop:'20px'}}>
                <h6 className='moneyinfo'>$100 All Course/$15 per month</h6>
                <br/>
                <Button variant='outline-success' className='buttonitem'>Enroll Now</Button>
            </div>
        
        </div>

        <div className="courseComponent">
            <div className='courseInfo'>
            <Snapchat className='info'></Snapchat>
            <h2 className='infocontent'>Learn react fundamentals</h2>
            </div>
            <div style={{paddingTop:'20px'}}>
                <h6 className='moneyinfo'>$100 All Course/$15 per month</h6>
                <br/>
                <Button variant='outline-success' className='buttonitem'>Enroll Now</Button>
            </div>
        </div>
        <div className="courseComponent">
            <div className='courseInfo'>
            <Snapchat className='info'></Snapchat>
            <h2 className='infocontent'>Learn react fundamentals</h2>
            </div>
            <div style={{paddingTop:'20px'}}>
                <h6 className='moneyinfo'>$100 All Course/$15 per month</h6>
                <br/>
                <Button variant='outline-success' className='buttonitem'>Enroll Now</Button>
            </div>
        </div>
     
        </div>
        <div>
        <h4 style={{color:'green',marginTop:'50px'}}> COURSES</h4>
            <h1>Browse our online courses</h1>
            <div className='cards'>
            <div className='coursescard'>
                
                <h1><Motherboard className='info'></Motherboard></h1>
                <h4 className='infocontent' style={{textAlign:'center'}}>UI/UX Design Courses</h4>
                
            </div>
            <div className='coursescard'>
                
                <h1><Motherboard className='info'></Motherboard></h1>
                <h4 className='infocontent' style={{textAlign:'center'}}>UI/UX Design Courses</h4>
                
            </div>
            <div className='coursescard'>
                
                <h1><Motherboard className='info'></Motherboard></h1>
                <h4 className='infocontent' style={{textAlign:'center'}}>UI/UX Design Courses</h4>
                
            </div>
            <div className='coursescard'>
                
                <h1><Motherboard className='info'></Motherboard></h1>
                <h4 className='infocontent' style={{textAlign:'center'}}>UI/UX Design Courses</h4>
                
            </div>
            <div className='coursescard'>
                
                <h1><Motherboard className='info'></Motherboard></h1>
                <h4 className='infocontent' style={{textAlign:'center'}}>UI/UX Design Courses</h4>
                
            </div>
            <div className='coursescard'>
                
                <h1><Motherboard className='info'></Motherboard></h1>
                <h4 className='infocontent' style={{textAlign:'center'}}>UI/UX Design Courses</h4>
                
            </div>
            <div className='coursescard'>
                
                <h1><Motherboard className='info'></Motherboard></h1>
                <h4 className='infocontent' style={{textAlign:'center'}}>UI/UX Design Courses</h4>
                
            </div>
            <div className='coursescard'>
                
                <h1><Motherboard className='info'></Motherboard></h1>
                <h4 className='infocontent' style={{textAlign:'center'}}>UI/UX Design Courses</h4>
                
            </div>
            <div className='coursescard'>
                
                <h1><Motherboard className='info'></Motherboard></h1>
                <h4 className='infocontent' style={{textAlign:'center'}}>UI/UX Design Courses</h4>
                
            </div>
            <div className='coursescard'>
                
                <h1><Motherboard className='info'></Motherboard></h1>
                <h4 className='infocontent' style={{textAlign:'center'}}>UI/UX Design Courses</h4>
                
            </div>
            <div className='coursescard'>
                
                <h1><Motherboard className='info'></Motherboard></h1>
                <h4 className='infocontent' style={{textAlign:'center'}}>UI/UX Design Courses</h4>
                
            </div>
            <div className='coursescard'>
                
                <h1><Motherboard className='info'></Motherboard></h1>
                <h4 className='infocontent' style={{textAlign:'center'}}>UI/UX Design Courses</h4>
                
            </div>

            </div>
            <h4 style={{color:'green',marginTop:'50px'}}> TESTIMONIAL</h4>
            <h1 style={{fontWeight:'bolder'}}>Our Successful Students</h1>

        </div>
        </div>
    )
}



export default Course;