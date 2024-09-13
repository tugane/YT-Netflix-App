import {ImageRequireSource} from "react-native";

export type Category = { id: number, title: string }
export const categories: Category[] = [
    {
        id: 1,
        title: 'Slick'
    },
    {
        id: 2,
        title: 'Psychological'
    },
    {
        id: 3,
        title: 'Thriller'
    },
    {
        id: 4,
        title: 'Action'
    },
    {
        id: 5,
        title: 'Crime'
    },
    {
        id: 6,
        title: 'Documentaries'
    },
    {
        id: 7,
        title: 'Dramas'
    },
    {
        id: 8,
        title: 'Fantasy'
    },
    {
        id: 9,
        title: 'Horror'
    },
    {
        id: 10,
        title: 'Kids & Family'
    },
    {
        id: 11,
        title: 'Music & Musicals'
    },
    {
        id: 12,
        title: 'Reality'
    }
]

export type FilterItem = {
    id: number,
    title: string,
    items?: Category[]
}
export const filterData: FilterItem[] = [
    {
        id: 1,
        title: "Tv Shows"
    },
    {
        id: 2,
        title: "Movies"
    },
    {
        id: 3,
        title: "Categories",
        items: categories
    }
]

export const games = [
    {
        id: 1,
        image: require('../assets/images/games/grand theft auto iii.png'),
    },
    {
        id: 2,
        image: require('../assets/images/games/grand theft auto sarandreas.png'),
    },
    {
        id: 3,
        image: require('../assets/images/games/Storyteller.png'),
    },
    {
        id: 4,
        image: require('../assets/images/games/grand theft auto vice city.png'),
    }
]


const episodes: { id: number; title: string; length: string; coverImage: any; description: string }[] = [
    {
        id: 1,
        title: 'Episode 1',
        length: "57 min",
        coverImage: require('../assets/images/movies/13 reasons why cover.jpg'),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ante massa, hendrerit a massa vitae, sagittis facilisis est. ",
    },
    {
        id: 2,
        title: 'Episode 2',
        length: "52 min",
        coverImage: require('../assets/images/movies/13 reasons why cover.jpg'),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ante massa, hendrerit a massa vitae, sagittis facilisis est. ",
    },
    {
        id: 3,
        title: 'Episode 3',
        length: "50 min",
        coverImage: require('../assets/images/movies/13 reasons why cover.jpg'),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ante massa, hendrerit a massa vitae, sagittis facilisis est. ",
    },
    {
        id: 4,
        title: 'Episode 4',
        length: "58 min",
        coverImage: require('../assets/images/movies/13 reasons why cover.jpg'),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ante massa, hendrerit a massa vitae, sagittis facilisis est. ",
    }
]


export type Movie = {
    id: number;
    image: ImageRequireSource;
    coverImage: ImageRequireSource;
    title: string;
    description: string;
    cast: string[];
    match_percent: string;
    release_year: string;
    numberOfSeasons: number;
    episodes: {
        id: number;
        title: string;
        length: string;
        coverImage: ImageRequireSource;
        description: string
    }[];
    categories: Category[]
};

