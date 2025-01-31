import React from 'react';
import './skills.css';
import software from '../../assets/software.png';
import website from '../../assets/website-design.png';
import artificial from '../../assets/ai.png';

const Skills = () => {
  return (
    <section id="skills">
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I specialize in developing innovative solutions across Artificial Intelligence, Website Development, and Software Engineering. From creating intelligent machine learning models and designing responsive websites to building scalable software applications, I leverage technologies like Python, JavaScript, React, Java, and AWS to deliver efficient, user-centric solutions. My expertise extends to database management, cloud services, and full-stack development, ensuring seamless integration and performance in all my projects.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={software} alt='software' className=''></img>
                <div className='skillBarText'>
                    <h1>Software Development</h1>
                    <p>Expert in building efficient and scalable software using C, C++, Java, and Python. Skilled in object-oriented programming, software architecture design, and cross-platform development.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={website} alt='website' className=''></img>
                <div className='skillBarText'>
                    <h1>Website Development</h1>
                    <p>Designed and built responsive and interactive websites using HTML, CSS, JavaScript, and React. Proficient in developing full-stack web applications with PHP and databases like SQL and MongoDB.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={artificial} alt='artificial' className=''></img>
                <div className='skillBarText'>
                    <h1>Artificial Intelligence</h1>
                    <p>Developed AI solutions focusing on Machine Learning, Deep Learning, and Natural Language Processing (NLP). Experienced in building intelligent models for predictive/sentiment analysis. </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;