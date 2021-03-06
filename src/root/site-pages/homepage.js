import React from 'react';
import { Link } from 'react-router-dom';

class Homepage extends React.Component {
  render() {
    return (
      <div className='homepage-text'>
        <h1>Welcome!</h1>
        <section>
          <h2>About Us</h2>
          <p>FIFO pet adoption centers mission is to ensure pets get adopted to healthy
              happy homes in the order that they were brought to us. We feel it is very important that 
              no animal be without a loving home for an extended period of time. So we maintain the First in First out
              rule when it comes to the adoption process.
          </p>
          <h3>How It Works:</h3>
          <p>When you are ready to adopt go to the 'Adopt Now' page and add your name to the line.
              Once you are at the front of the line you are given the option of adopting a 
              dog or a cat. We provide you with a picture, name, breed, age, description, and a brief backstory
              about how the furry little fellow ended up with us.
          </p>
        </section>
      </div>
    );
  }
}

export default Homepage;
