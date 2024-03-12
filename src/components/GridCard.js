import styles from "./GridCard.css"

const GridCard = ({text}) => {
    return (
        <div className="card1">
        <p className="paragraph">{text}</p>
        <div className="styles.profile">
          <img src={'https://cdn1.vectorstock.com/i/1000x1000/20/65/man-avatar-profile-vector-21372065.jpg'} alt="Profile Icon" className="profileIcon" />
          <p className="profileName">Gladis Lennon</p>
        </div>
      </div>
      );
}

export default GridCard;