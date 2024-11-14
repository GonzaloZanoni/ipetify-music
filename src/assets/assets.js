/* eslint-disable no-unused-vars */
import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './4.jpg'
import img4 from './3.jpg'
import img5 from './5.png'
import img6 from './6.png'
import img7 from './img7.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import img12 from './img12.jpg'
import img13 from './img13.jpg'
import img14 from './img14.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import img17 from './3-c-2024.png'
import img18 from './3-c-2023.png'
import song1 from  './ALVARO-VELARDES.mp3'
import song2 from  './ALVARO-VELARDES2.mp3'
import song3 from  './LEANDRO.mp3'
import song4 from  './FEDE-FESSIA.mp3'
import song5 from  './Cha.mp3'
import song6 from  './DeMusicaLigera.mp3'


export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon
}

export const albumsData = [
    {   
        id:0,
        name: "Top 2024 3er 'C'",
        image: img17,
        desc:"Canciones creadas por alumnos de 3er año 'C'",
        bgColor:"#2a4365"
    },
    {   
        id:1,
        name: "Top 2023 3er 'C'",
        image: img18,
        desc:"Canciones creadas por alumnos de 3er año 'C'",
        bgColor:"#22543d"
    },
    // {   
    //     id:2,
    //     name: "Trending India",
    //     image: img10,
    //     desc:"Your weekly update of the most played tracks",
    //     bgColor:"#742a2a"
    // },
    // {   
    //     id:3,
    //     name: "Trending Global",
    //     image: img16,
    //     desc:"Your weekly update of the most played tracks",
    //     bgColor:"#44337a"
    // },
    // {   
    //     id:4,
    //     name: "Mega Hits",
    //     image: img11,
    //     desc:"Your weekly update of the most played tracks",
    //     bgColor:"#234e52"
    // },
    // {   
    //     id:5,
    //     name: "Happy Favorites",
    //     image: img15,
    //     desc:"Your weekly update of the most played tracks",
    //     bgColor:"#744210"
    // }
]

export const songsData = [
    {
        id:0,
        name: "Pop Folk",
        image: img1,
        file:song1,
        desc:"Alvaro V.",
        duration:"1:45",
        albumId: 0,
    },
    {
        id:1,
        name: "Beat Rap",
        image: img2,
        file:song2,
        desc:"Alvaro V.",
        duration:"1:57",
        albumId: 0,
    },
    {
        id:2,
        name: "Reggaetton-Remix",
        image: img3,
        file:song3,
        desc:"Leandro P.",
        duration:"2:17",
        albumId: 0,
    },
    {
        id:3,
        name: "Drums",
        image: img4,
        file:song4,
        desc:"Federica F.",
        duration:"0:08",
        albumId: 0,
    },
    {
        id:4,
        name: "Cha Cha Cha",
        image: img5,
        file:song5,
        desc:"3er C 2023",
        duration:"3:10",
        albumId: 1,
    },
    {
        id:5,
        name: "De musica ligera",
        image: img6,
        file:song6,
        desc:"3er C 2023",
        duration:"2:45",
        albumId: 1,
    },
    // {
    //     id:6,
    //     name: "Song Seven",
    //     image: img7,
    //     file:song1,
    //     desc:"Put a smile on your face with these happy tunes",
    //     duration:"2:18"
    // },
    // {
    //     id:7,
    //     name: "Song Eight",
    //     image: img12,
    //     file:song2,
    //     desc:"Put a smile on your face with these happy tunes",
    //     duration:"2:35"
    // }
]