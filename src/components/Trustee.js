import React, {Component} from 'react';
import {ScrollView, KeyboardAvoidingView} from 'react-native';

import defaultStyles from '../styles/DefaultStyles';
import { Card, CardItem, Text, View, Form, Label, Input, Item, ListItem, DatePicker } from 'native-base';
import { RadioButton } from 'react-native-paper';

import {TrusteeModel } from '../models/Models';

export default class Trustee extends Component {
    constructor(props){
        super(props);
        this.state = {
            nextAge: 0,
            gender: null
        }
        this.trusteeModel = new TrusteeModel();
    }
    setNextBirthDay = (dob) => {

        this.trusteeModel.dob = dob;
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
        return (
            <Card style={defaultStyles.fullScreen}>
                <KeyboardAvoidingView
                    behavior='position'
                    keyboardVerticalOffset={5}>
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}>
                            <Form>
                                {/* Title Bar */}
                                <View style={defaultStyles.redBar}>
                                    <Text style={defaultStyles.title}>{this.props.index}.</Text>
                                    <Text style={defaultStyles.title}>TRUSTEE INFORMATION (18 years & Above)</Text>
                                </View>

                                <CardItem style={defaultStyles.wrap}>
                                    <Item floatingLabel>
                                        <Label>Surname</Label>
                                        <Input
                                            onChangeText={text => this.trusteeModel.name.surname = text}
                                        />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>First Name(s)</Label>
                                        <Input
                                            onChangeText={text => this.trusteeModel.name.firstname = text}
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
                                <CardItem header>
                                    <Text>Gender: </Text>
                                </CardItem>
                                <CardItem style={defaultStyles.wrap}>
                                    <Text>Gender: </Text>
                                    <RadioButton.Group
                                        onValueChange={value => {
                                            this.trusteeModel.gender = value
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
                                            onChangeText={text => this.trusteeModel.relationship = text}
                                        />
                                    </Item>
                                </CardItem>
                                <CardItem style={defaultStyles.wrap}>
                                    <Item floatingLabel>
                                        <Label>Postal Address/Email</Label>
                                        <Input 
                                            onChangeText={text => this.trusteeModel.postal = text}
                                        />
                                    </Item>
                                </CardItem>
                                <CardItem style={defaultStyles.wrap}>
                                    <Item floatingLabel>
                                        <Label>Mobile Phone</Label>
                                        <Input 
                                            onChangeText={text => this.trusteeModel.relationship = text}
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