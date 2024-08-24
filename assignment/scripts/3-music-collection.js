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
  

  function showCollection(collection) {
    for (let i = 0; i < collection.length; i++) {
    console.log(`${collection[i].title} by ${collection[i].artist} , published in ${collection[i].yearPublished}`);
    }
  }
  showCollection(myCollection)

//   Add a function named `findByArtist`. This function should:
//   - Take in a `collection` parameter. Remember, we want to be able to search any collection!
//   - Take in an `artist` (string) parameter.
//   - Create an empty array to hold any matching results, if any.
//   - Loop through the `collection` and add any album objects with a matching artist to the array.
//   - Return the array with the matching results. (If no results are found, an empty array should be returned.)

// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are returned.

// > When testing your functions, write all tests in the JavaScript file

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
