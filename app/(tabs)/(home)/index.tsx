import { Dimensions, Image, ScrollView, Text,TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Colors from '@/constants/Colors'
import Header from '@/components/layout/Header'
import Container from '@/components/layout/Container'
import { categories, FilterItem, games, mainCover, mightLike, popular} from '@/data'
import { Feather, Ionicons } from '@expo/vector-icons'
import CategoryFilter from '@/components/others/CategoryFilter'
import { BlurView } from 'expo-blur'
import Spacing from '@/constants/Spacing'
import FontSize from '@/constants/FontSize'
import Font from '@/constants/Font'
import { ITEM_SIZE } from '@/constants'
import Movies from '@/components/others/Movies'


const HomeScreen: React.FC = () => {
    const { height: HEIGHT, width: WIDTH } = Dimensions.get("window")
    const MAIN_IMAGE_HEIGHT = HEIGHT/1.7
    const [showCategories, setShowCategories] = useState(false)

    const handleFilter = (item:FilterItem) => {
        if(item.items) setShowCategories(true)
    }

    return (
        <LinearGradient style={{
            height:"100%"
        }} colors={Colors.backgroundGradient}>
            {showCategories && <BlurView
                intensity={90}
                tint="dark"
                style={{
                    position: "absolute",
                    zIndex: 1,
                    height: HEIGHT,
                    width: WIDTH,
                    paddingHorizontal: Spacing.padding.lg,
                    paddingVertical: Spacing.padding.xxl*2
            }}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    {categories.map(category => <TouchableOpacity
                    
                        key={category.id}>
                        <Text style={{
                            fontSize: FontSize.lg,
                            color: Colors.textGray,
                            marginBottom:Spacing.margin.xxl
                        }}>
                            {category.title}
                        </Text>
                    </TouchableOpacity>)}
                </ScrollView>

                <TouchableOpacity
                    onPress={()=> setShowCategories(false)}
                    style={{
                    backgroundColor: Colors.primary,
                    height: 50,
                    width: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: Spacing.borderRadius.xxl,
                    alignSelf:"center"
                }}>
                    <Ionicons name='close' size={24} color={Colors.onPrimary} />
                </TouchableOpacity>

            </BlurView>}
            <Container>
                <Header title="For Others" />
                <CategoryFilter onFilter={handleFilter} />
                <TouchableOpacity style={{
                    height: MAIN_IMAGE_HEIGHT,
                    width: "95%",
                    alignSelf: "center",
                    borderWidth: 2,
                    borderColor: Colors.darkBorder,
                    borderRadius: Spacing.borderRadius.base,
                    overflow: "hidden",
                }}>
                    <Image style={{
                        height: "100%",
                        width:"100%"
                    }} source={mainCover.image} />

                    <View style={{
                        position: "absolute",
                        width: "100%",
                        bottom:0,
                    }}>
                        <View style={{
                            flexDirection: "row",
                            marginVertical: Spacing.margin.base,
                            alignSelf:"center"
                        }}>
                            {mainCover.categories.map((category, index) => <TouchableOpacity
                                style={{
                                    flexDirection: "row",
                                    alignItems:"center"
                                }}
                                key={category.id}>
                                <Text style={{
                                    fontSize: FontSize.base,
                                    color: Colors.text,
                                    fontFamily:Font['poppins-medium']
                                }}>
                                    {category.title}
                                </Text>
                                {index !== mainCover.categories.length - 1 && <View style={{
                                    height: 8,
                                    width: 8,
                                    borderRadius: Spacing.borderRadius.xxl,
                                    backgroundColor: Colors.primary,
                                    marginHorizontal: Spacing.margin.base
                                }} />}
                            </TouchableOpacity>)}
                        </View>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingHorizontal: Spacing.padding.lg,
                            marginBottom:Spacing.margin.lg
                        }}>
                            <TouchableOpacity style={{
                                paddingVertical: Spacing.padding.base,
                                paddingHorizontal: Spacing.padding.lg,
                                backgroundColor: Colors.primary,
                                flexDirection: "row",
                                width: "48%",
                                borderRadius: Spacing.borderRadius.base,
                                justifyContent:"center",
                                alignItems:"center"
                            }}>
                                <Ionicons  name="play" size={24} color={Colors.onPrimary} />
                                <Text style={{
                                    color: Colors.onPrimary,
                                    fontSize: FontSize.base
                                }}>
                                    Play
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                paddingVertical: Spacing.padding.base,
                                paddingHorizontal: Spacing.padding.lg,
                                backgroundColor: Colors.secondary,
                                flexDirection: "row",
                                width: "48%",
                                borderRadius: Spacing.borderRadius.base,
                                justifyContent:"center",
                                alignItems:"center"
                            }}>
                                <Feather  name="plus" size={24} color={Colors.onSecondary} />
                                <Text style={{
                                    color: Colors.onSecondary,
                                    fontSize: FontSize.base
                                }}>
                                    My List
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
                
                <View style={{
                    marginVertical:Spacing.margin.base
                }}>
                    <Text style={{
                        fontSize: FontSize.lg,
                        fontFamily: Font['poppins-semiBold'],
                        color: Colors.text
                    }}>
                        Mobile Games
                    </Text>
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        style={{
                            marginVertical: Spacing.margin.base
                        }}
                        horizontal>
                        {games.map(game => <TouchableOpacity
                            style={{
                               marginRight:Spacing.margin.base
                            }}
                            key={game.id}>
                            <Image
                                style={{
                                     width: ITEM_SIZE,
                                    height: ITEM_SIZE,
                                    borderRadius:Spacing.borderRadius.lg
                                }}
                                source={game.image} />
                        </TouchableOpacity>)}
                    </ScrollView>
                </View>

                <Movies
                    title="Popular"
                    movies={popular}
                />
                <Movies
                    title="We think you'll love these"
                    movies={mightLike}
                />
           </Container>
        </LinearGradient>
    )
}

export default HomeScreen
