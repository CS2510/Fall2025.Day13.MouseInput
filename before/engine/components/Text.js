class Text extends Component{
  fillStyle = "magenta"
  text = "[NO TEXT]"
  font = "10px Arial"
  draw(ctx){
    ctx.fillStyle = this.fillStyle
    ctx.font = this.font
    ctx.fillText(this.text, 0, 0)
  }
}