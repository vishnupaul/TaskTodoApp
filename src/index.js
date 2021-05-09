const addBtn = document.querySelector('.fa-plus')
const tasks = document.querySelector('.tasks')
const input = document.querySelector('#add-task')

// add item in the list
addBtn.addEventListener('click', function () {
  let todoText = input.value

  if (todoText === '') {
    alert('you must add a task')
  } else {
    let li = document.createElement('li')
    li.innerHTML = `<span class="check"><input type="checkbox" name="" id="" /></span><p>
      ${todoText}
      </p><span class="remove"><i class="far fa-times-circle"></i></span>`

    tasks.insertBefore(li, tasks.childNodes[0])
    input.value = ''

    // remove items from the list
    const remove = li.querySelector('.remove')
    remove.addEventListener('click', function (e) {
      tasks.removeChild(this.parentNode)
    })
    // checked the items in the list
    const check = li.querySelector('.check')

    check.addEventListener('click', function () {
      let dc = this.parentNode
      dc.classList.toggle('completed')
    })
  }
})
