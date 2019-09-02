
import React, { Component } from 'react';
import { Image, StyleSheet, Text, } from 'react-native';
import { Container, View, Content, List, ListItem, Body, Left, Header } from 'native-base';
import {  } from 'react-navigation';

class CustomDrawer extends Component {
    render() {
        return(
            <Container>
                <Header style={{ height: 300, alignItems: 'center', backgroundColor: '#FFFFFF'}}>
                    <Body>
                        <View style={styles.photoDrawer}>
                            <Image source={require('../images/spongebob.png')}
                            style={{ width: 140, height: 140, resizeMode: "cover", borderRadius: 70 }}/>
                        </View>
                        <View style={[styles.textCenter, { width: "100%", justifyContent: "center", marginTop: 20 }]}>
                            <Text style={{ textAlign: "center", fontWeight: 'bold' }}>Spongebob Squarepants</Text>
                        </View>
                    </Body>
                </Header>
                <Content>
                    <List>
                        <View>
                            <ListItem>
                                <Left>
                                    <Image source={require('../images/writing.png')} style={{ width: 30, height: 30, marginRight: 10, marginTop: -5 }} />
                                    <Text>Personal</Text>
                                </Left>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Image source={require('../images/portfolio.png')} style={{ width: 30, height: 30, marginRight: 10, marginTop: -5 }} />
                                    <Text>Work</Text>
                                </Left>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Image source={require('../images/wishlist.png')} style={{ width: 30, height: 30, marginRight: 10, marginTop: -5 }} />
                                    <Text>Wishlist</Text>
                                </Left>
                            </ListItem>
                            <ListItem onPress={() => this.props.navigation.navigate('AddNote')}>
                                <Left>
                                    <Image source={require('../images/plus.png')} style={{ width: 30, height: 30, marginRight: 10, marginTop: -5 }} />
                                    <Text>Add Category</Text>
                                </Left>
                            </ListItem>
                            <ListItem onPress={() => this.props.navigation.navigate('EditNote')}>
                                <Left>
                                    <Image source={require('../images/plus.png')} style={{ width: 30, height: 30, marginRight: 10, marginTop: -5 }} />
                                    <Text>Edit Category</Text>
                                </Left>
                            </ListItem>
                        </View>
                    </List>
                </Content>
            </Container>
        )
    }
}

export default CustomDrawer

const styles = StyleSheet.create({
    photoDrawer: {
        width: 140,
        height: 140,
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#FFFFFF",
        borderRadius: 70
    },
    textCenter: {
        justifyContent: "center"
    },
});