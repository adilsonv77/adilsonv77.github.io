import { OfflineCompiler } from '../mind-ar-js-master/src/image-target/offline-compiler.js';

//import { writeFile } from 'fs/promises'
import { loadImage } from 'canvas';

//canvas.loadImage treats path as relative from where nodejs was executed, not relative to the script's location
var imagePaths = [];

async function run() {
    //load all images
    const images = await Promise.all(imagePaths.map(value => loadImage(value)));
    const compiler = new OfflineCompiler();
    await compiler.compileImageTargets(images, console.log);
    const buffer = compiler.exportData();
  //  await writeFile('targets.mind', buffer);
}




function doSomething() {
    imagePaths = ['card.png'];
    run();
}