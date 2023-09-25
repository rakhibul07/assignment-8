import { useEffect, useState } from "react";
import DonationCard from "../../components/DonationCard/DonationCard";

const Donation = () => {
  const [donation,setDonation] = useState([]);
  const [noFound, setNoFound]  = useState(false);
  const [show, setShow]  = useState(false);
  useEffect(()=>{
    const donationItem = JSON.parse(localStorage.getItem("donation"));

    if(donationItem){
      setDonation(donationItem);
    }
    else{
      setNoFound("NO Data Found")
    }
  },[])



  

    return (
          
       <div>
       {
        noFound ? (
          <p>{noFound}</p> 
        ) : (
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
               {show
              ? donation.map((card) => (
                  <DonationCard key={card.id} card={card}></DonationCard>
                ))
              : donation
                  .slice(0, 2)
                  .map((card) => (
                    <DonationCard key={card.id} card={card}></DonationCard>
                  ))}
          </div>
          
        )
       }
        

       
       </div>
    );
};

export default Donation;