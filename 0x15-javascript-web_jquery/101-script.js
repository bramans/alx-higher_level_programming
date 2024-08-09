// Adds, removes, or clears items in an unordered list (UL) based on clicks on different DIV elements.
// When 'DIV#add_item' is clicked, it appends a new 'li' element with the text 'Item' to 'UL.my_list'.
// When 'DIV#remove_item' is clicked, it removes the last 'li' element from 'UL.my_list'.
// When 'DIV#clear_list' is clicked, it empties all 'li' elements from 'UL.my_list'.
$('document').ready(function () {
  $('DIV#add_item').click(function () {
    $('UL.my_list').append('<li>Item</li>');
  });
  $('DIV#remove_item').click(function () {
    $('UL.my_list li:last').remove();
  });
  $('DIV#clear_list').click(function () {
    $('UL.my_list').empty();
  });
});
