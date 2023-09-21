import { Image, StyleSheet, Text, View, ToastAndroid } from 'react-native'
import React from 'react'
import { featured } from '../constants'
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import { themeColors } from '../theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/restaurant';
import { selectCartItems, selectCartTotal, emptyCart } from '../slices/cart'

const Delivery = () => {

    // const restaurant = featured.restaurants[0];
    const restaurant = useSelector(state => state?.restaurant?.restaurant);

    const navigation = useNavigation();

    const dispatch = useDispatch();

    const handleCancelOrder = () => {
        navigation.navigate('Home');
        dispatch(emptyCart());
        ToastAndroid.show("Your order has been cancelled", ToastAndroid.SHORT);
    }

    return (
        <View className="flex-1">
            <MapView
                initialRegion={{
                    latitude: restaurant?.lat,
                    longitude: restaurant?.lng,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
                className="flex-1"
                mapType="satellite"
            >
                <Marker
                    coordinate={{
                        latitude: restaurant?.lat,
                        longitude: restaurant?.lng,
                    }}
                    title={restaurant?.name}
                    description={restaurant?.description}
                    pinColor={themeColors.bgColor(1)}
                    style={{ borderRadius: 40 }}
                />
            </MapView>
            <View
                className="relative -mt-12 bg-white rounded-t-3xl"
                style={{
                    shadowColor: "#000",
                    shadowOpacity: 4,
                    shadowRadius: 5,
                    shadowOffset: {
                        width: 0,
                        height: -10,
                    },
                    elevation: 5,
                }}
            >
                <View className="flex-row items-center justify-between px-5 pt-10">
                    <View>
                        <Text className="text-lg text-gray-600" style={{ fontFamily: "SemiBold" }}>
                            Estimated Arrival
                        </Text>
                        <Text className="text-2xl text-gray-700" style={{ fontFamily: "Bold" }}>
                            30-40 min
                        </Text>
                        <Text className="mt-2 text-gray-700" style={{ fontFamily: "SemiBold" }}>
                            Your order is on the way
                        </Text>
                    </View>
                    <Image
                        source={require('../../assets/images/bikeGuy2.gif')}
                        className="w-24 h-24"
                    />
                </View>
                <View className="flex-row items-center justify-between p-2 mx-2 my-5 rounded-full" style={{ backgroundColor: themeColors.bgColor(0.8) }}>
                    <View className="p-1 rounded-full" style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}>
                        <Image
                            source={require('../../assets/images/guy.webp')}
                            className="object-cover w-16 h-16 rounded-full"
                        />
                    </View>
                    <View className="flex-1 ml-3">
                        <Text className="text-lg text-white" style={{ fontFamily: "Bold" }}>
                            Jai Kumar
                        </Text>
                        <Text className="text-sm text-gray-100" style={{ fontFamily: "Medium" }}>
                            Your Rider
                        </Text>
                    </View>
                    <View className="flex-row items-center mr-3 space-x-3">
                        <TouchableOpacity className="p-2 bg-white rounded-full">
                            <Icon.Phone width={24} height={24} fill={themeColors.bgColor(1)} stroke={themeColors.bgColor(1)} strokeWidth={0.2} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={handleCancelOrder}
                            className="p-2 bg-white rounded-full"
                        >
                            <Icon.X width={24} height={24} stroke="#ef4444" strokeWidth={3} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Delivery

const styles = StyleSheet.create({})