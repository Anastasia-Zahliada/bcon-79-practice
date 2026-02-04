// TODO: Get posts info
// console.log(posts);
// cardsList.addEventListener("click", onCardListClick);

// function onCardListClick(event) {
//   event.target;
//   console.log("🚀 ~ onCardListClick ~ event.target:", event.target);
// }

const cardsList = document.querySelector(".cards");
const searchForm = document.querySelector(".search-form");

//? Відображення списку постів на основі posts
function populateCardsList(posts) {
  const markup = posts
    .map(post => {
      return `<li class="card border-dark mb-3" data-userid="${post.id}">
            <img src="${post.coverImage}" class="card-img-top" alt="${post.title}" height="300">
            <div class="card-body">
              <h5 class="card-title">${post.title}</h5>
              <hr />
              <div class="card-meta mb-3">
                <div class="card-meta-tags">
                  <p class="m-0 text-black-50 fw-lighter">
                    <i class="bi bi-tag"></i>
                  </p>
                  <ul class="tags-list">
                    <li
                      class="border border-dark rounded-1 text-center text-black-50 fw-lighter"
                    >
                      <small>${post.tags[0]}</small>
                    </li>
                    <li
                      class="border border-dark rounded-1 text-center text-black-50 fw-lighter"
                    >
                      <small>${post.tags[1]}</small>
                    </li>
                    <li
                      class="border border-dark rounded-1 text-center text-black-50 fw-lighter"
                    >
                      <small>${post.tags[2]}</small>
                    </li>
                  </ul>
                </div>

                <ul class="card-meta-likes">
                  <li class="text-black-50 fw-lighter">
                    <i class="bi bi-hand-thumbs-up"></i> <small>${post.reactions.likes}</small>
                  </li>
                  <li class="text-black-50 fw-lighter">
                    <i class="bi bi-hand-thumbs-down"></i> <small>${post.reactions.dislikes}</small>
                  </li>
                </ul>

                <p class="card-meta-views m-0 text-black-50 fw-lighter">
                  <i class="bi bi-eye"></i> <small>${post.views}</small>
                </p>
              </div>
              <hr />
              <p class="card-text">${post.body}</p>
            </div>
          </li>`;
    })
    .join("");
  cardsList.innerHTML = markup;
}
populateCardsList(posts);

//? Обробка форми пошуку за ключовим словом
searchForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: {
      searchQuery: { value },
    },
  } = event.target;

  const postFilter = posts.filter(post => {
    return post.body.includes(value);
  });
  console.log("🚀 ~ onFormSubmit ~ postFilter:", postFilter);
  populateCardsList(postFilter);
}
