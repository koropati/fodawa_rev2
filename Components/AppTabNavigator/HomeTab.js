import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView
} from 'react-native';

import CardComponent from '../CardComponent'
import { Container, Content, Icon, Thumbnail, Header, Left, Right, Body } from 'native-base'

class HomeTab extends Component{

	static navigationOptions = {

		tabBarIcon: ({tintColor})=>(
			<Icon name="ios-home" style={{color: tintColor}} />
		)
	}

	render(){
		return(
			<Container style={styles.container}>

				<Header style={{ backgroundColor: 'white' }}>
					<Left><Icon name="ios-camera-outline" style={{ paddingLeft: 10 }}></Icon></Left>
					<Body><Text>Fodawa</Text></Body>
					<Right><Icon name="ios-send-outline" style={{ paddingRight: 10 }}></Icon></Right>
				</Header>
				<Content>
					<View style={{ height: 100 }}>
						<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 7 }}>
						<Text style={{ fontWeight: 'bold'}}>Stories</Text>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<Icon name="md-play" style={{ fontSize: 14 }}></Icon>
							<Text style={{ fontWeight: 'bold'}}>Watch All</Text>
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

					<CardComponent imageSource="1" likes="101" nama="dewok" nim="11111"/>
					<CardComponent imageSource="2" likes="123" nama="satria" nim="11311"/>
					<CardComponent imageSource="3" likes="99" nama="sudi" nim="88111"/>
					<CardComponent imageSource="4" likes="999" nama="tresna" nim="189311"/>
				</Content>
			</Container>

			);
	}
}

export default HomeTab;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'white'
  },
});