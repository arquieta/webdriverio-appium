class AddNoteScreen {
get SkipBtn() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
}
get AddNoteText(){
    return $('//*[@text="Add note"]')
}
}

module.exports = new AddNoteScreen();