export const movies: Movie[] = [
    {
        id: 1,
        image: require('../assets/images/movies/13 reasons why.jpg'),
        coverImage: require('../assets/images/movies/13 reasons why cover.jpg'),
        title: "13 reasons why",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ante massa, hendrerit a massa vitae, sagittis facilisis est.",
        cast: ['Minnette', 'Boe', 'Langford', 'Flynn', 'Navarro', 'Preentice'],
        match_percent: "94",
        release_year: "2023",
        numberOfSeasons: 4,
        episodes,
        categories: categories.slice(4, 7)
    },
    {
        id: 2,
        image: require('../assets/images/movies/bird box.jpg'),
        coverImage: require('../assets/images/movies/Bird Box cover.jpg'),
        title: "Bird box",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ante massa, hendrerit a massa vitae, sagittis facilisis est.",
        cast: ['Minnette', 'Boe', 'Langford', 'Flynn', 'Navarro', 'Preentice'],
        match_percent: "94",
        release_year: "2023",
        numberOfSeasons: 4,
        episodes,
        categories: categories.slice(4, 7)
    },
    {
        id: 3,
        image: require('../assets/images/movies/bloodshot.jpg'),
        coverImage: require('../assets/images/movies/bloodshot cover.jpeg'),
        title: "Bloodshot",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ante massa, hendrerit a massa vitae, sagittis facilisis est.",
        cast: ['Minnette', 'Boe', 'Langford', 'Flynn', 'Navarro', 'Preentice'],
        match_percent: "94",
        release_year: "2023",
        numberOfSeasons: 4,
        episodes,
        categories: categories.slice(4, 7)
    },
    {
        id: 4,
        image: require('../assets/images/movies/Bridgerton.jpg'),
        coverImage: require('../assets/images/movies/Bridgerton cover.jpg'),
        title: "Bridgerton",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ante massa, hendrerit a massa vitae, sagittis facilisis est.",
        cast: ['Minnette', 'Boe', 'Langford', 'Flynn', 'Navarro', 'Preentice'],
        match_percent: "94",
        release_year: "2023",
        numberOfSeasons: 4,
        episodes,
        categories: categories.slice(4, 7)
    },
    {
        id: 5,
        image: require('../assets/images/movies/The witcher.jpeg'),
        coverImage: require('../assets/images/movies/The witcher cover.jpg'),
        title: "The witcher",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ante massa, hendrerit a massa vitae, sagittis facilisis est.",
        cast: ['Minnette', 'Boe', 'Langford', 'Flynn', 'Navarro', 'Preentice'],
        match_percent: "94",
        release_year: "2023",
        numberOfSeasons: 4,
        episodes,
        categories: categories.slice(4, 7)
    },
    {
        id: 6,
        image: require('../assets/images/movies/outside the wire.jpg'),
        coverImage: require('../assets/images/movies/outside the wire coder.jpg'),
        title: "Outside the wire",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ante massa, hendrerit a massa vitae, sagittis facilisis est.",
        cast: ['Minnette', 'Boe', 'Langford', 'Flynn', 'Navarro', 'Preentice'],
        match_percent: "94",
        release_year: "2023",
        numberOfSeasons: 4,
        episodes,
        categories: categories.slice(4, 7)
    },
    {
        id: 7,
        image: require('../assets/images/movies/You.jpeg'),
        coverImage: require('../assets/images/movies/You cover.jpg'),
        title: "You",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ante massa, hendrerit a massa vitae, sagittis facilisis est.",
        cast: ['Minnette', 'Boe', 'Langford', 'Flynn', 'Navarro', 'Preentice'],
        match_percent: "94",
        release_year: "2023",
        numberOfSeasons: 4,
        episodes,
        categories: categories.slice(4, 7)
    },
    {
        id: 8,
        image: require('../assets/images/movies/old guard.jpg'),
        coverImage: require('../assets/images/movies/old guard cover.jpg'),
        title: "Old guard",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ante massa, hendrerit a massa vitae, sagittis facilisis est.",
        cast: ['Minnette', 'Boe', 'Langford', 'Flynn', 'Navarro', 'Preentice'],
        match_percent: "94",
        release_year: "2023",
        numberOfSeasons: 4,
        episodes,
        categories: categories.slice(4, 7)
    },
    {
        id: 9,
        image: require('../assets/images/movies/divergent.jpeg'),
        coverImage: require('../assets/images/movies/divergent cover.jpg'),
        title: "Divergent",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ante massa, hendrerit a massa vitae, sagittis facilisis est.",
        cast: ['Minnette', 'Boe', 'Langford', 'Flynn', 'Navarro', 'Preentice'],
        match_percent: "94",
        release_year: "2023",
        numberOfSeasons: 4,
        episodes,
        categories: categories.slice(4, 7)
    },
    {
        id: 10,
        image: require('../assets/images/movies/Lucifer.png'),
        coverImage: require('../assets/images/movies/Lucifer cover.jpg'),
        title: "Lucifer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ante massa, hendrerit a massa vitae, sagittis facilisis est.",
        cast: ['Minnette', 'Boe', 'Langford', 'Flynn', 'Navarro', 'Preentice'],

        match_percent: "94",
        release_year: "2023",
        numberOfSeasons: 4,
        episodes,
        categories: categories.slice(4, 7)
    },
    {
        id: 11,
        image: require('../assets/images/movies/heart of stone.jpg'),
        coverImage: require('../assets/images/movies/heart of stone cover.jpg'),
        title: "Heart of stone",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ante massa, hendrerit a massa vitae, sagittis facilisis est.",
        cast: ['Minnette', 'Boe', 'Langford', 'Flynn', 'Navarro', 'Preentice'],
        match_percent: "94",
        release_year: "2023",
        numberOfSeasons: 4,
        episodes,
        categories: categories.slice(4, 7)
    },
    {
        id: 12,
        image: require('../assets/images/movies/Lucifer.png'),
        coverImage: require('../assets/images/movies/Lucifer cover.jpg'),
        title: "Lucifer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ante massa, hendrerit a massa vitae, sagittis facilisis est.",
        cast: ['Minnette', 'Boe', 'Langford', 'Flynn', 'Navarro', 'Preentice'],
        match_percent: "94",
        release_year: "2023",
        numberOfSeasons: 4,
        episodes,
        categories: categories.slice(4, 7)
    }
]

