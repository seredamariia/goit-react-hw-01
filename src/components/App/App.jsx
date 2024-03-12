import './App.css';

import userDate from '../Profile/userData.json';
import friends from '../Friend list/friends.json';

import Profile from '../Profile/Profile.jsx';
import FriendList from '../Friend list/FriendList.jsx';

function App() {
  return (
    <>
      <Profile
        username={userDate.username}
        tag={userDate.tag}
        location={userDate.location}
        avatar={userDate.avatar}
        stats={userDate.stats}
      />
      <FriendList friends={friends} />
    </>
  );
}

export default App;
