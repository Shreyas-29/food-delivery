import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native'

const Account = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView className="items-start flex-1 bg-white">
            <StatusBar style='dark' />
            <View className="flex-col items-start p-4">
                <TouchableOpacity onPress={() => navigation.goBack()} className="flex-row items-center justify-center w-10 h-10 p-2 bg-gray-100 rounded-full">
                    <Icon.ArrowLeft height={20} width={20} className="text-gray-800" />
                </TouchableOpacity>
                <Text className="mt-2 text-xl" style={{ fontFamily: "Medium" }}>
                    My Account
                </Text>
            </View>
            <View className="flex-row items-center justify-center w-full px-5 py-4">
                <Image source={require("../../assets/images/guy.webp")} style={{ width: 80, height: 80 }} />
                <View className="flex-col items-start justify-center flex-1 px-4">
                    <Text className="text-xl font-bold" style={{ fontFamily: "Medium" }}>
                        John Doe
                    </Text>
                    <Text className="text-gray-500" style={{ fontFamily: "Regular" }}>
                        +1 9876543210
                    </Text>
                </View>
                <TouchableOpacity className="flex-row items-center justify-center w-10 h-10 p-2 bg-gray-100 rounded-full">
                    <Icon.ChevronRight height={20} width={20} className="text-gray-800" />
                </TouchableOpacity>
            </View>
            <View className="flex-col items-start justify-center max-w-full px-5 py-4 mr-4">
                <Text className="text-xl font-bold" style={{ fontFamily: "Medium" }}>
                    Account Info
                </Text>
                <View className="flex-col items-start justify-center w-full max-w-xs">
                    <TouchableOpacity className="flex-row items-center justify-between w-full px-4 py-2 mt-4 rounded-full">
                        <Text className="text-base text-gray-700" style={{ fontFamily: "Regular" }}>
                            My Orders
                        </Text>
                        <Icon.ChevronRight height={20} width={20} className="text-gray-800" />
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row items-center justify-between w-full px-4 py-2 mt-4 rounded-full">
                        <Text className="text-base text-gray-700" style={{ fontFamily: "Regular" }}>
                            My Addresses
                        </Text>
                        <Icon.ChevronRight height={20} width={20} className="text-gray-800" />
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row items-center justify-between w-full px-4 py-2 mt-4 rounded-full">
                        <Text className="text-base text-gray-700" style={{ fontFamily: "Regular" }}>
                            Payment Methods
                        </Text>
                        <Icon.ChevronRight height={20} width={20} className="text-gray-800" />
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row items-center justify-between w-full px-4 py-2 mt-4 rounded-full">
                        <Text className="text-base text-gray-700" style={{ fontFamily: "Regular" }}>
                            Settings
                        </Text>
                        <Icon.ChevronRight height={20} width={20} className="text-gray-800" />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Account

const styles = StyleSheet.create({})