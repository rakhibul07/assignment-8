import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FilterCards = ({val}) => {
    const {id,
        picture,
        title,
        category,
        category_bg,
        card_bg,
        text_color} = val;
    return (
        <div>
               <div key={id}>
               <div>
      <Link to={`/cards/${id}`}>
      <div
        className="card card-compact bg-base-100 shadow-md"
        style={{ backgroundColor: card_bg }}
      >
        <figure>
          <img src={picture} className="w-full" />
        </figure>
        <div className="card-body">
          <h2
            className="w-16 text-xs text-center p-1 rounded-md font-medium"
            style={{ backgroundColor: category_bg, color: text_color }}
          >
            {category}
          </h2>
          <p className="text-sm font-semibold" style={{ color: text_color }}>
            {title}
          </p>
        </div>
      </div>
      </Link>
    </div>
            </div>
        </div>
    );
};
FilterCards.propTypes = {
    val: PropTypes.object
  };
export default FilterCards;