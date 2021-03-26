function edit() {
    var titletxt = document.getElementById("title").value;
    var contenttxt = document.getElementById("content").value;

    document.getElementById("titleDiv").innerHTML= '<textarea row="1" ';
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
