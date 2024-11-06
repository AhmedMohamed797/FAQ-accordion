// //============================= First Sol =============================//

// // Select All Elements
// let questions = document.querySelectorAll(".question-content div h3");

// // Loop on all elements
// questions.forEach((question) => {
//   question.addEventListener("click", () => {
//     let answer = document.querySelector(question.dataset.content);
//     let icon = question.querySelector("img");

//     // Toggle active class
//     answer.classList.toggle("active");

//     // Check if element has class active, change icon accordingly
//     if (answer.classList.contains("active")) {
//       icon.src = "assets/images/icon-minus.svg";
//     } else {
//       icon.src = "assets/images/icon-plus.svg";
//     }

//     // Close all other elements
//     questions.forEach((otherQuestion) => {
//       // Check if other question != question
//       if (otherQuestion !== question) {
//         let otherAnswer = document.querySelector(otherQuestion.dataset.content);
//         let otherIcon = otherQuestion.querySelector("img");

//         // Remove active class from all other answers
//         otherAnswer.classList.remove("active");
//         // Set plus icon
//         otherIcon.src = "assets/images/icon-plus.svg";
//       }
//     });
//   });
// });

//============================= Second Sol =============================//

// Select All Elements
let questions = document.querySelectorAll(".question-content div");

// Loop on all elements
questions.forEach((question) => {
  question.addEventListener("click", () => {
    // Check if anwer is open or not
    const isOpen = question.classList.contains("open");

    questions.forEach((q) => {
      // Remove class open from all
      q.classList.remove("open");

      // Hide the answer
      q.querySelector("p").style.display = "none";

      // Set plus icon
      q.querySelector("img").src = "assets/images/icon-plus.svg";
    });

    // Check if element hasn't class open
    if (!isOpen) {
      // Add class open to current
      question.classList.add("open");

      // Show the answer
      question.querySelector("p").style.display = "block";

      // Set minus icon
      question.querySelector("img").src = "assets/images/icon-minus.svg";
    }
  });
});
