let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--js');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});


let catComparisonBlockBefore = document.querySelector('#catComparisonBlockBefore');

let catComparisonRange = document.querySelector('#catComparisonRange');
catComparisonRange.addEventListener('input', function (e) {
  catComparisonBlockBefore.style.width = catComparisonRange.value + '%';
});

let mobileToggleCatComparison = document.querySelector('#mobileToggleCatComparison');
mobileToggleCatComparison.addEventListener('click', function (e) {
  if (catComparisonBlockBefore.style.width === '100%') {
    catComparisonBlockBefore.style.width = '0%';
    //document.querySelector('#mobileToggleCatComparisonBefore').classList.add('active');
    //document.querySelector('#mobileToggleCatComparisonAfter').classList.remove('active');
  } else {
    catComparisonBlockBefore.style.width = '100%';
    //document.querySelector('#mobileToggleCatComparisonBefore').classList.remove('active');
    //document.querySelector('#mobileToggleCatComparisonAfter').classList.add('active');
  }
});
