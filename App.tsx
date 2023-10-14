import Context from './src/context_api/context_api';
import React from 'react';
import {data} from './src/screens/faq_component/data';
import ExpandableList from './src/screens/faq_component/expandable_list';

// import Splash from "./screens/splash"
// import Onboarding from "./screens/Onboarding"

// import Postapicreateaccount from './screens/buton/createaccount/postapicreateaccount';
const App = () => {
  return (
    <Context>
      <ExpandableList data={data} />
    </Context>
  );
};

export default App;
