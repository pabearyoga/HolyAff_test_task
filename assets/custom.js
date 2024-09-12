document.addEventListener("DOMContentLoaded", function () {
  // Функція збереження відповіді
  function saveAnswer(questionId, answer) {
    localStorage.setItem(questionId, answer);
  }

  // Функція для відображення збережених відповідей
  function showSavedAnswers() {
    console.log("Saved Answers:");
    ["q1", "q2", "q3", "q4"].forEach(function (questionId) {
      const answer = localStorage.getItem(questionId);
      console.log(`${questionId}: ${answer}`);
    });
  }

  // Перевірка, чи існує контейнер для делегування подій
  const surveyContainer = document.querySelector(".survey_container");
  if (surveyContainer) {
    // Використовуємо делегування подій для кнопок
    surveyContainer.addEventListener("click", function (e) {
      if (e.target.classList.contains("survey_button")) {
        const questionId = e.target.parentElement.id;
        const answer = e.target.textContent.trim();
        saveAnswer(questionId, answer);
      }
    });
  }

  // Показати відповіді при натисканні на кнопку
  const showAnswersButton = document.querySelector("#show_answers");
  if (showAnswersButton) {
    showAnswersButton.addEventListener("click", showSavedAnswers);
  }

  // Показати відповіді при натисканні OK у модальному вікні
  const okButton = document.querySelector("#p_modal3 #p_modal_button3");
  if (okButton) {
    okButton.addEventListener("click", function (event) {
      event.preventDefault();
      showSavedAnswers();
    });
  }

  // Додавання нового коментаря
  const postCommentButton = document.querySelector("#post_comment");
  if (postCommentButton) {
    postCommentButton.addEventListener("click", function () {
      const commentText = document.querySelector("#new_comment").value.trim();

      if (commentText) {
        const newComment = document.createElement("div");
        newComment.classList.add("comments");
        newComment.innerHTML = `
            <div class="profile">
                <img src="assets/anonim.png" alt="Profile">
            </div>
            <div class="comment-content">
                <p class="name">Anonim</p>
                <p>${commentText}</p>
            </div>
            <div class="clr"></div>
            <div class="comment-status">
                <span>Curte·comente <img src="assets/like.png" width="15px" height="15px"> 0</span>
                <small>· <u>Just now</u></small>
            </div>
          `;

        document.querySelector(".comments_face").appendChild(newComment);
        document.querySelector("#new_comment").value = "";
      } else {
        alert("O comentário não pode ficar vazio!");
      }
    });
  }
});
