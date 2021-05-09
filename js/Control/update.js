function Update() {
    //Update Logic Functions
    
    t=0;
    while(t<Logic_Execution_factor){

        i=Logic_functions.length-1;
        while(i>=0)
    {       
        Logic_functions[i]();
        i--
    }
    t++
    }    

    //Update graphics
    requestAnimationFrame(Update);
    renderer.render( scene, camera );
}