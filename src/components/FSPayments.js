import React, {Component} from 'react'
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import {Card, CardItem, Form, View, Text, Item, Label, Input, ListItem, DatePicker, Picker, Button, Icon} from 'native-base';

import defaultStyles from '../styles/DefaultStyles';
import { RadioButton } from 'react-native-paper';

import {PayerModel} from '../models/Models';

export default class FSPayments extends Component{
    constructor(props){
        super(props)
        this.state = {
            adjuster: null
        }

        this.payerModel = new PayerModel();
    }
    selectAdjuster(value){
        this.setState({
            adjuster: value
        })
    }
    render(){
        return(
            <Card style={defaultStyles.fullScreen}>
                <KeyboardAvoidingView
                        behavior='height'
                        keyboardVerticalOffset={5}>
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}>
                            <Form>
                                <View style={defaultStyles.redBar}>
                                    <Text style={defaultStyles.title}>8.</Text>
                                    <Text style={defaultStyles.title}>PREMIUM PAYMENT DETAILS</Text>
                                </View>
                                
                                <CardItem style={defaultStyles.wrap}>
                                    <Item floatingLabel>
                                        <Label>Payer</Label>
                                        <Input 
                                            onChangeText={text => this.payerModel.name = text}
                                        />
                                    </Item>
                                </CardItem>
                                <CardItem style={defaultStyles.wrap}>
                                    <Item floatingLabel>
                                        <Label>Telephone No.</Label>
                                        <Input 
                                            onChangeText={text => this.payerModel.mobile = text}
                                            keyboardType='phone-pad'
                                        />
                                    </Item>
                                </CardItem>
                                <CardItem style={defaultStyles.wrap}>
                                    <Item floatingLabel>
                                        <Label>Form of Identification</Label>
                                        <Input 
                                            onChangeText={text => this.payerModel.identification = text}
                                        />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>I.D. Number</Label>
                                        <Input 
                                            onChangeText={text => this.payerModel.id_number = text}
                                        />
                                    </Item>
                                {/* </CardItem>
                                <CardItem style={defaultStyles.wrap}> */}
                                    <Item floatingLabel>
                                        <Label>Employer/Pay Point Deduction</Label>
                                        <Input 
                                            onChangeText={text => this.payerModel.paypoint.employer = text}
                                        />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>Employee/Staff No.</Label>
                                        <Input 
                                            onChangeText={text => this.payerModel.paypoint.employee_number = text}
                                        />
                                    </Item>
                                    {/* <CardItem style={defaultStyles.wrap}> */}
                                    <ListItem>
                                        <Text>Date of First Deduction:</Text>
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
                                </CardItem>
                                <CardItem header style={defaultStyles.wrap}>
                                    <Text>Debit Order Information (Bank Account Details)</Text>
                                
                                    <Item floatingLabel>
                                        <Label>Account Name</Label>
                                        <Input 
                                            onChangeText={text => this.payerModel.bank_details.name = text}
                                        />
                                    </Item>
                                    <Item floatingLabel >
                                        <Label>Bank</Label>
                                        <Input 
                                            onChangeText={text => this.payerModel.bank_details.bank = text}
                                        />
                                    </Item>
                                    <Item floatingLabel style={{flex: 0.7}}>
                                        <Label>Account Number</Label>
                                        <Input 
                                            onChangeText={text => this.payerModel.bank_details.number = text}
                                        />
                                    </Item>
                                    <Item floatingLabel >
                                        <Label>Branch</Label>
                                        <Input 
                                            onChangeText={text => this.payerModel.bank_details.branch = text}
                                        />
                                    </Item>
                                    <ListItem floatingLabel >
                                        <Text>Date of First Deduction: </Text>
                                        <DatePicker 
                                            defaultDate={new Date()}
                                            minimumDate={new Date(1990, 1, 1)}
                                            maximumDate={new Date()}
                                            locale={'en'}
                                            modalTransparent={false}
                                            androidMode='calendar'
                                            placeHolderText='Select Date'
                                            placeHolderTextStyle={{color: '#999'}}
                                            // onDateChange={this.setNextBirthDay}
                                        />
                                    </ListItem>
                                    <Item floatingLabel style={{flex: 0.5}}>
                                        <Label>Premium</Label>
                                        <Input 
                                            onChangeText={text => this.payerModel.bank_details.premium = text}
                                        />
                                    </Item>
                                    <Item floatingLabel style={{flex: 0.5}}>
                                        <Label>Frequency</Label>
                                        <Input 
                                            onChangeText={text => this.payerModel.bank_details.frequency = text}
                                        />
                                    </Item>
                                    <Item picker>
                                        <Picker
                                            placeholder='Automatic Annual Adjuster'
                                            iosIcon={<Icon name='arrow-down' />}
                                            selectedValue={this.state.adjuster}
                                            onValueChange={this.selectAdjuster.bind(this)}>
                                            <Picker.Item label='0%' value='zero'/>
                                            <Picker.Item label='5%' value='five'/>
                                            <Picker.Item label='10%' value='ten'/>
                                            <Picker.Item label='15%' value='fifteen'/>
                                            <Picker.Item label='20%' value='twenty'/>
                                            <Picker.Item label='25%' value='twenty-five'/>
                                            <Picker.Item label='30%' value='thirty'/>
                                        </Picker>
                                    </Item>
                                </CardItem>
                            </Form>
                        </ScrollView> 
                </KeyboardAvoidingView>
            </Card>
        )
    }
}