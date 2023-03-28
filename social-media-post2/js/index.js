console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const newPostContent = "Lorem ipsum dolor, sit amet";
const newUsername = "@username2";

const newPost = document.createElement("article");
const newParagaph = document.createElement("p");
const newFooter = document.createElement("footer");
const newSpan = document.createElement("span");
const newButton = document.createElement("button");

newPost.classList.add("post");
newParagaph.classList.add("post__content");
newFooter.classList.add("post__footer");
newSpan.classList.add("post__username");
newButton.classList.add("post__button");
newButton.setAttribute("type", "button");
newButton.setAttribute("data-js", "like-button2");

newSpan.innerText = newUsername;
newParagaph.innerText = newPostContent;
newButton.innerText = "♥ Like";

newFooter.append(newSpan);
newFooter.append(newButton);
newPost.append(newParagaph);
newPost.append(newFooter);

document.body.append(newPost);

const likeButton2 = document.querySelector('[data-js="like-button2"]');
likeButton2.addEventListener("click", handleLikeButtonClick);
