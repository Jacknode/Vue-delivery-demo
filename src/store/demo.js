/**
 * Created by leibo on 17/8/18.
 */
function ajax(url) {
  var promise = new Promise(function (relove,reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.onreadystatechange = function () {
      if(this.readyState == 4){
        if(this.status==200){
          relove()
        }
      }else{
        reject();
      }
    }
    xhr.send();
  })
  return promise;
}
ajax('/list').then(function (data) {
  console.log(data)
})
