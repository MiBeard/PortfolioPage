
$.ajax({
    type: "GET",
    url: "http://localhost:8080/contacts",
    success: function (contactArray) {

        var contactsDiv = $("#allContactInfo");

        $.each(contactArray, function (index, contact) {
            var contactInfo = "<p>";
            contactInfo += "Name:"
                + contact.firstName + " " + contact.lastName + "<br />";
            contactInfo += "Company:" + contact.company + "<br />";
            contactInfo += "Phone:" + contact.phone + "<br />";
            contactInfo += "Email:" + contact.email + "<br />";
            contactInfo += "</p>";
            contactInfo += "<hr />";

            contactsDiv.append(contactInfo);
        });
    },
    error: function () {
        alert("FAILURE!");
    }
});

$.ajax({
    type: "POST",
    url: "http://localhost:8080/contacts",
    data: JSON.stringify({
        firstName: $("#add-first-name").val(),
        lastName: $("#add-last-name").val(),
        company: $("#add-company").val(),
        phone: $("#add-phone").val(),
        email: $("#add-email").val()
    }),
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    success: function (contact) {

        var contactsDiv = $("#allContacts");

        var contactInfo = "<p>";
        contactInfo += "Name:"
            + contact.firstName + " " + contact.lastName + "<br />";
        contactInfo += "Company:" + contact.company + "<br />";
        contactInfo += "Phone:" + contact.phone + "<br />";
        contactInfo += "Email:" + contact.email + "<br />";
        contactInfo += "</p>";
        contactInfo += "<hr />";

        contactsDiv.append(contactInfo);

    },
    error: function () {
        alert("FAILURE!");
    }
});