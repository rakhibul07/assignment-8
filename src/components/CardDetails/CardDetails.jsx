import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsPage from "../Details/DetailsPage";
const CardDetails = () => {
  const [card, setCard] = useState(null);
const {id}= useParams();
const cards = useLoaderData();

useEffect(()=>{
  const findCard = cards?.find(card=> card.id === id);
  setCard(findCard);
},[id,cards])


    return (
        <div>
            <DetailsPage  card={card}></DetailsPage>
        </div>
    );
};

export default CardDetails;