import React from "react";
import { useLocation } from "react-router-dom";
import HousingBanner from "../../components/HousingBanner/HousingBanner";
import HousingMain from "../../components/HousingMain/HousingMain";
import { data } from "../../data/data";

const HousingPage = () => {
  const currentId = useLocation().search.split("=")[1];
  const [currentHousing] = data.filter((data) => data.id === currentId);

  return (
    <React.Fragment>
      < HousingBanner urlBanner={currentHousing.pictures[0]} />
      < HousingMain currentHousing={currentHousing}/>
    </React.Fragment>
  )
}

export default HousingPage;