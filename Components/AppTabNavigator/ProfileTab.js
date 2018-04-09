import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	Dimensions
} from 'react-native';

import { Icon, Container, Content, Header, Left, Body, Right, Button  } from 'native-base'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import CardComponent from '../CardComponent'
var images = [
	require('../../assets/feed_images/1.jpg'),
	require('../../assets/feed_images/2.jpg'),
	require('../../assets/feed_images/3.jpg'),
	require('../../assets/feed_images/4.jpg'),
]

var {width, height} = Dimensions.get('window')
class ProfileTab extends Component{

	static navigationOptions = {

		tabBarIcon: ({tintColor})=>(
			<Icon name="person" style={{color: tintColor}} />
		)
	}
	constructor(props){
		super(props)
		this.state = {
			activeIndex: 0
		}
	}

	segmentClicked = (index) =>{
		this.setState({
			activeIndex: index
		})
	}

	renderSectionOne = () => {
		return images.map((image,index)=>{
			return(
				<View key={index} style={[ {width:(width)/3}, {height:(width)/3},
					{marginBottom: 2},
					index % 3 !== 0 ? {paddingLeft:2}:{paddingLeft:0}
				]}>
					<Image style={{ flex: 1, width: undefined, height: undefined }}
						source={image}
					/>
				</View>

			)
		})
	}

	renderSection = () => {
		if(this.state.activeIndex == 0)
		{
			return(
				<View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>
					{this.renderSectionOne()}
				</View>

			)
		}
		else if(this.state.activeIndex == 1)
		{
			return(
				<View>
					<CardComponent imageSource="1" likes="100"/>
					<CardComponent imageSource="2" likes="100"/>
					<CardComponent imageSource="3" likes="100"/>
					<CardComponent imageSource="4" likes="100"/>
				</View>
			)
		}
	}

	render(){
		return(
			<Container style={{ flex: 1, backgroundColor: 'white' }}>
				<Header style={{ backgroundColor: 'white' }}>
					<Left><Icon name="md-person-add" style={{ paddingLeft: 10 }}></Icon></Left>
					<Body style={{ alignItems: 'center' }}><Text>Dewok Satria</Text></Body>
					<Right><EntypoIcon name="back-in-time" style={{ paddingRight: 10, fontSize: 32}}></EntypoIcon></Right>
				</Header>
				<Content>
					<View style={{ paddingTop: 10 }}>
						<View style={{ flexDirection: 'row' }}>
							<View style={{ flex: 1, alignItems: 'center' }}>
								<Image source={require('../../assets/me.png')} style={{width:75, height:75, borderRadius:37.5}} />
							</View>
							<View style={{ flex: 3 }}>
								<View style={{ flexDirection: 'row', justifyContent:'space-around' }}>
									<View style={{ alignItems: 'center' }}>
										<Text>20</Text>
										<Text style={{ fontSize: 10, color: 'grey'}}>Posts</Text>
									</View>
									<View style={{ alignItems: 'center' }}>
										<Text>33K</Text>
										<Text style={{ fontSize: 10, color: 'grey'}}>Follower</Text>
									</View>
									<View style={{ alignItems: 'center' }}>
										<Text>3</Text>
										<Text style={{ fontSize: 10, color: 'grey'}}>Following</Text>
									</View>
								
								</View>

								<View style={{ flexDirection: 'row', paddingTop: 10 }}>
									<Button bordered dark
										style={{ flex: 3, marginLeft: 10, justifyContent: 'center', height: 30}}
									>
										<Text>Edit Profile</Text>
									</Button>

									<Button bordered dark
										style={{ flex: 1, height: 30, marginRight: 10, marginLeft: 5, justifyContent: 'center'}}
									>
										<Icon name="settings"/>
									</Button>
								</View>

							</View>
						</View>

						<View style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
							<Text style={{ fontWeight: 'bold'}}>Dewok Satria</Text>
							<Text>Computer Science| robotic | Programming Electronic|</Text>
							<Text>www.cappluse.blogspot.com</Text>
						</View>
						<View>
							<View style={{ flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, borderTopColor: '#eae5e5' }}>
								<Button transparent
									onPress={()=>this.segmentClicked(0)}
									active={this.state.activeIndex == 0}
								>
									<Icon name="ios-apps-outline"
										style={[this.state.activeIndex == 0 ? {} : {color:'grey'}]}
									/>
								</Button>
								<Button transparent
									onPress={()=>this.segmentClicked(1)}
									active={this.state.activeIndex == 1}
								>
									<Icon name="ios-list-outline" 
										style={[this.state.activeIndex == 1 ? {} : {color:'grey'}]}
									/>
								</Button>
								<Button transparent
									onPress={()=>this.segmentClicked(2)}
									active={this.state.activeIndex == 2}
								>
									<Icon name="ios-people-outline"
										style={[this.state.activeIndex == 2 ? {} : {color:'grey'}]}
									/>
								</Button>
								<Button transparent
									onPress={()=>this.segmentClicked(3)}
									active={this.state.activeIndex == 3}
								>
									<Icon name="ios-bookmark-outline"
										style={[this.state.activeIndex == 3 ? {} : {color:'grey'}]}
									/>
								</Button>
							</View>

							{this.renderSection()}

						</View>
					</View>
				</Content>
			</Container>

			);
	}
}

export default ProfileTab;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});