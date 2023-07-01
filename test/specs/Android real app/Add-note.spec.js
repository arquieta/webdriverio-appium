describe ('Add notes app',  () => {
    it('Skip tutorial', async() => {
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();
        //await expect($('//*[@resourse-id="com.socialnmobile.dictapps.notepad.color.note:id/empty_text"')).toExist();
        await expect($('//*[@text="Add note"]')).toBeDisplayed();

    } )
    it.only('Add a note, save changes and verify it', async() => {
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
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText("testing the notes\n adding text with diff command\n");




    } )


})