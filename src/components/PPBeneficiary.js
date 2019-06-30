import React, {Component} from 'react'
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import {Card, CardItem, Form, View, Text, Item, Label, Input, ListItem, DatePicker, Picker, Button} from 'native-base';

import defaultStyles from '../styles/DefaultStyles';
import { RadioButton } from 'react-native-paper';

export default class PPBeneficiary extends Component{
    constructor(props){
        super(props)
        this.state = {
            nextAge: 0
        }
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
                                            // style={defaultStyles.inputContainer}
                                        />
                                    </Item>
                                    <Item floatingLabel style={{flex: 0.5}}>
                                        <Label>First Name</Label>
                                        <Input
                                            // style={defaultStyles.inputContainer}
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
                                    <ListItem >
                                        <RadioButton
                                            value='Male'
                                            status={this.state.gender === 1 ? 'checked' : 'unchecked'}
                                            onPress={() => {this.setState({gender: 1})}}
                                        />
                                        <Text note>Male</Text>
                                    </ListItem>
                                    <ListItem >
                                        <RadioButton
                                            value='Female'
                                            status={this.state.gender === 2 ? 'checked' : 'unchecked'}
                                            onPress={() => {this.setState({gender: 2})}}
                                        />
                                        <Text note>Female</Text>
                                    </ListItem>
                                    <Item floatingLabel>
                                        <Label>Relationship</Label>
                                        <Input />
                                    </Item>
                                </CardItem>
                                <CardItem style={defaultStyles.wrap}>
                                    <Item floatingLabel>
                                        <Label>Postal/Email Address</Label>
                                        <Input />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>Mobile No.</Label>
                                        <Input 
                                            keyboardType='number-pad'
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