import propTypes from "prop-types";
import "../styles/WallParallax.scss";

export default function CardImage({ link }) {
  CardImage.propTypes = {
    link: propTypes.string,
  };

  return (
    <div className="line" style={{ backgroundImage: `url(${link})` }}>
      <div className="img" style={{ backgroundImage: `url(${link})` }}></div>
    </div>
  );
}
