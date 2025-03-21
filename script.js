let modal = document.querySelector("#modal")
let close = document.querySelector("#close")
let showModal = document.querySelector("#showModal")

showModal.onclick = () => modal.showModal()
close.onclick = () => modal.close()