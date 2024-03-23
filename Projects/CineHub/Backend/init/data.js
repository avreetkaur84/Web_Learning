const movieListings = [
    {
        movie_id: 234235,
        title: "The Last Stand",
        description: "A retired sheriff and his team must stop a drug cartel leader before he crosses the border.",
        imageURL: "http://t3.gstatic.com/images?q=tbn:ANd9GcRU09vwQS-k7Fms5y2ma5a2b8gsjug7MKuDTOfvlXu4uvyXTV8GEK-LkRI5xqC7SiKaTijuow",
        movieURL: "https://youtu.be/zGMrc7EaozE?si=pLXodY4ODuydHaVc",
        rating: 7.5,
        genre: "Action"
    },
    {
        movie_id: 234989,
        title: "Laugh Out Loud",
        description: "An aspiring comedian navigates through hilarious misadventures to make it big in the stand-up comedy scene.",
        imageURL: "https://m.media-amazon.com/images/M/MV5BODQxYWM2ODItYjE4ZC00YzAxLTljZDQtMjRjMmE0ZGMwYzZjXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_.jpg",
        movieURL: "https://youtu.be/zW3f0TYKJqw?si=af_rJo2Y5zao8cjr",
        rating: 8.0,
        genre: "Comedy"
    },
    {
        movie_id: 233232,
        title: "The Haunting Shadows",
        description: "A family moves into a haunted house, unaware of the sinister presence lurking within its walls.",
        imageURL: "https://i.ytimg.com/vi/DKIGLSB3-L0/mqdefault.jpg",
        movieURL: "https://youtu.be/DKIGLSB3-L0?si=g8cCd6XRH1KCDYGy",
        rating: 6.8,
        genre: "Horror"
    },
    {
        movie_id: 254429,
        title: "Galactic Odyssey",
        description: "Explorers embark on a mission to uncover the mysteries of a distant planet, encountering unforeseen challenges.",
        imageURL: "https://cdn.scribblehub.com/images/42/Galactic-Odyssey-StarKnights_846089_1692746155.jpg",
        movieURL: "https://youtu.be/oR_e9y-bka0?si=auAi6sG-Dtvt-MiR",
        rating: 8.5,
        genre: "Science Fiction"
    },
    {
        movie_id: 230876,
        title: "Eternal Love",
        description: "Two individuals from different worlds find each other in a heartwarming tale of love and destiny.",
        imageURL: "https://c.saavncdn.com/476/An-Eternal-Love-English-2021-20210826192231-500x500.jpg",
        movieURL: "https://youtu.be/udNCrXdLBNM?si=8SrmzZtqSGDfKXV2",
        rating: 7.2,
        genre: "Romance"
    },
    {
        movie_id: 657699,
        title: "Hilarity Ensues",
        description: "A group of friends embarks on a comical road trip, encountering outrageous situations along the way.",
        imageURL: "https://images.deccanherald.com/deccanherald/import/sites/dh/files/article_images/2014/08/02/423253.gif?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true",
        movieURL: "https://youtu.be/iFiRPL7NPcw?si=ruBFoV2tqXFRS4D8",
        rating: 7.4,
        genre: "Comedy"
    },
    {
        movie_id: 547769,
        title: "Whispers in the Dark",
        description: "A terrifying entity haunts a small town, leaving a trail of mysterious deaths in its wake.",
        imageURL: "https://m.media-amazon.com/images/M/MV5BZGIwYjU0N2QtOGU5OS00MWFlLWJkZTctMGE3YTQ5NGM0NzExXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_.jpg",
        movieURL: "https://youtu.be/vI1jhj5wka8?si=JDu26SVBTVYYm-8b",
        rating: 6.9,
        genre: "Horror"
    },
    {
        movie_id: 65767,
        title: "Future Echoes",
        description: "Time-traveling scientists must prevent a catastrophic event that threatens to alter the course of history.",
        imageURL: "https://futureechoes.se/wp-content/uploads/2023/01/DULL.jpg",
        movieURL: "https://youtu.be/17pCA-TjBV8?si=enazBy7XPWz2Pl8f",
        rating: 8.1,
        genre: "Science Fiction"
    },
    {
        movie_id: 6548563,
        title: "Love Beyond Borders",
        description: "A tale of forbidden love between individuals from rival families, defying societal norms.",
        imageURL: "https://play-lh.googleusercontent.com/y0gckf69U6LnidFRwxrnl2TwAN8dNFjdLXHtEodNAOffwJg7TP4uDzmTqP_giObzeEmt=w240-h480-rw",
        movieURL: "https://youtu.be/_hA3J2kXh0M?si=ff97ce7UPxrgJxK6",
        rating: 7.0,
        genre: "Romance"
    },
    {
        movie_id: 5648709,
        title: "Unwritten Stories",
        description: "Interwoven lives reveal a tapestry of emotions, highlighting the triumphs and tragedies of humanity.",
        imageURL: "https://m.media-amazon.com/images/M/MV5BMDVlZDM3ZWYtMjdhMC00NDg0LTkzMDAtNTg0YTFkMDJiMjBiXkEyXkFqcGdeQXVyNTM0MDMyMjM@._V1_.jpg",
        movieURL: "https://youtu.be/606LI9wCXq8?si=3RmZ62ifGvTEq5Cj",
        rating: 8.4,
        genre: "Drama"
    },
    {
        movie_id: 658768,
        title: "Shadow Strike",
        description: "A skilled operative undertakes a dangerous mission to uncover a high-stakes conspiracy.",
        imageURL: "https://m.media-amazon.com/images/M/MV5BY2RhYTc3ZDItYjkyZC00ODViLWE5YmItMmU2ZjhmNDE2ZGNkXkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_.jpg",
        movieURL: "https://youtu.be/KB3_jB-Kb2E?si=JftBJwBsJFpaxHda",
        rating: 7.7,
        genre: "Action"
    },
    {
        movie_id: 908098,
        title: "Comic Relief",
        description: "A stand-up comedian faces absurd challenges on a quest to bring laughter to the world.",
        imageURL: "https://m.media-amazon.com/images/M/MV5BOTUyOTc5ZmYtODczZC00MGZhLWE1NzItNTI3NTUyYTU4MTM1XkEyXkFqcGdeQXVyNzEzMTE5NzQ@._V1_.jpg",
        movieURL: "https://youtu.be/hM_k7QJFHMw?si=yOY68oPNn6haN5IS",
        rating: 7.3,
        genre: "Comedy"
    },
    {
        movie_id: 767856,
        title: "Cursed Legacy",
        description: "A haunted family estate harbors dark secrets, invoking a chilling curse on its inhabitants.",
        imageURL: "https://gaming-cdn.com/images/products/5898/orig/dead-by-daylight-cursed-legacy-chapter-pc-game-steam-cover.jpg?v=1683629526",
        movieURL: "https://youtu.be/uY7vfav0DjA?si=0JKQkzrVHx-NUhOX",
        rating: 6.7,
        genre: "Horror"
    },
    {
        movie_id: 54756,
        title: "Parallel Realms",
        description: "Parallel universes collide as explorers venture into alternate dimensions, unveiling unforeseen dangers.",
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAvjjZhIxAAQuwO5cOYgW1dBBK5hpF60xJAw&usqp=CAU",
        movieURL: "https://youtu.be/SARNeq0oGUo?si=D1P20OWgSc7FsZeo",
        rating: 8.2,
        genre: "Science Fiction"
    },
    {
        movie_id: 7678576,
        title: "Endless Affection",
        description: "A timeless romance weaves through generations, transcending barriers of time and space.",
        imageURL: "https://images.sr.roku.com/idType/roku/context/global/id/3bed7669917d52eb9f308ef1d4ad4888/images/gracenote/assets/p20943_v_v8_aa.jpg/magic/396x0/filters:quality(70)",
        movieURL: "https://youtu.be/WhRwltVQXyU?si=TrbEJwtghI1Gml8b",
        rating: 7.5,
        genre: "Romance"
    },
    {
        movie_id: 6576456,
        title: "Fragments of Life",
        description: "Broken souls seek solace, finding hope amidst the shattered pieces of their lives.",
        imageURL: "https://movieguide.b-cdn.net/wp-content/uploads/2012/08/fragments-xlarge.jpg",
        movieURL: "https://youtu.be/jIn_cWAVdBA?si=f-YcD6-n1qYhKpdL",
        rating: 8.0,
        genre: "Drama"
    },
];

module.exports = { data: movieListings };