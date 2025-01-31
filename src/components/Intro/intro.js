import React from 'react';
import './intro.css';
import bg from '../../assets/bg.png';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';
export const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Ganesh</span></span>
            <p className="introPara"> Fourth-year Computer Science student at KCGCT with a strong focus on programming and web
 development. <br></br>
 Experienced in creating websites and developing software solutions. Dedicated to continuous learning and
 <br></br>improving problem-solving skills. </p>
            <Link><button className='btn'><img src={btnImg} alt='Hire me' className='btnImg'></img>Hire me</button></Link>
        </div>
        <img src={bg} alt='Profile' className='bg' /> 


    </section>
  )
}

export default Intro;
