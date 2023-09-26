import PropTypes from "prop-types";
import FilterCards from "../FilterCards/FilterCards"; 
const Cards = ({filteredCards}) => {

  return (
     <div className="grid grid-cols-1 px-5 lg:px-0 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredCards.map((val) => {
          return (
           <div key={val.id}>
              <FilterCards val={val}></FilterCards>
           </div>

          );
        })}
      </div>
  );
};
Cards.propTypes = {
  filteredCards: PropTypes.array,
};

export default Cards;
