import React from 'react';
import { TouchableNativeFeedback, StyleSheet, ImageBackground, Image } from 'react-native';
import { Card, Text, View, CardItem, Container, Header, Content, ListItem } from 'native-base';

import defaultStyles from '../styles/DefaultStyles';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';

export default class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            // <ImageBackground 
            //     source={{uri: 'http://localhost:8081/src/media/background.jpg'}}
            //     style={{width: '100%', height: '100%'}}
            //     imageStyle={{opacity: 0.3}}>
            //     <View style={defaultStyles.translucent}>
            //         <CardItem>
                        
            //         </CardItem>
            //     </View>
            // </ImageBackground>
            
                <Card style={defaultStyles.fullScreen}>
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        >
                        <TouchableNativeFeedback
                            onPress={() => {this.props.navigation.navigate('FutureScholar')}}
                            useForeground>
                            <CardItem 
                                style={[defaultStyles.navItems, {backgroundColor: '#311B92'}]}
                                bordered>
                                <Icon name='graduation-cap' type='font-awesome' color='#fff' />
                                <Text style={[defaultStyles.navLabel, {color: '#fff'}]}>Future Scholar</Text>
                            </CardItem>
                        </TouchableNativeFeedback>
                        
                        <TouchableNativeFeedback
                            onPress={() => {this.props.navigation.navigate('RoyalFuneral')}}
                            useForeground>
                            <CardItem 
                                style={defaultStyles.navItems}
                                bordered>
                                <Icon name='medal' type='material-community' color='#787878' />
                                <Text style={[defaultStyles.navLabel, {color: '#787878'}]}>Royal Funeral</Text>
                            </CardItem>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback
                            onPress={() => {this.props.navigation.navigate('PersonlPension')}}
                            useForeground>
                            <CardItem 
                                style={[defaultStyles.navItems, {backgroundColor: '#F4F4F4'}]}
                                bordered>
                                <Icon name='road' type='font-awesome' color='#F50057' />
                                <Text style={[defaultStyles.navLabel, {color: '#F50057'}]}>Personal Pension</Text>
                            </CardItem>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback
                            onPress={() => {this.props.navigation.navigate('ExecutivePension')}}
                            useForeground>
                            <CardItem 
                                style={[defaultStyles.navItems, {backgroundColor: '#FFB74D'}]}
                                bordered>
                                <Icon name='suitcase' type='font-awesome' color='#311B92' />
                                <Text style={[defaultStyles.navLabel, {color: '#311B92'}]}>Executive Pension</Text>
                            </CardItem>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback
                            onPress={() => {}}
                            useForeground>
                            <CardItem 
                                style={[defaultStyles.navItems, {backgroundColor: '#F50057'}]}
                                bordered>
                                <Text style={[defaultStyles.navLabel, {color: '#fff'}]}>Executive Pension</Text>
                            </CardItem>
                        </TouchableNativeFeedback>
                    </ScrollView>
                </Card>
        )
    }
}

const styles = StyleSheet.create({
    translucent: {
        backgroundColor: 'rgba(245, 00, 87, 0.4)'
    }
})