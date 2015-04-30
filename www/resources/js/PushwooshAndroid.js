function registerPushwooshAndroid() {
 
    var pushNotification = window.plugins.pushNotification;
 
    pushNotification.registerDevice({ projectid: "[8519778221]", appid : "[F3AF4-63B3D]" },
 
                function(status) {
                  var pushToken = status;
                  console.warn('push token: ' + pushToken);
                  alert(pushToken);
                },
                function(status) {
                  console.warn(JSON.stringify(['failed to register ', status]));
                  alert(status);
                }
    );
 
    document.addEventListener('push-notification', function(event) {
        var title = event.notification.title;
        var userData = event.notification.userdata;
 
        if(typeof(userData) != "undefined") {
        console.warn('user data: ' + JSON.stringify(userData));
        }
 
        navigator.notification.alert(title);
    });
}
 
//This is never been called currently
function onPushwooshAndroidInitialized(pushToken)
{
    //output the token to the console
    console.warn('push token: ' + pushToken);
 
    var pushNotification = window.plugins.pushNotification;
 
    pushNotification.getTags(
        function(tags)
        {
            console.warn('tags for the device: ' + JSON.stringify(tags));
        },
        function(error)
        {
            console.warn('get tags error: ' + JSON.stringify(error));
        }
    );
 
    pushNotification.setLightScreenOnNotification(false);
 
    //Pushwoosh Android specific method that cares for the battery
    pushNotification.startGeoPushes();
}