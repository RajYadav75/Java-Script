
function DeleteClick()
{
    flag = confirm("Delete\nRecord will be deleted");
    if(flag==true){
        document.querySelector("p").outerHTML = "<h1>Delete Confirmed</h1>";
    } else {
        alert("You canceled..");
    }
}