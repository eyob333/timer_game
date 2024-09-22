import Player from "./components/players";
import TimerChallenge from "./components/TimerChallenge";

function App() {
  return (
    <> 
      <header>
        <h1>The <em>Almost</em> Final Countdown</h1>
        <p>Stop the timer once you estimate that time is (almost) up</p>
      </header>
      <Player />
      <div id="challenges">
        <TimerChallenge title={'easy'} targetTime={1} />
        <TimerChallenge title={'not easy'} targetTime={5} />
        <TimerChallenge title={'getting tough'} targetTime={10} />
        <TimerChallenge title={'pros only'} targetTime={15} />
      </div>
    </>
  );
}

export default App;
