import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-container'>
            <div className='flex flex-col justify-center items-center gap-5 md:items-start'>
                <h1>Made with ❤️</h1>
            </div>
            <div className='socials'>
                {socialImgs.map((img) => (
                    <a className='icon' target='_blank' href={img.url} key={img.url}>   
                        <img src={img.imgPath} />
                    </a>
                ))}
            </div>
            <div className='flex flex-col justify-center'>
                <p className='text-center items-center md:text-end'>
                    &copy;{new Date().getFullYear()}  | ARVIND😈 | All rights reserved.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer