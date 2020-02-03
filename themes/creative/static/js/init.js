var language = (navigator.browserLanguage || navigator.language).toLowerCase();
if (window.location.pathname == '/') {
  if (language.indexOf('zh') > -1) {
    window.location.href = window.location + '/cn/'
  } else {
    window.location.href = window.location + '/en/'
  }
}