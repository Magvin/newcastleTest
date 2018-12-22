// contrast #0D5932,#4F4F4F

// #efefef


//windows onload///





// Header //
const header = document.querySelector('.header-nav');
const headerCall = document.querySelector('.header-nav-top__item-action');
const contrastChange = document.querySelector('.change');
const contrastBack = document.querySelector('.back-change');
const headerTopItems = document.querySelector('.header-nav-top__items');
const headerTopItemsBox = document.querySelectorAll('.header-nav-top__items-small-box')
const headerBottom = document.querySelectorAll('.header-nav-bottom__item');
const headerLogo = document.querySelector('.header-nav__logo-container');
const fontDicrease = document.querySelector('.header-font-dicrease');
const fontReset = document.querySelector('.header-font-reset');
const fontIncrease = document.querySelector('.header-font-increase');
const tooltipShow = document.querySelector('.fa-info-circle');
const tooltip = document.querySelector('.tooltiptext');
const secondaryNavArrow = document.querySelector('.secondary-nav__title-arrow')


// Body //

const body = document.body;




// Contrast Change //
contrastChange.addEventListener('click', () => {

    header.style.backgroundColor = '#262626';
    header.style.color = '#fff';
    headerCall.style.backgroundColor = '#0D5932';
    headerTopItems.style.borderBottom = '1px solid #fff';
    headerLogo.style.borderRight = '1px solid #fff';
    body.style.backgroundColor = '#333'

    for (let i = 0; i < headerTopItemsBox.length; i++) {
        headerTopItemsBox[i].style.backgroundColor = '#fff'
        headerTopItemsBox[i].style.color = 'rgb(255, 9, 9)'
    }
    console.log(headerBottom)
    headerBottom.forEach(item => item.style.color = '#fff')


})
contrastBack.addEventListener('click', () => {
    header.style.color = '#000';
    header.style.backgroundColor = '#fff';
    headerCall.style.backgroundColor = '#14a65b'
    headerTopItems.style.borderBottom = '1px solid #efefef';
    headerLogo.style.borderRight = '1px solid #efefef';
    body.style.backgroundColor = '#efefef'
    for (let i = 0; i < headerTopItemsBox.length; i++) {
        headerTopItemsBox[0].style.backgroundColor = '#000'
        headerTopItemsBox[0].style.color = 'rgb(255, 255, 9)'
        headerTopItemsBox[i].style.backgroundColor = '#fff'
        headerTopItemsBox[i].style.color = '#1c4178'

    }

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

// Secondary Nav Arrow dropdown //

secondaryNavArrow.addEventListener('click', () => {
    if (secondaryNavArrow.style.transform === '') {
        secondaryNavArrow.style.transform = 'rotate(180deg)'

    } else if (secondaryNavArrow.style.transform === 'rotate(180deg)') {
        secondaryNavArrow.style.transform = ""
    }


})

