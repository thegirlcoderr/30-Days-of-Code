// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let Error = document.getElementById("error")

function purchase() {
   console.log("clicked");
    Error.innerHTML = "Opps!" + " "+"Something went wrong, please try again"
}