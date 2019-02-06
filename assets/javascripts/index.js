function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', './assets/javascripts/contents.json', true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

function setTimer(ending){
  const endDate = new Date(ending).getTime();
  let countDown = setInterval(function () {

    const now = new Date().getTime();
    const difference = endDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = "Sale ends in " + days + "d " + hours + "h "
      + minutes + "m " + seconds + "s!";

    if (difference < 0) {
      clearInterval(countDown);
      document.getElementById("countdown").innerHTML = "Sale has ended!";
    }

  }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  loadJSON(function(response) {
    const contents = JSON.parse(response);
    console.log(contents);

    document.getElementById("header-img").src = contents.headerImg;
    setTimer(contents.endDate);

  });
});
