function DeleteClick()
{
    console.log("Delete Button Clicked");
    flag = confirm("Delete\nRecord will be deleted");
    if(flag==true){
        console.warn("OK Button Clicked - Record will delete");
        document.querySelector("p").outerHTML = "<h2>Delete Confirmed</h2>";
    } else {
        alert("You canceled..");
        console.error("Cancel Clicked");
    }
}