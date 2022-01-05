import { ArrowBarRight, Facebook, Instagram, Twitter } from 'react-bootstrap-icons';
import './footer.css';
import footerexplore from '../../CONSTANTS/footerexplore';
import quickLinks from '../../CONSTANTS/quicklinks';

const Footer  = ()=>{
    return (
        <div className="footer">
            <div className='footerinfo'>
                <h3 style={{fontWeight:'bolder'}}>ACADEMIA</h3>
                <h6>ONLINE EDUCATION AND LEARNING</h6>
                <p>A small river named Duden flows by their place<br/> and supplies it with the necessary regelialia.</p>
                <Facebook className='social'></Facebook>
                <Instagram className='social'></Instagram>
                <Twitter className='social'></Twitter>

            </div>
            <div className='footexplore'>
                <h5>Explore</h5>
                {footerexplore.map(footerexplore=>{
                    return(
                        <h6 className="listitems"><ArrowBarRight></ArrowBarRight>{footerexplore.content}</h6>

                    )
                    
                })}
                
            </div>
            <div className=''>
                <h5>Quick links</h5>
                {quickLinks.map(quicklink=>{
                    return(
                        <h6 className='listitems'>{quicklink.content}</h6>
                    )
                })}
            </div>
          
        </div>
    )
}


export default Footer;