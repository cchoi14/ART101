/**
 * Authors: Johnny Choi <cchoi14@ucsc.edu>
 *      and Tristan Dunlop <tdunlop@ucsc.edu>
 * Created:   4 March 2021
 * License:   Public Domain
 **/
$('#activate').click(function() {
  var TYPE = $('#selector').val();
  $.ajax({
      url: "https://pokeapi.co/api/v2/type/" + TYPE + "/",
      data: {},
      type: "GET",
      dataType: "json",
    })
    .done(function(data) {
      var str = "<p>Your " + TYPE.toUpperCase() + "-type Pok&eacute;mon ...";

      var doubleFrom = data.damage_relations.double_damage_from;
      var doubleFromStr = "";
      for (var i in doubleFrom) {
        doubleFromStr = doubleFromStr + doubleFrom[i].name.toUpperCase() + " ";
      }
      str = str + "<br>&nbsp;&nbsp;&nbsp;&nbsp;takes double damage from " + doubleFromStr.trim() + "-type moves.";


      var halfFrom = data.damage_relations.half_damage_from;
      var halfFromStr = "";
      for (var i in halfFrom) {
        halfFromStr = halfFromStr + halfFrom[i].name.toUpperCase() + " ";
      }
      str = str + "<br>&nbsp;&nbsp;&nbsp;&nbsp;takes half damage from " + halfFromStr.trim() + "-type moves.";

      var noneFrom = data.damage_relations.no_damage_from;
      if (noneFrom != "") {
        var noneFromStr = "";
        for (var i in noneFrom) {
          noneFromStr = noneFromStr + noneFrom[i].name.toUpperCase() + " ";
        }
        str = str + "<br>&nbsp;&nbsp;&nbsp;&nbsp;takes zero damage from " + noneFromStr.trim() + "-type moves.";
      }
      console.log(str);
      $('#output').html(str + '</p>');
    })
    // If the request fails
    .fail(function(xhr, status, errorThrown) {
      $('#output').html('<p>I could not find anything with that name!');
    });
})
