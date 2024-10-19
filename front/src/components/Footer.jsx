import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

export default function Footer() {
  return (
    <>
      <section className='footer'>
        <div className='fexone'>
          <h2>Campany</h2>
          <ul>
            <li>About as</li>
            <li>Our services</li>
            <li>Privacy policy</li>
            <li>Affiilate Program</li>
          </ul>
        </div>
        <div className='flextoo'>
          <h2>Get Help</h2>
          <ul>
            <li>FAQ</li>
            <li>shipping</li>
            <li>Reteuns</li>
            <li>Order Status</li>
            <li>Payment Options</li>
          </ul>
        </div>
        <div className='flexthre'>
          <h2>Online Shop</h2>
          <ul>
            <li>Watch</li>
            <li>Blog</li>
            <li>Shoes</li>
            <li>Dress</li>
          </ul>
        </div>
        <div className='flexfive'>
          <h2>Follow Us</h2>
          <a className='sosialmedia' href=""><FacebookIcon /></a>
          <a className='sosialmedia' href=""><YouTubeIcon /></a>
          <a className='sosialmedia' href=""><InstagramIcon /></a>
          <a className='sosialmedia' href=""><XIcon /></a>
        </div>


      </section>

    </>
  )
}