export const mightLike = movies.slice(0, 7)
export const popular = movies.slice(5, 11)
export const mainCover = movies[6]

export type ComingSoon = {
    id: number,
    title: string,
    image: ImageRequireSource,
    comingOn: {
        month: string,
        day: number,
    },
    description: string,
    categories: Category[]
}

export const comingSoon: ComingSoon[] = [
    {
        id: 1,
        title: "Fair Play",
        image: require('../assets/images/movies/coming/Fair Play.jpg'),
        categories: categories.slice(0, 3),
        comingOn: {
            month: "Jun",
            day: 21
        },
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ante massa, hendrerit a massa vitae, sagittis facilisis est.",
    },
    {
        id: 2,
        title: "Love, Guaranteed",
        image: require('../assets/images/movies/coming/love, guaranteed.jpg'),
        categories: categories.slice(0, 3),
        comingOn: {
            month: "Aug",
            day: 17
        },
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ante massa, hendrerit a massa vitae, sagittis facilisis est.",
    },
    {
        id: 3,
        title: "From scratch",
        image: require('../assets/images/movies/coming/From scratch.jpg'),
        categories: categories.slice(0, 3),
        comingOn: {
            month: "Feb",
            day: 29
        },
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ante massa, hendrerit a massa vitae, sagittis facilisis est.",
    },
    {
        id: 4,
        title: "Luckiest girl alive",
        image: require('../assets/images/movies/coming/Lukiest girl alive.jpg'),
        categories: categories.slice(0, 3),
        comingOn: {
            month: "Sep",
            day: 10
        },
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ante massa, hendrerit a massa vitae, sagittis facilisis est.",
    },
    {
        id: 5,
        title: "Sister death",
        image: require('../assets/images/movies/coming/Sister death.jpg'),
        categories: categories.slice(0, 3),
        comingOn: {
            month: "Aug",
            day: 21
        },
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ante massa, hendrerit a massa vitae, sagittis facilisis est.",
    },
    {
        id: 6,
        title: "Spenser confidential",
        image: require('../assets/images/movies/coming/Spenser confidential.jpg'),
        categories: categories.slice(0, 3),
        comingOn: {
            month: "Aug",
            day: 21
        },
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ante massa, hendrerit a massa vitae, sagittis facilisis est.",
    },
    {
        id: 7,
        title: "Supacell",
        image: require('../assets/images/movies/coming/Supacell.jpg'),
        categories: categories.slice(0, 3),
        comingOn: {
            month: "Aug",
            day: 21
        },
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ante massa, hendrerit a massa vitae, sagittis facilisis est.",
    }
]