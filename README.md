# Scaffold-for-Threejs
This a Three.js files arrangement which can be used to build complex 3d applications and games with ease.

# What is this?

Three js is javascript library for rendering 3d animations in browser. Writing games and app in three js can become hard if the project has complex logic.This folder structure provides the developers a clear format for writing apps similar to game engines.

# Usage
Clone or download the repo and start working on it.

# Understand the logic
Folder structure :
- js
  - control
    - Awake.js
    - End.js
    - start.js
    - update.js
  - library
    - keyboard.js 
  - program script
    - cube.js
    - cuboid.js
  - Three
- index.html
- main.css

1. Js - Folder containg all js files
2. Control - Folder containing all javascript files for the controlling the whole process. These files can also be edited, if requied.But not recommended as it can affect the whole logic
3.  Awake.js this is the first imported script after threejs. it include variable which must be available for later process.
4.  End.js :last file to be imported, this function calls update which there after runs in loop using requestAnimationFrame callback.
5.  Start.js :this file contains variables and functions which must be called only once. this file is imported after awake.js. This is the file in which the scene and renderer is created. You may edit the variable names for scene and renderer in this file. By default , Renderer object is stored in "renderer" variable and Scene is stored in "scene". Also note that if you changing the variable name also update them in the update file also.
6.  Update.js :
