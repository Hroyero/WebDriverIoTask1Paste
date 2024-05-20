const PastePage = require('../po/pages/paste.page');
const PastebinPage = require('../po/pages/pastebin.page');
const pastebinPage = new PastebinPage();
const pastePage = new PastePage();



describe('Pastebin page', () =>{

    beforeEach(async () => {
        pastebinPage.open();
    });

    it('Check page title', async() => {
        await expect(browser).toHaveTitle('Pastebin.com - #1 paste tool since 2002!');
    });
    it('Add a new Paste', async () =>{
        await pastebinPage.newPaste.setNewPaste('Hello from WebDriver');
        await pastebinPage.newPaste.setPasteExpiration('10 Minutes');
        await pastebinPage.newPaste.setPasteName('helloweb');
        await pastebinPage.newPaste.createPaste();

        /*
        const pasteContent = await pastePage.getPasteContent();
        expect(pasteContent).toHaveText('Hello from WebDriver');
        */
        
    });
});