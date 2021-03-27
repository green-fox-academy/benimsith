/*Create a PostIt a class that has
a backgroundColor
a text on it
a textColor
Create a few example post-it objects:
    an orange with blue text: "Idea 1"
a pink with black text: "Awesome"
a yellow with green text: "Superb!"*/

class PostIt{
    backgroundColor:string;
    text:string;
    textColor:string;

    constructor(backgroundColor:string,text:string,textColor:string) {
        this.backgroundColor = backgroundColor;
        this.text = text;
        this.textColor = textColor;

    }
}
let postIt1 = new PostIt('black','hello yall','blue');
let postIt2 = new PostIt('pink','drink a beer','white');

console.log(postIt1);
console.log(postIt2);