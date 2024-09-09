// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "I am Groot", artist: "Groot", genre: "Groot"},
    { title: "The Chain", artist: "Fleetwood Mac", genre: "Rock" },
    { title: "Surrender", artist: "Cheap Trick", genre: "Rock" },  
    { title: "Brandy (You're a Fine Girl)", artist: "Looking Glass", genre: "Pop" },
    { title: "Mr. Blue Sky", artist: "Electric Light Orchestra", genre: "Rock" }
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Groot"

    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here
    const playlists = document.getElementById("playlists")

    Object.entries(guardians).map(([guardian, genre]) => {
        // create a div for each guardian's playlist
        const guardianPlaylist = document.createElement("div")
        guardianPlaylist.classList.add("playlist")
        
        // set a heading for the guardian
        const playlistHeading = document.createElement("h2")
        playlistHeading.textContent = `${guardian}'s Playlist`
        guardianPlaylist.appendChild(playlistHeading)

        //create a list to hold filtered songs
        const playlist = songs.filter(song => song.genre === genre)

        //add playlist items to guardian playlist div
        const tracks = document.createElement("ul")
        playlist.forEach(song => {
            const listItem = document.createElement("li")
            listItem.classList.add("song")
            listItem.innerHTML=`<span class="song-title">${song.title}</span> by ${song.artist}`
            tracks.appendChild(listItem)
        })

        guardianPlaylist.appendChild(tracks)
        playlists.appendChild(guardianPlaylist)
    })
};

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);


