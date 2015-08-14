$(function() {

    var str = "",
        message;

    var myDataRef = new Firebase("https://baglandingpage.firebaseio.com/");
    myDataRef.on('child_added', function(snapshot) {
        message = snapshot.val();
        if(Object.keys(message).length > 0){

            displayChatMessage(message.prodName, message.prodRent, message.name, message.email, message.contactNumber, message.address, message.prodImgPath);
        }
        else{
            console.log('dd')
        }

    });

    function displayChatMessage(prodName, prodRent, name, email, contactNumber, address) {
        $('#reports tbody tr.spinner-tr').remove();
        str = "<tr><td>" + prodName + "</td><td>" + prodRent + "</td><td>" + name + "</td><td>" + email + "</td><td>" + contactNumber + "</td><td>" + address + "</td></tr>"
        $('#reports tbody').append(str)
    };

});
