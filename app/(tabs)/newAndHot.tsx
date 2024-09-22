import { Dimensions, Image, ImageSourcePropType, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '@/components/layout/Header'
import Spacing from '@/constants/Spacing'
import Colors from '@/constants/Colors'
import Font from '@/constants/Font'
import FontSize from '@/constants/FontSize'
import { comingSoon, everyoneWatching, NewAndHotMovieItem } from '@/data'
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

type Item = {
    title: string,
    image: ImageSourcePropType
}

const tabItems:Item[] = [
    {
        title: "Coming Soon",
        image: require('../../assets/images/popcorn.png')
    },
    {
        title: "Everyone's Watching",
        image: require('../../assets/images/fire-icon.png')
    }
]

const LEFT_ITEM_SIZE = 50

const NewAndHot: React.FC = () => {
    const CARD_WIDTH = Dimensions.get("window").width - (2*Spacing.padding.base) - LEFT_ITEM_SIZE
    const [activeTab, setActiveTab] = useState<number>(0)
    const [movies, setMovies] = useState<NewAndHotMovieItem[]>([])
    const [showingComingSoon, setShowingComingSoon] = useState<boolean>(true)

    useEffect(() => {
        if (activeTab === 0) {
            setMovies(comingSoon)
            setShowingComingSoon(true)
        }
        else {
            setMovies(everyoneWatching)
            setShowingComingSoon(false)
        }
    }, [activeTab])

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{padding: Spacing.padding.base }}>
                    <Header title="New & Hot" />
                    <ScrollView horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{
                            marginVertical:Spacing.margin.base
                        }}
                    >
                        {tabItems.map((item, index) => <TouchableOpacity
                            onPress={()=>setActiveTab(index)}
                            style={{
                                flexDirection: "row",
                                paddingVertical: Spacing.padding.base,
                                paddingHorizontal: Spacing.padding.base + 5,
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: activeTab === index ? Colors.primary : Colors.background,
                                borderRadius: Spacing.borderRadius.xxl
                            }}
                            key={item.title}
                        >
                            <Image
                                style={{
                                    height: 25,
                                    width: 30
                                }}
                                resizeMode="contain"
                                source={item.image} />
                            <Text style={{
                                color: activeTab === index? Colors.onPrimary : Colors.text,
                                fontFamily: Font['poppins-semiBold'],
                                fontSize: FontSize.sm,
                            }}>
                                    {item.title}
                            </Text>
                        </TouchableOpacity>)}
                    </ScrollView>

                    <View>
                        <Text style={{
                            color: Colors.text,
                            fontFamily: Font['poppins-bold'],
                            marginBottom: Spacing.margin.base,
                            fontSize: FontSize.lg
                        }}>
                            <Image source={showingComingSoon ? require("../../assets/images/popcorn.png") : require("../../assets/images/fire-icon.png") }
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 25
                                }}
                            />
                          {showingComingSoon ? "  Coming Soon" : "Everyone's watching"}
                        </Text>

                        <View>
                            {movies.map(movie =>
                                <View
                                    key={movie.id}
                                    style={{
                                    marginBottom:Spacing.margin.lg
                                }}>
                                    <View style={{
                                        flexDirection: showingComingSoon ?"row" : "column"
                                    }}>
                                       {movie.comingOn && <View style={{
                                            width: LEFT_ITEM_SIZE
                                        }}>
                                             <Text style={{
                                                color: Colors.text,
                                                fontSize: FontSize.lg,
                                                fontFamily: Font['poppins-regular'],
                                                 textTransform: "uppercase"
                                            }}>
                                                {movie.comingOn.month}
                                            </Text>
                                            <Text style={{
                                                color: Colors.text,
                                                fontSize: FontSize.xxl,
                                                fontFamily: Font['poppins-bold']
                                            }}>
                                                {movie.comingOn.day}
                                            </Text>
                                        </View>}
                                        <View>
                                            <Image style={{
                                                width: showingComingSoon ? CARD_WIDTH: "100%",
                                                height: 190,
                                                borderRadius: Spacing.borderRadius.base
                                             }}
                                                source={movie.image} />
                                            <View style={{
                                                position: "absolute",
                                                alignSelf: "flex-end",
                                                padding: Spacing.padding.base,
                                                height: "100%",
                                                justifyContent:"space-between"
                                            }}>
                                                <Text style={{
                                                    color: Colors.text,
                                                    fontFamily: Font['poppins-bold'],
                                                    backgroundColor: Colors.background,
                                                    paddingHorizontal: Spacing.padding.xs,
                                                    borderRadius: Spacing.borderRadius.sm,
                                                }}>
                                                    {movie.age}+
                                                </Text>
                                                <TouchableOpacity style={{
                                                    backgroundColor: Colors.background,
                                                    borderRadius: Spacing.borderRadius.xxl,
                                                    height: 30,
                                                    width: 30,
                                                    alignItems: "center",
                                                    justifyContent:"center"
                                                }} >
                                                    <MaterialCommunityIcons
                                                    size={20}
                                                        name="volume-mute" color={Colors.text} /> 
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{
                                        width: showingComingSoon ? CARD_WIDTH: "100%",
                                        alignSelf:"flex-end"
                                    }}>
                                        <View style={{
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            paddingVertical:Spacing.padding.base
                                        }}>
                                            <Text style={{
                                                color: Colors.text,
                                                fontSize: FontSize.xl,
                                                textTransform: "uppercase",
                                                width: "65%",
                                                paddingRight: Spacing.padding.base,
                                                fontFamily:Font['poppins-bold']
                                            }}>{movie.title}</Text>
                                            {showingComingSoon ? 
                                            <View style={{
                                                flexDirection: "row",
                                                justifyContent: "space-between",
                                                width:"35%"
                                            }}>
                                                <TouchableOpacity style={{
                                                    alignItems: "center",
                                                    justifyContent:"center"
                                                }}>
                                                    <MaterialCommunityIcons
                                                        size={30}
                                                        name='bell-outline' color={Colors.textGray} />
                                                    <Text style={{
                                                        fontSize: FontSize.sm,
                                                        fontFamily: Font['poppins-regular'],
                                                        color: Colors.text
                                                    }}>
                                                        Remind me
                                                    </Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{
                                                    alignItems: "center",
                                                    justifyContent:"center"
                                                }}>
                                                    <MaterialIcons
                                                        size={30}
                                                        name='info-outline' color={Colors.textGray} />
                                                    <Text style={{
                                                        fontSize: FontSize.sm,
                                                        fontFamily: Font['poppins-regular'],
                                                        color: Colors.text
                                                    }}>
                                                        Info
                                                    </Text>
                                                </TouchableOpacity>
                                                </View>
                                                :
                                            <View style={{
                                                flexDirection: "row",
                                                justifyContent: "space-between",
                                                width:"35%"
                                            }}>
                                                <TouchableOpacity style={{
                                                    alignItems: "center",
                                                    justifyContent:"center"
                                                }}>
                                                    <Ionicons
                                                        size={30}
                                                        name='paper-plane-outline' color={Colors.textGray} />
                                                    <Text style={{
                                                        fontSize: FontSize.sm,
                                                        fontFamily: Font['poppins-regular'],
                                                        color: Colors.text
                                                    }}>
                                                        share
                                                    </Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{
                                                    alignItems: "center",
                                                    justifyContent:"center"
                                                }}>
                                                    <MaterialCommunityIcons
                                                        size={30}
                                                        name='plus' color={Colors.textGray} />
                                                    <Text style={{
                                                        fontSize: FontSize.sm,
                                                        fontFamily: Font['poppins-regular'],
                                                        color: Colors.text
                                                    }}>
                                                        My List
                                                    </Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={{
                                                    alignItems: "center",
                                                    justifyContent:"center"
                                                }}>
                                                    <MaterialCommunityIcons
                                                        size={30}
                                                        name='play' color={Colors.textGray} />
                                                    <Text style={{
                                                        fontSize: FontSize.sm,
                                                        fontFamily: Font['poppins-regular'],
                                                        color: Colors.text
                                                    }}>
                                                        Play
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>    
                                        }
                                        </View>
                                       {movie.comingOn && <Text style={{
                                            color: Colors.text,
                                            fontSize: FontSize.lg,
                                            fontFamily: Font['poppins-medium']
                                        }}>
                                            Coming {movie.comingOn.month + " " + movie.comingOn.day}
                                        </Text>}
                                        <Text style={{
                                            color: Colors.text,
                                            fontSize: FontSize.lg,
                                            fontFamily: Font['poppins-semiBold']
                                        }}>
                                          {movie.title}
                                        </Text>
                                        <Text style={{
                                            color: Colors.textGray,
                                            marginVertical: Spacing.margin.base,
                                            fontSize: FontSize.base
                                        }}>
                                            {movie.description}
                                        </Text>
                                        <ScrollView
                                            style={{
                                                paddingVertical:Spacing.padding.sm
                                            }}
                                            horizontal showsHorizontalScrollIndicator={false}>
                                            {movie.categories.map((category, index) => <View
                                                style={{
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                    justifyContent:"center"
                                                }}
                                            >
                                                <Text style={{
                                                    color:Colors.text
                                                }}>
                                                    {category.title}
                                                </Text>
                                                {index < movie.categories.length - 1 && <View
                                                    style={{
                                                        height: 5,
                                                        width: 5,
                                                        borderRadius: Spacing.borderRadius.base,
                                                        backgroundColor: Colors.primary,
                                                        marginHorizontal: Spacing.margin.base
                                                    }}
                                                />}
                                            </View>)}
                                        </ScrollView>
                                    </View>
                                </View>
                            )}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default NewAndHot
