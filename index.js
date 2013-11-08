var selection = window.getSelection();

module.exports = function(){
  var range = selection.getRangeAt(0);
  return range.startOffset < range.endOffset;
};