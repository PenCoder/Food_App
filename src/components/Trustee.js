import React, {Component} from 'react';
import {ScrollView, KeyboardAvoidingView} from 'react-native';

import defaultStyles from '../styles/DefaultStyles';
import { Card, CardItem, Text, View, Form, Label, Input, Item, ListItem, DatePicker } from 'native-base';
import { RadioButton } from 'react-native-paper';

export default class Trustee extends Component {
    constructor(props){
        super(props);
        this.state = {
            nextAge: 0,
            gender: null
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
    render(){
        return (
            <Card style={defaultStyles.fullScreen}>
                <KeyboardAvoidingView
                    behavior='height'
                    keyboardVerticalOffset={5}
                    >
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
                                        <Input />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>First Name(s)</Label>
                                        <Input />
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
                                </CardItem>
                                <CardItem style={defaultStyles.wrap}>
                                    <Item floatingLabel>
                                        <Label>Relationship</Label>
                                        <Input />
                                    </Item>
                                </CardItem>
                                <CardItem style={defaultStyles.wrap}>
                                    <Item floatingLabel>
                                        <Label>Postal Address/Email</Label>
                                        <Input />
                                    </Item>
                                </CardItem>
                                <CardItem style={defaultStyles.wrap}>
                                    <Item floatingLabel>
                                        <Label>Mobile Phone</Label>
                                        <Input 
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