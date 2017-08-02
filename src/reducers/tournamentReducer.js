const initialState = {
  tournaments: {
    tournamentName: '',
    id: '',
    numberOfTeams: 0,
    minimumNumPlayers: 0,
    startDate: '',
    countryState: '',
    address: '',
    city: '',
    zipCode: 0,
    user: {},
  }
};


export default (state = initialState.tournaments, action) => {

  switch (action.type) {
    case 'CREATE_TOURNAMENT':
      const tournament = {
        tournamentName:action.payload.tournamentName,
        numberOfTeams: action.payload.numberOfTeams,
        minimumNumPlayers: action.payload.minimumNumPlayers,
        startDate: action.payload.startDate,
        countryState: action.payload.state,
        address: action.payload.address,
        city: action.payload.city,
        zipCode: action.payload.zipCode
      }
      return {...state, tournaments: { ...state.tournaments, tournament }}
    case 'FETCH_TOURNAMENTS':
      const data = action.payload.map(item => ({
        id: item._id,
        tournamentName: item.tournamentName,
        numberOfTeams: item.numberOfTeams,
        minimumNumPlayers: item.minimumNumPlayers,
        startDate: item.startDate,
        countryState: item.state,
        address: item.address,
        city: item.city,
        zipCode: item.zipCode,
        user: { ...item.user },
      }));
      return {
        ...state,
        data,
      };
    case 'FETCH_TOURNAMENTS_BY_USER_ID':
      const userTournaments = action.payload.map(item => ({
        id: item._id,
        tournamentName: item.tournamentName,
        numberOfTeams: item.numberOfTeams,
        minimumNumPlayers: item.minimumNumPlayers,
        startDate: item.startDate,
        countryState: item.state,
        address: item.address,
        city: item.city,
        zipCode: item.zipCode,
        user: { ...item.user },
      }));
      return {
        ...state,
        userTournaments,
      };
    case 'FETCH_TOURNAMENT':
      return {
        ...state,
        tournamentName: action.payload.tournamentName,
        numberOfTeams: action.payload.numberOfTeams,
        minimumNumPlayers: action.payload.minimumNumPlayers,
        startDate: action.payload.startDate,
        countryState: action.payload.state,
        address: action.payload.address,
        city: action.payload.city,
        zipCode: action.payload.zipCode,
      }
    case 'DELETE_TOURNAMENT':
      return initialState;
    default:
      return state;
  }
};
