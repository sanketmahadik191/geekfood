/* eslint-disable jsx-a11y/alt-text */
import styles from "./Hero.css"

const Hero =() => {
    return(
        <div class="hero">
            <img src="https://en.idei.club/uploads/posts/2023-06/1685976960_en-idei-club-p-outdoor-restaurant-design-dizain-krasivo-1.jpg"></img>
            <div className="content">
    <h1 class="heroHeading">Lets us find your Forever Food</h1>
    <p>Food is more than just sustenance; it is a language that speaks to our senses and brings people together.</p>
    <button type="button" class="btn btn-danger">Dine In</button>
    <button type="button" class="btn btn-secondary">Order Now</button>
  </div>
        </div>
       
    )
}

export default Hero;