import {loadGLTF} from "../libs/loader.js";

import {mockWithVideo, mockWithImage} from '../libs/camera-mock.js';
const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded', () => {
  const start = async() => {


    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.body,
      imageTargetSrc: 'https://adilsonv77.github.io/meutestethreejs/targets.mind',
    });
    const {renderer, scene, camera} = mindarThree;

    // esse eh para nao deixar a figura em branco
    const light = new THREE.HemisphereLight( 0xffffff, 0xbbbbff, 1 );
    scene.add(light);

   // const raccoon = await loadGLTF('https://adilsonv77.github.io/ar/asseats/entity-2.glb');
   const raccoon = await loadGLTF('https://adilsonv77.github.io/meutestethreejs/wizard_test.glb');
   // raccoon.scene.scale.set(30, 30, 30);
    //raccoon.scene.scale.set(0.27, 0.27, 0.27);
    const box = new THREE.Box3().setFromObject(raccoon.scene);
    const sceneSize = box.getSize(new THREE.Vector3()).length() *1000;
    raccoon.scene.scale.set(sceneSize, sceneSize, sceneSize);
    //raccoon.scene.scale.set(0.27, 0.27, 0.27);
    //raccoon.scene.position.set(0, -0.4, 0);

    const anchor = mindarThree.addAnchor(0);
    anchor.group.add(raccoon.scene);

    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  }
  start();
});
