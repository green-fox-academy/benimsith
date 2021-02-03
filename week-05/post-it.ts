class PostIt{
    backgroundColor: string;
    text: string;
    textColor: string;
  
    constructor(backgroundColor: string='unknown', text: string='unknown', textColor: string ='unknown'){
      this.backgroundColor = backgroundColor;
      this.text=text;
      this.textColor=textColor;
    }
  }
  
  let postIt1 = new PostIt;
  let postIt2 = new PostIt('red','kiskutyát megsétáltatni','black');
  
  console.log(postIt2)
  