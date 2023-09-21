import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { featured } from '../constants'
import { themeColors } from '../theme';
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/restaurant';
import { removeFromCart, selectCartItems, selectCartTotal } from '../slices/cart';
import { StatusBar } from 'expo-status-bar'
import { urlFor } from '../../sanity';

const Cart2 = () => {

    const restaurant = useSelector(selectRestaurant);

    const cartItems = useSelector(selectCartItems);

    const cartTotal = useSelector(selectCartTotal);

    const deliveryFee = 2;

    const [groupedItems, setGroupedItems] = useState({});

    const navigation = useNavigation();

    useEffect(() => {
        const items = cartItems?.reduce((group, item) => {
            if (group[item?.id]) {
                group[item?.id].push(item);
            } else {
                group[item?.id] = [item];
            }
            return group;
        }, {});
        setGroupedItems(items);
    }, [cartItems]);

    const dispatch = useDispatch();

    return (
        <View className="relative flex-1 h-full py-8 bg-white">
            <StatusBar style='dark' />
            <View className="relative py-4 shadow-sm">
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ backgroundColor: themeColors.bgColor(1) }}
                    className="absolute z-10 p-1 rounded-full shadow top-5 left-4"
                >
                    <Icon.ChevronLeft className="w-5 h-5 text-white" strokeWidth={2.5} />
                </TouchableOpacity>
                <View>
                    <Text className="text-xl text-center" style={{ fontFamily: "SemiBold" }}>
                        Your Cart
                    </Text>
                    <Text className="text-center text-gray-500">
                        {restaurant?.name || ""}
                    </Text>
                </View>
            </View>

            <View style={{ backgroundColor: themeColors.bgColor(0.2) }} className="flex-row items-center px-4">
                <Image source={require("../../assets/images/bikeGuy.png")} className="object-cover w-20 h-20 rounded-full" />
                <Text className="flex-1 ml-2">
                    Deliver in 20 - 25 minnutes
                </Text>
                <TouchableOpacity>
                    <Text style={{ fontFamily: "SemiBold", color: themeColors.text }}>
                        Change
                    </Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 50,
                    // height: "100%"
                }}
                className="pt-5 mb-6 bg-white"
            >
                {/* {restaurant?.dishes?.map((dish, index) => ( */}
                {Object.entries(groupedItems)?.map(([key, items]) => {

                    let dish = items[0];

                    return (
                        <View key={key} className="flex-row items-center px-4 py-3 mx-2 mb-3 space-x-3 bg-white border-t shadow-xl rounded-3xl shadow-gray-400/50 border-gray-50">
                            <Text style={{ fontFamily: "Bold", color: themeColors.text }}>
                                {items?.length} ×
                            </Text>
                            <Image source={{ uri: urlFor(dish?.image).url() }} className="rounded-2xl w-14 h-14" />
                            <Text className="flex-1 text-gray-600" style={{ fontFamily: "Bold" }}>
                                {dish.name}
                            </Text>
                            <Text className="text-base" style={{ fontFamily: "SemiBold" }}>
                                ${dish.price}
                            </Text>
                            <TouchableOpacity
                                onPress={() => dispatch(removeFromCart({ id: dish?._id }))}
                                className="p-2 rounded-full"
                                style={{ backgroundColor: themeColors.bgColor(1) }}
                            >
                                <Icon.Trash2 className="text-white" width={20} height={20} strokeWidth={2} />
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </ScrollView>

            <View className="absolute inset-x-0 bottom-0 z-50 w-full pb-12 bg-white">
                <View className="relative z-50 w-full" style={{ backgroundColor: themeColors.bgColor(0.2), zIndex: 1000 }}>
                    <View className="z-50 p-6 px-8 space-y-3">
                        <View className="flex-row items-center justify-between">
                            <Text className="text-gray-700">
                                Subtotal
                            </Text>
                            <Text className="text-gray-700">
                                ${cartTotal.toFixed(2)}
                            </Text>
                        </View>
                        <View className="flex-row items-center justify-between">
                            <Text className="text-gray-700">
                                Delivery Fee
                            </Text>
                            <Text className="text-gray-700">
                                ${deliveryFee}
                            </Text>
                        </View>
                        <View className="flex-row items-center justify-between">
                            <Text className="text-gray-700" style={{ fontFamily: "Medium" }}>
                                Order Total
                            </Text>
                            <Text className="text-gray-700" style={{ fontFamily: "Medium" }}>
                                ${(cartTotal + deliveryFee).toFixed(2)}
                            </Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Cart")}
                            style={{
                                backgroundColor: themeColors.bgColor(1),
                                shadowColor: "#ea580c",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 10,
                                elevation: 3,
                            }}
                            className="p-3 border-t border-l border-r rounded-full border-orange-500/10"
                        >
                            <Text className="text-base text-center text-white" style={{ fontFamily: "Bold" }}>
                                Place Order
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Cart2

const styles = StyleSheet.create({})