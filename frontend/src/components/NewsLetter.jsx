import React, { useState } from 'react';
import styled from 'styled-components';


const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    if (!isValidEmail) {
      setMessage('Please enter a valid email address.');
      setSuccess(false);
      return;
    }
    setMessage('Thanks for signing up!');
    setSuccess(true);
    setEmail('');
  };

  return (
    <Wrapper>
      <div className='newsletter-container'>
        <h4 className="newsletter-title">Subscribe to get the latest information, latest news and other <br />interesting stuff about devlinks.</h4>
        <p className="newsletter-description">
          Stay up-to-date with the latest news and updates.
        </p>

        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            className="newsletter-input"
            type="email"
            placeholder="Enter your email..."
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button className="newsletter-button" type="submit">
            Subscribe
          </button>
        </form>

        {message && (
          <p className={`newsletter-message ${success ? 'success' : 'error'}`}>
            {message}
          </p>
        )}
      </div>

    </Wrapper>
  );
};

const Wrapper = styled.div`

  width: 100%;
  background: var(--clr-white);
  padding: 1rem;
  text-align: center;
  .newsletter-container {
  background: var(--clr-grey);
  padding: 2rem;
  border-radius: 2rem 2rem 0rem 0;
  width: 80%;
  margin: 2rem auto;
  text-align: center;
  }
  

  .newsletter-title {
  margin-bottom: 1rem;
  font-size: 1.3rem;
  color: #222222;
}

.newsletter-description {
  margin-bottom: 1.5rem;
  color: #444444;
}

.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
}

@media (min-width: 480px) {
  .newsletter-form {
    flex-direction: row;
  }
}

.newsletter-input {
  padding: 0.75rem 1rem;
  border: 1px solid #cccccc;
  font-size: 1rem;
  width: 100%;
  max-width: 300px;
  border-radius: .3rem;
}

.newsletter-button {
  padding: 0.75rem 1.5rem;
  background: var(--clr-purple);
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;
  border-radius: .3rem;
}

.newsletter-button:hover {
  background:rgb(147, 8, 240);
}

.newsletter-message {
  margin-top: 1rem;
  font-weight: 500;
}

.newsletter-message.success {
  color: green;
}

.newsletter-message.error {
  color: red;
}

`;


export default NewsletterSignup;
