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
      <div>
      {
        noFound ? (
          <p className="text-2xl flex justify-center items-center h-screen">{noFound}</p> 
        ) : (
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
               {show
              ? donation.map((card) => (
                  <DonationCard key={card.id} card={card}></DonationCard>
                ))
              : donation
                  .slice(0, 4)
                  .map((card) => (
                    <DonationCard key={card.id} card={card}></DonationCard>
                  ))}
          </div>
           
        )
       }
        

      </div>
      {
        donation.length > 4 &&  !show && (
          <div className="flex justify-center items-center pt-6">
            <button onClick={() => setShow(!show)}
                className="bg-green-400 text-semibold px-4 py-2 rounded-md shadow-md text-white ml-4" >See More</button>
                
          </div>
        )
      }
       
       </div>
    );
};

export default Donation;