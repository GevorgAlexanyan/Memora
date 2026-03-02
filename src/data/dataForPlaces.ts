export type Plase = {
    id:number,
    title:string,
    description:string,
    location:string,
    type:"historical" | "nature" | "culture" | "religious" | "modern";
    img:string,
    rating:number,
    urlYouTube:string,
}


export const plases: Plase[] =[
  {
    id: 1,
    title: "Garni Temple",
    description:
      "Garni Temple is a classical Hellenistic monument dating back to the 1st century AD. It is the only surviving pagan temple in Armenia and stands as a symbol of ancient Armenian architecture and culture, surrounded by breathtaking mountain landscapes.",
    location: "Kotayk, Armenia",
    type: "historical",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Garni_Temple_at_Sunset%2C_Armenia.jpg/2560px-Garni_Temple_at_Sunset%2C_Armenia.jpg",
    rating: 4.9,
    urlYouTube:"https://www.youtube.com/watch?v=xhhhI8uQJeY"
  },
  {
    id: 2,
    title: "Geghard Monastery",
    description:
      "Geghard Monastery is a UNESCO World Heritage site famous for its churches carved directly into the rock. The complex reflects medieval Armenian architecture and spiritual life, creating a unique atmosphere of history, faith, and nature combined.",
    location: "Kotayk, Armenia",
    type: "religious",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Monasterio_de_Geghard%2C_Armenia%2C_2016-10-02%2C_DD_63.jpg/2560px-Monasterio_de_Geghard%2C_Armenia%2C_2016-10-02%2C_DD_63.jpg",
    rating: 5,
    urlYouTube:"https://www.youtube.com/watch?v=1oMKS9q261g",
  },
  {
    id: 3,
    title: "Lake Sevan",
    description:
      "Lake Sevan is one of the largest high-altitude freshwater lakes in the world and a major natural treasure of Armenia. It is a popular destination for relaxation, swimming, and enjoying stunning views of blue waters surrounded by mountains.",
    location: "Gegharkunik, Armenia",
    type: "nature",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Sevan00001.jpg/960px-Sevan00001.jpg",
    rating: 4.8,
    urlYouTube:"https://www.youtube.com/watch?v=uNwdyjm07i8",
  },
  {
    id: 4,
    title: "Tatev Monastery",
    description:
      "Tatev Monastery is a medieval religious complex located at the edge of a deep gorge in southern Armenia. It is known for its historical importance, dramatic scenery, and access via the Wings of Tatev cable car, offering unforgettable views.",
    location: "Syunik, Armenia",
    type: "religious",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Tatev_Monastery_from_a_distance.jpg",
    rating: 4.9,
    urlYouTube:"https://www.youtube.com/results?search_query=Tatev+Monastery",
  },
  {
    id: 5,
    title: "Republic Square",
    description:
      "Republic Square is the heart of Yerevan and a central gathering place for locals and tourists. Surrounded by museums, hotels, and government buildings, it is especially famous for its evening musical fountains and lively atmosphere.",
    location: "Yerevan, Armenia",
    type: "modern",
    img: "https://d31qtdfy11mjj9.cloudfront.net/places/1563898496554173521.jpg.webp",
    rating: 4.6,
    urlYouTube:"https://www.youtube.com/watch?v=B6eM7MaEhBA",
  },
  {
    id: 6,
    title: "Dilijan National Park",
    description:
      "Dilijan National Park is a vast natural area covered with dense forests, mountain trails, and crystal-clear lakes. Often called the 'Armenian Switzerland', it is ideal for hiking, eco-tourism, and peaceful escapes into nature.",
    location: "Tavush, Armenia",
    type: "nature",
    img: "https://d31qtdfy11mjj9.cloudfront.net/gallery/1562160636669354503.jpg",
    rating: 4.7,
    urlYouTube:"https://www.youtube.com/watch?v=yAGco8I5n1M",
  },
  {
    id: 7,
    title: "Noravank",
    description:
      "Noravank is a 13th-century monastery complex set against dramatic red rock cliffs. The site is famous for its unique architecture, historical significance, and stunning contrast between stone buildings and natural surroundings.",
    location: "Vayots Dzor, Armenia",
    type: "religious",
    img: "https://i0.wp.com/www.armgeo.am/wp-content/uploads/2016/03/Noravank_overview.jpg?ssl=1",
    rating: 4.8,
    urlYouTube:"https://www.youtube.com/results?search_query=Noravank",
  },
  {
    id: 8,
    title: "Cascades Complex",
    description:
      "The Cascades Complex is a massive stairway in Yerevan combining modern art, green spaces, and panoramic city views. It connects the city center with upper districts and hosts sculptures, cafes, and cultural events.",
    location: "Yerevan, Armenia",
    type: "culture",
    img: "https://armeniancoins.am/wp-content/uploads/2022/05/%D5%AF%D5%A1%D5%BD%D5%AF%D5%A1%D5%A4-%D5%B0%D5%A1%D5%B4%D5%A1%D5%AC%D5%AB%D6%80.jpg",
    rating: 4.7,
    urlYouTube:"https://www.youtube.com/watch?v=TPY1SFLzhVg",
  },
  {
    id: 9,
    title: "Amberd Fortress",
    description:
      "Amberd Fortress is a medieval stronghold located on the slopes of Mount Aragats. Built between the 7th and 11th centuries, it offers impressive views, ancient walls, and a deep sense of Armenia’s military history.",
    location: "Aragatsotn, Armenia",
    type: "historical",
    img: "https://www.ararattravel.am/uploads/a/admin/original/amberd-1.jpg",
    rating: 4.6,
    urlYouTube:"https://www.youtube.com/watch?v=4zCoLhjQfek",
  },
  {
    id: 10,
    title: "Gyumri Old Town",
    description:
      "Gyumri Old Town is known for its black stone architecture, artistic spirit, and strong cultural traditions. Walking through its streets reveals historic buildings, craft workshops, and a unique atmosphere unlike any other city in Armenia.",
    location: "Gyumri, Armenia",
    type: "culture",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5uGVY8erbSexuhl1Fd6HsOIiOmKstlxRtlQ&s",
    rating: 4.5,
    urlYouTube:"https://www.youtube.com/watch?v=brEwUcMEtAo",
  },
];
