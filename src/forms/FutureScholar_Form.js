import React from 'react';
import {
    StyleSheet, 
    View, 
    KeyboardAvoidingView,
    ScrollView,
    ImageBackground
} from 'react-native';
// import {} from 'react-native-elements';
import { Card, CardItem, DatePicker, Label, Input, Radio, ListItem, Text, Form, Item, Button, Picker, CheckBox } from 'native-base';

import defaultStyles from '../styles/DefaultStyles';
import { Icon } from 'react-native-elements';
import Swiper from 'react-native-swiper'
import { RadioButton } from 'react-native-paper';

import BenefitsHistory from '../components/BenefitsHistory';
import MedicalHistory from '../components/MedicalHistory';
import Trustee from '../components/Trustee';
import PersonalDetails from '../components/PersonalDetails';
import FSPayments from '../components/FSPayments';
import Employment from '../components/Employment';
import PPBeneficiary from '../components/PPBeneficiary';

export default class FutureScholar_Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nextAge: null,
            gender: null,
            net: null,
            marital: null,
            identification: null,
            region: undefined,
            adjuster: null,
            insured: null,
            refused: null,
            goodHealth: null,
            surgical: null,
            illness: null
        }
    }
    setNextBirthDay = (dob) => {
        var nextDate = new Date();
        if (nextDate.getMonth() > dob.getMonth()){
            nextDate.setMonth(dob.getMonth());
            nextDate.setDate(dob.getDate());

            nextDate.setFullYear(nextDate.getFullYear() + 1)
        }else if (nextDate.getMonth() == dob.getMonth() && nextDate.getDate() > dob.getDate()){
            nextDate.setDate(dob.getDate());

            nextDate.setFullYear(nextDate.getFullYear() + 1)
        }else if (nextDate.getMonth() == dob.getMonth() && nextDate.getDate() == dob.getDate()){
            nextDate.setFullYear(nextDate.getFullYear() + 1)
        }
        var nextAge = nextDate.getFullYear() - dob.getFullYear();
        this.setState({
            nextAge: nextAge.toString()
        })
    }
    _renderNextButton = () => {
        return (
            <Button>
                <Text>Next >></Text>
            </Button>
        )
    }
    _renderPrevButton = () => {
        return (
            <Button>
                <Text>Prev</Text>
            </Button>
        )
    }
    selectRegion(value){
        this.setState({
            region: value
        })
    }
    render(){
        return(
            <ImageBackground 
                source={{uri: 'http://localhost:8081/src/media/donewell-life-logo.jpg'}}
                style={{width: '100%', height: '100%'}}
                imageStyle={{opacity: 0.3}}>
                <Swiper
                    showsPagination={false}
                    loop={false}
                    scrollsToTop={true}>

                    <PersonalDetails/>
                    <Employment />
                    <BenefitsHistory />
                    <MedicalHistory />
                    <PPBeneficiary />
                    <Trustee 
                        index={6}
                    />
                    <FSPayments />
                </Swiper>
            
            </ImageBackground>
        )
    }
}