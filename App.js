import React from 'react';
import GlobalFont from 'react-native-global-font';
// import {createStackNavigator, createAppContainer} from 'react-navigation'

// import Chat from './src/components/Chat';
// import Site from './src/components/Site';
// import FillaView from './src/views/FillaView';

import MainApp from './src/nav/MainApp'

// const MainNavigator = createStackNavigator({
//   Home: {
//     screen: Site,
//     navigationOptions: {
//       // header: MainHeader,
//     }, 
//   },
//   Chat: {screen: Chat},
//   // Profile: {screen: ProfileView},
//   Filla: {screen: FillaView}
// });
export default class App extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        var font = ''
    }
    render(){
        return(
            <MainApp />
        )
    }
}

// const App = createAppContainer(MainApp);

// export default App;
