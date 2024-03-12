import "./App.css";

import userDate from "../Profile/userData.json";
import friends from "../Friend list/friends.json";
import transactions from "../Transaction History/transactions.json";

import Profile from "../Profile/Profile.jsx";
import FriendList from "../Friend list/FriendList.jsx";
import TransactionHistory from "../Transaction History/TransactionHistory.jsx";

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
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
