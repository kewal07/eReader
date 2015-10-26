// var Book = ePub("https://s3.amazonaws.com/moby-dick/");
// Book.getMetadata().then(function(meta) {
//   document.title = meta.bookTitle + " – " + meta.creator;
// });
// Book.getToc().then(function(toc) {
//   var $select = document.getElementById("toc"),
//     docfrag = document.createDocumentFragment();
//   toc.forEach(function(chapter) {
//     var option = document.createElement("option");
//     option.textContent = chapter.label;
//     option.ref = chapter.href;
//     docfrag.appendChild(option);
//   });
//   $select.appendChild(docfrag);
//   $select.onchange = function() {
//     var index = $select.selectedIndex,
//       url = $select.options[index].ref;
//     Book.goto(url);
//     return false;
//   }
// });
// Book.ready.all.then(function() {
//   document.getElementById("loader").style.display = "none";
// });
// Book.renderTo("area");
// Book.on("renderer:selected", function(selectedText) {
//   console.log(selectedText)
//     //Book.setStyle("background-color", "yellow");
//     //$(this).css("background-color","yellow");
//     //alert("You selected : "+selectedText.toString());
// });