import PropTypes from 'prop-types';
import Card from "../Card/Card";
const Cards = ({cards}) => {
    return (
        <div className='grid grid-cols-4 gap-4'>
            {
                cards?.map(card=><Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};
Cards.propTypes = {
    cards:PropTypes.array
};

export default Cards;