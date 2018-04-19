import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';

import { Icon, Container, Content, Thumbnail, Header, Left, Body, Right, Button } from 'native-base'
import EntypoIcon from 'react-native-vector-icons/Entypo'

class AddMediaTab extends Component {

  static navigationOptions = {

    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-add-circle" style={{ color: tintColor }} />
    )
  }

  constructor() {
    super();
    this.state = {
      nim: '',
      nama: '',
      alamat: '',
      no_hp: '',
      email: '',
      ActivityIndicator_Loading: false,
    }
  }



  Insert_Data_Into_MySQL = () => {

    this.setState({ ActivityIndicator_Loading: true }, () => {
      fetch('http://mhs.rey1024.com/appmobile/B1615051046/inputMhs.php',
        {
          method: 'POST',
          headers:
            {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          body: JSON.stringify(
            {
              nim: this.state.nim,
              nama: this.state.nama,
              alamat: this.state.alamat,
              no_hp: this.state.no_hp,
              email: this.state.email,

            })

        }).then((response) => response.json()).then((responseJsonFromServer) => {
          alert(responseJsonFromServer);
          this.setState({ ActivityIndicator_Loading: false });
        }).catch((error) => {
          console.error(error);
          this.setState({ ActivityIndicator_Loading: false });
        });
        this.setState({
          nim: '',
          nama: '',
          alamat: '',
          no_hp: '',
          email: ''
        })
    });
    this.nim.clear()
    this.nama.clear()
    this.alamat.clear()
    this.no_hp.clear()
    this.email.clear()

  }

  render() {

    return (

      <Container style={{ flex: 1, backgroundColor: 'white' }}>
        <Header style={{ backgroundColor: 'white' }}>
          <Left>
            <Button transparent >
              <Icon name="ios-search" style={{ paddingLeft: 10, fontSize: 32, color: '#000'}}>
              </Icon>
            </Button>
          </Left>
          <Body style={{ alignItems: 'center' }}><Text>Masukan Data Mahasiswa</Text></Body>
          <Right>
            <Button transparent >
              <EntypoIcon name="back-in-time" style={{ paddingRight: 10, fontSize: 32 }}>
              </EntypoIcon>

            </Button>
          </Right>
        </Header>
        <ScrollView>
        <KeyboardAvoidingView behavior="padding">
        <Content>
          
          <View style={styles.MainContainer}>
          
          <Image source={{uri: 'http://mhs.rey1024.com/appmobile/B1615051046/images/add.png'}} style={{ height: 180, width: 180, flex: 1, marginBottom: 10 }} />
            <TextInput
              placeholder="Masukan NIM"
              style={styles.TextInputStyleClass}
              underlineColorAndroid="transparent"
              onChangeText={(TextInputText) => this.setState({ nim: TextInputText })}
              keyboardType='numeric'
              ref={input => { this.nim = input }} />

            <TextInput
              placeholder="Masukan Nama"
              style={styles.TextInputStyleClass}
              underlineColorAndroid="transparent"
              onChangeText={(TextInputText) => this.setState({ nama: TextInputText })}
              ref={input => { this.nama = input }} />

            <TextInput
              placeholder="Masukan Alamat"
              style={styles.TextInputStyleClass}
              underlineColorAndroid="transparent"
              onChangeText={(TextInputText) => this.setState({ alamat: TextInputText })}
              ref={input => { this.alamat = input }} />

            <TextInput
              placeholder="Masukan No. Hp"
              style={styles.TextInputStyleClass}
              underlineColorAndroid="transparent"
              onChangeText={(TextInputText) => this.setState({ no_hp: TextInputText })}
              keyboardType='numeric'
              ref={input => { this.no_hp = input }} />

            <TextInput
              placeholder="Masukan Email"
              style={styles.TextInputStyleClass}
              underlineColorAndroid="transparent"
              onChangeText={(TextInputText) => this.setState({ email: TextInputText })}
              keyboardType="email-address"
              ref={input => { this.email = input }} />

            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.TouchableOpacityStyle}
              onPress={this.Insert_Data_Into_MySQL}>

              <Text style={styles.TextStyle}>Tambah Data</Text>

            </TouchableOpacity>



            {

              this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#2980b9' size='large' style={styles.ActivityIndicatorStyle} /> : null

            }

          </View>
          
        </Content>
        </KeyboardAvoidingView>
         </ScrollView>
      </Container>
      


    );
  }
}

export default AddMediaTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  MainContainer:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20
    },
  TextInputStyleClass:
    {
      textAlign: 'center',
      height: 40,
      backgroundColor: "#fff",
      borderWidth: 1,
      borderColor: '#2980b9',
      borderRadius: 7,
      marginBottom: 10,
      width: '95%'
    },
  TouchableOpacityStyle:
    {
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 7,
      backgroundColor: '#2980b9',
      marginBottom: 20,
      width: '90%'
    },
  TextStyle:
    {
      color: '#fff',
      textAlign: 'center',
      fontSize: 18
    },

  ActivityIndicatorStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});