import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
// import { categories } from '../constants'
import { getCategories } from '../../api';
import { urlFor } from '../../sanity';

const Categories = () => {

    const [activeCategory, setActiveCategory] = useState(null);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((data) => {
            setCategories(data);
        });
    }, []);

    return (
        <View className="mt-4">
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="overflow-visible"
                contentContainerStyle={{
                    paddingHorizontal: 20
                }}
            >
                {categories?.map((category, index) => {

                    let isActive = activeCategory?.id === category._id;
                    let btnClass = isActive ? " bg-gray-200" : " bg-gray-100"
                    let textClass = isActive ? " text-gray-600" : " text-gray-500"

                    const imageUrl = urlFor(category.image).url();
                    // console.log("category: ", category?._id, "activeCategory: ", activeCategory);

                    return (
                        <View key={index} className="flex items-center justify-center mr-4">
                            <TouchableOpacity
                                onPress={() => setActiveCategory(category?._id)}
                                className={"p-1 rounded-full shadow bg-gray-200" + btnClass}>
                                <Image
                                    source={{ uri: imageUrl }} style={{ width: 45, height: 45 }}
                                />
                            </TouchableOpacity>
                            <Text className={"text-sm text-gray-900 mt-1 " + textClass} style={{ fontFamily: isActive ? "Medium" : "Regular" }}>
                                {category.name}
                            </Text>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({})