require("./style.css");
var CommentBox = require("./components/CommentBox");
var data = [{
  author: "Pete Hunt",
  text: "This is one comment"
}, {
  author: "Jordan Walke",
  text: "This is *another* comment"
}];

$(document).ready(function(){
  React.render(
    <div>
      <CommentBox data={data} />
    </div>
    ,document.getElementById('content'));
});
