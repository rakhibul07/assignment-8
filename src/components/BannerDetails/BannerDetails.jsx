import PropTypes from "prop-types";

const BannerDetails = ({
  search,
  setSearch,
  handleClearInput,
  handleKeyDown,
  handleSearch,
}) => {
  return (
    <div>
      <div
        className="hero min-h-[500px]  lg:mb-8"
        style={{ backgroundImage: "url(https://i.ibb.co/gmqfPmb/cover.jpg)" }}
      >
        <div className="hero-overlay bg-white bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="space-y-20">
            <h1 className=" text-3xl md:text-5xl font-bold text-black">
              I Grow By Helping People In Need
            </h1>
            <div className="flex justify-center  items-center">
              <input
                type="text"
                placeholder="Search here...."
                className="input input-bordered w-3/5 text-black rounded-r-none"
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                  if (event.target.value === "") {
                    handleClearInput(); 
                  }
                }}
                onKeyDown={handleKeyDown} 
              />
              <button
                className="btn text-white font-medium btn-error rounded-l-none"
                onClick={handleSearch} 
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BannerDetails.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
  handleClearInput: PropTypes.func,
  handleKeyDown: PropTypes.func,
  handleSearch: PropTypes.func,
};
export default BannerDetails;
