function addComment(){
    document.getElementById("comments").style.display="block";

    var text= document.getElementById("commentText").value;

    var div=document.createElement("div");
    div.id="comment";
    div.innerText=text;

    document.getElementById("comments").appendChild(div);
}