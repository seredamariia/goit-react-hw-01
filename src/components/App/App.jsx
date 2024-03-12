import "./App.css";
import userDate from "../Profile/userData.json";
import Profile from "../Profile/Profile.jsx";

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
    </>
  );
}

export default App;
