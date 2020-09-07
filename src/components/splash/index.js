import React, { useRef } from 'react';
import { Animated, StyleSheet, StatusBar, View } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native'

const splashScreen = () => {

    const logo = require('../../assets/logo.png')
    const navigation = useNavigation();
    const fade = useRef(new Animated.Value(1)).current;

    Animation();
    setTimeout(goStage, 10000);

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor={'#28b4e5'} barStyle={'light-content'} />
            <Animated.Image style={{ opacity: fade }} source={logo} />
        </View>
    );

    function goStage() {
        navigation.dispatch(StackActions.replace('Stage'));
    }

    function Animation (){
        Animated.loop(
            Animated.sequence([
                Animated.timing(
                    fade,
                    {
                        toValue: 0.2,
                        duration: 900,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    fade,
                    {
                        toValue: 1,
                        duration: 900,
                        useNativeDriver: true
                    }
                ),
            ])
        ).start();
    }
}

export default splashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28b4e5',
        alignItems: 'center',
        justifyContent: 'center'
    }
});