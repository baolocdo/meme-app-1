// Import stylesheets
import "./style.css";

// --------------------------------------------------------------
// SETUP. DO NOT CHANGE THESE LINES. SEE EXERCISE SECTION BELOW.
// --------------------------------------------------------------
// An array of URLs to the memes.
const memeUrls = [
  "https://res.cloudinary.com/baolocdo/image/upload/v1494196596/meme1_ldhisb.jpg",
  "https://res.cloudinary.com/baolocdo/image/upload/v1494196602/meme2_fcgumx.jpg",
  "https://res.cloudinary.com/baolocdo/image/upload/v1494196604/meme3_r4ke3j.jpg"
];

const memeTitles = ["I have no idea why", "Welcome mat", "Happiness"];

class Meme {
  // Constructs the meme with the provided URL.
  constructor(memeID, url, title) {
    this._url = url;

    // The numer of likes.
    this._likeNumber = 0;

    // The title of the meme.
    this._title = title;

    // The ID of the meme.
    this._id = memeID;
  }

  // Returns the ID of the meme.
  get ID() {
    return this._id;
  }

  // Returns the URL of the meme.
  get URL() {
    return this._url;
  }

  // Returns the number of likes.
  get likeNumber() {
    return this._likeNumber;
  }

  // Update the like number.
  set likeNumber(likeNumber) {
    this._likeNumber = likeNumber;
  }

  // Returns the title of the meme.
  get title() {
    return this._title;
  }
}

// --------------------------------------------------------------
// END SETUP
// --------------------------------------------------------------

// --------------------------------------------------------------
// EXERCISE: COMPLETE THE TODO'S BELOW
// --------------------------------------------------------------
class MemeController {
  constructor(memes, currentMemeID) {
    this._memes = memes;
    this._currentMeme = memes[currentMemeID];

    this.setCurrentMeme(memes[currentMemeID]);

    // Use self to capture the this object.
    // Otherwise, this will refer to the button object, not the controlle object!
    // This is why knowing Scope & Closure is important!
    self = this;

    // Set the handler for the Next button. It will go to the next meme.
    $("#next-image-id").click(function() {
      // If you use 'this' inside this function, it refers to the button "Next", not
      // the MemeController instance when this function is called as the button is clicked.
      // Use 'self' instead because it already captures the MemeController instance before.
      self.nextMeme();
    });

    // TODO: Add handler for previous meme. The element is the button
    // with the ID "#prev-image-id". See the example above.

    // TODO: Add handler for clicking Like button. The element is the button
    // with the ID "#like-button-id". See the example above.

    // TODO: Add handler for clicking dislike button. The element is the button
    // with the ID "#dislike-button-id". See the example above.
  }

  // Set the current meme to the provided meme, and update the image to the meme's img
  // source, its title and the like number.
  setCurrentMeme(meme) {
    this._currentMeme = meme;

    // Get the element with the ID "#meme-image-id" and replace the
    // source with the URL of the current meme.
    $("#meme-image-id").attr("src", meme.URL);

    // TODO: Set the title of the current meme.

    // Call updateLikeNumberElement with the current meme's likeNumber.
    this.updateLikeNumberElement(this._currentMeme.likeNumber);
  }

  // Updates the Like Number DOM element with the provided likeNumber.
  updateLikeNumberElement(likeNumber) {
    // TODO: Set the number of likes by updating the text of the element with the ID
    // "#meme-likes-id".
  }

  // Sets the next meme.
  nextMeme() {
    // The next meme ID. It will go back to the first one if the
    // current one is the last one in the list.
    var nextMemeID = (this._currentMeme.ID + 1) % this._memes.length;
    var nextMeme = this._memes[nextMemeID];
    if (nextMeme) {
      this.setCurrentMeme(nextMeme);
    }
  }

  // Sets the previous meme.
  previousMeme() {
    // TODO: Complete this function. It should be similar to the nextMeme() function above.
  }

  // Updates the likeNumber of the current meme when it is liked.
  like() {
    // Update the like number.
    this._currentMeme.likeNumber++;
    var likeNumber = this._currentMeme.likeNumber;
    // TODO: update the like number of the "#meme-likes-id" element.
    this.updateLikeNumberElement(likeNumber);
  }

  // Updates the likeNumber of the current meme when it is disliked.
  dislike() {
    // TODO: Complete this function. It should be similar to the like() function above.
  }
}
// --------------------------------------------------------------
// END EXERCISE
// --------------------------------------------------------------

// --------------------------------------------------------------
// NOTE: DO NOT CHANGE THE LINES BELOW!!!
// --------------------------------------------------------------
// Set up memes.
let memes = [];
for (let i = 0; i < memeUrls.length; i++) {
  // Create a new meme with the ID is i, meme URL and meme title.
  const aMeme = new Meme(i, memeUrls[i], memeTitles[i]);
  memes.push(aMeme);
  console.log(aMeme);
}

// SET UP THE CONTROLLER
const memeCtrl = new MemeController(memes, 0);
