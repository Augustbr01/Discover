function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // if(html.classList.contains('light')) {
  // html.classList.remove('light')
  // } else {
  // html.classList.add('light')
  // }
  //

  

  // pegar a tag img

  // subsituir a imagem
  // se tiver light mode adicionar a imagem LIGHT
  // se tiver sem light mode manter a imagem normal

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Avatar Light Image")
    
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Avatar Image")
  }


}
