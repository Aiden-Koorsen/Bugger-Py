files = document.querySelectorAll("#file")

// Add a click event for any of the files
files.forEach(file => {
  file.addEventListener("click", ()=>{
    window.location = "/personal/d/" + file.innerText;
  });
});

function dragOver(event){
  event.preventDefault()
}

// Drag and drop functionality
function drop(event){
  event.preventDefault();

  if (event.dataTransfer.items){
      [...event.dataTransfer.items].forEach((item) => {
          if (item.kind === "file"){
            const file = item.getAsFile();
            
            file.text().then((res)=>{
              // File data is returned in response
              fetch("/personal/u", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({filename: file.name, filedata: res})
              });
            });

          }
      });
  }
}
