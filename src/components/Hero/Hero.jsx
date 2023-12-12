import React from 'react'
import './Hero.css'
import chrome from '../assets/chromegin750ml.jpeg'
import best from '../assets/bestgin750ml.jpeg'
import gilbeys from '../assets/gilbeysgin750ml.jpeg'
import ko from '../assets/ko750ml.jpeg'

const Hero = () => {
 return (
    <div className='hero'>
        <div className='hero-left'>
            <h2 className='animated-text'>BEST SELLERS</h2>
            <div className='product-card'>
                <img src={chrome} alt='chrome gin' />
                <h3>Chrome Gin</h3>
                <p>Price: Ksh 750</p>
            </div>
            <div className='product-card'>
                <img src={best} alt='best gin' />
                <h3>Best Gin</h3>
                <p>Price: Ksh 850</p>
            </div>
            <div className='product-card'>
                <img src={gilbeys} alt='gilbeys gin' />
                <h3>Gilbeys Gin</h3>
                <p>Price: Ksh 1350</p>
            </div>
            <div className='product-card'>
                <img src={ko} alt='ko gin' />
                <h3>KO Gin</h3>
                <p>Price: Ksh 2500</p>
            </div>
        </div>
        <div className='hero-right'>
        </div>
    </div>
    
 )
}

export default Hero