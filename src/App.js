import React, { useState } from "react";
import { Navbar } from "./screen/Navbar";
import { MoviesList } from "./components/MoviesList";
import { FavMovie } from "./components/FavMovie";
export default () => {
  const [movies, SetMovies] = useState([
    {
      adult: false,
      backdrop_path: "/yFZG86Zvdy6JuIlMW9eHxlVkct5.jpg",
      genre_ids: [28, 12, 14, 10749, 16, 878],
      id: 413594,
      original_language: "ja",
      original_title:
        "劇場版 ソードアート・オンライン -オーディナル・スケール-",
      overview:
        "In 2026, four years after the infamous Sword Art Online incident, a revolutionary new form of technology has emerged: the Augma, a device that utilizes an Augmented Reality system. Unlike the Virtual Reality of the NerveGear and the Amusphere, it is perfectly safe and allows players to use it while they are conscious, creating an instant hit on the market. The most popular application for the Augma is the game Ordinal Scale, which immerses players in a fantasy role-playing game with player rankings and rewards.  Following the new craze, Kirito's friends dive into the game, and despite his reservations about the system, Kirito eventually joins them. While at first it appears to be just fun and games, they soon find out that the game is not all that it seems...",
      popularity: 57.64,
      poster_path: "/2szdEK0Mr0RG0nWGFVTseNQHbnP.jpg",
      release_date: "2017-02-18",
      title: "Sword Art Online: The Movie - Ordinal Scale",
      video: false,
      vote_average: 7.7,
      vote_count: 434,
    },
    {
      adult: false,
      backdrop_path: "/c12MqatJfXTV9rU1vjSSQH0UlF5.jpg",
      genre_ids: [28, 16, 12, 18, 14, 10749, 878],
      id: 452438,
      original_language: "ja",
      original_title: "ソードアート・オンライン Extra Edition",
      overview:
        "Yui wants to see a whale so Kirito suggests a quest where she can meet them. However, it turns out that Leafa cannot swim so Asuna and the other female characters decide to train Suguha in a real-world pool in preparation for the aforementioned quest.  Meanwhile, Kirito is called for an emergency counseling meeting at his new school. There he meets an elite member of the Virtual Division of the Ministry of Internal Affairs. Kirito then tells him details about what really happened in Aincrad and in Alfheim.",
      popularity: 14.825,
      poster_path: "/oXGftJU6gCIcIUJPgkyMhybOIBR.jpg",
      release_date: "2014-01-04",
      title: "Sword Art Online: Extra Edition",
      video: true,
      vote_average: 5.5,
      vote_count: 69,
    },
    {
      adult: false,
      backdrop_path: "/qKVOTKPPtvoXd75L1HOSBPLtKWS.jpg",
      genre_ids: [16, 28, 14, 878],
      id: 761898,
      original_language: "ja",
      original_title:
        "劇場版 ソードアート・オンライン プログレッシブ 星なき夜のアリア",
      overview:
        "One month after Kayaba Akihiko's game of death began, the death toll continues to rise, two thousand players having already lost their lives to the ultra-difficult VRMMO world of Sword Art Online. On the day of the strategy meeting to plan out the first-floor boss battle, Kirito, a solo player who vows to fight alone to get stronger, runs into a rare, high-level female player. She gracefully dispatches powerful monsters with a single rapier that flashes like a shooting star in the night...",
      popularity: 12.669,
      poster_path: "/h39zQyCtRTgLqmKj2HM9KBdMlbp.jpg",
      release_date: "",
      title:
        "Sword Art Online the Movie: Progressive - Aria of a Starless Night",
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
  ]);
  const [searchBtn , setSearchBtn] = useState('false');
  const [FavBtn , setFavBtn] = useState('false')
  return (
    <div style={{backgroundColor : 'rgb(25, 25, 25)'}}>

     <Navbar onSearch={SetMovies} setSearchBtn={setSearchBtn} searchBtn={searchBtn} /> 
      
     
      <MoviesList movies={movies} /> 
    </div>
  );
  
};
