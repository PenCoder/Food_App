import React, {Component} from 'react'
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import {Card, CardItem, Form, View, Text, Item, Label, Input, ListItem, DatePicker, Picker, Button} from 'native-base';
import { RadioButton } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import SocketIOClient from 'socket.io-client';

import defaultStyles from '../styles/DefaultStyles';

import {PersonModel} from '../models/Models';

export default class PersonalDetails extends Component{
    constructor(props){
        super(props)
        this.state = {
            gender: null,
            marital: null,
            identification: null,
            nextAge: 0
        }

        this.personal = new PersonModel();

        this.socket = SocketIOClient('http://localhost:4000')
    }
    // Get the next birthday of client
    setNextBirthDay = (dob) => {
        this.personal.dob = dob;
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
    // Select Region from picker
    selectRegion(value){
        this.personal.contact.region = value;
        this.setState({
            region: value
        })
    }
    submitting = () => {
        this.socket.emit('submit', this.personal)
    }
    render(){
        const {person} = this.state;
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
                                <View style={defaultStyles.redBar}>
                                    <Text style={defaultStyles.title}>1.</Text>
                                    <Text style={defaultStyles.title}>PERSONAL DETAILS</Text>
                                </View>
                                <CardItem style={defaultStyles.wrap}>
                                    <Item floatingLabel style={{flex: 0.5}}>
                                        <Label>Surname</Label>
                                        <Input
                                            onChangeText={text = this.personal.name.surname}
                                        />
                                    </Item>
                                    <Item floatingLabel style={{flex: 0.5}}>
                                        <Label>First Name</Label>
                                        <Input
                                            onChangeText={text = this.personal.name.firstname}
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
                                <CardItem header>
                                    <Text>Gender: </Text>
                                </CardItem>
                                <CardItem style={defaultStyles.wrap}>
                                    <ListItem >
                                        <RadioButton
                                            value='Male'
                                            status={this.state.gender === 1 ? 'checked' : 'unchecked'}
                                            onPress={(value) => {
                                                this.setState({gender: 1})
                                                this.personal.gender = value
                                            }}
                                        />
                                        <Text note>Male</Text>
                                    </ListItem>
                                    <ListItem >
                                        <RadioButton
                                            value='Female'
                                            status={this.state.gender === 2 ? 'checked' : 'unchecked'}
                                            onPress={(value) => {
                                                this.setState({gender: 2})
                                                this.personal.gender = value
                                            }}
                                        />
                                        <Text note>Female</Text>
                                    </ListItem>
                                </CardItem>
                                
                                <CardItem >
                                    <Text>Marital Status</Text>
                                </CardItem>
                                <CardItem style={defaultStyles.wrap}>
                                    <ListItem >
                                        <RadioButton
                                            value='Single'
                                            status={this.state.marital === 0 ? 'checked' : 'unchecked'}
                                            onPress={(value) => {
                                                this.setState({marital: 0})
                                                this.personal.maritalStatus = value;
                                            }}
                                        />
                                        <Text note>Single</Text>
                                    </ListItem>
                                    <ListItem >
                                        <RadioButton
                                            value='Married'
                                            status={this.state.marital === 1 ? 'checked' : 'unchecked'}
                                            onPress={(value) => {
                                                this.setState({marital: 1})
                                                this.personal.maritalStatus = value;
                                            }}
                                        />
                                        <Text note>Married</Text>
                                    </ListItem>
                                    <ListItem >
                                        <RadioButton
                                            value='Divorced'
                                            status={this.state.marital === 2 ? 'checked' : 'unchecked'}
                                            onPress={(value) => {
                                                this.setState({marital: 2})
                                                this.personal.maritalStatus = value;
                                            }}
                                        />
                                        <Text note>Divorced</Text>
                                    </ListItem>
                                    <ListItem >
                                        <RadioButton
                                            value='Widowed'
                                            status={this.state.marital === 3 ? 'checked' : 'unchecked'}
                                            onPress={(value) => {
                                                this.setState({marital: 3})
                                                this.personal.maritalStatus = value;
                                            }}
                                        />
                                        <Text note>Widowed</Text>
                                    </ListItem>
                                </CardItem>
                                <CardItem >
                                    <Text>Identification</Text>
                                </CardItem>
                                
                                <CardItem style={defaultStyles.wrap}>
                                    <ListItem>
                                        <RadioButton
                                            value='Voters'
                                            status={this.state.identification === 1 ? 'checked' : 'unchecked'}
                                            onPress={(value) => {
                                                this.setState({identification: 1})
                                                this.personal.identification = value;
                                            }}
                                        />
                                        <Text note>Voter's ID</Text>
                                    </ListItem>
                                    <ListItem>
                                        <RadioButton
                                            value='Driver'
                                            status={this.state.identification === 2 ? 'checked' : 'unchecked'}
                                            onPress={(value) => {
                                                this.setState({identification: 2})
                                                this.personal.identification = value;
                                            }}
                                        />
                                        <Text note>Driver's Licence</Text>
                                    </ListItem>
                                    <ListItem>
                                        <RadioButton
                                            value='Passport'
                                            status={this.state.identification === 3 ? 'checked' : 'unchecked'}
                                            onPress={(value) => {
                                                this.setState({identification: 3})
                                                this.personal.identification = value;
                                            }}
                                        />
                                        <Text note>Passport</Text>
                                    </ListItem>
                                    <ListItem>
                                        <RadioButton
                                            value='National'
                                            status={this.state.identification === 4 ? 'checked' : 'unchecked'}
                                            onPress={(value) => {
                                                this.setState({identification: 4})
                                                this.personal.identification = value;
                                            }}
                                        />
                                        <Text note>National ID</Text>
                                    </ListItem>
                                    <Item floatingLabel>
                                        <Label>ID Number</Label>
                                        <Input 
                                            onChangeText={text => this.personal.idnumber = text}
                                        />
                                    </Item>
                                </CardItem>
                                <CardItem style={defaultStyles.wrap}>
                                    <Item floatingLabel>
                                        <Label>Nationality</Label>
                                        <Input 
                                            onChangeText={text => this.personal.nationality = text}
                                        />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>TIN</Label>
                                        <Input 
                                            onChangeText={text => this.personal.tin = text}
                                        />
                                    </Item>
                                </CardItem>
                                <CardItem header style={{marginTop: 25}}>
                                    <Text style={defaultStyles.title2}>Contact Details</Text>
                                </CardItem>
                                <CardItem style={defaultStyles.wrap}>
                                    <Item floatingLabel>
                                        <Label>Mobile Nos.</Label>
                                        <Input 
                                            onChangeText={text => this.personal.contact.mobile = text}
                                        />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>Email</Label>
                                        <Input 
                                            onChangeText={text => this.personal.contact.email = text}
                                        />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>Postal Address</Label>
                                        <Input 
                                            onChangeText={text => this.personal.contact.postal = text}
                                        />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>Digital Address</Label>
                                        <Input 
                                            onChangeText={text => this.personal.contact.digitalAddress = text}
                                        />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>Street</Label>
                                        <Input 
                                            onChangeText={text => this.personal.contact.street = text}
                                        />
                                    </Item>
                                </CardItem>
                                <CardItem style={defaultStyles.wrap}>
                                    <Item floatingLabel>
                                        <Label>Suburb</Label>
                                        <Input 
                                            onChangeText={text => this.personal.contact.suburb = text}
                                        />
                                    </Item>
                                    <Item floatingLabel >
                                        <Label>Town</Label>
                                        <Input 
                                            onChangeText={text => this.personal.contact.town = text}
                                        />
                                    </Item>
                                    <Item picker>
                                        <Picker
                                            placeholder='Region'
                                            iosIcon={<Icon name='arrow-down' />}
                                            selectedValue={this.state.region}
                                            onValueChange={this.selectRegion.bind(this)}>
                                            <Picker.Item label='Eastern' value='eastern'/>
                                            <Picker.Item label='Western' value='western'/>
                                            <Picker.Item label='Greater Accra' value='accra'/>
                                        </Picker>
                                        
                                    </Item>
                                </CardItem>
                                <CardItem>
                                    <Button
                                        onPress={this.submitting.bind(this)}
                                    >
                                        <Text>Next >></Text>
                                    </Button>
                                </CardItem>
                            </Form>
                        
                    </ScrollView>
                </KeyboardAvoidingView>
            </Card>

        )
    }
}