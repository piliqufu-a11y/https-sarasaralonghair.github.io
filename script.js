function addComment() {
const input = document.getElementById("commentInput");
if (!input.value) return;

const comment = document.createElement("p");
comment.textContent = input.value;

document.getElementById("comments").prepend(comment);
input.value = "";
}
