(function(){
    let scene = new THREE.Scene();

    const aspectRatio = window.innerWidth/window.innerHeight;
    let camera = new THREE.PerspectiveCamera(55, aspectRatio, 0.1, 400);// se cambio de 100 a 300
    let renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    
    document.body.appendChild(renderer.domElement);//estructura del canvas
    
    camera.position.z = 270;
    camera.position.y = 50;
    camera.position.x = 1;

    let loader = new THREE.TextureLoader();
    //Figures
    //square
    let geometry = new THREE.BoxGeometry(30,30,30,30);
    let groundMaterial = new THREE.MeshPhongMaterial({
        color:0xffff00
    });
    //
    //Torus
    let geometryT = new THREE.TorusGeometry(35,4,20,100);
    let TorusMaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff
    });
    //
    //Cone
    let geometryC = new THREE.ConeBufferGeometry( 15, 40, 100 );
    let Conematerial = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    // Heart
    let x = 5, y = 5;
    let heartShape = new THREE.Shape();
    heartShape.moveTo( x + 5, y + 5 );
    heartShape.bezierCurveTo( x+5, y+5, x+4, y, x, y );
    heartShape.bezierCurveTo( x-6, y, x-6, y+7,x-6, y+7 );
    heartShape.bezierCurveTo( x-6, y+11, x-3, y+15.4, x+5, y+19 );
    heartShape.bezierCurveTo( x+12, y+15.4, x+16, y+11, x+16, y+7 );
    heartShape.bezierCurveTo( x+16, y+7, x+16, y, x+10, y );
    heartShape.bezierCurveTo( x+7, y, x+5, y+5, x+5, y+5 );
    let geometryH = new THREE.ShapeGeometry( heartShape );
    let Heartmaterial = new THREE.MeshBasicMaterial( { color: 0x00ffff, side: THREE.DoubleSide } );
    //
    //Ring
    let geometryR = new THREE.RingGeometry( 100, 80, 5 );
    let RingMaterial = new THREE.MeshBasicMaterial( { color: 0x000ff, side: THREE.DoubleSide } );
    //
    //Mesh
    let square = new THREE.Mesh(geometry,TorusMaterial);
    let torus = new THREE.Mesh(geometryT, TorusMaterial);
    let cone = new THREE.Mesh(geometryC, Conematerial);
    let heart = new THREE.Mesh(geometryH, Heartmaterial);
    let ring = new THREE.Mesh( geometryR, RingMaterial );
    //
    square.position.x = 30;
    torus.position.x =30;
    torus.rotation.x =30;
    cone.position.x = -30;
    heart.position.x = -40;
    heart.position.y = 10;

    let pointLight = new THREE.PointLight(0x404040);
    pointLight.position.y = 80;
    
    scene.add(square);
    scene.add(torus);
    scene.add(cone);
    scene.add(heart);
    scene.add( ring );
    scene.add(new THREE.AmbientLight(0x404040));
    scene.add(pointLight);

    function loop(){
        requestAnimationFrame(loop);
        square.rotation.y += 0.04
        square.rotation.z += 0.04
        heart.rotation.y += 0.03
        ring.rotation.x += 0.005
        renderer.render(scene, camera);
    }
    loop();
})();