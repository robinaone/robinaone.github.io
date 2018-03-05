function loadModal() {
  modal = document.getElementsByClassName('modal-wrapper')[0].display = 'block';
  modal.style.display = 'block';
}

function closeModal() {
  name = document.getElementById('nameInput').value;
  document.getElementById('name').innerHTML = name;
  modal = document.getElementsByClassName('modal-wrapper')[0];
  modal.style.display = 'none';
}
