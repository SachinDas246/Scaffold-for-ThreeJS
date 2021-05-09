const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );           
camera.position.z = 5;  
const cube = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshLambertMaterial( { color: '#6b79ff' } ) );
scene.add( cube );

function Update_cube()
{   
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}
function updatecam()
{
    if(Is_on_Hold('w'))
    {
        camera.position.z-=0.1
    }
    if(Is_on_Hold('s'))
    {
        camera.position.z+=0.1
    }
    if(Is_on_Hold('a'))
    {
        camera.position.x-=0.1
    }
    if(Is_on_Hold('d'))
    {
        camera.position.x+=0.1
    }

}

function show_info()
{
    console.log(cube)
}

Add_to_DownScan('i',show_info);


Add_to_Logic_Function(Update_cube);
Add_to_Logic_Function(updatecam);

