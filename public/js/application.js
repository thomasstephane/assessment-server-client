DieRoles = {};

DieRoles.render = function(){

  var elements = $();

  // HINT: change this to get the roles from the server somehow.
  var roles = [];
  // METHOD0
  // $.ajax({
  //   type: 'get',
  //   url: '/roles',
  //   async: false
  // }).done(function(data){
  //   roles = data;
  // });


  // METHOD1 from url
  // function URLParams() {
  //   var result = [];
  //   var data = location.search;
  //   var params = data.split("%");
  //   params.splice(0,1);
  //   params.forEach(function(str){
  //     result.push(str.substr(0,1));
  //   });
  //   return result;
  // }
  // roles = URLParams();


  //METHOD2 html attr
  // roles = JSON.parse($('ol').attr('data-num'));

  //METHOD3 script -- cf index.erb

  //METHOD4 cookie
  function getCookie(cook) {
    var cook_val = document.cookie;
    var c_start = cook_val.indexOf("=") + 1;
    var rolls = cook_val.slice(6, cook_val.length);
    roles = rolls.split("&");
  }
  getCookie("roles");
  // }

  roles.forEach(function(role){
    elements = elements.add($('<li>').text(role));
  });

  return elements;
};

$(function(){
  $('.die-roles').html(DieRoles.render());
});
