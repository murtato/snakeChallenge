function Snake() {
  this.x = 0;
  this.y = 0;
  this.xDirection = 1;
  this.yDirection = 0;

  this.dir = function(x, y) {
    this.xDirection = x;
    this.yDirection = y;
  }

  this.update = function() {
    this.x = this.x + this.xDirection*scl;
    this.y = this.y + this.yDirection*scl;

    this.x = constrain(this.x, 0, width-scl)
    this.y = constrain(this.y, 0, height-scl)
  }

  this.show = function() {
    rect(this.x, this.y, scl, scl);
  }
}
