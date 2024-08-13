function DeleteClick()
{
    flag = confirm("Delete\nRecord will be deleted");
    if(flag==true){
        document.write("<b><i><font color=red>Record Deleted..</font></b><hr><a href='index.html'>Back</a>");
    } else {
        alert("You canceled..");
    }
}
