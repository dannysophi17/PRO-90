import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {WebView} from 'react-native-webview'
import { TextInput } from 'react-native-gesture-handler';

export default class StarMapScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>¡Pantalla de mapa estelar!</Text>
                <WebView>
                    scalesPageToFit={true}
                    source={{ uri:path}}
                    style={{marginTop: 20, marginBottom: 20,}}
                </WebView>
                <TextInput>
                    style={{height:40, borderColor:'gray', borderWidth:1}}
                    placeholder="ingresa la latitud"
                    placeholderTextColor = "#ffff#000000"
                    onChangeText={(text)=>{
                        this.setState({
                            latitude: text

                        })
                    }}
                </TextInput>
                <TextInput>
                    style={{height:20, borderColor:'gray', borderWidth:1}}
                    placeholder="ingresa la longitud"
                    placeholderTextColor = "#ffff#000000"
                    onChangeText={(text)=>{
                        this.setState({
                            longitude: text
                        })
                    }}
                </TextInput>
            </View>
        )
    }
}
const {longitude, latitude} = this.state;
const path = 'https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'