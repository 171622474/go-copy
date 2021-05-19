function copy(data,callback) {
  if(data && (typeof data === 'string' || typeof data === 'object')){
    console.log(data)
    const temp = typeof data === 'string' ? data : JSON.stringify(data);
    const oInput = document.createElement('input');
    oInput.value = temp;
    document.body.appendChild(oInput);
    oInput.select(); 
    console.log(oInput.value);
    document.execCommand('Copy'); 
    oInput.remove();
    if(callback && typeof callback === 'function'){
      callback(temp)
    }
  }else{
    throw new Error('复制错误,必须为String 或者 Object 类型')
  }
}

export default copy