function DeleteClick()
{
    flag = confirm("Delete\nRecord will be deleted");
    if(flag==true){
        document.querySelector("h2").innerText = "Delete Confirmed";
        document.querySelector("p").innerText = "Record Deleted Successfully..";
    } else {
        alert("You canceled..");
    }
}
