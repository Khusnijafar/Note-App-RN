import React, { Component } from 'react'
import { FlatList, StyleSheet, Image } from 'react-native'
import { View, Container, Button, Item, Input, Content, Header, Fab } from 'native-base'
import { connect } from 'react-redux'
import { getNote } from '../redux/action/addNote'
import NoteListBox from '../components/NoteListBox';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: 'true',
            flatListProps: [
                {
                    id: '1',
                    name: 'JavaScript',
                    category: 'learn',
                    date: '2000-09-09 00:00',
                    content: 'lorem ipsum dolor sit amet'
                  }, 
                  {
                      id: '2',
                      name: 'Macbook Pro 2019',
                      category: 'wishlist',
                      date: '2000-09-09 00:00',
                      content: 'lorem ipsum dolor sit amet'
                  }, 
                  {
                      id: '3',
                      name: 'Today',
                      category: 'personal',
                      date: '2000-09-09 00:00',
                      content: 'lorem ipsum dolor sit amet'
                  }, 
                  {
                      id: '4',
                      name: 'Daily Standup',
                      category: 'work',
                      date: '2000-09-09 00:00',
                      content: 'lorem ipsum dolor sit amet'
                  }, 
                  {
                      id: '5',
                      name: 'Hello World',
                      category: 'important',
                      date: '2000-09-09 00:00',
                      content: 'lorem ipsum dolor sit amet'
                  }, 
                  {
                      id: '6',
                      name: 'Hello World',
                      category: 'important',
                      date: '2000-09-09 00:00',
                      content: 'lorem ipsum dolor sit amet'
                  }, 
            ]
        }
    }

    _KeyExtractor = (item) => item.id 

    componentDidMount = async () => {
        await this.props.dispatch(getNote())
    }

    render() {
        let random = () => {
            {
                let color = ['2FC2DF', '2FC2DF', 'C0EB6A', 'FAD06C', 'C0EB6A', 'FF92A9']
                let randomizer = Math.floor(Math.random() * (5 - 0 + 1)) + 0
                return '#' + color[randomizer]
            }
        }
        return (
            <Container>
                <View style={styles.container}>
                    <Header>
                        <Button onPress={() => this.props.navigation.openDrawer()} style={styles.navbar}>
                        <Image source={require('../images/spongebob.png')} style={{position: 'absolute', width: 40, height: 40, left: 20, top: 8, borderRadius: 50, backgroundColor: '#FFFAFA' }}/>
                        </Button>
                    </Header>

                    <Item rounded style={{ marginTop: 80, width: 300, marginLeft: 32, position: 'absolute', backgroundColor: '#fff', zIndex: 1 }}>
                        <Input placeholder='Search...'  />
                    </Item>
                    <Content>
                        
                        <FlatList 
                            style={{ marginTop: 80}}
                            data={this.state.flatListProps}
                            numColumns={2}
                            keyExtractor={this._KeyExtractor}
                            renderItem=
                            {({ item }) =>
                            <NoteListBox time={item.date} color={random()}
                                 title={item.name} 
                                 category={item.category} 
                                 notes={item.content} 
                                 events={() => this.props.navigation.navigate('AddNote')} 
                            />
                            }
                        />
                    </Content>
                </View>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        note: state.addNote.noteList
    }
}

export default connect(mapStateToProps)(Home)

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#FFFFFF",
      flex: 1,
    },
    navbar : {
      position: 'absolute',
      width: 411,
      height: 52,
      left: 0,
      top: 0,
    },
});
