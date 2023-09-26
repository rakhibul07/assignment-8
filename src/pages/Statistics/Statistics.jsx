
import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
const Statistics = () => {
const [donation, setDonation] = useState(0);
useEffect(()=>{
    const donationItem = JSON.parse(localStorage.getItem("donation"));
    if(donationItem){
        const donationAmount = donationItem.reduce((preValue, currentItem)=>preValue + currentItem.donation_count,0);
        setDonation(donationAmount);
    }
   
},[])

    const yourDonation = donation;
     const data = [
        ["Task", "Hours per Day"],
        ["Total Donation", 12],
        ["Your Donation", yourDonation],
       
      ];
    return (
        <div className="h-screen">
            <Chart
      chartType="PieChart"
      data={data}

      width={"100%"}
      height={"400px"}
    />
        </div>
    );
};

export default Statistics;