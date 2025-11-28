import React from "react";
import App from "./App";


import React from "react";
import Comp1 from "./comp1";

export default function App() {
  return (
    <div>
      <h1>App Component</h1>
      <Comp1 />
    </div>
  );
}

import React from "react";
import Comp2 from "./comp2";

export default function Comp1() {
  return (
    <div>
      <h2>Comp1 Component</h2>
    </div>
  );
}


import React from "react";

export default function Comp2() {
  return (
    <div>
      <h3>Comp2 Component</h3>
    </div>
  );
}