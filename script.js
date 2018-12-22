// contrast #0D5932,#4F4F4F

// #efefef

// Header //
const headerCall = document.querySelector('.header-nav-top__item-action');
const contrastChange = document.querySelector('.change');
const contrastBack = document.querySelector('.back-change');
const headerTopItems = document.querySelector('.header-nav-top__items');
const headerLogo = document.querySelector('.header-nav__logo-container');
const fontDicrease = document.querySelector('.header-font-dicrease');
const fontReset = document.querySelector('.header-font-reset');
const fontIncrease = document.querySelector('.header-font-increase');
const tooltipShow = document.querySelector('.fa-info-circle');
const tooltip = document.querySelector('.tooltiptext');

console.log(tooltipShow)

// Body //

const body = document.body;

// Contrast Change //
contrastChange.addEventListener('click', () => {
    headerCall.style.backgroundColor = '#0D5932';
    headerTopItems.style.borderBottom = '1px solid #4F4F4F';
    headerLogo.style.borderRight = '1px solid #4F4F4F';
})
contrastBack.addEventListener('click', () => {
    headerCall.style.backgroundColor = '#14a65b'
    headerTopItems.style.borderBottom = '1px solid #efefef';
    headerLogo.style.borderRight = '1px solid #efefef';
})
// Tooltip //

tooltipShow.addEventListener('mouseenter', () => {
    tooltip.style.visibility = 'unset'
})
tooltipShow.addEventListener('mouseleave', () => {
    tooltip.style.visibility = 'hidden'
})


// Font size change on body //


fontDicrease.addEventListener('click', () => {
    body.style.fontSize = '14px'
})
fontReset.addEventListener('click', () => {
    body.style.fontSize = '16px'
})
fontIncrease.addEventListener('click', () => {
    body.style.fontSize = '18px'
})