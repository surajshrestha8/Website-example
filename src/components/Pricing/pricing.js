import './pricing.css';
import PricingList from './pricinglist';
const Pricing = () =>{
    
    
    return(
        
        <div className="pricing">
    
        <h6>OUR PRICING</h6>
        <h3>Pricing and packages</h3>
       
        <div className="pricecardlist">
        {PricingList.map(pricelist=>{
            return(
                <div className="pricecard">
                <h6>{pricelist.typeofplan}</h6>
                
                <h2>$ {pricelist.price}</h2>
                
                <h6>
                    {pricelist.content}
               
                </h6>
                
                
                <button className ="buttoncard">
                    Get Started
                </button>
            </div>

            )
        })}
     
       
        </div>
        </div>
    )
}



export default Pricing;