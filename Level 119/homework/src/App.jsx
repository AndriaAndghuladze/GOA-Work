import playlistData from "./playlistData";
import SongCard from "./SongCard";

function App() {
  return (
    <div>
      <h1>Music Playlist</h1>
      {playlistData.map((song, index) => (
        <SongCard key={index} songObject={song} />
      ))}
    </div>
  );
}

export default App;