////// Task # 40 /////
//Album: Write a function called make_album() that builds a Object describing a music album. 
//The function should take in an artist name and an album title, and it should return a
//Object containing these two pieces of information. Use the function to make three dictionaries
//representing different albums. Print each return value to show that Objects are storing the 
//album information correctly. Add an optional parameter to make_album() that allows you to store 
//the number of tracks on an album. If the calling line includes a value for the number of tracks,
//add that value to the album’s Object. Make at least one new function call that includes the number
// of tracks on an album.
function make_album(artistName, title) {
    return { artistName, title };
}
let album_1 = make_album("Atif Aslam", "Ao Madiney chalay");
let album_2 = make_album("NFAK", "Kamli Waly");
let album_3 = make_album("Amjad Sabri", "Bhardo Jholi Meri Ya Muhammad");
console.log(album_1);
console.log(album_2);
console.log(album_3);
//////Number Of Track////
function make_album_2(artistName, title, noOfTracks) {
    return { artistName, title, noOfTracks };
}
let album_4 = make_album_2("Atif Aslam", "Ao Madiney chalay", 8);
let album_5 = make_album_2("NFAK", "Kamli Waly", 16);
let album_6 = make_album_2("Amjad Sabri", "Bhardo Jholi", 0);
console.log(album_4);
console.log(album_5);
console.log(album_6);
export {};
