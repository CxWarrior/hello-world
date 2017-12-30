var world;

function init() {
    var b2Vec2 = Box2D.Common.Math.b2Vec2
    ,	b2BodyDef = Box2D.Dynamics.b2BodyDef
    ,	b2Body = Box2D.Dynamics.b2Body
    ,	b2FixtureDef = Box2D.Dynamics.b2FixtureDef
    ,	b2Fixture = Box2D.Dynamics.b2Fixture
    ,	b2World = Box2D.Dynamics.b2World
    ,	b2MassData = Box2D.Collision.Shapes.b2MassData
    ,	b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
    ,	b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
    ,	b2DebugDraw = Box2D.Dynamics.b2DebugDraw
    ;

    world = new b2World(
        new b2Vec2(0, 10)    //gravity
        ,  true                 //allow sleep
    );

    var fixDef = new b2FixtureDef;
    fixDef.density = 1.0;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.9;

    var bodyDef = new b2BodyDef;

    //create ground
    bodyDef.type = b2Body.b2_staticBody;
    bodyDef.position.x = 17;
    bodyDef.position.y = 33;
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsBox(17, 0.5);
    world.CreateBody(bodyDef).CreateFixture(fixDef);

    // top wall
    bodyDef.position.y = 0.5;
    world.CreateBody(bodyDef).CreateFixture(fixDef);

    // left wall
    bodyDef.position.x = 0.5;
    bodyDef.position.y = 17;
    fixDef.shape.SetAsBox(0.5, 17);
    world.CreateBody(bodyDef).CreateFixture(fixDef);

    // right wall
    bodyDef.position.x = 33;
    world.CreateBody(bodyDef).CreateFixture(fixDef);

    // peg definition
    fixDef.shape = new b2CircleShape(0.2);
    // peg locations level 1
    /*
    var pegs = [
        {x:2, y:18}
        ,{x:4, y:16}
        ,{x:6, y:14}
        ,{x:8, y:12}
        ,{x:10, y:10}
        ,{x:12, y:8}
        ,{x:14, y:10}
        ,{x:16, y:12}
        ,{x:18, y:14}
        ,{x:20, y:16}
        ,{x:22, y:18}
    ];
    /* end level 1 */
    // peg locations level 2
    /* */
    var pegs = [
        {x:2, y:18}
        ,{x:4, y:16}
        ,{x:6, y:14}
        ,{x:8, y:12}
        ,{x:10, y:10}
        ,{x:12, y:8}
        ,{x:14, y:10}
        ,{x:16, y:12}
        ,{x:18, y:14}
        ,{x:20, y:16}
        ,{x:22, y:20}
    ];
    /* end level 2*/

    // draw current level on the board
    for (var i = 0; i < pegs.length; i++) {
        bodyDef.position.x = pegs[i].x;
        bodyDef.position.y = pegs[i].y;
        world.CreateBody(bodyDef).CreateFixture(fixDef);
    }

    //setup debug draw
    var debugDraw = new b2DebugDraw();
    debugDraw.SetSprite(document.getElementById("canvas").getContext("2d"));
    debugDraw.SetDrawScale(30.0);
    debugDraw.SetFillAlpha(0.3);
    debugDraw.SetLineThickness(1.0);
    debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
    world.SetDebugDraw(debugDraw);

    window.setInterval(update, 1000 / 60);
};

function update() {
    world.Step(
        1 / 60   //frame-rate
        ,  10       //velocity iterations
        ,  10       //position iterations
    );
    world.DrawDebugData();
    world.ClearForces();
};

function dropball(e){
    var fixDef = new Box2D.Dynamics.b2FixtureDef;
    fixDef.density = 1.0;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.9;
    fixDef.shape = new Box2D.Collision.Shapes.b2CircleShape(0.2);
    var bodyDef = new Box2D.Dynamics.b2BodyDef;
    bodyDef.type = Box2D.Dynamics.b2Body.b2_dynamicBody;
    bodyDef.position.x = e.offsetX * 30/1000 + 1.25;
    bodyDef.position.y = 1;
    world.CreateBody(bodyDef).CreateFixture(fixDef);
}

$(function(){
    // on ready
    $('#canvas').click(function(e){
        dropball(e);
    });
});