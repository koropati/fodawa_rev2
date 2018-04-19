import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	ActivityIndicator,
	TouchableOpacity,
	RefreshControl,
	Image,
	FlatList,
	List,
	ListItem
} from 'react-native';

import { Card, CardItem, Thumbnail, Icon, Container, Content, Header, Left, Body, Right, Button } from 'native-base'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import CardMhs from '../CardMhs'

class SearchTab extends Component {

	static navigationOptions = {

		tabBarIcon: ({ tintColor }) => (
			<Icon name="ios-search" style={{ color: tintColor }} />
		)
	}

	constructor() {
		super();
		this.state = {
			valueCari: '',
			loading: false,
			data: [],
			error: null,
			refreshing: false,
			ActivityIndicator_Loading: false,
			tombolCari_ditekan: false,
		}
	}
	cariDataMhs = () => {
		if (this.state.valueCari == '') {
			alert('Pencarian Kosong !')
		}
		else {
			this.setState({ ActivityIndicator_Loading: true }, () => {
				this.setState({ refreshing: true });
				fetch('http://mhs.rey1024.com/appmobile/B1615051046/cariMhs.php',
					{
						method: 'POST',
						headers:
							{
								'Accept': 'application/json',
								'Content-Type': 'application/json',
							},
						body: JSON.stringify(
							{
								valueCari: this.state.valueCari,
							})

					})
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
			this.valueCari.clear()
			
		}


	}

	render() {
		return (
			<Container style={{ backgroundColor: 'white' }}>
				<Header style={{ backgroundColor: 'white' }}>
					<Left><Icon name="md-person-add" style={{ paddingLeft: 10 }}></Icon></Left>
					<Body style={{ alignItems: 'center' }}><Text>Cari Data Mahasiswa</Text></Body>
					<Right>
						<Button transparent >
							<EntypoIcon name="back-in-time" style={{ paddingRight: 10, fontSize: 32 }}>
							</EntypoIcon>
						</Button>
					</Right>
				</Header>
				<Content
					refreshControl={
						<RefreshControl
							refreshing={this.state.refreshing}
							onRefresh={this.cariDataMhs}
						/>
					}>
					<Card>
						<CardItem style={{ flexDirection: 'row', paddingTop: 10 }}>
							<TextInput style={{
								textAlign: 'center',
								height: 40,
								backgroundColor: "#fff",
								borderWidth: 1,
								borderColor: '#2980b9',
								borderRadius: 7,
								marginBottom: 10,
								width: '80%'
							}}
								placeholder="Masukkan Nama"
								underlineColorAndroid="transparent"
								onChangeText={(TextInputText) => this.setState({ valueCari: TextInputText })}
								ref={input => { this.valueCari = input }}
							/>


							<TouchableOpacity
								activeOpacity={0.5}
								style={styles.TouchableOpacityStyle}
								onPress={this.cariDataMhs}
							>

								<Text style={styles.TextStyle}>Cari</Text>

							</TouchableOpacity>
						</CardItem>
					</Card>
					<View>
						{
							this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#2196F3' size='large' style={styles.ActivityIndicatorStyle} /> : null
						}
						<FlatList
							data={this.state.data}
							keyExtractor={(item, index) => index}
							renderItem={({ item }) =>
								<CardMhs nama={item.nama} nim={item.nim} alamat={item.alamat} no_hp={item.no_hp} email={item.email} />
								//<CardComponent imageSource="1" nama={item.nama} nim={item.nim}/>
							}


						/>
					</View>

				</Content>
			</Container>

		);
	}
}

export default SearchTab;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	TouchableOpacityStyle:
		{
			paddingTop: 10,
			paddingBottom: 10,
			backgroundColor: '#2980b9',
			marginBottom: 10,
			width: '25%',
			flex: 3,
			marginLeft: 10,
			marginRight: 5,
			borderRadius: 7,
			alignItems: 'center',
			justifyContent: 'center',
			height: 40

		},
	TextStyle:
		{
			color: '#fff',
			textAlign: 'center',
			fontSize: 18
		},

});