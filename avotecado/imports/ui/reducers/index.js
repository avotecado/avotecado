import { combineReducers } from 'redux';
import { FETCH_POLITICIANS, FETCH_POLITICIANS_BEGIN, FETCH_POLITICIANS_SUCCESS, FETCH_POLITICIANS_FAILURE, REG_USER, LOG_IN, LOGOUT } from '../actions';

const politicians = [
  {
    'title': 'Mayor',
    'firstname': 'Kennedy',
    'lastname': 'Stewart',
    'party': 'Independent',
    'votes': 49705,
    'totalVotes': 176450,
    'profileURL': 'https://vancouver.ca/your-government/mayor-kennedy-stewart.aspx',
    'address': '3rd Floor, City Hall, 453 West 12th Ave, Vancouver, BC V5Y 1V4',
    'phone': '',
    'mobile': '',
    'email': '',
    'twitter': '@VanMayorsOffice',
    'website': '',
    'facebook': '',
    'linkedin': '',
    'instagram': ''
  },
  {
    'title': 'City Councillor',
    'firstname': 'Rebecca',
    'lastname': 'Bligh',
    'party': 'NPA',
    'votes': 44053,
    'totalVotes': 176450,
    'profileURL': 'https://vancouver.ca/your-government/rebecca-bligh.aspx',
    'address': '3rd Floor, City Hall, 453 West 12th Ave, Vancouver, BC V5Y 1V4',
    'phone': '604-873-7249',
    'mobile': '',
    'email': 'CLRbligh@vancouver.ca',
    'twitter': '@rebeccaleebligh',
    'website': '',
    'facebook': '',
    'linkedin': '',
    'instagram': ''
  },
  {
    'title': 'City Councillor',
    'firstname': 'Christine',
    'lastname': 'Boyle',
    'party': 'OneCity',
    'votes': 45455,
    'totalVotes': 176450,
    'profileURL': 'https://vancouver.ca/your-government/christine-boyle.aspx',
    'address': '3rd Floor, City Hall, 453 West 12th Ave, Vancouver, BC V5Y 1V4',
    'phone': '604-873-7242',
    'mobile': '',
    'email': 'CLRboyle@vancouver.ca',
    'twitter': '',
    'website': '',
    'facebook': '',
    'linkedin': '',
    'instagram': ''
  },
  {
    'title': 'City Councillor',
    'firstname': 'Adriane',
    'lastname': 'Carr',
    'party': 'Green',
    'votes': 69730,
    'totalVotes': 176450,
    'profileURL': 'https://vancouver.ca/your-government/adriane-carr.aspx',
    'address': '3rd Floor, City Hall, 453 West 12th Ave, Vancouver, BC V5Y 1V4',
    'phone': '604-873-7245',
    'mobile': '',
    'email': 'CLRcarr@vancouver.ca',
    'twitter': '@AdrianeCarr',
    'website': '',
    'facebook': '',
    'linkedin': '',
    'instagram': ''
  },
  {
    'title': 'City Councillor',
    'firstname': 'Melissa',
    'lastname': 'De Genova',
    'party': 'NPA',
    'votes': 53251,
    'totalVotes': 176450,
    'profileURL': 'https://vancouver.ca/your-government/melissa-degenova.aspx',
    'address': '3rd Floor, City Hall, 453 West 12th Ave, Vancouver, BC V5Y 1V4',
    'phone': '604-873-7244',
    'mobile': '',
    'email': 'CLRdegenova@vancouver.ca',
    'twitter': '@MelissaDeGenova',
    'website': '',
    'facebook': '',
    'linkedin': '',
    'instagram': ''
  },
  {
    'title': 'City Councillor',
    'firstname': 'Lisa',
    'lastname': 'Dominato',
    'party': 'NPA',
    'votes': 44689,
    'totalVotes': 176450,
    'profileURL': 'https://vancouver.ca/your-government/lisa-dominato.aspx',
    'address': '3rd Floor, City Hall, 453 West 12th Ave, Vancouver, BC V5Y 1V4',
    'phone': '604-873-7248',
    'mobile': '604-754-7290',
    'email': 'CLRdominato@vancouver.ca',
    'twitter': '@LisaDominato',
    'website': '',
    'facebook': 'lisadominato',
    'linkedin': '',
    'instagram': '@lisadominato'
  },
  {
    'title': 'City Councillor',
    'firstname': 'Pete',
    'lastname': 'Fry',
    'party': 'Green',
    'votes': 61806,
    'totalVotes': 176450,
    'profileURL': 'https://vancouver.ca/your-government/pete-fry.aspx',
    'address': '3rd Floor, City Hall, 453 West 12th Ave, Vancouver, BC V5Y 1V4',
    'phone': '604-873-7246',
    'mobile': '',
    'email': 'CLRfry@vancouver.ca',
    'twitter': '@PtFry',
    'website': '',
    'facebook': '',
    'linkedin': '',
    'instagram': ''
  },
  {
    'title': 'City Councillor',
    'firstname': 'Colleen',
    'lastname': 'Hardwick',
    'party': 'NPA',
    'votes': 47747,
    'totalVotes': 176450,
    'profileURL': 'https://vancouver.ca/your-government/colleen-hardwick.aspx',
    'address': '3rd Floor, City Hall, 453 West 12th Ave, Vancouver, BC V5Y 1V4',
    'phone': '604-873-7240',
    'mobile': '',
    'email': 'CLRhardwick@vancouver.ca',
    'twitter': '@CllrHardwick',
    'website': '',
    'facebook': '',
    'linkedin': '',
    'instagram': ''
  },
  {
    'title': 'City Councillor',
    'firstname': 'Sarah',
    'lastname': 'Kirby-Yung',
    'party': 'NPA',
    'votes': 43581,
    'totalVotes': 176450,
    'profileURL': 'https://vancouver.ca/your-government/sarah-kirby-yung.aspx',
    'address': '3rd Floor, City Hall, 453 West 12th Ave, Vancouver, BC V5Y 1V4',
    'phone': '604-873-7247',
    'mobile': '',
    'email': 'CLRkirby-yung@vancouver.ca',
    'twitter': '@sarahkirby_yung',
    'website': '',
    'facebook': 's.kirbyyung',
    'linkedin': '',
    'instagram': ''
  },
  {
    'title': 'City Councillor',
    'firstname': 'Jean',
    'lastname': 'Swanson',
    'party': 'COPE',
    'votes': 48865,
    'totalVotes': 176450,
    'profileURL': 'https://vancouver.ca/your-government/jean-swanson.aspx',
    'address': '3rd Floor, City Hall, 453 West 12th Ave, Vancouver, BC V5Y 1V4',
    'phone': '604-873-7243',
    'mobile': '',
    'email': 'CLRswanson@vancouver.ca',
    'twitter': '',
    'website': '',
    'facebook': '',
    'linkedin': '',
    'instagram': ''
  },
  {
    'title': 'City Councillor',
    'firstname': 'Michael',
    'lastname': 'Wiebe',
    'party': 'Green',
    'votes': 45593,
    'totalVotes': 176450,
    'profileURL': 'https://vancouver.ca/your-government/michael-wiebe.aspx',
    'address': '3rd Floor, City Hall, 453 West 12th Ave, Vancouver, BC V5Y 1V4',
    'phone': '604-873-7241',
    'mobile': '',
    'email': 'CLRwiebe@vancouver.ca',
    'twitter': '@councillorwiebe',
    'website': '',
    'facebook': 'councillorwiebe',
    'linkedin': '',
    'instagram': ''
  }
];

