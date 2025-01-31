import React from 'react'
import FacebookIcon from '../../assets/facebook.png';
import XIcon from '../../assets/x.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';

import './contact.css';
const Contact = () => {
  return (
    <section className="contactPage">
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm'> 
                <input type="text" placeholder='Your Name' className="name"/>
                <input type="email" placeholder='Your Email' className="email"/>
                <textarea name="message" rows="5" placeholder='Your Message' className="msg"></textarea>
                <button type='submit' value='Send' className="submitBtn">Submit</button>
                <div className="links">
                    <img src={FacebookIcon} alt="Facebook" className="link" />
                    <img src={XIcon} alt="X" className="link" />
                    <img src={YoutubeIcon} alt="Youtube" className="link" />
                    <img src={InstagramIcon} alt="Instagram" className="link" />





                </div>
            
            </form>
        </div>
    </section>
  )
}

export default Contact
