function edit() {
    var titletxt = document.getElementById("title").innerHTML;
    var contenttxt = document.getElementById("content").innerHTML;

    document.getElementById("titleDiv").innerHTML = `<input type="text" value="${titletxt}" onkeypress="this.style.width = ((this.value.length + 1) * 8) + 'px';">`;

    document.getElementById("content").innerHTML = `<textarea rows="4" style="width:100%">${contenttxt}</textarea>`;

    document.getElementById("edit").innerHTML = `Save <i class="fas fa-edit">`
}

function like() {
    document.getElementById("likeBtn").innerHTML = (`<i class="fas fa-thumbs-up"></i> Liked !`);
    document.getElementById("firstOne").innerText = "1 person likes this!"
}

function addComment() {
    document.getElementById("comments").style.opacity = "100%";

    var text = document.getElementById("commentText").value;

    var div = document.createElement("div");
    div.id = "comment";
    div.innerText = text;

    document.getElementById("comments").appendChild(div);
}
