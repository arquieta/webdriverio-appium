describe ('Android elements test',  () => {
    it('Find element by accessibility ID', async() => {
        
        //find element using accessibility ID
        const appOption = await $('~App');

        //click on element
        await appOption.click();

        //assertion
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
        const activity = await $('~Activity');
        await expect(activity).toBeExisting();
        const alarm = await $('~Alarm');
        await expect(alarm).toBeExisting();
        const deviceAdmin = await $('~Device Admin');
        await expect(deviceAdmin).toBeExisting();
        const fragment = await $('~Fragment');
        await expect(fragment).toBeExisting();

    } )

    it('Find element by Class name', async() => {
        
        //find element using accessibility ID
        const className = await $('android.widget.TextView');
        console.log(await className.getText());

        //assertion
        await expect(className).toHaveText("API Demos");

    } )

    
    it('Find element by UIAutomator', async() => {
        
          
        //find by text contains
        await $('android=new UiSelector().textContains("Alert")').click();
        
      } )




    it('Find element by Xpath and Resource ID', async() => {
      //  const appOption = await $('~App');

        //click on element
     //   await appOption.click();
        
        //xpath - (tagname[@attribute=value])
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
        //find by resource ID
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

        //find element by text
        await $('//android.widget.TextView[@text="Command two"]').click();

        //find by class - assertion
        const textAssertion = await $('//android.widget.TextView');
        await expect(textAssertion).toHaveText("You selected: 1 , Command two");



    } )
})
