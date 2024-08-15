export function handleThemeChange() {
  const prevActive = document.querySelector('body')?.getAttribute('data-theme')

  const inputs = document.getElementsByTagName('input')
  if (prevActive) {
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].style.color = 'white'
    }
    document.getElementsByTagName('textarea')[0].style.color = 'white'
  } else {
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].style.color = 'black'
    }
    document.getElementsByTagName('textarea')[0].style.color = 'black'
  }
}
