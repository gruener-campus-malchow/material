$fn=100;

dia_bottom = 29;
dia_top = 36;
ring_thickness = 3;
ring_growth = 3;

difference(){
    union(){
        cylinder(10.0,r1=dia_bottom/2+ring_thickness+ring_growth, r2=dia_top/2);
        for (i = [0,1,2]) { 
            rotate([0,0,i*360/3])flansch();   
         
            
            rotate([0,0,i*360/3])translate([0,dia_top/2,5])rotate([90,0,0])cylinder(5,d=10, center=true);
            rotate([0,0,60+i*360/3])wing();
            
            
        }
    }
    union(){
        cylinder(10.1,r1=dia_bottom/2, r2=dia_top/2);
        for (i = [0,1,2]) { 
            rotate([0,0,i*360/3])translate([-0.35,0,0])cube([0.7,50,15]);   
        }
    }
}

module flansch()
{
    translate([0,dia_top/2+5,4])scale([0.7,1,1])rotate([90,0,0])cylinder(8,r1=4,r2=4, center=true);
}

module wing(){
    translate([0,dia_top/2+10,5])difference(){
        translate([0,0,-5]) linear_extrude(100,convexity = 10, scale=[0.15,1])hull() {
            translate([0, 1, 0]) scale([1,1.5])circle(r=4.5); // Kopf
            translate([0, 20, 0]) circle(r=0.1); // Spitze
        }
        translate([0,0,-1])rotate([-90,0,0])scale([0.7,1,1])rotate([90,0,0])cylinder(8,r1=4.3,r2=4.5, center=true);
    }
    
}


//scale([1,1,1])rotate([0,0,0])scale([0.5,1,1])cylinder(10,d=20, center=true);
