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
import SocketIOClient from 'socket.io-client';

import BenefitsHistory from '../components/BenefitsHistory';
import MedicalHistory from '../components/MedicalHistory';
import Trustee from '../components/Trustee';
import PersonalDetails from '../components/PersonalDetails';
import FSPayments from '../components/FSPayments';
import Employment from '../components/Employment';
import PPBeneficiary from '../components/PPBeneficiary';

import {PersonModel, EmploymentModel, TrusteeModel, BeneficiaryModel, BenefitsModel, PayerModel, MedicalModel} from '../models/Models';
import SignatureView from 'react-native-signature-canvas';

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
        // Models
        this.personModel = new PersonModel();
        this.employmentModel = new EmploymentModel();
        this.trusteeModel = new TrusteeModel();
        this.beneficiaryModel = new BeneficiaryModel();
        this.benefitsModel = new BenefitsModel();
        this.payerModel = new PayerModel();
        this.medicalModel  = new MedicalModel();
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
    selectRegion(value){
        this.setState({
            region: value
        })
    }
    getModel = (model) => {

    }
    _holderDetails = {
        personal : this.personModel,
        benfits : this.benefitsModel,
        beneficiary: this.beneficiaryModel,
        trustee : this.trusteeModel,
        medical : this.medicalModel,
        payer : this.payerModel
    }
    _submit = () => {
        this.socket = SocketIOClient('http://localhost:4000');

        if (this.socket.connected){
            this.socket.emit('submit', this._holderDetails)
        }
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

                    <PersonalDetails 
                        model={this.personModel}
                    />
                    <Employment />
                    <BenefitsHistory />
                    <MedicalHistory />
                    <PPBeneficiary />
                    <Trustee />
                    <FSPayments />

                    
                </Swiper>
                <Card style={{height: 400}}>
                        <SignatureView 
                            descriptionText='Sign'
                            clearText='Clear'
                            confirmText='Save'
                            webStyle={`.m-signature-pad--footer
                                        .button {
                                        background-color: red;
                                        color: #FFF;
                                        }`}
                        />
                        <Button
                            onPress={this._submit}
                        >
                            <Text>Submit</Text>
                        </Button>
                    </Card>
                    
            </ImageBackground>
        )
    }
}