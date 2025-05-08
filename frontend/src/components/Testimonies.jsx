import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import customerTestimonies from "../utils/customerTestimonies";
import defaultImg from "../assets/default.jpg";

const Testimonies = () => {
  const [peoples, setPeoples] = useState(customerTestimonies);
  const [slideIndex, setSlideIndex] = useState(0);
  console.log(peoples)
  useEffect(() => {
    const lastIndex = peoples.length - 1;
    if (slideIndex < 0) {
      setSlideIndex(lastIndex)
    }
    if (slideIndex > lastIndex) {
      setSlideIndex(0);
    }
  }, [slideIndex, peoples])

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
      <div className='slider-container'>
        <div className="slider-wrapper">
          {
            peoples.map((testimony, index) => {
              let position = "next-slide";
              if (index === slideIndex) {
                position = "active-slide";
              }
              if (index === slideIndex - 1 || index === 0 && slideIndex === peoples.length - 1) {
                position = "last-slide";
              }

              return (
                <article key={index} className={`${position}`}>

                  <div className='testimony-content'>
                    <p>{testimony.text}</p>
                    <div className='title'>
                      <img
                        src={defaultImg}
                        className='user-img'
                        alt="user picture"
                      />
                      <h5>{testimony.name}</h5>
                    </div>

                  </div>


                </article>
              );
            })
          }
        </div>

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

  div.slider-container {
  width: 100%;
  position: relative;
  height: 300px;
  overflow: hidden; /* Ensures child elements don't overflow the border radius */
  .slider-wrapper {
    display: flex;
    height: 100%;
    position: relative;
  }
  .testimony-content {
    background: white;
    padding: 2rem;
    border-radius: 2rem 2rem 2rem 0; /* Curved corners */
    width: 40rem;
    margin: 0 auto;
    p {
      text-align: justify;
    }
    .title {
      display: flex;
      align-items: center;
    }
  }
  .user-img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
  }

  article {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: var(--clr-black);
    opacity: 0;
    transition: var(--transition, all 0.5s ease-in-out);
    transform: translateX(100%);
  }

  article.active-slide {
    opacity: 1;
    transform: translateX(0);
  }

  article.last-slide {
    transform: translateX(-100%);
  }

  article.next-slide {
    transform: translateX(100%);
  }
}

  // div {
  //   width: 100%;
  //   position: relative;
  //   background: white;
  //   padding: 2rem;
  //   .user-img {
  //     width: 100px;
  //     display: inline-block;
  //     border-radius: 50%;
  //   }
  //   article {
  //     position: absolute;
  //     color: var(--clr-black);
  //     top: 0;
  //     left: 0;
  //     width: 100%;
  //     height: 300px;
  //     opacity: 0;
  //     transition: var(--transition);
  //   }
  //   article.active-slide {
  //     opacity: 1;
  //     transform: translate(0);
  //   }
  //   article.last-slide {
  //     transform: translate(-100%);
  //   }
  //   article.next-slide {
  //     transform: translate(100%);
  //   }
  // }
`;

export default Testimonies