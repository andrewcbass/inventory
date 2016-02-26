'use strict';

$(document).ready(init);

function init() {
  
  $('#outerHolder').on('click', '.holder', clickHolder);
  $('#outerHolder').on('click', '.inv', clickInv);
  $('#addInv').on('click', addInventory);
}

function addInventory() {
  var cost = $('#num').val();
  cost = cost.toString();
  $('#num').val('');
  var itemName = $('#item').val();
  $('#item').val(''); 
  createInv(cost, itemName);
  groupSum(); 
}

function createInv(cost, name) {
  var $new = $('<div>');
  $new.addClass('inv');
  // $new.data( "price", cost);
  $new.text(name);
  var $cost = $('<div>').addClass('cost');
  $cost.text(cost);
  $new.append($cost);
  $('#inventory').append($new);

}

function clickInv(event) {
  event.stopPropagation();
  var wasSelected = $('.inv').hasClass('selected'); 
  if (!wasSelected) {
    //if it wasn't selected before, select it
    $(this).addClass('selected');
  }

  else {
    $('.inv').removeClass('selected'); 
  }
}

function clickHolder() {
  if($('.inv').hasClass('selected')) { 
    $('.selected').appendTo($(this));
    $('.selected').removeClass('selected'); 
  }
}

function groupSum() {
  console.log('groupSum');
  var invTot = 0;
  var cl1Tot = 0;
  var cl2Tot = 0;
  var cl3Tot = 0;
  var cl4Tot = 0;

  invTot = $('.cost').each(function(i, val) {
    return ($('.cost').eq(i).text());
  })

  console.log(invTot);
  // invTot = $( "#inventory" ).first().data( "price" );
  // console.log('Inventory: ', invTot);




}





































