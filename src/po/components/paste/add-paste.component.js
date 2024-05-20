const BaseComponent = require('../common/base.component');

class AddPasteComponent extends BaseComponent{
    constructor() {
        super();
    }

    get newPastenput() {
        return $('#postform-text');
    }

    get pasteExpirationDropdown() {
        return $('#select2-postform-expiration-container');
    }

    get pasteExpirationOption() {
        return (option) => $(`//li[contains(text(), '${option}')]`);
    }

    get pasteNameInput() {
        return $('#postform-name');
    }

    get saveBtn() {
        return $('button[type="submit"]');
    }

    get validateNewPaste(){
        return $('.notice .-success .-post-view');
    }

    async setNewPaste(code) {
        await this.newPastenput.setValue(code);
    }

    async setPasteExpiration(option) {
        await this.pasteExpirationDropdown.click();
        await this.pasteExpirationOption(option).click();
    }

    async setPasteName(name) {
        await this.pasteNameInput.setValue(name);
    }

    async createPaste() {
        await this.saveBtn.click();
    }

    async getPasteContent() {
        return await $('.textarea').getText();
    }
}

module.exports = AddPasteComponent;