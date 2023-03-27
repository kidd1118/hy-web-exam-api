import './App.css';
import './components/Player'
import Player from './components/Player';
import { useCallback, useEffect, useState } from 'react'
import { getFollowing, getForYou } from './services/users';

function App() {
  const [url, setUrl] = useState('');
  const fetchFollowingData = useCallback(async () => {
    const response = await getFollowing();
    const data = response.data;
    if (data.items && data.items.length)
      setUrl(data.items[0].play_url);
  }, []);

  const fetchForYouData = useCallback(async () => {
    const response = await getForYou();
    const data = response.data;
    if (data.items && data.items.length)
      setUrl(data.items[0].play_url);
  }, []);

  useEffect(() => {
    fetchFollowingData()
  }, [fetchFollowingData]);

  return (
    <div className="App">
      <Player url={url}></Player>
      <div className="overlay" >
        <div onClick={() => {
            fetchFollowingData()
          }}>Following</div>
        <div>|</div>
        <div onClick={() => {
            fetchForYouData()
          }}>For You</div>
      </div>
    </div>
  );
}

export default App;
