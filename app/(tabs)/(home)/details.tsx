import {Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { movies } from '@/data'
import { AntDesign, Feather, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import { ITEM_HEIGHT_COVER } from '@/constants'
import Spacing from '@/constants/Spacing'
import Font from '@/constants/Font'
import FontSize from '@/constants/FontSize'

const Details: React.FC = () => {
    const { movieId } = useLocalSearchParams<{ movieId: string }>()
    const movie = movies.find(movie => movie.id.toString() === movieId)
    if(!movie) return null

    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Image
                        style={{
                            height: ITEM_HEIGHT_COVER,
                            width: "100%",
                            borderTopRightRadius: Spacing.borderRadius.base,
                            borderTopLeftRadius: Spacing.borderRadius.base
                        }}
                        source={movie.coverImage} /> 
                    <View style={{
                        position: "absolute",
                        padding: Spacing.padding.base,
                        justifyContent: "space-between",
                        height:"100%"
                    }}>
                        <View style={{
                            flexDirection: "row",
                            alignSelf:"flex-end"
                        }}>
                            <TouchableOpacity style={{
                                backgroundColor:Colors.background,
                                padding: Spacing.padding.xs,
                                borderRadius: Spacing.borderRadius.xxl,
                                marginRight:Spacing.margin.base
                            }}>
                                <Feather name='cast' size={24} color={Colors.text} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>router.back()}
                                style={{
                                backgroundColor:Colors.background,
                                padding: Spacing.padding.xs,
                                borderRadius: Spacing.borderRadius.xxl
                              }}>
                                <Ionicons name='close' size={24} color={Colors.text} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={{
                                height: 65,
                                width: 65,
                                justifyContent: "center",
                                alignSelf: "center",
                                alignItems:"center",
                                borderWidth: 2,
                                borderColor: Colors.border,
                                borderRadius: Spacing.borderRadius.xxl
                            }}
                        >
                            <FontAwesome name='play' size={24} color={Colors.text} />
                        </TouchableOpacity>
                        <View style={{
                            flexDirection: "row",
                            width: "100%",
                            justifyContent:"space-between"
                        }}>
                            <Text style={{
                                fontFamily: Font['poppins-semiBold'],
                                color: Colors.text,
                                fontSize:FontSize.lg
                            }}>
                                Preview
                            </Text>
                            <TouchableOpacity  style={{
                                backgroundColor:Colors.background,
                                padding: Spacing.padding.xs,
                                borderRadius: Spacing.borderRadius.xxl
                              }}>
                                <Octicons name='mute' size={24} color={Colors.text} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{
                    padding: Spacing.padding.xs
                }}>
                    <Image
                        style={{
                            width: 120,
                            height: 30
                        }}
                        resizeMode="contain"
                        source={require('../../../assets/images/logo/netflix series logo.png')}
                    /> 
                    <Text style={{
                        color: Colors.text,
                        fontFamily: Font['poppins-bold'],
                        fontSize: FontSize.xl
                    }}
                    numberOfLines={1}
                    >
                        {movie.title}
                    </Text>
                    <Text style={{
                        color: Colors.text,
                        fontFamily: Font['poppins-semiBold'],
                        fontSize: FontSize.base
                    }}
                    >
                        <Text style={{
                            color: Colors.success,
                            fontFamily: Font['poppins-semiBold'],
                            fontSize: FontSize.lg
                        }}
                        >
                            {movie.match_percent}% match 
                        </Text> {movie.release_year} {movie.numberOfSeasons} Seasons
                    </Text>
                    <View style={{
                        flexDirection: "row",
                        marginVertical:Spacing.margin.sm
                    }}>
                        <MaterialIcons name="hd" size={24} color={Colors.textGray} style={{
                            marginRight: Spacing.margin.sm
                        }} />
                        <MaterialCommunityIcons name="tooltip-text" size={24} color={Colors.textGray} />
                    </View>

                    <View style={{
                        paddingVertical:Spacing.padding.sm
                    }}>
                        <TouchableOpacity style={{
                            flexDirection: "row",
                            backgroundColor: Colors.primary,
                            paddingHorizontal: Spacing.margin.lg,
                            paddingVertical: Spacing.padding.sm,
                            justifyContent: "center",
                            borderRadius: Spacing.borderRadius.sm
                        }}>
                            <Ionicons name="play" color={Colors.onPrimary} size={24} />
                            <Text style={{
                                color: Colors.onPrimary,
                                fontSize: FontSize.base,
                                marginLeft: Spacing.margin.base,
                                fontFamily: Font['poppins-bold']
                            }}>
                                Play
                            </Text>
                        </TouchableOpacity>
                         <TouchableOpacity style={{
                            flexDirection: "row",
                            backgroundColor: Colors.secondary,
                            paddingHorizontal: Spacing.margin.lg,
                            paddingVertical: Spacing.padding.sm,
                            justifyContent: "center",
                            borderRadius: Spacing.borderRadius.sm,
                            marginTop: Spacing.margin.base
                        }}>
                            <Octicons name="download" color={Colors.onSecondary} size={24} />
                            <Text style={{
                                color: Colors.onSecondary,
                                fontSize: FontSize.base,
                                marginLeft: Spacing.margin.base,
                                fontFamily: Font['poppins-bold']
                            }}>
                                Download
                            </Text>
                        </TouchableOpacity>

                        
                    </View>
                    <Text style={{
                        color: Colors.text,
                        fontSize: FontSize.base,
                        fontFamily: Font['poppins-regular']
                    }}>
                        {movie.description}
                    </Text>
                    <Text
                        numberOfLines={1}
                        style={{
                        color: Colors.textGray,
                        fontSize: FontSize.base,
                        fontFamily: Font['poppins-regular'],
                        marginVertical:Spacing.margin.sm,
                    }}>
                        Cast: {
                            movie.cast.map((item, index) =>
                                <Text
                                key={item}
                                style={{
                                    color: Colors.textGray,
                                    fontSize: FontSize.base,
                                    fontFamily: Font['poppins-regular'],
                                    marginVertical: Spacing.margin.sm,
                                    textTransform:"capitalize"
                                }}>
                                    {item}
                                    {index !== movie.cast.length-1 && ', '}
                                </Text>)
                       }
                    </Text>

                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: "60%",
                            marginVertical: Spacing.margin.sm
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                justifyContent: "center",
                                alignItems:"center"
                            }}
                        >
                            <Feather name="plus" size={30} color={Colors.text} />
                            <Text style={{
                                fontSize: FontSize.base,
                                color: Colors.text,
                                fontFamily: Font['poppins-semiBold'],
                                marginTop: Spacing.margin.sm
                            }}>
                                My List
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                justifyContent: "center",
                                alignItems:"center"
                            }}
                        >
                            <AntDesign name="like2" size={30} color={Colors.text} />
                            <Text style={{
                                fontSize: FontSize.base,
                                color: Colors.text,
                                fontFamily: Font['poppins-semiBold'],
                                marginTop: Spacing.margin.sm
                            }}>
                                Rate
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                justifyContent: "center",
                                alignItems:"center"
                            }}
                        >
                            <Ionicons name="paper-plane-outline" size={30} color={Colors.text} />
                            <Text style={{
                                fontSize: FontSize.base,
                                color: Colors.text,
                                fontFamily: Font['poppins-semiBold'],
                                marginTop: Spacing.margin.sm
                            }}>
                                Share
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal style={{
                        marginVertical: Spacing.margin.base
                    }} showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity>
                            <Text style={{
                                color: Colors.text,
                                fontFamily: Font['poppins-bold'],
                                fontSize: FontSize.base
                            }}>
                                Episodes
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            marginLeft: Spacing.margin.base
                        }}>
                            <Text style={{
                                color: Colors.text,
                                fontFamily: Font['poppins-bold'],
                                fontSize: FontSize.base
                            }}>
                                More Like This
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            marginLeft: Spacing.margin.base
                        }}>
                            <Text style={{
                                color: Colors.text,
                                fontFamily: Font['poppins-bold'],
                                fontSize: FontSize.base
                            }}>
                                Trailers & More
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>

                    <View>
                        <TouchableOpacity style={{
                            flexDirection: "row",
                            alignItems:"center"
                        }}>
                            <Text style={{
                                color: Colors.textGray,
                                fontSize: FontSize.base,
                            }}>
                                Season 1
                            </Text>
                            <Ionicons style={{
                                marginLeft: Spacing.margin.base
                            }} name='chevron-down' size={24} color={Colors.textGray} />
                        </TouchableOpacity>

                        <View>
                            {movie.episodes.map((episode,index) =>
                                <View style={{
                                    marginVertical: Spacing.margin.base
                                }} key={episode.id}>
                                    <View style={{
                                        flexDirection: "row",
                                        alignItems:"center"
                                    }}>
                                        <View style={{
                                            alignItems: "center",
                                            justifyContent:"center"
                                        }}>
                                            <Image
                                                style={{
                                                    height: 90,
                                                    width: 160,
                                                    borderRadius: Spacing.borderRadius.base
                                                }}
                                                source={episode.coverImage} />
                                            <TouchableOpacity style={{
                                                height: 40,
                                                width: 40,
                                                backgroundColor: Colors.background,
                                                alignItems: "center",
                                                justifyContent: "center",
                                                position: "absolute",
                                                alignSelf: "center",
                                                borderWidth: 2,
                                                borderColor: Colors.textGray,
                                                borderRadius: Spacing.borderRadius.xxl*2
                                            }}>
                                                <FontAwesome name="play" size={16}  color={Colors.text}/>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            flex: 1,
                                            alignItems: "center",
                                            paddingHorizontal:Spacing.padding.sm
                                        }}>
                                            <View>
                                                <Text style={{
                                                    color: Colors.textGray,
                                                    fontSize: FontSize.lg,
                                                    fontFamily: Font['poppins-regular']
                                                }}>
                                                    {index+1}.Episode {index+1}
                                                </Text>
                                                <Text style={{
                                                    color: Colors.textGray,
                                                    fontSize: FontSize.base,
                                                    fontFamily: Font['poppins-regular']
                                                }}>
                                                    {episode.length}
                                                </Text>
                                            </View>
                                            <TouchableOpacity>
                                                <Octicons name='download' size={35} color={Colors.textGray} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <Text style={{
                                        color: Colors.textGray,
                                        marginTop: Spacing.margin.base,
                                        fontSize: FontSize.base
                                    }}>
                                        {episode.description}
                                    </Text>
                                </View>
                            )}
                        </View>

                    </View>
                </View>
            </ScrollView>
       </SafeAreaView>
    )
}

export default Details

