console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

// - Create an empty array named `myCollection`.
let myCollection = [];


// - Create a function named `addToCollection`. It should have this basic structure:
  // - ```js
  //     function addToCollection(collection, title, artist, yearPublished) {
  //       // your code here...
  //     }
  //   ```

  function addToCollection(collection, title, artist, yearPublished) { 
    const newAlbum = {
      title: title,
      artist: artist,
      yearPublished: yearPublished
    };
    collection.push(newAlbum);
    return newAlbum;
  }

  console.log(addToCollection(myCollection, 'As long as you love me', 'Backstreet Boys', 1997));
  console.log(addToCollection(myCollection, 'Ill never break your heart', 'Backstreet Boys', 1997));
  console.log(addToCollection(myCollection, 'Bye Bye Bye', 'Nsync', 2000));
  console.log(addToCollection(myCollection, 'This I promis you', 'Nsync', 2000));
  console.log(addToCollection(myCollection, 'Oops! I did it again.', 'Brittany Spears', 2000));
  console.log(addToCollection(myCollection, 'Genie in a bottle', 'Christina Aguilera', 1999));
  console.log(myCollection);
  

  function showCollection(collection) { //Create a function named `showCollection`. Take in a `collection` parameter
    for (let i = 0; i < collection.length; i++) { //Loop through the `collection`
    console.log(`${collection[i].title} by ${collection[i].artist} , published in ${collection[i].yearPublished}`); 
    //`console.log` each album's information formatted **within a single string**, like: `TITLE by ARTIST, published in YEARPUBLISHED`.
  }
  }
  showCollection(myCollection)


  function findByArtist(collection, artist) {             //take in container and artist parameter
    let matchingResults = [];                             //create an empty array to hold any matching resuts, if any
    for (let i = 0; i < collection.length; i++) {         //Loop through the `collection` 
      if (collection[i].artist === artist) {              //with a matching artist to the array.
        matchingResults.push(collection[i]);              //add any album objects
      }
    }
    return matchingResults                                 //Return the array with the matching results.
  }


// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
