const BasePage = require('./base.page');

class PastePage extends BasePage {
    async getPasteContent() {
        return await $('.de1').getText();
    }
}

module.exports = PastePage;