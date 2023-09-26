import { useState } from "react";
import Cards from "../../Cards/Cards";
import BannerDetails from "../../BannerDetails/BannerDetails";
import PropTypes from 'prop-types';
const Banner = ({ cards }) => {
  const [search, setSearch] = useState("");
  const [filteredCards, setFilteredCards] = useState(cards);

  // Function to handle search
  const handleSearch = () => {
    const filtered = cards.filter((val) => {
      if (search === "") {
        return true; // Show all cards when input is empty
      } else if (val.category.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      return false;
    });

    setFilteredCards(filtered);
  };

  // Function to clear the input field and show all cards
  const handleClearInput = () => {
    setSearch(""); // Clear the input field
    setFilteredCards(cards); // Reset to show all cards
  };

  // Function to handle Enter key press
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
     <BannerDetails search={search}
     handleClearInput={handleClearInput}
     handleKeyDown={handleKeyDown}
     handleSearch={handleSearch}
     setSearch={setSearch}
     ></BannerDetails>
     
     <Cards filteredCards={filteredCards}></Cards>
   
    </div>
  );
};
Banner.propTypes = {
  cards: PropTypes.array
};
export default Banner;
