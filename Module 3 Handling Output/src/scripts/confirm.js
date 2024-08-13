function DeleteClick(){
    flag = confirm("Delete\nRecord will be deleted");
    if (flag ==  true){
        alert("<h3>Record Deleted.</h3>");
    }
    else{
        alert("You canceled..");
    }
}