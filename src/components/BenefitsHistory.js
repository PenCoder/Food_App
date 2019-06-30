import React, {Component} from 'react'
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import {Card, CardItem, Form, View, Text, Item, Label, Input, ListItem, DatePicker, Picker, Button} from 'native-base';

import defaultStyles from '../styles/DefaultStyles';
import { RadioButton } from 'react-native-paper';

export default class BenefitsHistory extends Component{
    constructor(props){
        super(props)
        this.state = {
            adjuster: null
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
                                    <Text style={defaultStyles.title}>3.</Text>
                                    <Text style={defaultStyles.title}>BENEFITS AND PREMIUM</Text>
                                </View>
                                <CardItem style={defaultStyles.wrap}>
                                    <Item floatingLabel style={{flex: 0.4}}>
                                        <Label>Life Cover</Label>
                                        <Input />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>Planned Contribution</Label>
                                        <Input />
                                    </Item>
                                </CardItem>
                                <CardItem header>
                                    <Text>Automatic Yearly Premium Adjuster</Text>
                                </CardItem>
                                <CardItem cardBody style={defaultStyles.wrap}>
                                    <ListItem>
                                        <RadioButton
                                            value='5'
                                            status={this.state.adjuster == 5 ? 'checked' : 'unchecked'}
                                            onPress={() => this.setState({adjuster: 5})}
                                        />
                                        <Text>5%</Text>
                                    </ListItem>
                                    <ListItem>
                                        <RadioButton
                                            value='5'
                                            status={this.state.adjuster == 10 ? 'checked' : 'unchecked'}
                                            onPress={() => this.setState({adjuster: 10})}
                                        />
                                        <Text>10%</Text>
                                    </ListItem>
                                    <ListItem>
                                        <RadioButton
                                            value='5'
                                            status={this.state.adjuster == 15 ? 'checked' : 'unchecked'}
                                            onPress={() => this.setState({adjuster: 15})}
                                        />
                                        <Text>15%</Text>
                                    </ListItem>
                                    <ListItem>
                                        <RadioButton
                                            value='5'
                                            status={this.state.adjuster == 20 ? 'checked' : 'unchecked'}
                                            onPress={() => this.setState({adjuster: 20})}
                                        />
                                        <Text>20%</Text>
                                    </ListItem>
                                    <ListItem>
                                        <RadioButton
                                            value='5'
                                            status={this.state.adjuster == 25 ? 'checked' : 'unchecked'}
                                            onPress={() => this.setState({adjuster: 25})}
                                        />
                                        <Text>25%</Text>
                                    </ListItem>
                                </CardItem>
                                
                                <CardItem style={defaultStyles.wrap}>
                                    <Item floatingLabel>
                                        <Label>Encashment Term(mini, 7years)</Label>
                                        <Input />
                                    </Item>
                                </CardItem>
                                {/* Insurance History */}
                                <View style={[defaultStyles.redBar, {marginTop: 20}]}>
                                    <Text style={defaultStyles.title}>4.</Text>
                                    <Text style={defaultStyles.title}>INSURANCE HISTORY</Text>
                                </View>

                                <CardItem header style={defaultStyles.wrap}>
                                    <Text style={{backgroundColor: '#fff'}}>Do you have any insurance on your life (excluding this application) with this or any other Insurance Company</Text>
                                    <ListItem disabled>
                                        <RadioButton
                                            value='yes'
                                            status={this.state.insured == 'yes' ? 'checked' : 'unchecked'}
                                            onPress={() => this.setState({insured: 'yes'})}
                                        />
                                        <Text note>Yes</Text>
                                    </ListItem>
                                    <ListItem>
                                        <RadioButton
                                            value='no'
                                            status={this.state.insured == 'no' ? 'checked' : 'unchecked'}
                                            onPress={() => this.setState({insured: 'no'})}
                                        />
                                        <Text note>No</Text>
                                    </ListItem>
                                </CardItem>
                                <CardItem style={defaultStyles.wrap}>
                                    <Item floatingLabel>
                                        <Label>Name of Company</Label>
                                        <Input />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>Policy No.</Label>
                                        <Input />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>Sum Assured (GHC)</Label>
                                        <Input 
                                            keyboardType='number-pad'
                                        />
                                    </Item>
                                </CardItem>
                                <CardItem header style={defaultStyles.wrap}>
                                    <Text>Have you ever been refused life assurance, your application deferred or had special terms imposed on it?</Text>
                                    <ListItem disabled>
                                        <RadioButton
                                            value='yes'
                                            status={this.state.insured == 'yes' ? 'checked' : 'unchecked'}
                                            onPress={() => this.setState({refused: 'yes'})}
                                        />
                                        <Text note>Yes</Text>
                                    </ListItem>
                                    <ListItem disabled>
                                        <RadioButton
                                            value='no'
                                            status={this.state.insured == 'no' ? 'checked' : 'unchecked'}
                                            onPress={() => this.setState({refused: 'no'})}
                                        />
                                        <Text note>No</Text>
                                    </ListItem>
                                </CardItem>
                                <CardItem style={defaultStyles.wrap}>
                                    <Item floatingLabel>
                                        <Label>Name of Company</Label>
                                        <Input />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>Policy No.</Label>
                                        <Input />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>Sum Assured (GHC)</Label>
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