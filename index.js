// ! Method Chaining

function  Chaining(){

    this.total = 0;
  
    this.add = function(num){
  
      this.total +=num;
      return this;
  
    }
    this.sub = function(num){
  
      this.total -=num;
      return this;
  
    }
    this.multi = function(num){
  
      this.total *=num;
  
      return this;
  
    }
    this.divide = function(num){
  
      this.total /=num;
      return this;
  
    }
  
  }
  
  
  const raj = new Chaining();
  
  console.log(raj.add(10));
  
  console.log(raj.total);
  
  
  
  
  
  
  
  
  // ! Toggle Function
  
  const rjToggler = (...args) => {
    let count = -1;
  
    return function () {
      count++;
      if (count === args.length) {
       count = 0;
        
      }
  
      return args[count];
    };
  };
  
  
  const check = rjToggler("1", "2" , "3");
  
  
  console.log(check());
  console.log(check());
  console.log(check());
  console.log(check());
  console.log(check());
  console.log(check());
  console.log(check());
  
  
  
  
  
  
  
  
  
  
  // ! Sampling function
  
  const rjSampler = (fn, counter) => {
    let count = 0;
  
    return function (...args) {
   
      count++;
      if (count !== counter){
      
        return;
      } 
  
      fn.call(this, ...args);
      count = 0;
    };
  };
  
  function myMessage() {
    console.log("Hello Vaishali");
  }
  
  
//   const raj = rjSampler(myMessage,5);
  
  raj()
  raj()
  raj()
  raj()