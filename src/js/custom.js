const tabItem = document.querySelectorAll('.item')
const tabs = document.querySelectorAll('.tab, .guide')
const btnModal = document.querySelectorAll('.guide, .btn-close')
const modal = document.querySelector('.overlay')
const body = document.querySelector('body')
const acc = document.querySelectorAll('.accordion')

// Accordion
acc.forEach(function (item) {
  item.addEventListener('click', function () {
    this.classList.toggle('active')
  })
})
function toggleShow () {
  const target = this
  const item = target.classList.contains('tab') || target.classList.contains('guide')
    ? target
    : target.parentElement
  const group = item.dataset.actabGroup
  const id = item.dataset.actabId
  console.log('group' + group)
  console.log('id' + id)
  tabs.forEach(function (tab) {
    if (tab.dataset.actabGroup === group) {
      if (tab.dataset.actabId === id) {
        tab.classList.add('active')
      } else {
        tab.classList.remove('active')
      }
    }
  })

  tabItem.forEach(function (item) {
    const tabItem = item
    if (tabItem.dataset.actabGroup === group) {
      if (tabItem.dataset.actabId === id) {
        tabItem.classList.add('active')
      } else {
        tabItem.classList.remove('active')
      }
    }
  })
}

tabs.forEach(function (tab) {
  tab.addEventListener('click', toggleShow)
})

// Overlay modal
btnModal.forEach(function (item) {
  item.addEventListener('click', function () {
    overlay()
  })
})

function overlay () {
  modal.classList.toggle('active')
  body.classList.toggle('fixed')
}

window.onclick = function (event) {
  if (event.target === modal) {
    overlay()
  }
}