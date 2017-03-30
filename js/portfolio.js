$(document).ready(function(){
    

    $('#nav-icon').click(function(){
		$(this).toggleClass('open');
        $(".rightnav").toggleClass('open');
        $("#coverbox").toggleClass('open');
        $("#link-resume").toggleClass('open');
	});    
// external js: isotope.pkgd.js


// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.design-item',
  layoutMode: 'masonry',
  masonry: {
    // use element for option
    columnWidth: 180,
    gutter: 10
  },
  getSortData: {
    category: '[data-category]', // value of attribute
    recent_first: '.recent-frist',
    time: '.time parseInt'
    }
});    
    
// store filter for each group
var filters = {};

$('.filters').on( 'click', '.button', function() {
  var $this = $(this);
  // get group key
  var $buttonGroup = $this.parents('.button-group');
  var filterGroup = $buttonGroup.attr('data-filter-group');
  // set filter for group
  filters[ filterGroup ] = $this.attr('data-filter');
  // combine filters
  var filterValue = concatValues( filters );
  // set filter for Isotope
  $grid.isotope({ filter: filterValue });
});

// bind sort button click
$('#sorts').on( 'click', 'button', function() {
  var sortByValue = $(this).attr('data-sort-by');
  $grid.isotope({ sortBy: sortByValue });
});
    
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
  
// flatten object by concatting values
function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}

// external js: isotope.pkgd.js

var grid = document.querySelector('.grid');
var iso = new Isotope( grid, {
  itemSelector: '.design-item',
  masonry: {
    columnWidth: 180,
    gutter: 10
  }
});


grid.addEventListener( 'click', function( event ) {
  var target = event.target;
  // only click on itemContent
  if ( !target.classList.contains('item-content-h') ) {
    return;
  }
  
  var itemElem = target.parentNode;
  itemElem.classList.toggle('is-expanded');
  iso.layout();
});
    
grid.addEventListener( 'click', function( event ) {
  var target = event.target;
  // only click on itemContent
  if ( !target.classList.contains('item-content-v') ) {
    return;
  }
  
  var itemElem = target.parentNode;
  itemElem.classList.toggle('is-expanded');
  iso.layout();
});
    
    
})
