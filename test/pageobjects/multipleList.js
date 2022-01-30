const Page = require('./page');

class MultipleList extends Page {

    get getParent(){
        return $('ul');
    }

    get getLinks() {
        return this.getParent.$$('li')
    }


    get getTextLi() {

       return this.getLinks.filter(element => {
            console.log(element.getText());
        });
        
    }

    get getTextLiLength() {

        const length = this.getParent.$$('li').length;
        return length;
         
     }

}

module.exports = new MultipleList();