console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newPost = document.createElement("article");
newPost.classList.add("post");
const newPostContent = "Lorem ipsum dolor, sit amet";
const newUsername = "username2";
newPost.innerHTML = `<p class="post__content">
${newPostContent}</p>
<footer class="post__footer">
<span class="post__username">${newUsername}</span>
<button type="button" class="post__button" data-js="like-button">
  ♥ Like
</button>
</footer>`;
document.body.append(newPost);
