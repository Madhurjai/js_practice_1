function myfunc() {
      
    let len = document.getElementById('length').value ;
    let wid = document.getElementById('width').value ;
    if(len == "" || wid == ""){
        alert("please fill the box");
    }
    let area = len * wid ;
    perimeter = 2 * (parseInt(len) + parseInt(wid)) ;
    document.getElementById('area').innerHTML = area ;
    document.getElementById('peri').innerHTML = perimeter ;
    // dis = document.getElementById('visible') ;
    // if (dis.style.display == 'none') {
    //   dis.style.display = 'block' ;
    // } else{
    //   dis.style.display = 'none' ;
    // }
  }