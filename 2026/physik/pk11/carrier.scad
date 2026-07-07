$fn=200;

diameter = 82;
thickness = 4;
scaling = 0.5;
cutout = 5;

carrier();
translate([diameter+10,0,0])box();
translate([-diameter-10,0,0])top();
translate([0,diameter/2 +10,0])schieber();

module carrier(){
    difference()
    {
        union(){
            //scale([1,1,0.5])sphere(d=diameter);
            translate([0,0,-10])cylinder(diameter/2+10,d=diameter+thickness);
            translate([0,0,-diameter/2+1])cylinder(diameter/2,d=diameter+thickness);
        }
        union(){
            translate([0,0,diameter/2 - cutout-1])cylinder(cutout*2,d=diameter-4);
            
            translate([0,0,0])scale([1.025,1.025,1.025])schubfach();
            translate([0,-5,0])scale([1.01,1.01,1.01])schubfach();
            
            translate([0,0,-diameter/2])cylinder(diameter/2+0.6,d=diameter+2);
            
            rotate([0,0,45])translate([0,0,-diameter/2-5])rotate([0,90,0])scale([1,0.6,1])cylinder(2*diameter,d=diameter,center=true);
            rotate([0,0,45+90])translate([0,0,-diameter/2-5])rotate([0,90,0])scale([1,0.6,1])cylinder(2*diameter,d=diameter,center=true);
            
        }
    }
    
    
    
    difference(){
        union(){
            translate([0,0,+1+diameter/2- cutout])cube([4,diameter,2],true);
            rotate([0,0,90])translate([0,0,+1+diameter/2- cutout])cube([4,diameter,2],true);
            
            rotate([0,0,0])translate([+diameter/2-10,0,diameter/2-2])cube([20,4,3],true);
            rotate([0,0,180])translate([+diameter/2-10,0,diameter/2-2])cube([20,4,3],true);
        }
        union(){
            rotate([0,0,0])translate([+diameter/2-10,0,diameter/2-1])cube([10,2,16],true);
            rotate([0,0,180])translate([+diameter/2-10,0,diameter/2-1])cube([10,2,16],true);
        }
    }
    
    
    
    
    translate([0,0,0])cube([4,diameter,2],true);
    rotate([0,0,90])translate([0,0,0])cube([4,diameter,2],true);
    
    
    difference(){
        translate([0,0,-3])cylinder(4,d=diameter+2);
        translate([0,0,-3.2])cylinder(4.4,d=diameter-4);
    }
    
}

module top(){
    difference(){
        cylinder(50,r1=diameter/2+thickness,r2=1);
        union(){
            translate([0,0,-2])cylinder(50,r1=diameter/2+thickness-9,r2=1);

        }
    }
    
    translate([0,0,-10])difference()
    {
        cylinder(10,r=diameter/2+thickness);
        union(){
            translate([-diameter/2+3,0,-2])rotate([0,45,0])cylinder(15,r=1.5);
            translate([+diameter/2-3,0,-2])rotate([0,-45,0])cylinder(15,r=1.5);
            translate([0,0,-0.5])cylinder(11,r=diameter/2-10);
            
            rotate([0,0,45])translate([+diameter/2-15,0,4])cube([20,4.5,10],true);
            rotate([0,0,45+180])translate([+diameter/2-15,0,4])cube([20,4.5,10],true);
        }
    }
    
    
}

module box(){
    
    difference(){
        schubfach();
        translate([0,0,2])scale([0.97,0.97,0.97])schubfach();
        
    }
    

    
    servo_holder();
    //servo_holder();
    
    translate([0,0,4])rail();
    translate([0,0,-8])rail();
    battery();
    
    
    
    

}

module schubfach(){
    intersection()
    {
        cylinder(diameter/2,d=diameter);
        translate([-diameter/2+cutout/2,-diameter/2,0])cube([diameter-cutout-1,diameter-2,diameter/2-5-1]);
    }
}


module rail(){

     hull(){
        translate([-2,diameter/2-3,20])cube([4,1,1]);
        translate([-2,diameter/2-8,30])cube([4,5,1]);
    }
    
    translate([-5,0,0])hull(){
        translate([-2,diameter/2-3,20])cube([2,1,1]);
        translate([-2,diameter/2-8,30])cube([2,5,1]);
    }
    
    translate([7,0,0])hull(){
        translate([-2,diameter/2-3,20])cube([2,1,1]);
        translate([-2,diameter/2-8,30])cube([2,5,1]);
    }
    
    translate([-7,diameter/2-8,30])cube([14,2,1]);
    
}

module battery(){
  difference()
    {
        translate([-diameter/2+3.5,-12,00])cube([9,24,19.9]);
        union(){
            translate([-diameter/2+3.5,-10,00])cube([7,20,20]);
            translate([-diameter/2+7,7,00])cube([7,7,20]);
            translate([-diameter/2+7,-14,00])cube([7,7,20]);
        }
    }  

}


module servo_holder(){
   difference(){
        translate([-8,diameter/2 - 21.1-5,0])cube([16,11,13]);
        union(){
            translate([-7,diameter/2 - 20-5,0])cube([14,10,20]);
            translate([-10,diameter/2 - 22-5])cube([5,5,20]);
            translate([ 5,diameter/2 - 22-5])cube([5,5,20]);
        }
    }
    
    translate([-8,diameter/2 - 8-5,0])cube([1,2,7]);
    translate([8-1,diameter/2 - 8-5,0])cube([1,2,7]); 
}

module schieber(){
    translate([5,10,1])cube([2,30,2],true);
    translate([-5,10,1])cube([2,30,2],true);
    translate([0,30,1])difference()
    {
        union(){
            cube([20,6,2],true);
            translate([0,0,2])cube([5,6,3],true);
        }
        union()
        {
            translate([-3.5,1,0])cube([3,3,10],true);
            translate([3.5,1,0])cube([3,3,10],true);
        }
    }
    
}