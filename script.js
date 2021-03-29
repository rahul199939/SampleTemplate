function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("open").style.display="none";
    document.getElementById("close").style.display="inline";
}

function closeNav(){
    document.getElementById("mySidebar").style.width = "0px";
    document.getElementById("open").style.display="inline";
    document.getElementById("close").style.display="none";
}