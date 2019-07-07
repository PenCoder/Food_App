import React, {Component} from 'react'
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import {Card, CardItem, Form, View, Text, Item, Label, Input, ListItem, DatePicker, Picker, Button} from 'native-base';

import defaultStyles from '../styles/DefaultStyles';
import { RadioButton } from 'react-native-paper';

import {BeneficiaryModel} from '../models/Models';

export default class PPBeneficiary extends Component{
    constructor(props){
        super(props)
        this.state = {
            nextAge: 0
        }
        this.beneficiaryModel = new BeneficiaryModel();
    }
    setNextBirthDay = (dob) => {
        this.beneficiaryModel.dob = dob;
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
    render(){
        return(
            <Card style={defaultStyles.fullScreen}>
                <KeyboardAvoidingView
                    behavior='position'
                    keyboardVerticalOffset={5}>
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}>
                        <Form>
                            <View style={defaultStyles.redBar}>
                                    <Text style={defaultStyles.title}>6.</Text>
                                    <Text style={defaultStyles.title}>BENEFICIARY INFORMATION</Text>
                                </View>
                                <CardItem style={defaultStyles.wrap}>
                                    <Item floatingLabel style={{flex: 0.5}}>
                                        <Label>Surname</Label>
                                        <Input
                                            onChangeText={text => this.beneficiaryModel.name.surname = text}
                                        />
                                    </Item>
                                    <Item floatingLabel style={{flex: 0.5}}>
                                        <Label>First Name</Label>
                                        <Input
                                            onChangeText={text => this.beneficiaryModel.name.firstname = text}
                                        />
                                    </Item>
                                </CardItem>
                                <CardItem style={defaultStyles.wrap}>
                                    <Text>D.O.B:</Text>
                                    <ListItem>
                                        <DatePicker 
                                            defaultDate={new Date()}
                                            minimumDate={new Date(1990, 1, 1)}
                                            maximumDate={new Date()}
                                            locale={'en'}
                                            modalTransparent={false}
                                            androidMode='calendar'
                                            placeHolderText='Select Date'
                                            placeHolderTextStyle={{color: '#999'}}
                                            onDateChange={this.setNextBirthDay}
                                        />
                                    </ListItem>
                                    <Input
                                        label='Age Next B.D.:'
                                        value={`Next Age: ${this.state.nextAge}`}
                                        editable={false}
                                        style={defaultStyles.inputContainer}
                                    />
                                </CardItem>
                                {/* <CardItem style={defaultStyles.wrap}>
                                    
                                </CardItem> */}
                                <CardItem style={defaultStyles.wrap}>
                                    <Text>Gender: </Text>
                                    <RadioButton.Group
                                        onValueChange={value => {
                                            this.beneficiaryModel.gender = value
                                            this.setState({gender: value})
                                        }}
                                        value={this.state.gender}>
                                        <ListItem >
                                            <RadioButton
                                                value='Male'
                                                status={this.state.gender === 'Male' ? 'checked' : 'unchecked'}
                                             />
                                            <Text note>Male</Text>
                                        </ListItem>
                                        <ListItem >
                                            <RadioButton
                                                value='Female'
                                                status={this.state.gender === 'Female' ? 'checked' : 'unchecked'}
                                            />
                                            <Text note>Female</Text>
                                        </ListItem>
                                        
                                    </RadioButton.Group>
                                
                                    <Item floatingLabel>
                                        <Label>Relationship</Label>
                                        <Input 
                                            onChangeText={text => this.beneficiaryModel.relationship = text}
                                        />
                                    </Item>
                                </CardItem>
                                <CardItem style={defaultStyles.wrap}>
                                    <Item floatingLabel>
                                        <Label>Postal/Email Address</Label>
                                        <Input 
                                            onChangeText={text => this.beneficiaryModel.postal = text}
                                        />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>Mobile No.</Label>
                                        <Input 
                                            onChangeText={text => this.beneficiaryModel.relationship = text}
                                            keyboardType='name-phone-pad'
                                        />
                                    </Item>
                                </CardItem>
                                
                        </Form>
                    </ScrollView>
                </KeyboardAvoidingView>
            </Card>
        )
    }
}