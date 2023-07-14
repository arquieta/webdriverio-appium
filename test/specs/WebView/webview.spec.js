describe ('Web browser access',  () => {
    before(async() => {
       
    });


    it.only('Access external link and verify content in a browser', async() => {
        await $('//*[@resource-id= "com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();
        await $('//*[@text="Like us on Facebook"]').click();
        await $('//*[@element-id="00000000-0000-000f-0000-0adc00000071"]').click();


    } )
    it('Delete note', async() => {
        //click on skip tutorial
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();
        //await expect($('//*[@resourse-id="com.socialnmobile.dictapps.notepad.color.note:id/empty_text"')).toExist();
        // click on Add note
        await $('//*[@text="Add note"]').click();
        //click on Text option from menu
        await $('//*[@text="Text"]').click();

        //Validate that the note title field is displayued
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')).toBeDisplayed();
        //Add a title for the note
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').addValue("Note Title for Testing")

        //Create a const to not duplicate the large code for the resource id as we are using it several times

        const noteText = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
        await expect (noteText).toBeDisplayed();
        await noteText.addValue("testing the notes\n");
        await driver.pause(3000);
        await noteText.addValue("adding text with diff command\n");
        await driver.pause(3000);
        //Click on back two times to save the note

        await driver.back();
        await driver.back();


        //assertion that the note is saved
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();

        await driver.back();

        await expect ($('//*[@text="Note Title for Testing"]')).toBeDisplayed();
        await $('//*[@text="Note Title for Testing"]').click();

        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/menu_btn"]')).toBeDisplayed();

        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/menu_btn"]').click();
        await $('//*[@text="Delete"]').click();
        await driver.pause(3000);
        await $('//*[@text="OK"]').click();
     

//
    } )

} )