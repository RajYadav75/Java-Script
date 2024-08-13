function DeleteClick()
{
    flag = confirm("Delete\nRecord will be deleted");
    if(flag==true){
        document.querySelector("input[type=text]").value = "Delete Confirmed";
        document.querySelector("input[type=text]").placeholder = "Delete Confirmed";
    } else {
        alert("You canceled..");
    }
}