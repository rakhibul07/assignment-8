import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const Statistics = () => {
  const [donation, setDonation] = useState(0);

  useEffect(() => {
    const donationItem = JSON.parse(localStorage.getItem("donation"));
    if (donationItem) {
      const donationAmount = donationItem.reduce(
        (preValue, currentItem) => preValue + currentItem.donation_count,
        0
      );
      setDonation(donationAmount);
    }
  }, []);

  const yourDonation = donation;

  const data = [
    ["Task", "Donation"],
    ["Total Donation", 12],
    ["Your Donation", yourDonation],
  ];

  const lightRed = "#FF444A"; 
  const lightBlue = "#00C49F"; 

  return (
    <div>
      <div className=" flex flex-col">
        <div>
          <Chart
            chartType="PieChart"
            data={data}
            options={{
              pieSliceText: "percentage",
              legend: "none", 
              height: 400, 
              colors: [lightRed, lightBlue],
            }}
          />
        </div>
        <div className="flex justify-center space-x-4">
          <div className="flex items-center">
            <div
              className="w-12 h-2 bg-[#00C49F] mr-2"
            ></div>
            <span>Your Donation</span>
          </div>
          <div className="flex items-center">
            <div
              className="w-12 h-2 bg-[#FF444A] mr-2" 
            ></div>
            <span>Total Donation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
