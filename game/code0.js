gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDplayerObjects1= [];
gdjs.Untitled_32sceneCode.GDplayerObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite3Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite3Objects2= [];
gdjs.Untitled_32sceneCode.GDspawn_9595pointObjects1= [];
gdjs.Untitled_32sceneCode.GDspawn_9595pointObjects2= [];
gdjs.Untitled_32sceneCode.GDspawn_9595point2Objects1= [];
gdjs.Untitled_32sceneCode.GDspawn_9595point2Objects2= [];
gdjs.Untitled_32sceneCode.GDwall_9595upObjects1= [];
gdjs.Untitled_32sceneCode.GDwall_9595upObjects2= [];
gdjs.Untitled_32sceneCode.GDwall_9595downObjects1= [];
gdjs.Untitled_32sceneCode.GDwall_9595downObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDgame_9595endingObjects1= [];
gdjs.Untitled_32sceneCode.GDgame_9595endingObjects2= [];
gdjs.Untitled_32sceneCode.GDspawn_9595point3Objects1= [];
gdjs.Untitled_32sceneCode.GDspawn_9595point3Objects2= [];
gdjs.Untitled_32sceneCode.GDscoreObjects1= [];
gdjs.Untitled_32sceneCode.GDscoreObjects2= [];
gdjs.Untitled_32sceneCode.GDstarObjects1= [];
gdjs.Untitled_32sceneCode.GDstarObjects2= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

};gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Untitled_32sceneCode.GDplayerObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDwall_95959595upObjects1ObjectsGDgdjs_9546Untitled_959532sceneCode_9546GDwall_95959595downObjects1Objects = Hashtable.newFrom({"wall_up": gdjs.Untitled_32sceneCode.GDwall_9595upObjects1, "wall_down": gdjs.Untitled_32sceneCode.GDwall_9595downObjects1});
gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDwall_95959595upObjects1Objects = Hashtable.newFrom({"wall_up": gdjs.Untitled_32sceneCode.GDwall_9595upObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDwall_95959595downObjects1Objects = Hashtable.newFrom({"wall_down": gdjs.Untitled_32sceneCode.GDwall_9595downObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDstarObjects1Objects = Hashtable.newFrom({"star": gdjs.Untitled_32sceneCode.GDstarObjects1});
gdjs.Untitled_32sceneCode.eventsList3 = function(runtimeScene) {

};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Untitled_32sceneCode.GDplayerObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDstarObjects1Objects = Hashtable.newFrom({"star": gdjs.Untitled_32sceneCode.GDstarObjects1});
gdjs.Untitled_32sceneCode.eventsList4 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("game_ending"), gdjs.Untitled_32sceneCode.GDgame_9595endingObjects1);
gdjs.copyArray(runtimeScene.getObjects("spawn_point"), gdjs.Untitled_32sceneCode.GDspawn_9595pointObjects1);
gdjs.copyArray(runtimeScene.getObjects("spawn_point2"), gdjs.Untitled_32sceneCode.GDspawn_9595point2Objects1);
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDspawn_9595pointObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDspawn_9595pointObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDspawn_9595point2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDspawn_9595point2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDgame_9595endingObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDgame_9595endingObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDplayerObjects1[i].getBehavior("AdvancedJump2").SetAirJumpCountMaximum(1000000000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Jump_Land_05.wav", false, 100, 1);
}}

}


{


gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("wall_down"), gdjs.Untitled_32sceneCode.GDwall_9595downObjects1);
gdjs.copyArray(runtimeScene.getObjects("wall_up"), gdjs.Untitled_32sceneCode.GDwall_9595upObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDplayerObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDwall_95959595upObjects1ObjectsGDgdjs_9546Untitled_959532sceneCode_9546GDwall_95959595downObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("game_ending"), gdjs.Untitled_32sceneCode.GDgame_9595endingObjects1);
/* Reuse gdjs.Untitled_32sceneCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDplayerObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Explosion 1.aac", false, 100, 1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDgame_9595endingObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDgame_9595endingObjects1[i].hide(false);
}
}}

}


{


gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("star"), gdjs.Untitled_32sceneCode.GDstarObjects1);
gdjs.copyArray(runtimeScene.getObjects("wall_down"), gdjs.Untitled_32sceneCode.GDwall_9595downObjects1);
gdjs.copyArray(runtimeScene.getObjects("wall_up"), gdjs.Untitled_32sceneCode.GDwall_9595upObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDwall_9595upObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDwall_9595upObjects1[i].setCenterXInScene(gdjs.Untitled_32sceneCode.GDwall_9595upObjects1[i].getCenterXInScene() - (10));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDwall_9595downObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDwall_9595downObjects1[i].setCenterXInScene(gdjs.Untitled_32sceneCode.GDwall_9595downObjects1[i].getCenterXInScene() - (10));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDstarObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDstarObjects1[i].setX(gdjs.Untitled_32sceneCode.GDstarObjects1[i].getX() - (10));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("spawn_point"), gdjs.Untitled_32sceneCode.GDspawn_9595pointObjects1);
gdjs.copyArray(runtimeScene.getObjects("spawn_point2"), gdjs.Untitled_32sceneCode.GDspawn_9595point2Objects1);
gdjs.copyArray(runtimeScene.getObjects("spawn_point3"), gdjs.Untitled_32sceneCode.GDspawn_9595point3Objects1);
gdjs.copyArray(runtimeScene.getObjects("star"), gdjs.Untitled_32sceneCode.GDstarObjects1);
gdjs.copyArray(runtimeScene.getObjects("wall_down"), gdjs.Untitled_32sceneCode.GDwall_9595downObjects1);
gdjs.copyArray(runtimeScene.getObjects("wall_up"), gdjs.Untitled_32sceneCode.GDwall_9595upObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDspawn_9595pointObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDspawn_9595pointObjects1[i].getBehavior("ObjectSpawner").SpawnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDwall_95959595upObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDspawn_9595point2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDspawn_9595point2Objects1[i].getBehavior("ObjectSpawner").SpawnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDwall_95959595downObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDwall_9595downObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDwall_9595downObjects1[i].getBehavior("Resizable").setHeight(500);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDwall_9595upObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDwall_9595upObjects1[i].getBehavior("Resizable").setHeight(500);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDspawn_9595point3Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDspawn_9595point3Objects1[i].getBehavior("ObjectSpawner").SpawnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDstarObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("spawn_point"), gdjs.Untitled_32sceneCode.GDspawn_9595pointObjects1);
gdjs.copyArray(runtimeScene.getObjects("spawn_point2"), gdjs.Untitled_32sceneCode.GDspawn_9595point2Objects1);
gdjs.copyArray(runtimeScene.getObjects("spawn_point3"), gdjs.Untitled_32sceneCode.GDspawn_9595point3Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDspawn_9595pointObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDspawn_9595pointObjects1[i].getBehavior("ObjectSpawner").SetRandomPosition(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDspawn_9595point2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDspawn_9595point2Objects1[i].getBehavior("ObjectSpawner").SetRandomPosition(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDspawn_9595point3Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDspawn_9595point3Objects1[i].getBehavior("ObjectSpawner").SetRandomPosition(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.Untitled_32sceneCode.eventsList3(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("star"), gdjs.Untitled_32sceneCode.GDstarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDplayerObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDstarObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10199052);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDstarObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDstarObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDstarObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "b9ab279dc8ac9ec62164444742695824b9806e01cb49f710937ebdce919e72ee_Coins 2.aac", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Untitled_32sceneCode.GDscoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("star"), gdjs.Untitled_32sceneCode.GDstarObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDscoreObjects1[i].getBehavior("Text").setText("score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDstarObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDstarObjects1[i].getBehavior("Resizable").setSize(150, 150);
}
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDplayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDplayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDspawn_9595pointObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDspawn_9595pointObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDspawn_9595point2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDspawn_9595point2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDwall_9595upObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDwall_9595upObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDwall_9595downObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDwall_9595downObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDgame_9595endingObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDgame_9595endingObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDspawn_9595point3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDspawn_9595point3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDscoreObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDscoreObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDstarObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDstarObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList4(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
