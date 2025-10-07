class ScoreController extends Component{
  score = 0
  update(){
    const text = this.gameObject.getComponent(Text)
    text.text = "Score " + this.score
  }
}