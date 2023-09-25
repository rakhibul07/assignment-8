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
      swal("Good job!", "Successfully Added!", "success");
    } else {
      const isExist = donationItem.find((card) => card.id === id);
      if (!isExist) {
        donationArray.push(...donationItem, card);
        localStorage.setItem("donation", JSON.stringify(donationArray));
        swal("Good job!", "Successfully Added!", "success");
      } else {
        swal("Error!", "No Duplicate!", "error");
      }
    }
  };

  return (
    <div>
      <div>
      <img className="w-full h-[60vh] mx-auto" src={picture} />
     <div className="">
     <button 
        onClick={handleAddToDonation} style={{backgroundColor:text_color}}
        className="btn border border-none text-white hover:text-black relative bottom-20 left-10"
      >
        Donate ${price}
      </button>
     </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-sm text-justify">{description}</p>
      </div>
    </div>
  );
};

DetailsPage.propTypes = {
  card: PropTypes.object,
};

export default DetailsPage;
