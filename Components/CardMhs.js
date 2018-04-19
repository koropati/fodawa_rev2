import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	ActivityIndicator,
	TouchableOpacity,
	Alert
} from 'react-native';

import { Container, Header, Content, List, ListItem, Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'
import editMhs from './editMhs'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
import LikeTab from './AppTabNavigator/LikesTab';
class CardMhs extends Component {

	constructor() {
		super();
		this.state = {
			nimYgdiEdit: '',

		}
	}


	render() {

		return (
			<Card>
				<CardItem style={{ backgroundColor: '#ecf0f1' }}>
					<Left>
						<Thumbnail source={{uri: 'http://mhs.rey1024.com/appmobile/B1615051046/images/mhs.png'}} />
						<Body>
							<Text style={{ fontWeight: 'bold' }}>{this.props.nama}</Text>
							<Text note>{this.props.nim}</Text>
						</Body>
					</Left>
				</CardItem>
				<CardItem cardBody>
					<Content>
						<List>
							<ListItem icon>
								<Left>
									<Icon name="person" />
								</Left>
								<Body>
									<Text>{this.props.nama}</Text>
								</Body>
							</ListItem>
							<ListItem icon>
								<Left>
									<Icon name="barcode" />
								</Left>
								<Body>
									<Text>{this.props.nim}</Text>
								</Body>
							</ListItem>
							<ListItem icon>
								<Left>
									<Icon name="home" />
								</Left>
								<Body>
									<Text>{this.props.alamat}</Text>
								</Body>
							</ListItem>
							<ListItem icon>
								<Left>
									<Icon name="logo-whatsapp" />
								</Left>
								<Body>
									<Text>{this.props.no_hp}</Text>
								</Body>
							</ListItem>
							<ListItem icon>
								<Left>
									<Icon name="mail" />
								</Left>
								<Body>
									<Text>{this.props.email}</Text>
								</Body>
							</ListItem>
						</List>
					</Content>

				</CardItem>
				<CardItem style={{ height: 45 }}>
					<Left>
						<Button iconLeft
							onPress={() => {
								/* 1. Navigate to the Details route with params */
								this.props.navigation.navigate('Edit', {
									edit_nim: this.nim,
									edit_nama: this.nama,
									edit_alamat: this.alamat,
									edit_no_hp: this.no_hp,
									edit_email: this.email,
								});
							}}
							style={{ backgroundColor: '#2980b9', paddingLeft: 2, height: 30, width: 100, borderRadius: 7 }}>
							<Icon name='refresh' />
							<Text style={{ color: 'white', paddingRight: 10 }}>Edit</Text>

						</Button>
					</Left>
					<Right>
						<Button iconLeft onPress={() => Alert.alert(
							'Hapus Data',
							'Yakin Ingin menghapus ' + this.props.nama + ' ?',
							[
								{ text: 'Batal', onPress: () => console.log('Cancel ditekan'), style: 'cancel' },
								{
									text: 'OK', onPress: () => this.setState({ ActivityIndicator_Loading: true }, () => {
										fetch('http://mhs.rey1024.com/appmobile/B1615051046/deleteMhs.php',
											{
												method: 'POST',
												headers:
													{
														'Accept': 'application/json',
														'Content-Type': 'application/json',
													},
												body: JSON.stringify(
													{
														nim: this.props.nim,


													})

											}).then((response) => response.json()).then((responseJsonFromServer) => {
												alert(responseJsonFromServer);
												this.setState({ ActivityIndicator_Loading: false });

											}).catch((error) => {
												console.error(error);
												this.setState({ ActivityIndicator_Loading: false });

											});
									})
								},
							],
							{ cancelable: true }
						)} style={{ backgroundColor: '#c0392b', paddingLeft: 2, height: 30, width: 100, borderRadius: 7 }}>
							<Icon name='trash' />
							<Text style={{ color: 'white', paddingRight: 10 }}>Hapus</Text>

						</Button>
					</Right>
				</CardItem>
			</Card>

		);
	}
}





export default CardMhs;




const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	ActivityIndicatorStyle: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		alignItems: 'center',
		justifyContent: 'center'
	},
});