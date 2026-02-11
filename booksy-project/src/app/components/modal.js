import { fetchBookById } from "../services/fetchBookById";
import refs from "../utils/refs";
// refs.booksModal.showModal();
refs.booksList.addEventListener("click", onBookListClick);

function onBookListClick(event) {
  const currentEl = event.target;

  const bookCard = currentEl.closest(".js-book-card");
  if (bookCard === null) {
    return;
  }
  const {
    dataset: { bookId },
  } = bookCard;
  console.log("🚀 ~ onBookListClick ~ bookId:", bookId);
  fetchBookById(bookId)
    .then(bookInfo => {
      console.log("🚀 ~ onBookListClick ~ bookInfo:", bookInfo);
    })
    .catch(error => {
      console.log("🚀 ~ onBookListClick ~ error:", error);
    });
}
