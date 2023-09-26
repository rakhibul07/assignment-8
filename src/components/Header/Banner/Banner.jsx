import { useState } from "react";
import Cards from "../../Cards/Cards";
import BannerDetails from "../../BannerDetails/BannerDetails";
import PropTypes from "prop-types";
const Banner = ({ cards }) => {
  const [search, setSearch] = useState("");
  const [filteredCards, setFilteredCards] = useState(cards);

  const handleSearch = () => {
    const filtered = cards.filter((val) => {
      if (search === "") {
        return true;
      } else if (val.category.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      return false;
    });

    setFilteredCards(filtered);
  };

  const handleClearInput = () => {
    setSearch("");
    setFilteredCards(cards);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <BannerDetails
        search={search}
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
  cards: PropTypes.array,
};
export default Banner;
