speed =0.1;
rot_factor=0.01;
cam_rotate = true;
var Cam_deltapos = new THREE.Vector3( 0, 0, 0 );
var Cam_deltarot = new THREE.Vector3( 0, 0, 0 );


document.addEventListener('keydown', function(event) {
    if(event.key == 'w') {
        Cam_deltapos.z=-speed
    }
    else if(event.key == 's') {
        Cam_deltapos.z=speed
    }
    else if(event.key == 'a') {
        Cam_deltapos.x=-speed
    }
    else if(event.key == 'd') {
        Cam_deltapos.x=speed
        
    }
});
document.addEventListener('keyup', function(event) {
    if(event.key == 'w'&& Cam_deltapos.z==-speed) {
        Cam_deltapos.z=0
    }
    else if(event.key == 's'&& Cam_deltapos.z==speed) {
        Cam_deltapos.z=0
    }
    else if(event.key == 'a'&& Cam_deltapos.x==-speed) {
        Cam_deltapos.x=0
    }
    else if(event.key == 'd'&& Cam_deltapos.x==speed) {
        Cam_deltapos.x=0
        
    }
});


  function updatemouse(e)
  {
    Cam_deltarot.x = e.movementX*rot_factor
    Cam_deltarot.y = e.movementY*rot_factor   
    console.log(e.movementY) 
  }

  function get_fpspos()
  {    
      return Cam_deltapos
  }


function get_fpsrot()
{    
    return Cam_deltarot    
}