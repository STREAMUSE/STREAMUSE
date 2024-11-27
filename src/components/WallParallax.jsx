import { imagesLines } from "../constants/AppConst";
import CardImage from "../widgets/CardImage";
import "../styles/WallParallax.scss";

export default function WallParallax() {
  return (
    <div className="wrapper-images">
      {imagesLines.map((line, i) => (
        <div key={i} className="images-line">
          {line.images.map((item, j) => (
            <CardImage key={j} link={item} />
          ))}
        </div>
      ))}
      <div className="images-line"></div>
    </div>
  );
}
