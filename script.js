const el = document.createElement('div')
el.innerHTML = "<a href='https://caughtcritters-1.mrnewton.repl.co/' target='blank'>https://caughtcritters-1.mrnewton.repl.co/</a>"

swal ({
  title: "Welcome!",
  text: "This is the second test edition of our new website. First edition: ",
  icon: "r/buck3.svg",
  content: el,
})