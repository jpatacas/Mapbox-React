import React from 'react';
import Map from './Map';
import {getApp} from "firebase/app"

function App() {
  return (
    <div>
      <Map />
      {/* <div>{JSON.stringify(getApp())}</div> */}
    </div>
  );
}

export default App;
