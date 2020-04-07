import React from "react";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { fetchArtistProfile } from '../../helpers/api-helpers';

const ArtistRoute = async () => {
  const { id } = useParams()
  const accessToken = useSelector(state=>state.auth.token);
  console.log('token',accessToken);
  let info = null;
  // if(accessToken)  info = await fetchArtistProfile(accessToken, id);
  // console.log('info',info);
  
  return(
    <>
    {/* {accessToken ? (
      <div>
        id={id}
      </div>
    ):(
      <div>
      somthing wrong
    </div>
    )} */}
  </>);
}

export default ArtistRoute;
