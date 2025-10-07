class Input {
    static keysDown = []

    static mouseDown = []
    static mousePosition


    static keysDownThisFrame = []
    static keysUpThisFrame = []

    static mouseDownThisFrame = []
    static mouseUpThisFrame = []

    static keydown(event) {
        if (!Input.keysDown.includes(event.code)){
            Input.keysDown.push(event.code)
            this.keysDownThisFrame.push(event.code)
        }


    }
    static keyup(event) {
        if(Input.keysDown.includes(event.code)){
            Input.keysDown = Input.keysDown.filter(k => k != event.code)
            this.keysUpThisFrame.push(event.code)
        }
    }

    static mouseup(event){
        Input.mouseDown = Input.mouseDown.filter(b=>b!=event.button)
        Input.mouseUpThisFrame.push(event.button)

    }

    static mousedown(event){
        Input.mouseDown.push(event.button)
        Input.mouseDownThisFrame.push(event.button)
    }

    static mousemove(event){
        Input.mousePosition = new Vector2(event.clientX, event.clientY)
    }

    static update(){
        this.keysDownThisFrame = []
        this.keysUpThisFrame = []
        this.mouseDownThisFrame = []
        this.mouseUpThisFrame = []
    }

    static getButton(button){
        return Input.mouseDown(button)
    }

    static getButtonUp(button){
        return Input.mouseUpThisFrame(button)
    }

    static getButtonDown(button){
        return Input.mouseDownThisFrame(button)
    }

}