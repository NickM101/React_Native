import  React, { Component } from 'react';
import { View, SafeAreaView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";

class Screen extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={ styles.container }>
                <SafeAreaView style={{flex: 1}}>
                    <TouchableOpacity 
                    style={{ alignItems: "flex-end", margin: 16 }}
                    onPress={this.props.navigation.openDrawer}>
                        <FontAwesome5 name="bars" size={24} color="#161924"/>
                    </TouchableOpacity>
                    <View 
                    style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                        <Text style={ styles.text}>
                            {this.props.name} Screen
                        </Text>
                    </View>
                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#fff"
    },
    text: {
        color: "#161924",
        fontSize: 20,
        fontWeight: "500"
    }
})

export default Screen;

