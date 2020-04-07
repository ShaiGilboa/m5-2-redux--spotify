import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  requestAccessToken,
  receiveAccessToken,
  receiveAccessTokenError,
} from '../../redux/actions';

import {DEFAULT_ARTIST_ID} from '../../data';

import ArtistRoute from '../ArtistRoute';
import GlobalStyles from '../GlobalStyles';

const App = () => {
  const dispatch = useDispatch();
  const requestStatus = useSelector(state=>state.auth.status)
  console.log('status',requestStatus);
  
  React.useEffect(() => {
    dispatch(requestAccessToken());
    fetch('/spotify_access_token')
    .then(res=>res.json())
      .then(res=>{
        console.log('res',res);
        dispatch(receiveAccessToken(res.access_token));
      })
      .catch(err=>{
        console.error('err:',err)
        dispatch(receiveAccessTokenError());
        })
  },[])

  return (
    <>
    <GlobalStyles/>
    <Router>
      <Switch>
        <Route path='/artists/:id' >
          <ArtistRoute />
        </Route>
        <Route path='*' >
          <Redirect to={`/artists/${DEFAULT_ARTIST_ID}`} />
        </Route>
      </Switch>
    </Router>
  </>);
};

export default App;
