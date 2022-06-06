import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./footer.scss"

const Footer = () => {
    return (
      <footer className='footer'>
      
      <FacebookRoundedIcon className="icon"/> <InstagramIcon className="icon"/> <YouTubeIcon className="icon"/>
          
          <br />
          <br />
          <div className='mainlist'>
              <li>
                  <span>Audio and Subtitles</span>
              </li>
              <li>
                  <span>Audio Description</span>
              </li>
              <li>
                  <span>Help Center</span>
              </li>
              <li>
                  <span>Gift Card</span>
              </li>
              <li>
                  <span>Media Center</span>
              </li>
              <li>
                  <span>Investor Relations</span>
              </li>
              <li>
                  <span>Jobs</span>
              </li>
              <li>
                  <span>Terms of Use</span>
              </li>
              <li>
                 <span>Privacy</span>
              </li>
              <li>
                  <span>Legal Notices</span>
              </li>
              <li>
                  <span>Cookie Preferences</span>
              </li>
              <li>
                  <span>Corporate Information</span>
              </li>
              <li>
                 <span>Contact Us</span>
              </li>
          </div>
              <br />
              <p>Codeflix Team 3</p>
      </footer>
    )
}

export default Footer;