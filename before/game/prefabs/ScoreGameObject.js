class ScoreGameObject extends GameObject{
  constructor(){
    super("Score Game Object")
    this.addComponent(new Text(), {fillStyle: "white"})
    this.addComponent(new ScoreController())
  }
}