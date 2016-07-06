
function sortTermDropdown(){
  var termSelect = $('select[name="enrollment_term_id"]');
  var selectedOption = $(termSelect).val();
  var termSelectList = $('option', termSelect);
  var re_letter = /^[A-Za-z]/;
  var re_number = /^[0-9]/;

  var topList = new Array();
  var middleList = new Array();
  var bottomList = new Array();

  for (var i=0; i < termSelectList.length; i++) {
    if (termSelectList[i].label == 'All Terms') {
      // this should be the first item in the list
      topList.unshift(termSelectList[i]);
    }
    else if (termSelectList[i].label == 'Ongoing') {
      // this should be the second item in the list
      topList.push(termSelectList[i]);
    }
    else if (termSelectList[i].label.match(re_letter)) {
      // all other items that start with a letter will go at the bottom, sorted ascending
      bottomList.push(termSelectList[i]);
    }
    else {
      // all of the items that start with a number will go below the first two items, sorted descending
      middleList.push(termSelectList[i]);
    }
  }

  var newList = topList.concat(
    middleList.sort(function(a,b){
      return (a.label >= b.label) ? -1 : 1;
    }),
    bottomList.sort(function(a,b){
      return (a.label >= b.label) ? 1 : -1;
    })
  );
  $(termSelect).html(newList).val(selectedOption);
}

function sortTermTable(){
  var termRowList = $('table#terms tbody tr.term').get();
  var re_letter = /^[A-Za-z]/;
  var re_number = /^[0-9]/;
  var topList = new Array;
  var bottomList = new Array;

  for (var i=0; i < termRowList.length; i++) {
    if (termRowList[i].getElementsByClassName('name')[0].innerHTML.match(re_number)) {
      // all of the term labels that start with a number are at the top, sorted descending
      topList.push(termRowList[i]);
    }
    else {
      // term labels that start with a letter are at the bottom, sorted ascending
      bottomList.push(termRowList[i]);
    }
  }

  var newList = topList.sort(function(a,b){
      var alabel = a.getElementsByClassName('name')[0].innerHTML;
      var blabel = b.getElementsByClassName('name')[0].innerHTML;

      return (alabel >= blabel) ? -1 : 1;
    }).concat(
      bottomList.sort(function(a,b){
        var alabel = a.getElementsByClassName('name')[0].innerHTML;
        var blabel = b.getElementsByClassName('name')[0].innerHTML;
        return (alabel >= blabel) ? 1 : -1;
      })
    );

  $('table#terms').children('tbody').append(newList);

}

$(document).ready(function() {
  if ($('select[name="enrollment_term_id"]').length > 0) {
    sortTermDropdown();
  }
  if ($('table#terms').length > 0) {
    sortTermTable();
  }
});
