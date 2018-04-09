import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	RefreshControl,
	ActivityIndicator,
	TouchableOpacity,
	Image,
	FlatList,
	List,
	ListItem
} from 'react-native';


import { Card, CardItem, Thumbnail, Icon, Container, Content, Header, Left, Body, Right, Button } from 'native-base'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import CardMhs from '../CardMhs'
import CardComponent from '../CardComponent'
class LikeTab extends Component {

	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			data: [],
			error: null,
			refreshing: false,
			ActivityIndicator_Loading: false,
		};
	}
	componentDidMount() {
		this.setState({ ActivityIndicator_Loading: true }, () => {
			this.setState({ refreshing: true });
			const url = 'http://smart-room.000webhostapp.com/testJSON.php';
			//this.setState({ loading: true });
			fetch(url)
				.then((response) => response.json())
				.then((responseJson) => {
					console.log("comp");
					console.log(responseJson);
					this.setState({
						data: responseJson,
						error: responseJson.error || null,
						loading: false,
						refreshing: false,
						ActivityIndicator_Loading: false,

					});
				}
				);
		});
	}

	
	static navigationOptions = {

		tabBarIcon: ({ tintColor }) => (
			<Icon name="ios-heart" style={{ color: tintColor }} />
		)
	}

	render() {
		return (
			<Container style={{ flex: 1, backgroundColor: 'white' }}>
				<Header style={{ backgroundColor: 'white' }}>
					<Left><Icon name="md-person-add" style={{ paddingLeft: 10 }}></Icon></Left>
					<Body style={{ alignItems: 'center' }}><Text>DATA MAHASISWA</Text></Body>
					<Right><EntypoIcon name="back-in-time" style={{ paddingRight: 10, fontSize: 32 }}></EntypoIcon></Right>
				</Header>

				<Content>
					<View>
						{
							this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#2196F3' size='large' style={styles.ActivityIndicatorStyle} /> : null
						}
						<FlatList
							data={this.state.data}
							keyExtractor={(item, index) => index}
							renderItem={({ item }) =>
								<CardMhs nama={item.nama} nim={item.nim} alamat={item.alamat} no_hp={item.no_hp} email={item.email}/>
								//<CardComponent imageSource="1" nama={item.nama} nim={item.nim}/>
							}
							refreshControl={
								<RefreshControl
									refreshing={this.state.refreshing}
									onRefresh={this.componentDidMount.bind(this)}
								/>
							}
						/>
					</View>
				</Content>


			</Container>

		);
	}
}



export default LikeTab;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	isiKonten: {
		paddingLeft: 2,

	}
});