$(document).ready(function() {
    $("form#celebMatch").submit(function(event) {
      event.preventDefault();
      const age = $("input#age").val();
      parseInt(age);
      const gender = $("select#gender").val();

      if (age > 21 && gender === "male") {
      $('#matchMale').show();
      }
      else if (age > 21 && gender === "female") {
      $('#matchFemale').show();
      }
      else {
        alert("You are too young to date");
      }
  });
});
