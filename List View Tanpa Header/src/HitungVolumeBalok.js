/**
 * Gus Nando
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class HitungLuasSegitiga extends Component {
  constructor(props){
    super(props)
    this.state = {
      panjang:0,
      lebar:0,
      tinggi:0,
      luas:0
    };
  }

  render() {
    return (
      <View style = {{flex:1, backgroundColor:'#FAFAFA'}}>
        <View style={{backgroundColor:'#E91E63'}}>
           <Text style = {{marginTop: 20, padding: 15, fontSize: 20, color: 'white', textAlign:'center'}} >
            Menghitung Volume Balok
          </Text>
         </View>

         <View style={{margin:20, backgroundColor:'#E91E63', borderRadius:3}}>
           <Text style = {{padding: 10, fontSize: 20, color:'white'}} >
               Panjang =  {this.state.panjang} {"\n"}
               Lebar =  {this.state.lebar} {"\n"}
               Tinggi = {this.state.tinggi} {"\n"}
               Luas = {this.state.luas}
           </Text>
          </View>

        <View style={{margin:20, padding: 10, backgroundColor:'#212121', borderRadius:3}}>
            <TextInput style = {{height: 50, color:'white'}}
              placeholder="Masukkan Panjang"
              placeholderTextColor="white"
              underlineColorAndroid= "#757575"
              selectionColor="#E91E63"
              onChangeText={(panjang)=>this.setState({panjang})}
              keyboardType = 'numeric'
            />
            <TextInput style = {{height: 50, color:'white'}}
              placeholder="Masukkan  Lebar"
              placeholderTextColor="white"
              underlineColorAndroid= "#757575"
              selectionColor="#E91E63"
              onChangeText={(lebar) => this.setState({lebar})}
              keyboardType = 'numeric'
            />

            <TextInput style = {{height: 50, color:'white' }}
              placeholder="Masukkan  Tinggi"
              placeholderTextColor="white"
              underlineColorAndroid= "#757575"
              selectionColor="#E91E63"
              onChangeText={(tinggi)=>this.setState({tinggi})}
              keyboardType = 'numeric'
            />

            <Button
              onPress={()=>this.setState({
                luas: (this.state.panjang*this.state.lebar*this.state.tinggi)
              })}
              title="Hitung"
              accessibilityLabel="Klik untuk menghitung"
              color="#E91E63"
            />
       </View>

   </View>
    );
  }
}


AppRegistry.registerComponent('GusNando', () => HitungLuasSegitiga);
