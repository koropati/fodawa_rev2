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
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
import LikeTab from './AppTabNavigator/LikesTab';

class editMhs extends Component {
	constructor() {
		super();
		this.state = {
			e_nim: '',
			e_nama: '',
			e_alamat: '',
			e_no_hp: '',
			e_email: '',
		}
	}

	updateMhs = () => {

		this.setState({ ActivityIndicator_Loading: true }, () => {
			fetch('http://mhs.rey1024.com/appmobile/B1615051046/editMhs.php',
				{
					method: 'POST',
					headers:
						{
							'Accept': 'application/json',
							'Content-Type': 'application/json',
						},
					body: JSON.stringify(
						{
							nim: this.state.e_nim,
							nama: this.state.e_nama,
							alamat: this.state.e_alamat,
							no_hp: this.state.e_no_hp,
							email: this.state.e_email,

						})

				}).then((response) => response.json()).then((responseJsonFromServer) => {
					Alert.alert(
						'Alert',
						(responseJsonFromServer),
						[

							{ text: 'OK', onPress: () => this.navigation.navigate('ListMhs') },
						],
						{ cancelable: false }
					);
					this.setState({ ActivityIndicator_Loading: false });
				}).catch((error) => {
					console.error(error);
					this.setState({ ActivityIndicator_Loading: false });
				});
			this.setState({
				e_nim: '',
				e_nama: '',
				e_alamat: '',
				e_no_hp: '',
				e_email: ''
			})
		});
		this.edit_nama.clear()
		this.edit_alamat.clear()
		this.edit_no_hp.clear()
		this.edit_email.clear()

	}

	render() {
		/* 2. Read the params from the navigation state */
		const { params } = this.props.navigation.state;
		const nim = params ? params.edit_nim : null;
		const nama = params ? params.edit_nama : null;
		const alamat = params ? params.edit_alamat : null;
		const no_hp = params ? params.no_hp : null;
		const email = params ? params.email : null;

		return (
			<Container style={{ flex: 1, backgroundColor: 'white' }}>
				<Header style={{ backgroundColor: 'white' }}>
					<Left>
						<Button transparent >
							<Icon name="ios-search" style={{ paddingLeft: 10, fontSize: 32, color: '#000' }}>
							</Icon>
						</Button>
					</Left>
					<Body style={{ alignItems: 'center' }}><Text>Edit Data Mahasiswa</Text></Body>
					<Right>
						<Button transparent >
							<EntypoIcon name="back-in-time" style={{ paddingRight: 10, fontSize: 32 }}>
							</EntypoIcon>

						</Button>
					</Right>
				</Header>
				<Content>
					<View style={styles.MainContainer}>

						<TextInput
							placeholder="Masukan NIM"
							style={styles.TextInputStyleClass}
							underlineColorAndroid="transparent"
							value={JSON.stringify(nim)}
							editable={false}
							onChangeText={(TextInputText) => this.setState({ e_nim: TextInputText })}
							keyboardType='numeric'
							ref={input => { this.edit_nim = input }} />

						<TextInput
							placeholder="Masukan Nama"
							style={styles.TextInputStyleClass}
							underlineColorAndroid="transparent"
							value={JSON.stringify(nama)}
							onChangeText={(TextInputText) => this.setState({ e_nama: TextInputText })}
							ref={input => { this.edit_nama = input }} />

						<TextInput
							placeholder="Masukan Alamat"
							style={styles.TextInputStyleClass}
							underlineColorAndroid="transparent"
							value={JSON.stringify(alamat)}
							onChangeText={(TextInputText) => this.setState({ e_alamat: TextInputText })}
							ref={input => { this.edit_alamat = input }} />

						<TextInput
							placeholder="Masukan No. Hp"
							style={styles.TextInputStyleClass}
							underlineColorAndroid="transparent"
							value={JSON.stringify(no_hp)}
							onChangeText={(TextInputText) => this.setState({ e_no_hp: TextInputText })}
							keyboardType='numeric'
							ref={input => { this.edit_no_hp = input }} />

						<TextInput
							placeholder="Masukan Email"
							style={styles.TextInputStyleClass}
							underlineColorAndroid="transparent"
							value={JSON.stringify(email)}
							onChangeText={(TextInputText) => this.setState({ e_email: TextInputText })}
							keyboardType="email-address"
							ref={input => { this.edit_email = input }} />

						<TouchableOpacity
							activeOpacity={0.5}
							style={styles.TouchableOpacityStyle}
							onPress={this.updateMhs}>

							<Text style={styles.TextStyle}>Edit Data</Text>

						</TouchableOpacity>



						{

							this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#009688' size='large' style={styles.ActivityIndicatorStyle} /> : null

						}

					</View>
				</Content>
			</Container>
		);
	}
}
export default editMhs;