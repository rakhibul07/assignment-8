import PropTypes from "prop-types";
import swal from "sweetalert";
const DetailsPage = ({ card }) => {
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
  const handleAddToDonation = () => {
    const donationArray = [];
    const donationItem = JSON.parse(localStorage.getItem("donation"));
    if (!donationItem) {
      donationArray.push(card);
      localStorage.setItem("donation", JSON.stringify(donationArray));
      swal("Thank You!", "Successfully Added!", "success");
    } else {
      const isExist = donationItem.find((card) => card.id === id);
      if (!isExist) {
        donationArray.push(...donationItem, card);
        localStorage.setItem("donation", JSON.stringify(donationArray));
        swal("Thank You!", "Successfully Added!", "success");
      } else {
        donationArray.push(...donationItem, card);
        localStorage.setItem("donation", JSON.stringify(donationArray));
        swal("Thank You!", "Successfully Added!", "success");
      }
    }
  };

  return (
    <div>
      <div className="relative">
        <img className="w-full h-[40vh] md:h-[60vh] mx-auto" src={picture} />
        <div className="absolute bottom-0 left-0 w-full h-14 md:h-16 lg:h-20 bg-black opacity-30"></div>
      </div>

      <div>
        <button
          onClick={handleAddToDonation}
          style={{
            backgroundColor: text_color,
           
          }}
          className="px-1 py-1 md:px-3 md:py-2 lg:py-3 rounded-md border text-xs border-none text-white hover:text-black relative bottom-9 md:bottom-12 left-2 lg:bottom-16 lg:left-8"
        >
          Donate ${price}
        </button>
      </div>

      <div>
        <h2 className="text-3xl font-bold pb-4">{title}</h2>
        <p className="text-sm text-justify">{description}</p>
      </div>
    </div>
  );
};

DetailsPage.propTypes = {
  card: PropTypes.object,
};

export default DetailsPage;
