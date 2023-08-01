const primaryNav = document.querySelector('.primary-navigation')
const mobileToggle = document.querySelector('.mobile-toggle')

mobileToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible')
    const expanded = mobileToggle.getAttribute('aria-expanded')

    if (visibility === 'false') {
        primaryNav.setAttribute('data-visible', true)
        mobileToggle.setAttribute('aria-expanded', true)
    } else if (visibility === 'true') {
        primaryNav.setAttribute('data-visible', false)
        mobileToggle.setAttribute('aria-expanded', false)
    }

})
