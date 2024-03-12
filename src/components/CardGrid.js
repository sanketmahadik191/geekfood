import styles from "./Card.css"

const Card =()=>{
    return(
        <div className="card">
            <img alt="House" src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1770&amp;q=80" class="absolute inset-0 h-full w-full object-cover"></img>
            <div>
                <h1>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.
                </h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.
                </p>
                <button type="button" class="btn btn-primary">Get In touch</button>
            </div>
        </div>
    )
}

export default Card;