import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { urlFor } from '../../sanity';

const RestaurantCard = ({ item }) => {

    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Restaurant', { ...item })}
        >
            <View
                style={{
                    shadowColor: themeColors.bgColor(0.5),
                    shadowRadius: 7,
                }}
                className="mb-4 mr-5 bg-white border-b shadow-lg rounded-3xl shadow-gray-500/40 border-gray-50"
            >
                <Image source={{ uri: urlFor(item?.image).url() }} className="w-64 h-36 rounded-t-2xl" />
                <View className="px-3 pb-4 space-y-1">
                    <Text className="pt-2 text-lg" style={{ fontFamily: "Medium" }}>
                        {item.name}
                    </Text>
                    <View className="flex-row items-center justify-start space-x-1">
                        <Image source={require("../../assets/images/fullStar.png")} className="w-4 h-4" />
                        <Text className="pt-1 text-xs">
                            <Text className="text-green-700" style={{ fontFamily: "Regular" }}>
                                {item.stars} {" "}
                            </Text>
                            <Text className="text-gray-700" style={{ fontFamily: "Regular" }}>
                                ({item.reviews} &#8226; reviews) {" "}
                                <Text className="">
                                    &#8226; {item?.type?.name}
                                </Text>
                            </Text>
                        </Text>
                    </View>
                    <View className="flex-row items-center space-x-1">
                        <Icon.MapPin width={12} height={12} className="text-gray-500" />
                        <Text className="text-xs text-gray-700" style={{ fontFamily: "Regular", paddingTop: 2 }}>
                            Nearby {item?.address}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default RestaurantCard

const styles = StyleSheet.create({})