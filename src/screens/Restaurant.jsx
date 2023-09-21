import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import Dish from '../components/Dish';
import CartIcon from '../components/CartIcon';
import { StatusBar } from 'expo-status-bar';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant, setResturant } from '../slices/restaurant';
import { urlFor } from '../../sanity';

const Restaurant = () => {

    const { params } = useRoute();

    const navigation = useNavigation();

    const item = params;

    const dispatch = useDispatch();

    useEffect(() => {
        if (item && item?._id) {
            dispatch(setResturant({ ...item }));
        }
    }, [item]);

    // console.log("item from restaurant", item);


    return (
        <View>
            <CartIcon />
            <StatusBar style="light" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className="relative">
                    <Image source={{ uri: urlFor(item?.image).url() }} className="w-full h-72" />
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className="absolute p-2 rounded-full shadow top-14 left-4 bg-gray-50"
                    >
                        <Icon.ChevronLeft className="w-5 h-5 text-gray-600" stroke={themeColors.bgColor(1)} strokeWidth={2.5} />
                    </TouchableOpacity>
                </View>
                <View
                    style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
                    className="flex-1 h-full pt-6 pr-4 -mt-12 overflow-hidden bg-white"
                >
                    <View className="px-5">
                        <Text className="mt-2 text-3xl" style={{ fontFamily: "Medium" }}>
                            {item.name}
                        </Text>
                        <View className="flex-row items-start justify-between w-full mt-2">
                            <View className="flex-row items-center gap-1">
                                <Icon.MapPin width={16} height={16} color={themeColors.text} />
                                <Text className="text-sm text-gray-500" style={{ fontFamily: "Regular" }}>
                                    Nearby {item?.address}
                                </Text>
                            </View>
                            <View className="flex-row items-center gap-1 ml-4">
                                <Icon.Star width={18} height={18} className="fill-amber-400" fill="#fbbf24" />
                                <Text className="text-sm text-gray-500" style={{ fontFamily: "Regular" }}>
                                    {item?.stars} ({item.reviews} review)
                                </Text>
                            </View>
                        </View>
                        <View className="flex-row items-center justify-between w-full mt-4">
                            <View className="flex-col items-start">
                                <Text className="text-base text-gray-700" style={{ fontFamily: "Medium" }}>
                                    20 - 25 min
                                </Text>
                                <Text className="text-sm text-gray-500" style={{ fontFamily: "Regular" }}>
                                    Delivery time
                                </Text>
                            </View>
                            <View className="flex-col items-start">
                                <Text className="text-base text-gray-700" style={{ fontFamily: "Medium" }}>
                                    Free delivery
                                </Text>
                                <Text className="text-sm text-gray-500" style={{ fontFamily: "Regular" }}>
                                    orders above $20
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View className="flex-1 h-full bg-white" style={
                    item?.dishes?.length >= 2 ? { paddingBottom: 144 } : { paddingBottom: 288 }
                }>
                    <Text className="p-4 text-2xl text-gray-800" style={{ fontFamily: "Medium" }}>
                        Menu
                    </Text>
                    {item?.dishes?.map((dish) => (
                        <Dish
                            key={dish._id}
                            item={{ ...dish }}
                        />
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

export default Restaurant

const styles = StyleSheet.create({})