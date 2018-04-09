import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	StyleSheet
} from 'react-native';

import { Card, CardItem, Thumbnail, Icon, Container, Content, Header, Left, Body, Right, Button  } from 'native-base'
import EntypoIcon from 'react-native-vector-icons/Entypo'

class SearchTab extends Component{

	static navigationOptions = {

		tabBarIcon: ({tintColor})=>(
			<Icon name="ios-search" style={{color: tintColor}} />
		)
	}

	render(){
		return(
			<Container>
				<Header style={{ backgroundColor: 'white' }}>
					<Left><Icon name="md-person-add" style={{ paddingLeft: 10 }}></Icon></Left>
					<Body style={{ alignItems: 'center'}}><Text>Cari Data Mahasiswa</Text></Body>
					<Right><EntypoIcon name="back-in-time" style={{ paddingRight: 10, fontSize: 32}}></EntypoIcon></Right>
				</Header>
				<Content>
					<Card>
						<CardItem style={{ flexDirection: 'row', paddingTop: 10 }}>
							<TextInput style = {{marginLeft: 10, height: 40, width: 250, fontSize: 18, borderWidth: 1, color: 'black', borderColor:'#eae5e5', borderRadius: 1, textAlign: 'center', backgroundColor: 'white' }} placeholder="Masukkan Nama" />

							<Button bordered dark
								style={{ flex: 3, marginLeft: 10, marginRight: 10,  justifyContent: 'center', height: 40}}
							>
								<Text>Cari</Text>
							</Button>
						</CardItem>
					</Card>
					
				</Content>
			</Container>

			);
	}
}

export default SearchTab;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});