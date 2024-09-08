// Toggle desktop share button
const desktopShareButton = document.getElementById('desktop-share-btn')
const shareBubbleContainer = document.getElementsByClassName(
  'share-bubble-container'
)

desktopShareButton.addEventListener('click', () => {
  shareBubbleContainer[0].classList.toggle('display-none')
})

// mobile share toggle

const mobileAuthorArea = document.querySelector('.mobile-author-area')
const mobileSocialSharingBar = document.querySelector(
  '.mobile-social-share-bar'
)
const mobileShareButton = document.querySelector('.mobile-share-btn-container')

mobileShareButton.addEventListener('click', () => {
  mobileAuthorArea.style.display = 'none'
  mobileSocialSharingBar.style.display = 'flex'
})

// Mobile social sharing bar

const mobileSocialShareBtn = document.querySelector('.mobile-social-share-btn')

mobileSocialShareBtn.addEventListener('click', () => {
  mobileAuthorArea.style.display = 'flex'
  mobileSocialSharingBar.style.display = 'none'
})
