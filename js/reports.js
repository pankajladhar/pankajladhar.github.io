$(function() {

	var str = "";

    var myDataRef = new Firebase("https://baglandingpage.firebaseio.com/customers");
    myDataRef.on('child_added', function(snapshot) {
        var message = snapshot.val();
        displayChatMessage(message.name, message.email, message.contactNumber, message.address);
    });

    function displayChatMessage(name, email,contactNumber, address) {
    	str = "<tr><td>"+name+"</td><td>"+email+"</td><td>"+contactNumber+"</td><td>"+address+"</td></tr>"
        $('#reports tbody').append(str)
    };

});
