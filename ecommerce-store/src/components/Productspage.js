import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../styles/cms.css";
import CmsLayout from "./ADMIN-LAYOUT";
import { getAllGames } from "../redux/gamesSlice";
function Cmspage() {
  const dispatch = useDispatch();
  const [allGames, setAllGames] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const resp = (await dispatch(getAllGames())).payload;
      setAllGames(resp);
    }
    fetchData();
  }, []);


  const [loading, setLoading] = useState(false);


  return (
    <div className="cmspage">
      <CmsLayout>
        <div className="card-body">
          
        </div>
      </CmsLayout>
    </div>
  );
}
export default Cmspage;
