function CreateClick(){
    folderName = prompt("Enter Folder Name :: ","New_Folder")
    if (folderName == null){
        alert("You Cancelled... ");
    }else if (folderName == ""){
        alert("Please Enter any Name for Folder :: ");
    }else {
        document.querySelector("p").innerHTML += "Folder Created :: "+folderName+ "<br>";
    }
}