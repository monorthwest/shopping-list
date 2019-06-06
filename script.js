/* eslint-disable no-console */
/* eslint-disable no-undef */
'use strict';
// 
//     $('shopping-list').addItem(event => {
//       event.preventDefault();
//       //$(".js-results").empty();
//       //const num = parseInt( $(this).find(
//       'input[name="shopping-list-entry"]').val());
//     }
// }

$('#js-shopping-list-form').submit(event => {
  //$(document).ready(function(){
  // $('$shopping-list-entry').click(function(){
  // var v = $("#txt").val();
  // $("ul").append("<li>''</li>");
  
  console.log('yay chris!');
  //prevent auto refresh
  event.preventDefault();
  //resets input field
  $('#shopping-list-entry').append('$');
  
});

/*
*in input enter text to add items to list using button or enter key
*
*check and uncheck items on list by clicking the "check" button
*
*use delete button to permanantly delete items from list
*/