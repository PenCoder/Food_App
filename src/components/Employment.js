import React, {Component} from 'react'
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import {Card, CardItem, Form, View, Text, Item, Label, Input, ListItem, DatePicker, Picker, Button} from 'native-base';

import defaultStyles from '../styles/DefaultStyles';
import { RadioButton } from 'react-native-paper';

import { EmploymentModel } from '../models/Models';

export default class Employment extends Component{
    constructor(props){
        super(props)
        this.state = {
            net: null
        }

        this.employmentModel = new EmploymentModel();
    }
    setEmploymentDate = (empDate) => {
        this.employmentModel.employmentDate = empDate;
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
                                    <Text style={defaultStyles.title}>2.</Text>
                                    <Text style={defaultStyles.title}>EMPLOYMENT DETAILS</Text>
                                </View>
                                <CardItem style={defaultStyles.wrap}>
                                    <Item floatingLabel>
                                        <Label>Employer</Label>
                                        <Input
                                            onChangeText={text => this.employmentModel.employer = text}
                                        />
                                    </Item>
                                
                                    <Item floatingLabel >
                                        <Label>Employee/Staff No.</Label>
                                        <Input
                                            onChangeText={text => this.employmentModel.employeeNumber = text}
                                        />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>Employment Date</Label>
                                        <DatePicker 
                                            defaultDate={new Date()}
                                            minimumDate={new Date(1990, 1, 1)}
                                            maximumDate={new Date()}
                                            locale={'en'}
                                            modalTransparent={false}
                                            androidMode='calendar'
                                            placeHolderText='Select Date'
                                            placeHolderTextStyle={{color: '#999'}}
                                            onDateChange={() => this.setEmploymentDate.bind(this)}
                                        />
                                    </Item>
                                </CardItem>
                                <CardItem header>
                                    <Text style={defaultStyles.title2}>Monthly Net Earnings (GHC)</Text>
                                </CardItem>
                                <CardItem cardBody style={defaultStyles.wrap}>
                                    <ListItem>
                                        <RadioButton
                                            value='0 - 500'
                                            status={this.state.net === 1 ? 'checked' : 'unchecked'}
                                            onPress={() => {
                                                this.setState({net: 1})
                                            }}
                                        />
                                        <Text note>0 - 500</Text>
                                    </ListItem>
                                    <ListItem>
                                        <RadioButton
                                            value='500 - 1000'
                                            status={this.state.net === 2 ? 'checked' : 'unchecked'}
                                            onPress={() => {this.setState({net: 2})}}
                                        />
                                        <Text note>500 - 1000</Text>
                                    </ListItem>
                                    <ListItem>
                                        <RadioButton
                                            value='1001 - 2000'
                                            status={this.state.net === 3 ? 'checked' : 'unchecked'}
                                            onPress={() => {this.setState({net: 3})}}
                                        />
                                        <Text note>1001 - 2000</Text>
                                    </ListItem>
                                    <ListItem>
                                        <RadioButton
                                            value='2001 - 4000'
                                            status={this.state.net === 4 ? 'checked' : 'unchecked'}
                                            onPress={() => {this.setState({net: 4})}}
                                        />
                                        <Text note>2001 - 4000</Text>
                                    </ListItem>
                                    <ListItem>
                                        <RadioButton
                                            value='above 4000'
                                            status={this.state.net === 5 ? 'checked' : 'unchecked'}
                                            onPress={() => {this.setState({net: 5})}}
                                        />
                                        <Text note>above 4000</Text>
                                    </ListItem>
                                    
                                </CardItem>
                                <CardItem style={defaultStyles.wrap}>
                                    <Item floatingLabel>
                                        <Label>Salary Payment Frequency</Label>
                                        <Input />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>Salary Pay Day</Label>
                                        <Input />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>Job Title</Label>
                                        <Input />
                                    </Item>
                                </CardItem>
                            </Form>
                        </ScrollView>
                </KeyboardAvoidingView>
            </Card>
        )
    }
}