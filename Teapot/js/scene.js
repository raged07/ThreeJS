(function(){
    
        let scene = new THREE.Scene();
        const aspectRatio = window.innerWidth / window.innerHeight;
        let camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100);
        let renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
    
    
        camera.position.z = 100;
        camera.position.y = 10;    
        camera.position.x = 1;
    
        let loader = new THREE.TextureLoader();

        var points = [];
        for ( var i = 0; i < 10; i ++ ) {
            points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 8 + 3, ( i - 5 ) * 1 ) );
        }
        //Lathe
        var geometry = new THREE.LatheGeometry( points );
        var material = new THREE.MeshBasicMaterial( { color: 0x0000ff, side: THREE.DoubleSide } );
        var lathe = new THREE.Mesh( geometry, material );
        //Lathe1
        var points1 = [];
        for ( var i = 0; i < 13; i ++ ) {
            points1.push( new THREE.Vector2( Math.sin( i * 0.3 ) * 13 + 7, ( i - 7 ) * 2.4 ) );
        }
        var geometryL = new THREE.LatheGeometry( points1 );
        var materialL = new THREE.MeshBasicMaterial( { color: 0x00ffff, side: THREE.DoubleSide } );
        var lathe1 = new THREE.Mesh( geometryL, materialL );
        //Sphere
        var geometry = new THREE.SphereBufferGeometry( 4, 32, 32 );
        var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
        var sphere = new THREE.Mesh( geometry, material );
       //cylinder
       var geometry = new THREE.CylinderBufferGeometry( 3, 5, 15, 30 );
       var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
       var cylinder = new THREE.Mesh( geometry, material );
       //torus
       var geometry = new THREE.TorusGeometry( 6, 1, 20, 100 );
       var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
       var torus = new THREE.Mesh( geometry, material );
      
       
        let pointLight = new THREE.PointLight(0x606060);
    
        pointLight.position.y = 60;
        pointLight.position.z = 20;

        lathe.position.y = 3;
        lathe.rotation.x = 3;

        lathe1.position.y =-5;
       
        sphere.position.y = 11;

        cylinder.position.x = -20;
        cylinder.position.y = 1;
        cylinder.rotation.z = 0.7;

        torus.position.x = 17;
        torus.position.z = 5;
        torus.position.y = -3; 
    
        scene.background = new THREE.Color(0xeeeeee);
        scene.add(new THREE.AmbientLight(0x606060));
        scene.add(lathe);
        scene.add(lathe1);
        scene.add(sphere);
        scene.add(cylinder);
        scene.add(torus);
        scene.add(pointLight);
    
        
    
    
        function loop(){
            requestAnimationFrame(loop);
            //torus.rotation.x += 1.5;
            //cylinder.rotation.z += 1.5;
            //lathe1.rotation.z += 1.5;
            //lathe.rotation.x += 1.5;
            renderer.render(scene, camera);
        }
    
        loop();
    
    })();