describe ('Android elements test',  () => {

    
    it('Using native elements', async() => {
        
        //access activity
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");

         //add a pause 
         await driver.pause(3000);

         //validate the menu title of this screen
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist(); 

    } )

    it.only('Working with dialog boxes', async() => {
        
        //access activity
        await ('//*@r[resource-id="io.appium.android.apis:id/two_buttons"]').click();

         //accept Alert
         await driver.acceptAlert();

         //Assertion alert message is no longer visible after accepting the dialog popup
         await expect($('//*@r[resource-id="android:id/alertTitle"]')).not.toExist(); 

    } )



    
})
