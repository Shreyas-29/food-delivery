import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'

const Banner = ({ image, title, description, button, color }) => {
    return (
        <View className="flex-row items-center justify-center w-full px-4 pb-4">
            <View
                className="flex-row items-center justify-center w-full px-6 py-5 rounded-3xl"
                style={{
                    backgroundColor: color,
                    shadowColor: color,
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 1,
                    shadowRadius: 5,
                    elevation: 5,
                }}
            >
                <View className="flex flex-col items-start flex-1 w-full">
                    <Text className="text-lg text-gray-50" style={styles.text}>
                        {title}
                    </Text>
                    <Text className="mt-1.5 text-xs text-gray-100" style={styles.description}>
                        {description}
                    </Text>
                    <TouchableOpacity className="px-3 py-1.5 mt-3 bg-white rounded-full shadow shadow-white" style={{
                        // shadowColor: "#000",
                        // shadowOffset: {
                        //     width: 0,
                        //     height: 4,
                        // },
                        // shadowOpacity: 0.5,
                        // shadowRadius: 5,
                        // elevation: 2,
                    }}>
                        <Text style={styles.btn} className="text-sm">
                            {button}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View className="items-end justify-end w-32 h-auto pl-4 max-h-28">
                    <Image source={image} style={{ height: "100%", width: "100%", objectFit: "contain" }} className="object-contain" />
                </View>
            </View>
        </View>
    )
}

export default Banner

const styles = StyleSheet.create({
    text: {
        fontFamily: "SemiBold"
    },
    description: {
        fontFamily: "Regular"
    },
    btn: {
        fontFamily: "Medium",
        color: themeColors.text
    }
})