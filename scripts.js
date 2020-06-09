(function() {

  document.querySelector('.showSwoosh').addEventListener("click", function(){
    console.log('open');
    document.getElementById('swooshWrapper').classList.add('visible');
  });

  document.querySelector('.hideSwoosh').addEventListener("click", function(){
    console.log('close');
    document.getElementById('swooshWrapper').classList.remove('visible');
  });

})();
