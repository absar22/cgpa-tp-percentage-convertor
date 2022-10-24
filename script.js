
document.querySelector('#button').addEventListener('click', cgpaConvertor)

function cgpaConvertor(){
  let cgpa = document.querySelector('#cgpa').value 
  cgpa *= 9.5

  document.querySelector('#showYourResultHere').innerHTML = cgpa + '%'
}