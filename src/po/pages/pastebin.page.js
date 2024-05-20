const BasePage = require('./base.page');
const AddPasteComponent = require('../components/paste/add-paste.component');


class PastebinPage extends BasePage {
    constructor() {
        super('https://pastebin.com');
        this.newPaste = new AddPasteComponent();
    }
}

module.exports = PastebinPage;