/**
 * helper class to apply/restore style to the body element
 * when the modal is visible
 */
export default class BodyStyleManager {
    previousStyle
    #bodyElement

    constructor() {
        this.#bodyElement = document.querySelector('body')
    }
    
    applyStyle(params) {
        this.backupStyle()
        for (const [key, value] of Object.entries(params)) {
            this.#bodyElement.style[key] = value
        }
    }
    
    backupStyle() {
        this.previousStyle = this.#bodyElement.style
    }

    restoreStyle() {
        if(!this.previousStyle) return
        this.#bodyElement.style = this.previousStyle
    }
}