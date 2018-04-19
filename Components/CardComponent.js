import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image
} from 'react-native';

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon} from 'native-base'

class CardComponent extends Component{

	render(){

		const images = {
			"1": {uri: 'http://mhs.rey1024.com/appmobile/B1615051046/images/feed_images/1.jpg'},
			"2": {uri: 'http://mhs.rey1024.com/appmobile/B1615051046/images/feed_images/2.jpg'},
			"3": {uri: 'http://mhs.rey1024.com/appmobile/B1615051046/images/feed_images/3.jpg'},
			"4": {uri: 'http://mhs.rey1024.com/appmobile/B1615051046/images/feed_images/4.jpg'}
		}


		return(
			<Card>
				<CardItem>
					<Left>
						<Thumbnail source={{uri: 'http://mhs.rey1024.com/appmobile/B1615051046/images/mhs.png'}} />
						<Body>
							<Text style={{ fontWeight:"900", paddingRight: 10}}>{this.props.nama}</Text>
							<Text note>{this.props.nim}</Text>
						</Body>
					</Left>
				</CardItem>
				<CardItem cardBody>
					<Image source={images[this.props.imageSource]} style={{ height: 200, width: null, flex: 1 }} />
				</CardItem>
				<CardItem style={{ height: 45}}>
					<Left>
						<Button transparent>
							<Icon name="ios-heart-outline" style={{color:'black'}}/>
						</Button>
						<Button transparent>
							<Icon name="ios-chatbubbles-outline" style={{color:'black'}}/>
						</Button>
						<Button transparent>
							<Icon name="ios-send-outline" style={{color:'black'}}/>
						</Button>
					</Left>
				</CardItem>

				<CardItem style={{ height: 20}}>
					<Text>{this.props.likes} Likes</Text>
				</CardItem>
				<CardItem>
					<Body>
						<Text>
							<Text style={{ fontWeight:"900", paddingRight: 10}}>
							{this.props.nama} {"\n"}
							</Text>
							<Text>
								Halo Nama Saya {this.props.nama} Nim saya yaitu {this.props.nim} Saya tinggal di  {this.props.alamat}
							 Anda bisa menghubungi saya di No {this.props.no_hp}
							 </Text>

						</Text>
					</Body>
				</CardItem>
			</Card>

			);
	}
}

export default CardComponent;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});