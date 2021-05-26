class Drop
{
    constructor(xpos,ypos)
    {
      var drop_options = 
      {
          restitution : 0.3,
          friction : 0.1
      }

      this.body = Bodies.circle(xpos,ypos,3,drop_options)
      this.radius = 3
      World.add(world,this.body)
    }

    display()
    {
       var position = this.body.position;
       
       ellipseMode(RADIUS)
       ellipse(position.x,position.y,this.radius)
    }

    update()
    {
        if(this.body.position.y > height)
        {
            Matter.Body.setPosition(this.body,{x: random(0,600), y: random(0,600)})
        }
    }
}