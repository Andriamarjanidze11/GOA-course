let playlist = ['Bohemian Rhapsody', 'Imagine', 'Hotel California'];

function addSong(songTitle) {
    playlist.unshift(songTitle);
    return playlist;
}

function removeLastSong(lastSong){
    playlist.pop();
    return playlist;
}

function moveSongs(songs){
    playlist.copyWithin(0,1);
    return playlist;
}

function combinePlaylists(currentPlaylist, secondPlaylist) {
    return currentPlaylist.concat(secondPlaylist);
}

console.log(addSong('Purple Haze'));