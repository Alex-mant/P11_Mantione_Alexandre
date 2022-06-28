import React from "react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import HousingBanner from "../../components/HousingBanner/HousingBanner";
import HousingMain from "../../components/HousingMain/HousingMain";
import { DataContext } from "../../utils/DataContext";

const HousingPage = () => {
  const {data} = useContext(DataContext);
  const currentId = useLocation().search.split("=")[1];
  const [currentHousing] = data.filter((data) => data.id === currentId);

 if(currentHousing === undefined) window.location.href = "/kasa/error404";

  return (
    <React.Fragment>
      < HousingBanner currentHousing={currentHousing}/>
      < HousingMain currentHousing={currentHousing}/>
    </React.Fragment>
  )
}

export default HousingPage;