const initialState = {
  currentArtist: null,
  status: 'loading', /* -'loading'
                        -'request'
                        -'idle'
                        -'error-request-info'
                      */
}

export default function artistReducer(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_ARTIST_INFO':
      return {
        ...state,
        status: 'request',
      }
    case 'RECEIVE_ARTIST_INFO':   
    console.log('action',action);
      return {
        ...state,
        status: 'idle',
        currentArtist: {
          profile: action.artistInfo,
          topTracks: action.tracks.tracks,
          relatedArtists: action.artists.artists,
        },
      }
    case 'RECEIVE_ARTIST_INFO_ERROR':
      return {
        ...state,
        status: 'error-request-info'
      }
    default:
      return state;
  };
};