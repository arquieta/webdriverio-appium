describe ('Android native features',  () => {

    
    it('Access an activity drectly', async() => {
        
        //access activity
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");

         //add a pause 
         await driver.pause(3000);

         //validate the menu title of this screen
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist(); 

    } )

    it('Working with dialog boxes', async() => {
        
         //access activity
         await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");

        
        //Click on first dialog
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();
        //get Alert text
        console.log('Alert text -->', await driver.getAlertText());

         //accept Alert
         await driver.acceptAlert();

         //Assertion alert message is no longer visible after accepting the dialog popup
         await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist(); 

    } )

    it('Vertical scrolling', async() => {
        
        await $('~App').click();
        await $('~Activity').click();
        //add a pause 
        await driver.pause(3000);
        //scrolling to end. The 1 is how many times to scroll. The 5 is the speed of the scroll (not recommended)
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        //add a pause 
        await driver.pause(3000);


        await $('~Secure Surfaces').click();
        //assertion 
        await expect($('~Secure Dialog')).toExist();

   } )
   it('Vertical scrolling until element is displayed', async() => {
        
    await $('~App').click();
    await $('~Activity').click();
    
    //scrolling to end. The 1 is how many times to scroll. The 5 is the speed of the scroll (not recommended)
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();
    
    //assertion 
    await expect($('~Secure Dialog')).toExist();

} )
it('Horizontal scrolling until element is displayed', async() => {
        
    //access activity
    await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.Gallery1");

    //horizontal scrolling forwards. The 1 is how many times to scroll. The 5 is the speed of the scroll (not recommended)
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()').click();

    await driver.pause(3000);

} )

it.only('Working with Date Picker', async() => {
        
    //access activity
    await driver.startActivity("io.appium.android.apis", 
                                "io.appium.android.apis.view.DateWidgets1")
    await expect($('//android.widget.TextView[@text="Views/Date Widgets/1. Dialog"]')).toExist();

    //get current date
                    
    const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
    const currentDate = await date.getText();

    //Click on change date button
    await $('~change the date').click();

    //Scroll to the next month
   await $('~Next month').click();
   //await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

   //Select the twelve day of the month
   await $('//*[@text="12"]').click();

   //Click on the OK button

   await $('//*[@text="OK"]').click();


   




} )


    
})
