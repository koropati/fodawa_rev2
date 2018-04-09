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

class CardMhs extends Component {

	render() {

		return (
			<Card>
				<CardItem style={{ backgroundColor: '#ecf0f1' }}>
					<Left>
						<Thumbnail source={require('../assets/mhs.png')} />
						<Body>
							<Text>{this.props.nama}</Text>
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
						<Button iconLeft style={{ backgroundColor: '#2980b9', paddingLeft: 2, height: 30, width: 100 }}>
							<Icon name='refresh' />
							<Text style={{ color: 'white', paddingRight: 10 }}>Edit</Text>

						</Button>
					</Left>
					<Right>
						<Button iconLeft onPress={() => Alert.alert(
							'Alert',
							'Yakin Dihapus ?',
							[
								{ text: 'Batal', onPress: () => console.log('Cancel ditekan'), style: 'cancel' },
								{ text: 'OK', onPress: () => console.log('Ceritanya Dihapus') },
							],
							{ cancelable: false }
						)} style={{ backgroundColor: '#c0392b', paddingLeft: 2, height: 30, width: 100 }}>
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
});