const users = [
  {
    user: 'admin',
    pass: '123',
    uuid: 0,
    following: ['KennedyStewart', 'RebeccaBligh']
  },
  {
    user: 'user1',
    pass: '123',
    uuid: 1,
    following: ['KennedyStewart']
  }
];

const userStatus = { loggedIn: false, uuid: '' };

// const initState = { polits: politicians, users: users };
const initState = [politicians, users, userStatus];
// const initState = [politicians, users];

// const politicianListReducer = (politicianList = politicians, action) => {
const politicianListReducer = (state = initState, action) => {
  let mutableState = state.slice(0);
  let mutablePoliList = state[0].slice(0);
  let mutableUsers = state[1].slice(0);
  let mutableUserStatus = state[2];
  // let mutablePoliList = politicianList.slice(0);

  console.log('Action: ', action);

  switch (action.type) {
    case REG_USER:
      mutableUsers.push(action.data);
      mutableState[1] = mutableUsers;
      console.log('mutableState is:', mutableState);
      return mutableState;

    case LOG_IN:
      if (mutableUserStatus.loggedIn === false) {
        console.log(action.data);
        let exists = mutableUsers.findIndex(function (elem) { return (elem.user == action.data.user && elem.pass == action.data.pass); });
        console.log(exists);
        if (exists >= 0) {
          let uuidToSet = users[exists];
          mutableUserStatus.loggedIn = true;
          uuidToSet = uuidToSet.uuid;
          mutableUserStatus.uuid = uuidToSet;
          console.log('mutableState @login:', mutableState);
          return mutableState;
        } else return state;
      } else {
        return state;
      }
    
    case LOGOUT:
      if (mutableUserStatus.loggedIn === true) {
        mutableUserStatus.loggedIn = false;
        mutableUserStatus.uuid = '';
        return (mutableState[2] = mutableUserStatus);
      } else {
        return state;
      }

    case FETCH_POLITICIANS_BEGIN:
      return mutablePoliList;
      //   return {
      // 	...mutablePoliList,
      // 	loading: true,
      //   };

    case FETCH_POLITICIANS_SUCCESS:
      // Done: set loading to "false"
      // Replace the items with the ones from the server
      mutablePoliList = action.data;
      return mutablePoliList;
      //   return {
      // 	politicians: mutablePoliList,
      // 	loading: false
      //   };

    case FETCH_POLITICIANS_FAILURE:
      // Request failed. Set loading to "false"
      // Save the error for display
      // Failed, so no items to display -> set to empty
      return politicians;
      //   return {
      // 	...mutablePoliList,
      // 	loading: false,
      // 	error: action.payload.error,
      //   };

    default:
      return state;
  }
};

export default combineReducers({
  politicians: politicianListReducer //,
  // anotherKey: anotherReducer
});
