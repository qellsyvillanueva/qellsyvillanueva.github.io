      function barrier() {
        this.x = w;
        this.y = 100;
       // c = 100;
        this.gravity =  0.03;// the force of gravity
        this.velocity = 0; // default speed
        
        this.show = function() {
          image(pipe,this.x,this.y,150,100);
        };
        this.update = function(){
          this.velocity -= this.gravity; // gravity applied when not jumping
          this.x += this.velocity;
          if (this.x > w) {
            this.x = w;
            this.velocity = 0;
          }
          if (hit === true) {
            noLoop();
            document.getElementById('status').innerHTML= "**GAME OVER**";
          }
          if (this.x < -100) { // when jumper hits the left
            this.y = Math.floor(Math.random()*h);
            //c = Math.floor(Math.random()*h/2);
            //this.x = w;
            number += 1;
            this.velocity = 0;
            this.gravity += 0.03;
          }
        };
      } //barrier ends here
      
      function barrier2() {
        this.x = w;
        this.y = 500;
        c = 100;
        this.gravity =  0.03;// the force of gravity
        this.velocity = 0; // default speed
        
        this.show = function() {
          image(pipe,this.x,this.y,150,100);
        };
        this.update = function(){
          this.velocity -= this.gravity; // gravity applied when not jumping
          this.x += this.velocity;
          if (this.x > w) {
            this.x = w;
            this.velocity = 0;
          }
          if (hit2 === true) {
            noLoop();
            document.getElementById('status').innerHTML= "**GAME OVER**";
          }
          if (this.x < -100) { // when jumper hits the left
            this.y = Math.floor(Math.random()*h);
           // c = Math.floor(Math.random()*h/4);
            //this.x = w;
            number +=1;
            this.velocity = 0;
            this.gravity += 0.03;
          }
        };
      } //barrier ends here