import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import RestaurantCard from './RestaurantCard'

const Featured = ({ title, description, restaurants }) => {
    return (
        <View>
            <View className="flex-row items-center justify-between px-4">
                <View>
                    <Text className="text-lg" style={{ fontFamily: "Medium" }}>
                        {title}
                    </Text>
                    <Text className="text-sm text-gray-500 capitalize" style={{ fontFamily: "Regular" }}>
                        {description}
                    </Text>
                </View>
                <TouchableOpacity>
                    <Text style={{ color: themeColors.text, fontFamily: "Regular" }}>
                        See all
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 20,
                }}
                className="py-5 overflow-visible"
            >
                {restaurants?.map((restaurant, index) => {
                    return (
                        <RestaurantCard
                            key={index}
                            item={restaurant}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default Featured

const styles = StyleSheet.create({})