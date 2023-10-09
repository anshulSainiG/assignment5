import { StyleSheet, Text, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Context from './src/contextapi/contextapi';
import { MyStack } from "./src/Navigator/naviagtion";
// import Splash from "./screens/splash"
// import Onboarding from "./screens/Onboarding"
// import Createaccount from "./screens/createaccount/index"


// import Postapicreateaccount from './screens/buton/createaccount/postapicreateaccount';
const App = () => {
  return <GestureHandlerRootView style={{flex:1}}> 
  <Context>
       < MyStack/>
      {/* <Head/> */}
      {/* <Postapicreateaccount /> */}
      </Context>
     </GestureHandlerRootView>
    
  
}

export default App

