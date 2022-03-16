// Complete Day 1 goals here
// let songs = ["lovesick", "black coffee", "Sakura Trees", "sunrise"];

/*let images = [
  "https://www.whosampled.com/static/track_images_200/lr255718_20191231_234249163924.jpg",
  "https://images.genius.com/9761748a04f7f7a8f4342e5c40cb0e77.640x640x1.jpg",
  "https://i1.sndcdn.com/artworks-000211920009-v4p0h0-t500x500.jpg",
  "https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/8a/54/54/8a545494-dae0-509e-e069-dd259d668f8e/4018939324124_1448.jpg/400x400cc.jpg",
];

let artists = ["potsu", "Elijah Who", "Saib", "mt. fujitive"];

let lengths = ["2:30", "1:13", "1:39", "1:42"];

let links = [
  "https://open.spotify.com/track/3A2jJaOKYhmKEy9IyyEJF6?si=2ab908a708774857",
  "https://open.spotify.com/track/5Fcvs2SN18DwMhGaumJ78I?si=3596bf0c5245480d",
  "https://open.spotify.com/track/3F0mcxksBp33QrL6oyjvLN?si=e2334a1f168f4dc8",
  "https://open.spotify.com/track/2czm98EWdtLqvyVtp1tmhC?si=22a45a5f7d5e4d02",
];*/

let song0 = {
  title: "lovesick",
  artist: "potsu",
  link: "https://open.spotify.com/track/3A2jJaOKYhmKEy9IyyEJF6?si=2ab908a708774857",
  length: 2.3,
  image:
    "https://www.whosampled.com/static/track_images_200/lr255718_20191231_234249163924.jpg",
};

let song1 = {
  title: "black coffee",
  artist: "Elijah Who",
  link: "https://open.spotify.com/track/5Fcvs2SN18DwMhGaumJ78I?si=3596bf0c5245480d",
  length: 1.13,
  image:
    "https://images.genius.com/9761748a04f7f7a8f4342e5c40cb0e77.640x640x1.jpg",
};

let song2 = {
  title: "Sakura Trees",
  artist: "Saib",
  link: "https://open.spotify.com/track/3F0mcxksBp33QrL6oyjvLN?si=e2334a1f168f4dc8",
  length: 1.39,
  image:
    "https://angartwork.akamaized.net/?id=2625112&size=640",
};

let song3 = {
  title: "sunrise",
  artist: "mt. fujitive",
  link: "https://open.spotify.com/track/2czm98EWdtLqvyVtp1tmhC?si=22a45a5f7d5e4d02",
  length: 1.42,
  image:
    "https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/8a/54/54/8a545494-dae0-509e-e069-dd259d668f8e/4018939324124_1448.jpg/400x400cc.jpg",
};

let playlist = [song0, song1, song2, song3];

// Day 2 goals
function addSongInfo() {
  // Complete Day 3 goals inside this function
  let title = $(".title").val();
  let image = $(".image").val();
  let artist = $(".artist").val();
  let length = $(".length").val();
  let link = $(".link").val();

  let newSong = {
    title: title,
    image: image,
    artist: artist,
    length: length,
    link: link,
  };

  playlist.push(newSong);
}

function displaySongInfo() {
  playlist.forEach(function (song) {
    $(".songs").append(`<p>${song.title}</p>`);
    $(".images").append(`<img src=${song.image}>`);
    $(".artists").append(`<p>${song.artist}</p>`);
    $(".lengths").append(`<p>${song.length}</p>`);
    $(".links").append(`<a href=${song.link}>Listen</a>`);
  });
}

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
}

$(".add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();
