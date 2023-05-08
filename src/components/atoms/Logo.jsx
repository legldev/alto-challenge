import { Link } from "react-router-dom";

const Logo = ({ img, alt }) => {
  return (
    <div className="logo">
      <Link to={"/"}>
        <img src={img} alt={alt} />
      </Link>
    </div>
  );
};

export default Logo;
