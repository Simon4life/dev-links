import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import customerTestimonies from "../utils/customerTestimonies";
import defaultImg from "../assets/default.jpg";

const Testimonies = () => {
  const [peoples, setPeoples] = useState(customerTestimonies);
  const [slideIndex, setSlideIndex] = useState(0);
console.log(peoples)
  useEffect(() => {
    const lastIndex = peoples.length - 1;
    if(slideIndex < 0) {
      setSlideIndex(lastIndex)
    }
    if(slideIndex > lastIndex) {
      setSlideIndex(0);
    }
  },[slideIndex, peoples])

  useEffect(() => {
    let slider = setInterval(() => {
      setSlideIndex(slideIndex + 1)
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [slideIndex]);

  return (
    <Wrapper className="section-center">
      <h2>Testimonies</h2>
      <h4>
        Join 20K+ members of devlinks to access its features for <span>free</span>
      </h4>
      <div>
        {
          peoples.map((testimony, index) => {
            let position = "next-slide";
            if(index === slideIndex) {
              position = "active-slide";
            }
            if(index === slideIndex - 1 || index === 0 && slideIndex === peoples.length -1) {
              position =  "last-slide";
            }
            
           return (
             <article key={index} className={position}>
               <img
                 src={defaultImg}
                 className='user-img'
                 alt="user picture"
               />
               <h5>{testimony.name}</h5>
               <p>{testimony.text}</p>
             </article>
           );
          })
        }
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 2rem 0;
  h2,
  h4 {
    text-transform: unset;
    text-align: center;
    span {
      color: rgba(238, 41, 127, 0.941);
    }
  }
  div {
    width: 100%;
    position: relative;
    .user-img {
      width: 100px;
      display: inline-block;
      border-radius: 50%;
    }
    background: blue;
    article {
      position: absolute;
      color: var(--clr-black);
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      text-align: center;
      transition: var(--transition);
    }
    article.active-slide {
      opacity: 1;
      transform: translate(0);
    }
    article.last-slide {
      transform: translate(-100%);
    }
    article.next-slide {
      transform: translate(100%);
    }
  }
`;

export default Testimonies