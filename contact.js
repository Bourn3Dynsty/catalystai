function submitToAPI(e) {
    e.preventDefault();
    var name = $("#name").val();
    var phone = $("#phonenumber").val();
    var email = $("#email").val();
    var desc = $("#message").val();
    var data = {
      name: name,
      phone: phone,
      email: email,
      desc: desc
    };
    $.ajax({
      type: "POST",
      url: "https://dnq1ac9pg1.execute-api.us-east-1.amazonaws.com/prod/",
      dataType: "json",
      crossDomain: true,
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),
      success: function() {
        //alert("Your email was sent!");
        document.getElementById('success').innerHTML = '<strong>Successful</strong> Email Sent!';
        document.getElementById("contact-form").reset();
        document.getElementById("success").style.display = "block";
        setTimeout(function(){document.getElementById("success").style.display = "none";}, 2000);
      },
      error: function() {
        alert("Email was not Sent!");
      }
    
    });
  }
  