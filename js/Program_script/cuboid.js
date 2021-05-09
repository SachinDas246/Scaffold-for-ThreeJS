const cuboid = new THREE.Mesh(new THREE.BoxGeometry(1,2,1), new THREE.MeshLambertMaterial( { color: '#6b79ff' } ) );
scene.add( cuboid );

function move()
{
    if(Is_on_Hold('w'))
    {
        cuboid.position.x +=0.01
    }
    if(Is_on_Down('j'))
    {
        console.log(cuboid.position)
    }
    
}

function move_left()
{
    console.log(cuboid.position)
}

Add_to_DownScan('y',move_left);

Add_to_Logic_Function(move);