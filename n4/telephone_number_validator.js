function telephoneCheck(str) {
  let regex = /^1? *((([0-9]{3})[ -]?)|([(][0-9]{3}[)] ?))([0-9]{3})[ -]?[0-9]{4}$/
  return regex.test(str);
}
