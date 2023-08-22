import {GrYoutube} from 'react-icons/gr'
import {PiFanFill} from 'react-icons/pi'
import {FaBars} from 'react-icons/fa'
import './App.css'

function App() {
  return (
    <>
    <header>
      <nav className='header-nav'>
        <ul>
          <li><PiFanFill/>nura</li>
          <li>Products</li>
          <li>Subcription</li>
          <li>Why Nura?</li>
          <li>Support</li>
        </ul>  
        <p>Cart(0)</p>    
      </nav>
      <nav className='mobile'>
      <div className='bar'><FaBars/></div>
        <ul>
          <li><PiFanFill/>nura</li>
          <li>Products</li>
          <li>Subcription</li>
          <li>Why Nura?</li>
          <li>Support</li>
        </ul> 
        <p>Cart(0)</p>
      </nav> 
      <div className='header-text'>
      <h3>our biggest sale now live</h3>
      <h1>Black Friday Starts Now!</h1>
      <div className='btn'>
      <button>shop sale now </button>
      </div>
      </div>    
    </header> 
    <div className='product'>
      <div className='product-text'>
      <h2>Featued discounts</h2> 
      <a href=''>View all discount</a> 
      </div>
           
      <div className='product-image'>
        <figure>
          <img src='images/nuraphone.png'/>
          <figcaption>
            Nuraphone  <br/> <strike>$399</strike> $299.25<br/>
            <button>shop now</button>
          </figcaption>
        </figure>

        <figure>
        <img src='images/nuratrue.png'/>
          <figcaption>
            NuraTrue <br/><strike>$199.99</strike> $139.99<br/>
            <button>shop now</button>
          </figcaption>
        </figure>

        <figure>
        <img src='images/nurabuds.png'/>
          <figcaption>
            NuraBuds 2<br/><strike>$199</strike> $89.25<br/>
            <button>shop now</button>
          </figcaption>
        </figure>

        <figure>
        <img src='images/nurabluetooth.png'/>
          <figcaption>
            Nura Bluetooth&reg;5.3<br/>Audio Transmitter<br/>
            <strike>$399</strike> $299.25<br/>
            <button>shop now</button>
          </figcaption>
        </figure>
      </div>
    </div> 

    <div className='nuratrue'>
      <div className='nuratrue-image'>
      <img src="images/nuradetails.png" alt="" />
      </div>
        <div className='nuradetails'>
          <h2>For your<br/>ears only.
            </h2>
          <p>Normal hearing varies significantly<br/>
             from person to person, and these variations<br/> 
             make a <a>big difference</a> to how you <br/>
             experience music. 
             </p>
             <br/>
          <p>      
             The first time you use Nura earbuds, <br/>
             they <a>measure your hearing</a> to create <br/>
             your personalised hearing profile.
          </p>
        </div>
    </div> 

    <div className='nurabackup'>
      <div className='nurabackup-text'>
      <h2>Play from <br/>any device</h2>
      <p>Your hearing profile is <a>stored on the<br/>earbuds</a>,
             ,and is applied to whatever you<br/>
             listen to,<a>on any device</a>.
      </p>
      <br/>
      <p>
             Use the Nura app to create a hearing <br/>
             profile, configure touch buttons, adjust <br/>
             immersion mode and more.
      </p>
      </div>
    </div>

    <div className='subscription'>
      <h3>A sound subscription</h3>
      <p>Experience personalised sound across our devices on a <br/>
        low monthly fee with NuraNow. Cancel anytime.
      </p>
      <button>discover nuranow</button>
    </div>
    <div className='youtube'>
      <GrYoutube size={200} color='#b5b2b2'/>
    </div>
    <div className='featured'>
      <p>as featured in</p>
      <div className='featured-image'>
      <img src='images/logo.png'/>
      <img src='images/Logo2.png '/>
      <img src='images/Logo3.png'/>
      <img src='images/logo 4.png'/>
      <img src='images/logo 5.png'/>
      <img src='images/logo 6.png'/>
      <img src='images/logo 8.png'/>
      <img src='images/logo 7.png'/>
      <img src='images/logo 9.png'/>
      <img src='images/logo 10.png'/>
      <img src='images/logo 11.png'/>
      <img src='images/logo 12.png'/>      
      <img src='images/Logo13.png'/>
      <img src='images/Logo14.png'/>
      <img src='images/Logo15.png'/>
      <img src='images/Logo16.png'/>
      <img src='images/Logo17.png'/>
      <img src='images/Logo18.png'/>
      <img src='images/Logo19.png'/>
      <img src='images/Logo20.png'/>
      <img src='images/Logo21.png'/>
      <img src='images/Logo22.png'/>
      </div>
      
    </div>
    <footer>
      <div className='footer'>
      <div>
      <h5><PiFanFill/>nura</h5>
      <p>Nura designs headphones<br/>
         tuned to you. Bringing you<br/>
          closer to music with <br/>
        personalised sound.</p>
      </div>
      <table>
        <ul>
          <li className='head'>Shop</li>
          <li>NuraTrue Pro</li>
          <li>Audio Transmitter</li>
          <li>NuraTrue</li>
          <li>NuraBuds</li>
          <li>Nuraphone</li>
          <li>NuraLoop</li>
          <li>Accessories</li>
          <li>Subcription</li>
        </ul>

        <ul>
        <li className='head'>info</li>
        <li>Why Nura?</li>
        <li>Shipping</li>
        <li>Returns</li>
        <li>Warranty</li>
        <li>Patents</li>
        </ul>

        <ul>
        <li className='head'>support</li>
        <li>Help Centre</li>
        <li>Contact Us</li>
        </ul>

        <ul>
        <li className='head'>socials</li>
        <li>Instagram</li>
        <li>Facebook</li>
        <li>YouTube</li>
        <li>Tidal</li>
        <li>Twitter</li>
        <li>Discord</li>
        </ul>
      </table>
      </div> 
      <div className='copyright'>
        <p>Copyright © 2022 Nura Operations Pty Ltd. All rights reserved.</p>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Legal</li>
        </ul>
      </div>
    </footer>
    </>
  )
}

export default App
