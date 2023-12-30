/**
 * @format
 */

import {AppRegistry, StatusBar, View} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

function Layout(){
return(
<>




<App />



</>

)

}



AppRegistry.registerComponent(appName, () => Layout);
