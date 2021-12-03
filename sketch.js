const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var caixa1,caixa2,caixa3,caixa4,caixa5;
var chao;
var porco1,porco2;
var tronco1,tronco2,tronco3,tronco4;
var passaro;
var fundo;
var plataforma;

function preload(){
  fundo = loadImage("sprites/bg.png");

}

function setup() {
  var tela = createCanvas(1200, 400);

  engine = Engine.create();
  world = engine.world;

  plataforma = new Chao(150,305,300,180);
  chao = new Chao(600,400,1200,100);
  caixa1 = new Caixa(700,320,70,70);
  caixa2 = new Caixa(920,320,70,70);
  porco1 = new Porco(810,320);
  tronco1 = new Tronco(810,260,300,-PI/2);
  
  caixa3 = new Caixa(700,240,70,70);
  caixa4 = new Caixa(920,240,70,70);
  porco2 = new Porco(810,240);
  tronco2 = new Tronco(810,180,300,-PI/2);

  caixa5 = new Caixa(810,160,70,70);
  tronco3 = new Tronco(750,120,160,PI/4);
  tronco4 = new Tronco(860,120,160,-PI/4);

  passaro = new Passaro(100,100)
}

function draw() {
  background(fundo);

  Engine.update(engine);
  chao.display();

  caixa1.display();
  caixa2.display();
  porco1.display();
  tronco1.display();

  caixa3.display();
  caixa4.display();
  porco2.display();
  tronco2.display();
 
  caixa5.display();
  tronco3.display();
  tronco4.display();

  passaro.display();
  plataforma.display();
}