import { ActivityIndicator, Image, RefreshControl, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import Categories from '../components/Categories';
import { featured } from '../constants';
import Featured from '../components/Featured';
import Banner from '../components/Banner';
import Loader from '../components/Loader';
import { getFeaturedRestaurants } from '../../api';


const Home = () => {

    const [featured, setFeatured] = useState([]);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        setLoading(true);
        try {
            getFeaturedRestaurants().then((data) => {
                setFeatured(data);
            })
        } catch (error) {
            console.log("Unable to fetch products");
        } finally {
            setLoading(false);
        }
    }, []);

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        await getFeaturedRestaurants().then((data) => {
            setFeatured(data);
        });
        setRefreshing(false);
    }, []);

    return (
        <SafeAreaView className="min-h-full bg-white">
            <StatusBar style='dark' />
            <View className="flex-row items-center px-4 py-2 pb-4 space-x-2 bg-white">
                <View className="relative flex-row items-center flex-1 px-3 py-2 border border-gray-300 rounded-full">
                    <Icon.Search className="w-5 h-5 text-gray-800" />
                    <TextInput
                        placeholder='Search Food, groceries, drink, etc.'
                        className="flex-1 ml-2"
                    />
                    <View className="flex-row items-center pl-2 space-x-1 border-0 border-l border-l-gray-300">
                        <TouchableOpacity className="pl-2 pr-1">
                            <Icon.Sliders height={20} width={20} className="text-gray-800" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 20
                }}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} style={{ marginTop: 10, height: "100%" }} colors={[themeColors.bgColor(1)]} />}
            >

                <Banner
                    title="20% OFF"
                    description="When you order $10+ automatically applied."
                    button="Order now"
                    color={themeColors.bgColor(1)}
                    image={require("../../assets/images/pizza.png")}
                />

                <Categories />

                <View className="pb-16 my-5 bg-white">
                    {featured.length === 0 && (
                        <Loader size="large" className="my-12" color={themeColors.bgColor(1)} />
                        // <ActivityIndicator size="large" color={themeColors.bgColor(1)} style={{ marginVertical: 16 }} />
                    )}
                    {featured?.map((item, index) => {
                        return (
                            <Featured
                                key={index}
                                title={item.name}
                                restaurants={item.restaurants}
                                description={item.description}
                            />
                        )
                    })}
                </View>

            </ScrollView>

        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})