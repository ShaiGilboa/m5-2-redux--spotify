import React from "react";
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PlayButton from 'react-play-button';
import Loader from 'react-loader-spinner';

import { 
  fetchArtistProfile,
  fetchArtistTopTracks,
  fetchArtistRelatedArtists,
  } from '../../helpers/api-helpers';

import {
  requestArtistInfo,
  receiveArtistInfo,
  receiveArtistInfoError,
} from '../../redux/actions';

import {
  modifyFollowers,
  // randFromArray,
  } from '../../utils'; 

const ArtistRoute =  () => {
  const { id } = useParams()
  const dispatch = useDispatch();

  const [isActiveId, setIsActiveId] = React.useState(9)

  const info = useSelector(state=>state.artist.currentArtist);
  const accessToken = useSelector(state=>state.auth.token);
  const status = useSelector(state=>state.artist.status);

  React.useEffect(()=>{
    function fetchData () {
      dispatch(requestArtistInfo()) 
        const artistInfoPromise =  fetchArtistProfile(accessToken, id);
        const artistTopTracksPromise = fetchArtistTopTracks(accessToken, id);
        const artistRelatedArtistsPromise = fetchArtistRelatedArtists(accessToken, id);
        Promise.all([artistInfoPromise,artistTopTracksPromise, artistRelatedArtistsPromise])
          .then(res => {
            dispatch(receiveArtistInfo(res[0], res[1], res[2]));
            console.log('tracks',res[2]);
          })
          .catch(err=> dispatch(receiveArtistInfoError()))
      } 
    if(accessToken) fetchData();
  },[accessToken]);

  const toggle = (id) => {
    setIsActiveId(id);
  }

  return(
    <Wrapper>
    {status==='idle' ? (<>
      <ArtistTop>
        <ArtistAvatar src={info.profile.images[0].url} alt={'image'}/>
        <Name>
          {info.profile.name}
        </Name>
        <Followers>
          <Bold>
            {modifyFollowers(info.profile.followers.total)} 
          </Bold>
          followers
        </Followers>
      </ArtistTop>
      <ArtistMiddle>
        <TopTracks>
          <h2>top tracks</h2>
          <PlayButtons>
            {info.topTracks.map((track, index) => (
              index<=2 && 
              <li key={`track#${index}`}>
                <PlayButton
                url={track.preview_url}
                active={isActiveId===index}
                play={()=>toggle(index)}
                stop={()=>toggle(9)}
                playIconColor={'#FFFFFF'}
                stopIconColor={'#FFFFFF'}
                idleBackgroundColor={'rgba(75, 75, 75, 0.4)'}
                progressCircleColor={'#3354FF'}
                progressCircleWidth={4}
                />
              </li>
              )
              )}
          </PlayButtons>
        </TopTracks>
        <TagsInfo>
          <h2>Tags</h2>
          <Tags>
            {info.profile.genres.map((genre, index) => index<2 && <li key={`${info.profile.name}=${index}`}>{genre}</li>)}
          </Tags>
        </TagsInfo>
      </ArtistMiddle>
      <ArtistBottom>
        <h2>related artists</h2>
        <RelatedArtists>
          {info.relatedArtists.map((artist, index) => <li key={`relatedArtist#${index}`}>
            <RelatedAvatar src={artist.images[0].url} alt={`${artist.name} photo`} />
            <RelatedName>{artist.name}</RelatedName>
          </li> )}
        </RelatedArtists>
      </ArtistBottom>
    </>) : (
      <Loader type="Audio" color="#FF4FD8" height={80} width={80} style={{margin: 'auto', gridArea: 'artist-middle'}}/>
    )}
    </Wrapper>
  );
}

export default ArtistRoute;

const Wrapper = styled.div`
  position: relative;
  width: 375px;
  height: 812px;
  background: #0B0F14;
  margin: 0 auto;
  display:grid;
  grid-template-rows: 1fr 2fr 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    'artist-top'
    'artist-middle'    
    'artist-bottom';
`;

const ArtistTop = styled.div`
  grid-area: artist-top;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

  const ArtistAvatar = styled.img`
    position: relative;
    width: 175px;
    height: 175px;
    top: 59px;
    border-radius: 50%;
    object-fit:cover;
  `;

  const Name = styled.h2`
    position: relative;
    width: 268px;
    height: 59px;
    bottom: 0.5rem;
    margin: 0;
    font-size: 1.5rem;
    line-height: 59px;
    color: #FFFFFF;
    text-shadow: 4px 8px 25px #000000, 0px 4px 4px rgba(0, 0, 0, 0.5), 1px 2px 2px rgba(0, 0, 0, 0.75);
    text-align:center;
  `;

  const Followers = styled.h2`
    position: relative;
    height: 17px;
    font-size: 1rem;
    line-height: 17px;
    text-transform: lowercase;

  `;

  const Bold = styled.span`
    font-weight: bold;
    margin-right: 10px;
    color: #FF4FD8;

  `;

const ArtistMiddle = styled.div`
  grid-area: artist-middle;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-transform: lowercase;
`;

  const TopTracks = styled.div`
    text-align:center;
  `;

  const PlayButtons = styled.ul`
    list-style:none;
    display:flex;
    margin:0;
    padding:0;
    li{
      margin: 0 5px;
    }
  `;

  const TagsInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 90%;
  `;

    const Tags = styled.ul`
      list-style: none;
      padding: 0;
      display: flex;
      justify-content: space-around;
      width: 90%;
      li {
        padding: 8px 21px;
        background: rgba(75, 75, 75, 0.4); 
        border-radius: 4px;
      }
    `;

const ArtistBottom = styled.div`
  grid-area: artist-bottom;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-transform: lowercase;
  overflow: hidden;
  height: fit-content;
  padding-bottom: 30px;
`;

  const RelatedArtists = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    overflow-x: scroll;
    height: fit-content;
    width: 100%;
    scroll-snap-type: x mandatory;
    scroll-padding: 0 5px;
    li{
      margin: 0 5px;
      /* scroll-snap-align: center; */
      scroll-snap-align: start;
      height:fit-content;
    }
    ::-webkit-scrollbar {
      width: 1px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: darkgrey;
      outline: 1px solid slategrey;
      border-radius: 4px;
      width: 4px;
      padding: 0 10px;
    }
  `;

  const RelatedAvatar = styled.img`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    object-fit: cover;
  `;

  const RelatedName = styled.h2`
    position: relative;
    width: 90px;
    height: 20px;
    bottom: 30%;

    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */

    text-align: center;
    text-transform: lowercase;

    /* White */

    color: #FFFFFF;
    /* Triple shadow */

    text-shadow: 4px 8px 25px #000000, 0px 4px 4px rgba(0, 0, 0, 0.5), 1px 2px 2px rgba(0, 0, 0, 0.75);
  `;