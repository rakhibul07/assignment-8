import PropTypes from "prop-types";
import Card from "../Card/Card";
const Cards = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 px-5 lg:px-0 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards?.map((card) => 
        <Card key={card.id} card={card}></Card>
      )}
    </div>
  );
};
Cards.propTypes = {
  cards: PropTypes.array,
};

export default Cards;
