const renderer = new THREE.WebGLRenderer({canvas:document.getElementById("can"),antialias:true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor("#dcf3f9")
document.body.appendChild( renderer.domElement );
const scene = new THREE.Scene();