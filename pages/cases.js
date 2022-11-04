const {I} = inject();
var faker = require('faker');
faker.locale = "en";
module.exports = {
    iframeButton : '//iframe[@id="psn-widget-button-frame"]',
    iframeContent: '//iframe[@id="psn-widget-content-frame"]',
    widgetButton : '//div[@class="widget-button"]',
    recommendPoint1 :'//div[@value="262f3c51-2697-4cca-bbc9-e87d43e845ee"]',
    sentimentSmiley :'//img[@title=":smiley:"]',
    nextPageOne : '//div[@id="a0b6bac7-d894-42c7-a677-31814456ead9"]',
    nextPageTwo : '//div[@id="37521850-fa76-4599-a027-096228733e79"]',
    sumbit : '//div[@id="d7c25d6a-17e8-45d3-a831-67732c8b81e2"]',
    inputListen : '//input[@id="78c3febe-85a2-4c11-8b94-f92d15ce6387"]',
    inputEmail : '//input[@id="82c5b3f1-20d3-49f7-9611-9e01859868b5"]',
    inputName : '//input[@id="69714fd9-af95-4740-a9c7-e28424eb337c"]',
    inputPhone : '//input[@id="018297be-b0f8-4080-aeff-fa730108d7b2"]',
    agreementAcceptOk : '//div[@id="49f14168-e3f1-40fc-8549-608228d97270"]/div[1]/span',
    agreementAcceptNok : '//div[@id="49f14168-e3f1-40fc-8549-608228d97270"]/div[2]/span',
    favoriteSelectPisano : '//div[@id="194bf9aa-c356-4ab5-971f-a673b295a85c"]/div[1]',
    favoriteSelectOthers : '//div[@id="194bf9aa-c356-4ab5-971f-a673b295a85c"]/div[2]',


case1 : function(){
    I.amOnPage(I.getParametresData("url"));
    I.wait(I.getParametresData("wait"));
    I.switchTo(this.iframeButton);
    I.wait(I.getParametresData("wait"));
    I.click(this.widgetButton);
    I.wait(I.getParametresData("wait"));
    I.switchTo()
    I.switchTo(this.iframeContent);
    I.click(this.recommendPoint1);
    I.click(this.sentimentSmiley);
    I.click(this.nextPageOne);
    I.wait(I.getParametresData("wait"));
    I.fillField(this.inputListen,faker.random.words(5));
    I.click(this.agreementAcceptOk);
    I.click(this.favoriteSelectPisano);
    I.click(this.nextPageTwo);
    I.wait(I.getParametresData("wait"));
    I.fillField(this.inputEmail,faker.internet.email());
    I.fillField(this.inputName, faker.name.firstName());
    I.fillField(this.inputPhone,faker.phone.phoneNumber('5#########'));
    I.click(this.sumbit);
    I.wait(I.getParametresData("wait"));
    I.see(I.getParametresData("successful")); //verification
},

case2 : function(){
    I.amOnPage(I.getParametresData("url"));
    I.wait(I.getParametresData("wait"));
    I.switchTo(this.iframeButton);
    I.wait(I.getParametresData("wait"));
    I.click(this.widgetButton);
    I.wait(I.getParametresData("wait"));
    I.switchTo()
    I.switchTo(this.iframeContent);
    I.click(this.recommendPoint1);
    I.click(this.sentimentSmiley);
    I.click(this.nextPageOne);
    I.wait(I.getParametresData("wait"));
    I.fillField(this.inputListen,faker.random.words(5));
    I.click(this.agreementAcceptNok);
    I.click(this.favoriteSelectPisano);
    I.click(this.nextPageTwo);
    I.wait(I.getParametresData("wait"));
    I.see(I.getParametresData("firstPageDataText"))//verification
}
}