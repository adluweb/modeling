window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('is-active')
  })

  document.querySelector('#burgerx').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('is-active')
  })
})
