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


// function init() {
//   loadJSON(function (response) {
//     const contents = JSON.parse(response);
//     // console.log(contents);
//     return contents;
//   });
// }

// const contents = init();

document.addEventListener("DOMContentLoaded", () => {
  loadJSON(function(response) {
    const contents = JSON.parse(response);
    console.log(contents);

    // document.getElementById("one").style.background = `url(${contents.headerImg})`;
    document.getElementById("header-img").src = contents.headerImg;


    const endDate = new Date(contents.endDate).getTime();
    let countdown = setInterval(function(){

    }, 1000);

  });
});
