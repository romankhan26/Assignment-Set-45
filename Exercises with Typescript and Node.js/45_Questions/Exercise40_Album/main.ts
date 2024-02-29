
function makeAlbum(artist: string, albumTitle: string, numTracks?: number): Record<string, unknown> {
    const album: Record<string, unknown> = {
        artist,
        albumTitle,
    };

    if (numTracks !== undefined) {
        album.numTracks = numTracks;
    }

    return album;
}

const album1 = makeAlbum("Atif Aslam", "Tera Hone Laga Hoon");
const album2 = makeAlbum("Nusrat Fateh Ali Khan", "Afreen Afreen", 8);
const album3 = makeAlbum("Ali Zafar", "Jhoom");

console.log(album1);
console.log(album2);
console.log(album3);