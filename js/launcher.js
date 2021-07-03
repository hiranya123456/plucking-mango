class launcher
{
     constructor(bodyA,pointB)
     {
         var option = 
         {
             bodyA:bodyA,pointB:pointB,length:10,stiffness:0.04
         }
         this.bodyA=bodyA
         this.pointB=pointB
         this.launcherObject = Constraint.create(option) 
         World.add(world,this.launcherObject)
     }

     fly()
     {
         this.launcherObject.bodyA = null;
     }
     attach(body)
     {
        this.launcherObject.bodyA =body
     }

     display()
     {
         if(this.launcherObject.bodyA)
         {
         var pointA=this.bodyA.position
         var pointB=this.pointB  
         stroke("black")
         strokeWeight(4)
         line(pointA.x,pointA.y,pointB.x,pointB.y)
         }
     }
}      
     
   