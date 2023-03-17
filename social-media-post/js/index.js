console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--

const postTitle = "This is a title";
const postText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit amet, impedit quidem vero aperiam, natus,";
let numberOfLikes = 15;
const user = "savory01";
const isReported = false;
numberOfLikes += 1;

// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--

console.log("Title: ", postTitle);
console.log("Post text: ", postText);
console.log("Likes", numberOfLikes);
console.log("User: ", user);
console.log("Is user reported: ", isReported);

// --^-- write your code here --^--
