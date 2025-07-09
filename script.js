const input = document.querySelector('input')
const button = document.querySelector('button')
const QRimg = document.getElementById('QRimg')


button.addEventListener('click', () => {
  if (input.value.trim() === '') {
    alert('Please enter a name')
  } else {
    let name = input.value
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${name}`
    QRimg.src = `${apiUrl}`
    QRimg.classList.add('showImg')
  }
})