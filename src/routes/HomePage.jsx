import React from 'react';
import Navbar from '../Nav-bar';
import Footer from '../Footer';
import CardList from '../CardList';
import CardList2 from '../CardList2';

function HomePage(){
    return (
        <div>
          <Navbar 
          text ="DevLink Marketplace"
          text4 ="Find DEV"
          text3 ="Find Jobs"
          text2 ="Login"
          text1 ="Create Account"
          />
    
          <img src="image.png" alt="image" style={{ width: '100%' }} className="image" />
                <h1>Featured Freelancers</h1>
    
          <CardList/>
    
          <button className="button">See more</button>
    
          <h1>Featured Customers</h1>
    
          <CardList2/>
    
          <button className="button">See all customers</button><br></br>
          
          <form action="/" method="post">
            <div className="container">
              <h2>SIGN UP FOR OUR DAILY INSIDER</h2>
              <input type="text" placeholder="Enter your email" name="email" required />
              <input type="submit" value="Subscribe" />
            </div>
          </form><br></br>
          <Footer 
            text ="For Dev"
            text1 ="For Clients"
            text2 ="Stay connected"
            text3 ="DEVLink"
          />
    
        </div>
             
      );
}
export default HomePage;