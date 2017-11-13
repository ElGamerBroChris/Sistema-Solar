function SphereGL(radius, drawingMode, imageFile)
{
	// Model
	if(radius === undefined) {
		radius = 0.5;
	}
	this.radius = radius;
	var SPHERE_DIV = 12;
	var i, ai, si, ci;
	var j, aj, sj, cj;
	var p1, p2;
	var vertices = [];
	var textureCoords = [];
	var vertexColor = [];

	for (j = 0; j <= SPHERE_DIV; j++) {
		aj = j * Math.PI / SPHERE_DIV;
		sj = radius * Math.sin(aj);
		cj = radius * Math.cos(aj);
		for (i = 0; i <= SPHERE_DIV; i++) {
			ai = i * 2 * Math.PI / SPHERE_DIV;
			si = Math.sin(ai);
			ci = Math.cos(ai);

			vertices.push(si * sj);  // X
			vertices.push(cj);       // Y
			vertices.push(ci * sj);  // Z

			textureCoords.push(i / SPHERE_DIV);
			textureCoords.push(j / SPHERE_DIV);

			vertexColor.push(Math.random());	// R
			vertexColor.push(Math.random());	// G
			vertexColor.push(Math.random());	// B
			vertexColor.push(1.);			// A
		}
	}

	var indices = [];
	for (j = 0; j < SPHERE_DIV; j++) {
		for (i = 0; i < SPHERE_DIV; i++) {
			p1 = j * (SPHERE_DIV+1) + i;
			p2 = p1 + (SPHERE_DIV+1);

			indices.push(p1);
			indices.push(p2);
			indices.push(p1 + 1);

			indices.push(p1 + 1);
			indices.push(p2);
			indices.push(p2 + 1);
		}
	}

	this.positions = vertices;
	this.n = this.positions.length / 3;
	this.color = [1., 1., 1., 1.];		// R, G, B, A	
	this.vertexColor = vertexColor;
	this.textureCoords = textureCoords;		
	this.indices = indices;
	// Superclass constructor
	ObjectGL.call(this);
}

SphereGL.prototype = Object.create(ObjectGL.prototype);

function SunGL()
{
	this.sphere=new SphereGL();
	this.sphere.setDrawingMode(TEXTURE);
	this.sphere.setTexture("../imgs/sun.jpg");
	ObjectGL.call(this);
}
SunGL.prototype = Object.create(ObjectGL.prototype);

SunGL.prototype.render = function() {
							this.sphere.render();
						};

SunGL.prototype.setDrawingMode = function(mode) {
										this.sphere.setDrawingMode(mode);
									};

SunGL.prototype.translate = function(tx,ty,tz) {
	this.sphere.translate(tx,ty,tz);
};


function MercuryGL()
{
	this.sphere=new SphereGL();
	this.sphere.scale(0.05,0.05,0.05);
	this.sphere.setDrawingMode(TEXTURE);
	this.sphere.setTexture("../imgs/mercury.jpg");
	ObjectGL.call(this);
}
MercuryGL.prototype = Object.create(ObjectGL.prototype);

MercuryGL.prototype.render = function() {
							this.sphere.render();
						};

MercuryGL.prototype.setDrawingMode = function(mode) {
										this.sphere.setDrawingMode(mode);
									};
MercuryGL.prototype.translate = function(tx,ty,tz) {
	this.sphere.translate(tx,ty,tz);
};

function VenusGL()
{
	this.sphere=new SphereGL();
	this.sphere.scale(0.1,0.1,0.1);
	this.sphere.setDrawingMode(TEXTURE);
	this.sphere.setTexture("../imgs/venus.jpg");
	ObjectGL.call(this);
}
VenusGL.prototype = Object.create(ObjectGL.prototype);

VenusGL.prototype.render = function() {
							this.sphere.render();
						};

VenusGL.prototype.setDrawingMode = function(mode) {
										this.sphere.setDrawingMode(mode);
									};

VenusGL.prototype.translate = function(tx,ty,tz) {
	this.sphere.translate(tx,ty,tz);
};

