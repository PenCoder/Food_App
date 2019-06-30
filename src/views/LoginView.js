import React from 'react';
import {View, ImageBackground} from 'react-native';
import { Badge, Button, Text, Card, CardItem } from 'native-base';

import defaultStyles from '../styles/DefaultStyles';
import { Icon, Input } from 'react-native-elements';

export default class LoginView extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <ImageBackground
                source={{uri: 'http://localhost:8081/src/media/young-green.jpg'}}
                style={{width: '100%', height: '100%'}}
            >
                <Card 
                    style={defaultStyles.fullMarged}
                    transparent
                >
                    <View style={defaultStyles.oneThird}>
                    </View>

                    <View style={defaultStyles.twoThirds}>
                        <View style={defaultStyles.topBadge}>
                            <Icon 
                                name='shield-lock-outline' 
                                type='material-community' 
                                size={80}
                                color='white' />
                        </View>

                        <Text>Sign</Text>
                        
                        <Input 
                            containerStyle={defaultStyles.inputContainer}
                            placeholder='Username'
                        />
                        <Input 
                            containerStyle={defaultStyles.inputContainer}
                            placeholder='Password'
                        />
                        <Button
                            light
                            onPress={() => this.props.navigation.navigate('HomeNav')}
                        >
                            <Text>Submit</Text>
                        </Button>
                    </View>
                </Card>
            </ImageBackground>
        )
    }
}