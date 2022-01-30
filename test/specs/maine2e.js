const multipleListPage = require('../pageobjects/multipleList.js');
var expect = require('chai').expect;

describe('main Page', () => {

    it('count list items and get text', async () => {

        browser.url('/');
        //await multipleListPage.getTextLi;
        const count = await multipleListPage.getTextLiLength;
        console.log(count + "******************")
        expect(count).to.equal(43);
    });

});