function MoonGL()
{
	this.sphere=new SphereGL();
	this.sphere.scale(0.025,0.025,0.025);
	this.sphere.setDrawingMode(TEXTURE);
	this.sphere.setTexture("../imgs/moon.jpg");
	ObjectGL.call(this);
}
MoonGL.prototype = Object.create(ObjectGL.prototype);

MoonGL.prototype.render = function() {
							this.sphere.render();
						};

MoonGL.prototype.setDrawingMode = function(mode) {
										this.sphere.setDrawingMode(mode);
									};
MoonGL.prototype.translate = function(tx,ty,tz) {
	this.sphere.translate(tx,ty,tz);
};
function EarthGL()
{
	this.sphere=new SphereGL();
	this.moon=new MoonGL();
	this.moon.translate(3,0,0);
	this.sphere.scale(0.1,0.1,0.1);
	this.sphere.setDrawingMode(TEXTURE);
	this.sphere.setTexture("../imgs/earth.jpg");
	this.sphere.rotate(180,0,0,1);
	ObjectGL.call(this);
}
EarthGL.prototype = Object.create(ObjectGL.prototype);

EarthGL.prototype.render = function() {
							this.sphere.render();
							this.moon.render();
						};

EarthGL.prototype.setDrawingMode = function(mode) {
										this.sphere.setDrawingMode(mode);
									};

EarthGL.prototype.translate = function(tx,ty,tz) {
	this.sphere.translate(tx,ty,tz);
	this.moon.translate(tx,ty,tz);
};

function MarsGL()
{
	this.sphere=new SphereGL();
	this.fobos=new MoonGL();
	this.demos=new MoonGL();
	this.fobos.translate(2.5,0,0);
	this.demos.translate(4,0,0);
	this.sphere.scale(0.05,0.05,0.05);
	this.sphere.setDrawingMode(TEXTURE);
	this.sphere.setTexture("../imgs/mars.jpg");
	this.sphere.rotate(180,0,0,1);
	ObjectGL.call(this);
}
MarsGL.prototype = Object.create(ObjectGL.prototype);

MarsGL.prototype.render = function() {
							this.sphere.render();
							this.fobos.render();
							this.demos.render();
						};

MarsGL.prototype.setDrawingMode = function(mode) {
										this.sphere.setDrawingMode(mode);
									};

MarsGL.prototype.translate = function(tx,ty,tz) {
	this.sphere.translate(tx,ty,tz);
	this.fobos.translate(tx,ty,tz);
	this.demos.translate(tx,ty,tz);
};

function JupiterGL()
{
	this.sphere=new SphereGL();

	this.Io=new MoonGL();
	this.Europa=new MoonGL();
	this.Ganimedes=new MoonGL();
	this.Calisto=new MoonGL();
	this.Io.translate(12,6,2);
	this.Europa.translate(12,3,1);
	this.Ganimedes.translate(12.5,1,0);
	this.Calisto.translate(12,-2,-1);

	this.sphere.scale(0.5,0.5,0.5);
	this.sphere.setDrawingMode(TEXTURE);
	this.sphere.setTexture("../imgs/jupiter.jpg");
	this.sphere.rotate(180,0,0,1);
	ObjectGL.call(this);
}
JupiterGL.prototype = Object.create(ObjectGL.prototype);

JupiterGL.prototype.render = function() {
							this.sphere.render();
							this.Io.render();
							this.Europa.render();
							this.Ganimedes.render();
							this.Calisto.render();
						};

JupiterGL.prototype.setDrawingMode = function(mode) {
										this.sphere.setDrawingMode(mode);
									};

JupiterGL.prototype.translate = function(tx,ty,tz) {
	this.sphere.translate(tx,ty,tz);
	this.Io.translate(tx,ty,tz);
	this.Europa.translate(tx,ty,tz);
	this.Ganimedes.translate(tx,ty,tz);
	this.Calisto.translate(tx,ty,tz);
};

