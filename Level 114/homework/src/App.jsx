export default function App() {
  return (
    <div>
      <div className="container">
        <div className="left">
          <p className="your">Your Result</p>

          <div className="ball">
            <div className="info">
              <p className="big">76</p>
              <p className="small">of 100</p>
            </div>
          </div>

          <div className="text">
            <h1>Great</h1>
            <p className="text-1">
              You scored higher than 65% of <br />
              the people who have taken <br />
              these tests.
            </p>
          </div>
        </div>

        <div className="right">
          <div className="center">
            <h2>Summary</h2>

            <div className="wrapper">
              <div className="box">
                <div className="jr">
                  <p className="p p1">Reaction</p>
                </div>
                <p><span>80</span> / 100</p>
              </div>

              <div className="box">
                <div className="jr">
                  <p className="p p2">Memory</p>
                </div>
                <p><span>92</span> / 100</p>
              </div>

              <div className="box">
                <div className="jr">
                  <p className="p p3">Verbal</p>
                </div>
                <p><span>61</span> / 100</p>
              </div>

              <div className="box">
                <div className="jr">
                  <p className="p p4">Visual</p>
                </div>
                <p><span>72</span> / 100</p>
              </div>
            </div>

            <button>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}
