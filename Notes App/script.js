const notesContainer = document.querySelector(".notes-container");

const createBtn = document.querySelector("#create-btn");

let notes = document.querySelectorAll(".notes");

function undateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();
createBtn.addEventListener("click", () => {
  let notesBox = document.createElement("p");

  let deleteimg = document.createElement("img");

  deleteimg.src = "./deleteimg.png";

  notesBox.className = "notes";
  notesBox.setAttribute("contenteditable", "true");

  notesContainer.appendChild(notesBox).appendChild(deleteimg);
});

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    undateStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".notes");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        undateStorage();
      };
    });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});

// function clearestorege(){
//     localStorage.clear();
// }

// clearestorege()
