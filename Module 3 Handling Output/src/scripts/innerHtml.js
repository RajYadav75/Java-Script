function DeleteClick()
{
    flag = confirm("Delete\nRecord will be deleted");
    if(flag==true){
        document.querySelector("h2").innerHTML = "Delete Confirmed";
        document.querySelector("p").innerHTML = "<h1>Record Deleted Successfully..</h1>";
    } else {
        alert("You canceled..");
    }
}
ind