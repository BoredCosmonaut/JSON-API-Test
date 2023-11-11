
//Function for the download button
document.getElementById("download").addEventListener("click", (e) => {
    e.preventDefault();
    const url = document.getElementById("input").value;
    getData(url)
})


//getData function calls the API
const getData = async function(url) {
    try {
        //Paste the url inside the fetch to diffrent API's to get diffrent data, url of the page can be used
        const res = await fetch(url)
        const data = await res.json();
        //Downloads the stringifyed version of the JSON have to parse it in python
        download(JSON.stringify(data), 'json.JSON', 'text/plain');
    }
    //Catches any errors
    catch(e) {
        document.getElementById("warning").innerText = e
        document.getElementById("warning").style.display = "flex";
        console.log(e)
    }
}

//Function for downloading the JSON file
function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}