function UranusGL()
{
	this.sphere=new SphereGL();

	this.Miranda=new MoonGL();
	this.Ariel=new MoonGL();
	this.Umbriel=new MoonGL();
	this.Titania=new MoonGL();
	this.Oberon=new MoonGL();
	this.Miranda.translate(9,-6,2);
	this.Ariel.translate(8,6,2);
	this.Umbriel.translate(10,3,1);
	this.Titania.translate(11.5,1,0);
	this.Oberon.translate(10,-2,-1);

	this.sphere.scale(0.25,0.25,0.25);
	this.sphere.setDrawingMode(TEXTURE);
	this.sphere.setTexture("../imgs/uranus.jpg");
	ObjectGL.call(this);
}
UranusGL.prototype = Object.create(ObjectGL.prototype);

UranusGL.prototype.render = function() {
							this.sphere.render();
							this.Miranda.render();
							this.Ariel.render();
							this.Umbriel.render();
							this.Titania.render();
							this.Oberon.render();
						};

UranusGL.prototype.setDrawingMode = function(mode) {
										this.sphere.setDrawingMode(mode);
									};

UranusGL.prototype.translate = function(tx,ty,tz) {
	this.sphere.translate(tx,ty,tz);
	this.Miranda.translate(tx,ty,tz);
	this.Ariel.translate(tx,ty,tz);
	this.Umbriel.translate(tx,ty,tz);
	this.Titania.translate(tx,ty,tz);
	this.Oberon.translate(tx,ty,tz);
};

function NeptuneGL()
{
	this.sphere=new SphereGL();
	this.sphere.scale(0.25,0.25,0.25);
	this.sphere.setDrawingMode(TEXTURE);
	this.sphere.setTexture("../imgs/neptune.png");
	ObjectGL.call(this);
}
NeptuneGL.prototype = Object.create(ObjectGL.prototype);

NeptuneGL.prototype.render = function() {
							this.sphere.render();
						};

NeptuneGL.prototype.setDrawingMode = function(mode) {
										this.sphere.setDrawingMode(mode);
									};
NeptuneGL.prototype.translate = function(tx,ty,tz) {
	this.sphere.translate(tx,ty,tz);
};

function PolygoneGL(polygone)
{
	var r = 0.5;
	var vertices=[];
	var indices = [];
	var mapping = [];
	
	vertices.push(0);
	vertices.push(0);
	vertices.push(0);

	for (i = 0; i < polygone+1; i++){
	    vertices.push(r*Math.cos(i*2*Math.PI/polygone));
	    vertices.push(r*Math.sin(i*2*Math.PI/polygone));
	    vertices.push(0);
	}
	for(i=0;i<vertices.length/3-2;i++)
	{
		indices.push(0);
		indices.push(i+1);
		indices.push(i+2);
	}
	this.positions = vertices;	// V2
	
	this.color = [1., 1., 1., 1.];		// R, G, B, A	
	this.colors = [1., 0., 0., 1.,		// V0: R, G, B, A
				   0., 1., 0., 1.,		// V1
				   0., 0., 1., 1.];		// V2
	
	for(i=0;i<vertices.length;i+=3)
	{
		mapping.push(.5+vertices[i]);
		mapping.push(.5+vertices[i+1]);
	}
	this.textureCoords = mapping;
	
	this.indices = indices;

	ObjectGL.call(this);

	this.setDegree(0);
	this.setDrawingMode(TEXTURE);
	this.setTexture("../imgs/saturnRing.png");
}

PolygoneGL.prototype = Object.create(ObjectGL.prototype);

function SaturnGL()
{
	this.sphere=new SphereGL();
	this.ring=new PolygoneGL(60);
	
	this.sphere.scale(0.45,0.45,0.45);
	this.sphere.setDrawingMode(TEXTURE);
	this.sphere.setTexture("../imgs/saturn.jpg");
	
	this.ring.rotate(-80,1,0,0);
	this.ring.scale(.9);
	ObjectGL.call(this);
}
SaturnGL.prototype = Object.create(ObjectGL.prototype);

SaturnGL.prototype.render = function() {
							this.sphere.render();
							this.ring.render();
						};

SaturnGL.prototype.setDrawingMode = function(mode) {
										this.sphere.setDrawingMode(mode);
									};
SaturnGL.prototype.translate = function(tx,ty,tz) {
	this.sphere.translate(tx,ty,tz);
};