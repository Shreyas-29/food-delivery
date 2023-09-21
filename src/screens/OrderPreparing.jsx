import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const OrderPreparing = () => {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Delivery');
        }, 3000);
    }, []);

    return (
        <View className="items-center justify-center flex-1 bg-white">
            <Image source={require('../../assets/images/delivery.gif')} className="w-80 h-80" />
        </View>
    )
}

export default OrderPreparing

const styles = StyleSheet.create({})