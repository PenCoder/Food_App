import React, {Component} from 'react';
import {KeyboardAvoidingView, ScrollView} from 'react-native';

import defaultStyles from '../styles/DefaultStyles';
import { Card, Form, View, Text, CardItem, Item, Label, Input, ListItem } from 'native-base';
import { RadioButton } from 'react-native-paper';

export default class MedicalHistory extends Component{
    constructor(props){
        super(props)
        this.state = {
            goodHealth: null,
            surgical: null,
            illness: null
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
                                        <Text style={defaultStyles.title}>5.</Text>
                                        <Text style={defaultStyles.title}>MEDICAL HISTORY</Text>
                                    </View>
                                    <CardItem style={defaultStyles.wrap}>
                                        <Item floatingLabel>
                                            <Label>Clinic/Hospital attended in the last 5 years</Label>
                                            <Input />
                                        </Item>
                                    </CardItem>
                                    <CardItem style={[defaultStyles.wrap, {justifyContent: 'space-between'}]}>
                                        <Item floatingLabel style={{flex: 0.45}}>
                                            <Label>Height (m)</Label>
                                            <Input 
                                                keyboardType='numeric'
                                            />
                                        </Item>
                                        <Item floatingLabel style={{flex: 0.45}}>
                                            <Label>Weight (kg)</Label>
                                            <Input 
                                                keyboardType='numeric'
                                            />
                                        </Item>
                                    </CardItem>
                                    <CardItem header style={defaultStyles.wrap }>
                                        <Text>(i) Are you presently in good health?</Text>
                                        <ListItem>
                                            <RadioButton
                                                value='yes'
                                                status={this.state.goodHealth == 'yes' ? 'checked' : 'unchecked'}
                                                onValueChange={() => this.setState({goodHealth: 'yes'})}
                                            />
                                            <Text>Yes</Text>
                                        </ListItem>
                                        <ListItem>
                                            <RadioButton
                                                value='no'
                                                status={this.state.goodHealth == 'no' ? 'checked' : 'unchecked'}
                                                onValueChange={() => this.setState({goodHealth: 'no'})}
                                            />
                                            <Text>No</Text>
                                        </ListItem>
                                    </CardItem>
                                    <CardItem header style={defaultStyles.wrap }>
                                        <Text>(ii) Have you had any surgical operation, accident or undergone any specialized investigation?</Text>
                                        <ListItem>
                                            <RadioButton
                                                value='yes'
                                                status={this.state.surgical == 'yes' ? 'checked' : 'unchecked'}
                                                onValueChange={() => this.setState({surgical: 'yes'})}
                                            />
                                            <Text>Yes</Text>
                                        </ListItem>
                                        <ListItem>
                                            <RadioButton
                                                value='no'
                                                status={this.state.surgical == 'no' ? 'checked' : 'unchecked'}
                                                onValueChange={() => this.setState({surgical: 'no'})}
                                            />
                                            <Text>No</Text>
                                        </ListItem>
                                    </CardItem>
                                    <CardItem header style={defaultStyles.wrap }>
                                        <Text>(i) Are you presently in good health?</Text>
                                        <ListItem>
                                            <RadioButton
                                                value='yes'
                                                status={this.state.illness == 'yes' ? 'checked' : 'unchecked'}
                                                onValueChange={() => this.setState({illness: 'yes'})}
                                            />
                                            <Text note>Yes</Text>
                                        </ListItem>
                                        <ListItem>
                                            <RadioButton
                                                value='no'
                                                status={this.state.illness == 'no' ? 'checked' : 'unchecked'}
                                                onValueChange={() => this.setState({illness: 'no'})}
                                            />
                                            <Text note>No</Text>
                                        </ListItem>
                                    </CardItem>
                                    <CardItem header style={defaultStyles.wrap}>
                                        <Text>If question (i) is answered "No" or any of the questions (ii) - (iii) above is answered "Yes", please give details below.</Text>
                                        <Item floatingLabel>
                                            <Label>Illness/Investigation</Label>
                                            <Input />
                                        </Item>
                                        <Item floatingLabel>
                                            <Label>Date</Label>
                                            <Input />
                                        </Item>
                                        <Item floatingLabel style={{width: '30%'}}>
                                            <Label>Duration</Label>
                                            <Input />
                                        </Item>
                                        <Item floatingLabel style={{width: '30%'}}>
                                            <Label>Results</Label>
                                            <Input />
                                        </Item>
                                        <Item floatingLabel>
                                            <Label>Doctor's name & address, Number</Label>
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