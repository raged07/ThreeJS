(function(){
    let scene = new THREE.Scene();

    const aspectRatio = window.innerWidth/window.innerHeight;
    let camera = new THREE.PerspectiveCamera(45, aspectRatio, 0.1, 300);// se cambio de 100 a 300
    let renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    
    document.body.appendChild(renderer.domElement);//estructura del canvas
    
    camera.position.z = 300;
    camera.position.y = 1;
    camera.position.x = 1;

    let loader = new THREE.TextureLoader();

    var geometry  = new THREE.SphereGeometry(100, 100, 100)
    // Creamos el material el universo
    var material  = new THREE.MeshBasicMaterial()
    material.map   = THREE.ImageUtils.loadTexture('../public/space.jpg')
    //material.side  = THREE.BackSide;
    material.opacity = 0.2;
    material.transparent = true;
    
    var meshspace  = new THREE.Mesh(geometry, material);
    scene.add(meshspace);


    loader.load('../public/bola.png', function(texture){
        let geometry = new THREE.SphereGeometry(20, 50, 50)
        let material = new THREE.MeshBasicMaterial({
            map: texture
        })
        mesh = new THREE.Mesh(geometry, material);

        mesh.position.x = 0;
        scene.add(mesh);
    });
    loader.load('../public/urano.png', function(texture){
        let geometry = new THREE.SphereGeometry(1, 10, 10)
        let material = new THREE.MeshBasicMaterial({
            map: texture
        })
        mesh1 = new THREE.Mesh(geometry, material);

        mesh1.position.x = 50;
        scene.add(mesh1);
    });
    loader.load('../public/tierra.png', function(texture){
        let geometry = new THREE.SphereGeometry(2, 10, 10)
        let material = new THREE.MeshBasicMaterial({
            map: texture
        })
        mesh2 = new THREE.Mesh(geometry, material);

        mesh2.position.x = -50;
        scene.add(mesh2);
    });
    loader.load('../public/earthbound.png', function(texture){
        let geometry = new THREE.SphereGeometry(3.5, 10, 10)
        let material = new THREE.MeshBasicMaterial({
            map: texture
        })
        mesh3 = new THREE.Mesh(geometry, material);

        mesh3.position.x = -120;
        scene.add(mesh3);
    });
    loader.load('../public/jupiter.png', function(texture){
        let geometry = new THREE.SphereGeometry(3, 10, 10)
        let material = new THREE.MeshBasicMaterial({
            map: texture
        })
        mesh4 = new THREE.Mesh(geometry, material);

        mesh4.position.x = 100;
        scene.add(mesh4);
    });
    loader.load('../public/marte.png', function(texture){
        let geometry = new THREE.SphereGeometry(1.5, 10, 10)
        let material = new THREE.MeshBasicMaterial({
            map: texture
        })
        mesh5 = new THREE.Mesh(geometry, material);

        mesh5.position.x = -190;
        scene.add(mesh5);
    });
    loader.load('../public/Pacman.png', function(texture){
        let geometry = new THREE.SphereGeometry(1, 10, 10)
        let material = new THREE.MeshBasicMaterial({
            map: texture
        })
        mesh6 = new THREE.Mesh(geometry, material);

        mesh6.position.x = 150;
        scene.add(mesh6);
    });
    loader.load('../public/Pokeball.PNG', function(texture){
        let geometry = new THREE.SphereGeometry(2, 10, 10)
        let material = new THREE.MeshBasicMaterial({
            map: texture
        })
        mesh7 = new THREE.Mesh(geometry, material);

        mesh7.position.x = 200;
        scene.add(mesh7);
    });
    
    //let geometry = new THREE.BoxGeometry(1,1,1,1);
    //let groundMaterial = new THREE.MeshPhongMaterial({
    //    color:0xffffff
    //});
    ////let mesh = new THREE.Mesh(geometry,groundMaterial);

    let pointLight = new THREE.PointLight(0x404040);

    pointLight.position.y = 80;
    
    //scene.add(mesh);
    scene.add(new THREE.AmbientLight(0x404040));
    scene.add(pointLight);

    function loop(){
        requestAnimationFrame(loop);
        mesh.rotation.y += 0.02;//dragon
        mesh.rotation.z += 0.02;
        mesh1.rotation.y += 0.02;//urano
        mesh1.rotation.x += 0.02;
        mesh2.rotation.x += 0.02;//tierra
        mesh2.rotation.z += 0.02;
        mesh3.rotation.y += 0.005;//earthbound
        mesh3.rotation.z += 0.005;
        mesh4.rotation.y += 0.01;//jupiter
        mesh4.rotation.z += 0.01;
        mesh5.rotation.x += 0.03;//marte
        mesh5.rotation.z += 0.03;
        mesh6.rotation.y += 0.04;//pacman
        mesh6.rotation.x += 0.05;
        mesh7.rotation.y += 0.02;//pokeball
        mesh7.rotation.z += 0.02;
        meshspace.rotation.z -= -0.004;
        camera.rotation.z += 0.003;
       
        //console.log("New Frame");
        renderer.render(scene, camera);
    }
    loop();
})();