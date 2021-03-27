function edit() {
    var titleTxt = document.getElementById("title").innerHTML;
    var contentTxt = document.getElementById("content").innerHTML;

    document.getElementById("titleDiv").innerHTML = `<input id="title" type="text" value="${titleTxt}" onkeypress="this.style.width = ((this.value.length + 9) * 9) + 'px';">`;

    document.getElementById("contentDiv").innerHTML = `<textarea id="content" rows="13-" style="width:100%;"></textarea>`;
    document.getElementById("content").value=contentTxt;

    document.getElementById("edit").setAttribute('onclick','save()');
    document.getElementById("edit").innerHTML = `Save <i class="far fa-save"></i>`;
}

function save(){
    var titleTxt = document.getElementById("title").value;
    var contentTxt = document.getElementById("content").value;

    document.getElementById("titleDiv").innerHTML = `<h3 id="title"> ${titleTxt}</h3>`;
    document.getElementById("contentDiv").innerHTML = `<div id="content">${contentTxt}</div>`;

    document.getElementById("edit").setAttribute('onclick','edit()');
    document.getElementById("edit").innerHTML = `Edit <i class="fas fa-edit"></i>`;
}

function like() {
    document.getElementById("likeBtn").innerHTML = (`<i class="fas fa-thumbs-up"></i> Liked!`);
    document.getElementById("firstOne").innerText = "1 person likes this!"
}

function addComment() {
    var text = document.getElementById("commentText").value;
    if(text){
        var div = document.createElement("div");
        div.id = "comment";
        div.innerText = text;
        
        document.getElementById("comments").appendChild(div);
    }
    else{
        alert("Comment cannot be empty!");
    }
}



