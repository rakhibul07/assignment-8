import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const DonationCard = ({ card }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg,
    card_bg,
    text_color,
    description,
    price,
  } = card || {};
  return (
    <div>
      <div className=" lg:flex gap-8 rounded-lg  items-center mx-4 lg:mx-0 "
      style={{backgroundColor: card_bg}}>
        <div>
          <img
            src={picture}
            className="rounded-lg rounded-r-none w-full "
          />
        </div>
        <div className="px-4 py-4 space-y-1">
          <h1 className="w-16 text-xs text-center p-1 rounded-md font-medium" style={{backgroundColor:category_bg,color:text_color}}>{category}</h1>
          <h1 className="text-justify text-lg font-bold">{title}</h1>
          <h2 className="font-semibold" style={{color:text_color}}>
            $<span>{price}</span>
          </h2>
          <Link to={`/cards/${id}`}><button className="text-white mt-2 px-2 py-1 rounded-md" style={{backgroundColor:text_color}}>View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

DonationCard.propTypes = {};

export default DonationCard;
