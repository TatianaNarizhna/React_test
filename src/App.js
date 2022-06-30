import Profile from './Components/Profile/Profile';
import user from './Components/Profile/user.json';
import Statistics from './Components/Statistics/Statistics';
import data from './Components/Statistics/data.json';
import FriendList from './Components/FriendList/FriendList';
import friends from './Components/FriendList/friends.json';
import Trans from './Components/trans/trans';
import trans from './Components/trans/trans.json';

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload Stats" stats={data} />
      <FriendList friends={friends} />
      <Trans items={trans} />
    </>
  );
}

export default App;
