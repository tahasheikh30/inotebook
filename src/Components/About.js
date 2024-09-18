import React from "react";
import styles from "./About.module.css"
import Profile from "./Profile.png"

export default function About(props) {
  return (
    <div>
      <div className={`${styles.wrapper}`}>
      <div className={`${styles.background}`}></div>
        <div className={`${styles.testimonial}`}>
          <article>
            <h1>About me</h1>
            <img src={Profile} alt="" />
            <blockquote>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusantium aspernatur, ex necessitatibus ratione sint, expedita provident tenetur dolorum, recusandae delectus alias inventore illo atque nostrum totam perspiciatis debitis earum impedit voluptate maiores libero ducimus aliquam! 
            </blockquote>
            <h5>Taha Sheikh</h5>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

          </article>
        </div>
      </div>
    </div>
  );
}
