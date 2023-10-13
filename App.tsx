import Context from './src/context_api/context_api';
import React from 'react';
import Faq from './src/screens/faq';

// import Splash from "./screens/splash"
// import Onboarding from "./screens/Onboarding"

// import Postapicreateaccount from './screens/buton/createaccount/postapicreateaccount';
const App = () => {
  return (
    <Context>
      <Faq />
    </Context>
  );
};

export default App;
