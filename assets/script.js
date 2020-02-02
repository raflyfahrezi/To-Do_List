const list_items = document.querySelectorAll('.list-item')
const lists = document.querySelectorAll('.list')

let draggedItem = null

for (let index = 0; index < list_items.length; index++) {
    const item = list_items[index] 

    item.addEventListener('dragstart', function () {
        draggedItem = item
        setTimeout(() => {
            item.style.display = 'none'
            
        }, 0);
    })

    item.addEventListener('dragend', function () {
        setTimeout(() => {
            item.style.display = 'block'
        }, 0);
    })

    for (let index2 = 0; index2 < lists.length; index2++) {
        const list = lists[index2]

        list.addEventListener('dragover' , function (e) {
            e.preventDefault()
        })

        list.addEventListener('dragenter', function (e) {
            e.preventDefault()
            this.style.backgroundColor = 'rgba(0,0,0,0.2)'
        })

        list.addEventListener('dragleave', function (e) {
            this.style.backgroundColor = 'rgba(0,0,0,0.1)'
        })

        list.addEventListener('drop', function (e) {
            this.append(draggedItem)
            this.style.backgroundColor = 'rgba(0,0,0,0.1)'
        })
    }
}