import React, {Component} from 'react'
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import {Card, CardItem, Form, View, Text, Item, Label, Input, ListItem, DatePicker, Picker, Button, Icon} from 'native-base';

import defaultStyles from '../styles/DefaultStyles';
import { RadioButton } from 'react-native-paper';

export default class Mandate_Form extends Component{
    constructor(props){
        super(props);
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
                                    <Text style={defaultStyles.title}>CUSTOMER INFORMATION</Text>
                                </View>
                                <CardItem style={defaultStyles.wrap}>
                                    <Item floatingLabel>
                                        <Label>NAME</Label>
                                        <Input />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>TELEPHONE</Label>
                                        <Input 
                                            keyboardType='name-phone-pad'
                                        />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>TYPE OF POLICY</Label>
                                        <Input />
                                    </Item>
                                </CardItem>
                                <View style={defaultStyles.redBar}>
                                    <Text style={defaultStyles.title}>PREMIUM INSTITUTION</Text>
                                </View>
                                <CardItem style={defaultStyles.wrap}>
                                    <ListItem>
                                        <Text>DATE OF DEDUCTION</Text>
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
                                    <Item picker underline>
                                        <View>
                                            <Text>AUTOMATIC{'\n'}ANNUAL{'\n'}ADJUSTER</Text>
                                        </View>
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
                                    <Text>FREQUENCY OF DEDUCTIONS</Text>
                                    <ListItem>
                                        <RadioButton
                                            value='monthly'
                                            status={this.state.frequency == 1 ? 'checked' : 'unchecked'}
                                            onPress={() => this.setState({frequency: 1})}
                                        />
                                        <Text>Monthly</Text>
                                    </ListItem>
                                    <ListItem>
                                        <RadioButton
                                            value='quarterly'
                                            status={this.state.frequency == 2 ? 'checked' : 'unchecked'}
                                            onPress={() => this.setState({frequency: 2})}
                                        />
                                        <Text>MONTHLY</Text>
                                    </ListItem>
                                    <ListItem>
                                        <RadioButton
                                            value='half-year'
                                            status={this.state.frequency == 3 ? 'checked' : 'unchecked'}
                                            onPress={() => this.setState({frequency: 3})}
                                        />
                                        <Text>HALF-YEARLY</Text>
                                    </ListItem>
                                    <ListItem>
                                        <RadioButton
                                            value='monthly'
                                            status={this.state.frequency == 1 ? 'checked' : 'unchecked'}
                                            onPress={() => this.setState({frequency: 1})}
                                        />
                                        <Text>YEARLY</Text>
                                    </ListItem>
                                </CardItem>

                                <View style={defaultStyles.redBar}>
                                    <Text style={defaultStyles.title}>EMPLOYER/PAYPOINT DEDUCTION</Text>
                                </View>
                                <CardItem style={defaultStyles.wrap}>
                                    <Item floatingLabel>
                                        <Label>NAME OF EMPLOYER</Label>
                                        <Input />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>REGION</Label>
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