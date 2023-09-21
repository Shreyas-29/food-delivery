import { Image, Animated, Text, TouchableOpacity, View, Easing } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import { themeColors } from '../theme';
import WelcomeImage from '../components/WelcomeImage';
import { StatusBar } from 'expo-status-bar';
import * as Icon from "react-native-feather";

const Welcome = () => {

    const navigation = useNavigation();

    const scaleValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        animateScale();
    }, []);

    const animateScale = () => {
        Animated.timing(scaleValue, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start();
    };

    const animatedStyle = {
        transform: [{ scale: scaleValue }],
    };

    const circlePositions = [
        { x: -70, y: 50, width: 28, height: 28, toValue: 80 },
        { x: -150, y: 50, width: 12, height: 12, toValue: 150 },
        { x: 100, y: 50, width: 8, height: 8, toValue: 120 },
        { x: 130, y: 50, width: 16, height: 16, toValue: 180 },
    ];

    const animatedCircles = circlePositions.map((position, index) => {

        const { x, y, width, height, toValue } = position;
        const circlePosition = useRef(new Animated.Value(y)).current;

        useEffect(() => {
            animateCircle(circlePosition, y, toValue);
        }, []);

        const animateCircle = (circle, initialY, destinationY) => {
            Animated.timing(circle, {
                toValue: destinationY,
                duration: 1000, // Animation duration in milliseconds
                easing: Easing.linear, // Easing function (choose the one that fits your animation style)
                useNativeDriver: false, // Set to true if possible for better performance
            }).start();
        };

        const animatedStyle = {
            top: circlePosition,
            left: x,
            width: width,
            height: height,
        };

        return (
            <Animated.View
                key={index}
                style={[
                    {
                        position: 'absolute',
                        borderRadius: width / 2, // Set border radius to half of the width for a perfect circle
                        backgroundColor: themeColors.bgColor(0.5),
                    },
                    animatedStyle,
                ]}
            />
        );
    });


    return (
        <View className="flex-1 relative items-center justify-center w-full">
            <StatusBar style='dark' backgroundColor={themeColors.bgColor(0.02)} />
            <Text className="hidden" onPress={() => navigation.navigate("Main")}>Welcome</Text>
            <View>{animatedCircles}</View>
            <View className="h-1/2 w-full rounded-b-2xl flex items-center justify-center relative" style={{ backgroundColor: themeColors.bgColor(0.2) }}>
                <Animated.View
                    style={[
                        { backgroundColor: themeColors.bgColor(0.8) },
                        animatedStyle,
                    ]}
                    className="flex-row items-center justify-center p-2 rounded-xl absolute bottom-8 right-12"
                >
                    <Icon.Heart width={20} height={20} fill="#fff" />
                </Animated.View>
                <Animated.View
                    style={[
                        { backgroundColor: themeColors.bgColor(0.8) },
                        animatedStyle,
                    ]}
                    className="flex-row items-center justify-center p-2 rounded-xl absolute bottom-12 left-14"
                >
                    <Icon.ThumbsUp className="to-red-400" width={20} height={20} fill="#fff" />
                </Animated.View>
                <WelcomeImage color={themeColors.bgColor(1)} />
            </View>
            <View className="w-full flex items-center justify-center py-8 mt-8 px-8">
                <Text className="text-3xl text-gray-900 capitalize text-center leading-10" style={{ fontFamily: "SemiBold" }}>
                    Get the fastest delivery food
                </Text>
                <Text className="text-gray-600 text-center mt-4 leading-6 text-base" style={{ fontFamily: "Medium" }}>
                    Order food and get delivery in the fastest time in your city!
                </Text>
            </View>
            <View className="mt-auto w-full flex items-center space-y-3 px-4 pb-5">
                <TouchableOpacity
                    onPress={() => navigation.navigate("Main")}
                    style={{ backgroundColor: themeColors.bgColor(1) }}
                    className="w-full text-center rounded-full py-3 px-4"
                >
                    <Text className="text-white text-center" style={{ fontFamily: "SemiBold" }}>Get Started</Text>
                </TouchableOpacity>
                <Text className="text-xs text-gray-500 text-center mx-2" style={{ fontFamily: "Regular" }}>
                    The data you submit will be used to improve the performance of the application.
                </Text>
            </View>
        </View >
    )
}

export default Welcome;