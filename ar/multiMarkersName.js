//Multi Markers WebAR-AR.js and Aframe - Playing the Archive - Connected Environment CASA-UCL

//Global Variable
var markersURLArray=[];
var markersNameArray=[];

AFRAME.registerComponent('markers_start',{
	init:function(){
		console.log('Add markers to the scene');

		var sceneEl = document.querySelector('a-scene');
		
		//list of the markers
		for(var k=1; k<=2; k++)
		{
			var markerEl = document.createElement('a-marker');
			markerEl.setAttribute('type','pattern');
            markerEl.setAttribute('preset','custom');
			markerEl.setAttribute('url',"assets/pattern-"+k+".patt");
			markerEl.setAttribute('id','Marker_'+k);

			sceneEl.appendChild(markerEl);

			//Adding text to each marker
			var entityEl = document.createElement('a-entity');
			
			entityEl.setAttribute('id','entity_'+k);
			entityEl.setAttribute('gltf-model', 'assets/entity-'+k+'.glb');
            entityEl.setAttribute('animation-mixer', 'loop: repeat');
            entityEl.setAttribute('class', 'clickable');
            entityEl.setAttribute('gesture-handler', '');


			markerEl.appendChild(entityEl);
		}
	}
});
