function myFunction() {
  let input, filter, ul, li, a, i, txtValue

  input = document.getElementById('myInput')
  filter = input.value.toUpperCase()
  ul = document.getElementById('schedule')
  li = ul.getElementsByTagName('li')
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName('a')[0]
    txtValue = a.textContent || a.innerText
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = ''
    } else {
      li[i].style.display = 'none'
    }
  }
}

const items = Array.from(document.querySelectorAll('.schedules'))

items.sort((a, b) => {
  const dateA = new Date(a.getAttribute('data-date'))
  const dateB = new Date(b.getAttribute('data-date'))
  return dateA - dateB
})

items.forEach((item) => container.appendChild(item))
