function copy(data,callback) {
  const url = data;
  const oInput = document.createElement('input');
  oInput.value = url;
  document.body.appendChild(oInput);
  oInput.select(); 
  console.log(oInput.value);
  document.execCommand('Copy'); 
  oInput.remove();
  if(callback && typeof callback === 'function'){
    callback()
  }
}

export default copy