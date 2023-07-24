import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import "./Footer.css";
const Footer = () =>{
 const Scto =() => {
        window.scrollTo(0,0);
    };
    return(
      <>

        <div className="Footer">
            <a onClick={Scto}>
       <div className="FooterBottomToTop">
     <ArrowDropUpIcon/>
       </div>
       </a>
         <div className="FooterVerRow">
            <div className="FooterVerCol">
               <div className="FooterVerColHead">
                 Get To Know Us
                </div> 
                <ul>
                    <li>About</li>
                    <li>Service</li>
                    <li>Carrer</li>
                    <li>Legal</li>
                    <li>Amazon Care</li>
                </ul>
            </div>
            
            <div className="FooterVerCol">
               <div className="FooterVerColHead">
                 Connect With Us
                </div> 
                <ul>
                    <li>Meta</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>Github</li>
                    
                </ul>
            </div>
            <div className="FooterVerCol">
               <div className="FooterVerColHead">
                 Make Money
                </div> 
                <ul>
                    <li>Amazon Pay</li>
                    <li>Become a Affiliator</li>
                    <li>Sell On Amzon</li>
                    <li>Refer</li>
                    
                </ul>
            </div>
            <hr />
            <div className="FooterLast">
                <span className="FooterMess">
                    Amazon Clone &copy; Demo
                </span>
            </div>
         </div>
        </div>
    
 
     </>
    );
 };

 export default Footer;