import React, {Component} from 'react'
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import {Card, CardItem, Form, View, Text, Item, Label, Input, ListItem, DatePicker, Picker, Button, Icon} from 'native-base';

import defaultStyles from '../styles/DefaultStyles';
import { RadioButton } from 'react-native-paper';

export default class FSPayments extends Component{
    constructor(props){
        super(props)
        this.state = {
            adjuster: null
        }
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
                                        <Label>Payer's Name (if different from policy holder)</Label>
                                        <Input />
                                    </Item>
                                </CardItem>
                                <CardItem style={defaultStyles.wrap}>
                                    <Item floatingLabel>
                                        <Label>Telephone No.</Label>
                                        <Input />
                                    </Item>
                                </CardItem>
                                <CardItem style={defaultStyles.wrap}>
                                    <Item floatingLabel>
                                        <Label>Form of Identification</Label>
                                        <Input />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>I.D. Number</Label>
                                        <Input />
                                    </Item>
                                {/* </CardItem>
                                <CardItem style={defaultStyles.wrap}> */}
                                    <Item floatingLabel>
                                        <Label>Employer/Pay Point Deduction</Label>
                                        <Input />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>Employee/Staff No.</Label>
                                        <Input />
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
                                {/* </CardItem>
                                <CardItem style={defaultStyles.wrap}> */}
                                    <Item floatingLabel>
                                        <Label>Account Name</Label>
                                        <Input />
                                    </Item>
                                    <Item floatingLabel >
                                        <Label>Bank</Label>
                                        <Input />
                                    </Item>
                                    <Item floatingLabel style={{flex: 0.7}}>
                                        <Label>Account Number</Label>
                                        <Input />
                                    </Item>
                                    <Item floatingLabel >
                                        <Label>Branch</Label>
                                        <Input />
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
                                        <Input />
                                    </Item>
                                    <Item floatingLabel style={{flex: 0.5}}>
                                        <Label>Frequency</Label>
                                        <Input />
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