// contrast #0D5932,#4F4F4F

// #efefef


//windows onload///





// Header //
const header = document.querySelector('.header-nav');
const logo = document.querySelector('#header-nav__logo')
const headerCall = document.querySelector('.header-nav-top__item-action');
const contrastChange = document.querySelector('.change');
const contrastBack = document.querySelector('.back-change');
const headerTopItems = document.querySelector('.header-nav-top__items');
const headerTopItemsBox = document.querySelectorAll('.header-nav-top__items-small-box')
const headerBottomMobile = document.querySelector('.header-nav-bottom');
const headerBottom = document.querySelectorAll('.header-nav-bottom__item');
const headerLogo = document.querySelector('.header-nav__logo-container');
const fontDicrease = document.querySelector('.header-font-dicrease');
const fontReset = document.querySelector('.header-font-reset');
const fontIncrease = document.querySelector('.header-font-increase');
const tooltipShow = document.querySelector('.fa-info-circle');
const tooltip = document.querySelector('.tooltiptext');
const hamburger = document.querySelector('.header-nav-top__hamburger')
const secondaryNavArrow = document.querySelector('.secondary-nav__title-arrow');
const secondaryNavArrowDropdown = document.querySelector('.secondary_nav__title-arrow-dropdown');
const vehicleItems = document.querySelectorAll('.vehicle-info__nav-item')
const vehicleDimensions = document.querySelector('.vehicle-info_nav-img-info-dimensions')
const vehicleLayouts = document.querySelector('.vehicle-info_nav-img-info-layouts')
const vehicleNavColour = document.querySelector('.vehicle-info_nav-img-info-car-colour')
const vehicleColourImg = document.querySelector('.vehicle-info_nav-img-info-car-colour-img')
const vehicleColour = document.querySelector('.colour_picker')
const vehicleColourCar = vehicleColour.children[0].children;
const vehicleTrim = document.querySelector('.vehicle-info_nav-img-info-trim');


// Body //

const body = document.body;




// Contrast Change //
contrastChange.addEventListener('click', () => {

    header.style.backgroundColor = '#262626';
    header.style.color = '#fff';
    headerCall.style.backgroundColor = '#0D5932';
    headerTopItems.style.borderBottom = '1px solid #fff';
    headerLogo.style.borderRight = '1px solid #fff';
    body.style.backgroundColor = '#333';
    logo.src = '/img/logo-contrast.svg'

    for (let i = 0; i < headerTopItemsBox.length; i++) {
        headerTopItemsBox[i].style.backgroundColor = '#fff'
        headerTopItemsBox[i].style.color = 'rgb(255, 9, 9)'
    }
    console.log(headerBottom)
    headerBottom.forEach(item => item.style.color = '#fff')


})
contrastBack.addEventListener('click', () => {
    logo.src = '/img/logo.svg';
    header.style.color = '#000';
    header.style.backgroundColor = '#fff';
    headerCall.style.backgroundColor = '#14a65b'
    headerTopItems.style.borderBottom = '1px solid #efefef';
    headerLogo.style.borderRight = '1px solid #efefef';
    body.style.backgroundColor = '#efefef';
    for (let i = 0; i < headerTopItemsBox.length; i++) {
        headerTopItemsBox[0].style.backgroundColor = '#000'
        headerTopItemsBox[0].style.color = 'rgb(255, 255, 9)'
        headerTopItemsBox[i].style.backgroundColor = '#fff'
        headerTopItemsBox[i].style.color = '#1c4178'

    }
    headerBottom.forEach(item => item.style.color = '#000')
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

// Hamburger //


hamburger.addEventListener('click', () => {


    console.log(headerBottomMobile.style.display)


    if (headerBottomMobile.style.display === '') {
        hamburger.children[0].style.transition = 'all .4s'
        hamburger.children[0].style.transform = 'translateX(-50%) rotate(40deg)';
        hamburger.children[2].style.transition = 'all .4s'
        hamburger.children[2].style.transform = 'translateX(-50%) rotate(-40deg)';
        hamburger.children[2].style.top = '0';
        hamburger.children[1].style.display = 'none';
        headerBottomMobile.style.display = 'block'

        headerBottomMobile.style.transition = 'all .4s'
    } else if (headerBottomMobile.style.display === 'block') {
        hamburger.children[0].style.transform = 'translateX(-50%)';
        hamburger.children[2].style.transform = 'translateX(-50%)';
        hamburger.children[2].style.top = '20px';
        hamburger.children[1].style.display = 'block';
        headerBottomMobile.style.display = ''

    }
})



// Secondary Nav Arrow dropdown //

secondaryNavArrow.addEventListener('click', () => {
    if (secondaryNavArrow.style.transform === '') {
        secondaryNavArrow.style.transform = 'rotate(180deg)'
        secondaryNavArrowDropdown.style.display = 'block'

    } else if (secondaryNavArrow.style.transform === 'rotate(180deg)') {
        secondaryNavArrow.style.transform = ""
        secondaryNavArrowDropdown.style.display = 'none'
    }


})


// Vehicle Info //

vehicleItems.forEach(item => {
    item.addEventListener('click', (event) => {
        if (event.target.classList.value === 'vehicle-info__nav-item layouts') {
            vehicleItems[0].classList.remove('tagged')
            vehicleItems[2].classList.remove('tagged')
            vehicleItems[3].classList.remove('tagged')
            vehicleDimensions.style.display = 'none'
            vehicleNavColour.style.display = 'none'
            vehicleTrim.style.display = 'none'
            event.target.classList.value += ' tagged'
            vehicleLayouts.style.display = 'block'

        }
        if (event.target.classList.value === 'vehicle-info__nav-item dimensions') {
            vehicleItems[1].classList.remove('tagged')
            vehicleItems[2].classList.remove('tagged')
            vehicleItems[3].classList.remove('tagged')
            // vehicleDimensions.style.display = 'none'
            event.target.classList.value += ' tagged'
            vehicleDimensions.style.display = 'inline-block '
            vehicleLayouts.style.display = 'none'
            vehicleNavColour.style.display = 'none'
            vehicleTrim.style.display = 'none'
        }
        if (event.target.classList.value === 'vehicle-info__nav-item colour') {
            vehicleItems[0].classList.remove('tagged')
            vehicleItems[1].classList.remove('tagged')
            vehicleItems[3].classList.remove('tagged')
            vehicleDimensions.style.display = 'none'
            event.target.classList.value += ' tagged'
            vehicleNavColour.style.display = 'inline-block '
            vehicleLayouts.style.display = 'none'
            vehicleTrim.style.display = 'none'
        }
        if (event.target.classList.value === 'vehicle-info__nav-item trim') {
            vehicleItems[0].classList.remove('tagged')
            vehicleItems[1].classList.remove('tagged')
            vehicleItems[2].classList.remove('tagged')
            vehicleDimensions.style.display = 'none'
            event.target.classList.value += ' tagged'
            vehicleNavColour.style.display = 'none '
            vehicleLayouts.style.display = 'none'
            vehicleTrim.style.display = 'block'
        }

    })
})


// Vehicle Colour //


vehicleColour.addEventListener('click', (e) => {
    let colour = event.target.value
    if (event.target.type) {
        vehicleColourImg.src = `https://www.bristolstreetversa.com/images/colour_swatches/Grand-Tourneo-Connect/${colour}.png`
    }



})



