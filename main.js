menu_list_array = ["Veg Margherita Pizza","Chicken Pizza","Double Cheese Margherita Pizza","Cheese and Corn Pizza","Peppy Paneer Pizza","Paneer Makhani Pizza","Veggie Paradise Pizza","Pepperoni Pizza"];


function getmenu(){
var htmldata;
htmldata="<ol class='menlist'>"
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata +'<li>' + menu_list_array[i] + '</li>'
}
htmldata=htmldata +"</ol>"
document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
menu_list_array.sort();
htmldata="<section class='cards'>"
for(var i=0;i<menu_list_array.length;i++){

    htmldata=htmldata+'<div class="card">' +'<img src="images/pizzaImg.png"/>' +menu_list_array[i]
}
htmldata=htmldata+"</section>"
document.getElementById("display_addedmenu").innerHTML=htmldata;
}

function add_top(){
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
add_item();
}