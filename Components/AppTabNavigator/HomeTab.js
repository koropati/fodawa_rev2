import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	RefreshControl,
	ActivityIndicator,
	TouchableOpacity,
	ScrollView,
	FlatList,
	List,
	ListItem
} from 'react-native';

import CardComponent from '../CardComponent'
import { Container, Content, Icon, Thumbnail, Header, Left, Right, Body } from 'native-base'

class HomeTab extends Component {

	static navigationOptions = {

		tabBarIcon: ({ tintColor }) => (
			<Icon name="ios-home" style={{ color: tintColor }} />
		)
	}

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
			const url = 'http://mhs.rey1024.com/appmobile/B1615051046/lihatMhs.php';
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

	render() {
		return (
			<Container style={styles.container}>

				<Header style={{ backgroundColor: 'white' }}>
					<Left><Icon name="ios-camera-outline" style={{ paddingLeft: 10 }}></Icon></Left>
					<Body><Text>Fodawa</Text></Body>
					<Right><Icon name="ios-send-outline" style={{ paddingRight: 10 }}></Icon></Right>
				</Header>
				<Content
					refreshControl={
						<RefreshControl
							refreshing={this.state.refreshing}
							onRefresh={this.componentDidMount.bind(this)}
						/>
					}>
					<View style={{ height: 100 }}>
						<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 7 }}>
							<Text style={{ fontWeight: 'bold' }}>Stories</Text>
							<View style={{ flexDirection: 'row', alignItems: 'center' }}>
								<Icon name="md-play" style={{ fontSize: 14 }}></Icon>
								<Text style={{ fontWeight: 'bold' }}>Watch All</Text>
							</View>
						</View>
						<View style={{ flex: 3 }}>
							<ScrollView
								horizontal={true}
								showsHorizontalScrollIndicator={false}
								contentContainerStyle={{
									alignItems: 'center',
									paddingStart: 5,
									paddingEnd: 5
								}}
							>
								<Thumbnail style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
									source={require('../../assets/StoriesHeaderThumbnails/1.jpg')} />
								<Thumbnail style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
									source={require('../../assets/StoriesHeaderThumbnails/2.jpg')} />
								<Thumbnail style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
									source={require('../../assets/StoriesHeaderThumbnails/3.jpg')} />
								<Thumbnail style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
									source={require('../../assets/StoriesHeaderThumbnails/7.jpg')} />
								<Thumbnail style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
									source={require('../../assets/StoriesHeaderThumbnails/5.jpeg')} />
								<Thumbnail style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
									source={require('../../assets/StoriesHeaderThumbnails/6.jpg')} />
							</ScrollView>
						</View>
					</View>

					<View>
						
						<FlatList
							data={this.state.data}
							keyExtractor={(item, index) => index}
							renderItem={({ item }) =>
								<CardComponent imageSource="1" likes="101" nama={item.nama} nim={item.nim} alamat={item.alamat} no_hp={item.no_hp} email={item.email} />
								//<CardComponent imageSource="1" nama={item.nama} nim={item.nim}/>
							}


						/>
					</View>


				</Content>
			</Container>

		);
	}
}

export default HomeTab;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
});