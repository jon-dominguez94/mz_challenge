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

function fillItems(items){
  const listings = document.getElementById("listings");
  items.forEach((item, i) => {
    const figure = document.createElement("FIGURE");
    figure.classList.add("sale-item");

    const img = document.createElement("IMG");
    img.classList.add("sale-pic");
    img.src = item.pic;
    figure.appendChild(img);
    
    const figCaption = document.createElement("FIGCAPTION");
    figCaption.classList.add("sale-desc");
    figCaption.innerHTML = item.desc;
    figure.appendChild(figCaption);

    listings.appendChild(figure);
    const hr = document.createElement("HR");
    if(i !== items.length - 1)
      listings.appendChild(hr);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadJSON(function(response) {
    const contents = JSON.parse(response);
    console.log(contents);

    document.getElementById("header-img").src = contents.headerImg;
    setTimer(contents.endDate);
    fillItems(contents.items);

  });
});
