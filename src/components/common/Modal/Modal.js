/**
 * logic for modal type components.
 * uses the composition API approach from vue
 */
import {ref, toRefs, watch} from 'vue'

import BodyStyleManager from './BodyStyleManager'
const bodyStyleManager = new BodyStyleManager()

const RETURN_VALUE = Object.freeze({
    OK: 1,
    CANCEL: 0,
    ERROR: -1
})

// global reference to the resolve/reject in the show() promise
let showResolve, showReject = null

export default class Modal {

    // TODO: keep track of open Modals
    static openModals = []

    constructor(props, context) {
        this.props = props
        this.context = context
    }

    setup() {
        const props = this.props
        const context = this.context

        const isVisible = ref(false)
        const { visible } = toRefs(props)
    
        watch(visible, function(value) {
                if(value===true) show()
                else hide()
            },
            {immediate: true, }
        )
    
        function show() {
            if(!isVisible.value) {
                isVisible.value = true
                context.emit('show', context)
                bodyStyleManager.applyStyle({overflow: 'hidden'})
            }
            const promise = new Promise((resolve, reject) => {
                // set a global reference to resolve and reject
                showResolve = resolve
                showReject = reject
            })
            return promise
        }
        function hide(status=RETURN_VALUE.CANCEL) {
            if(!isVisible.value) return
            isVisible.value = false
            context.emit('hide', context, status)
            bodyStyleManager.restoreStyle()
    
            if(!showResolve || !showReject) return
            switch (status) {
                case RETURN_VALUE.OK:
                    showResolve(true)
                    break;
                case RETURN_VALUE.CANCEL:
                    showResolve(false)
                    break;
                case RETURN_VALUE.ERROR:
                    showReject(true)
                    break;
                default:
                    break;
            }
            // reset resolve and reject
            showResolve = showReject = null
        }
        function toggle() { return isVisible ? hide() : show() }
        /**
         * hide if the user clicks on the outside mask
         */
        function cancel() { hide(RETURN_VALUE.CANCEL) }
        function onBackdropClicked(e) { if(!props.disableOutsideClick) cancel() }
        function onCloseClicked(e) { cancel() }
        function onCancelClicked(e) { cancel() }
        function onOkClicked(e) { hide(RETURN_VALUE.OK) }
    
        return {
            isVisible,
            onBackdropClicked, onCloseClicked,
            onCancelClicked, onOkClicked,
            toggle, show, hide, cancel,
        }
    }

    /**
     * export the props
     * @param {Function} visit optional function that can modify the default props
     * @returns 
     */
    static props(visit=null) {
        const props = {
            visible: { type: Boolean, default: false },
            backdrop: { type: Boolean, default: false },
            disableOutsideClick: { type: Boolean, default: false },
            hideCancel: { type: Boolean, default: false },
            okText: { type: String, default: 'Ok' },
            cancelText: { type: String, default: 'Cancel' },
            closeText: { type: String, default: '&times;' },
            title: { type: String, default: '' },
            body: { type: String, default: '' },
        }
        if(typeof visit === 'function') visit(props)

        return props
    }
}

export { RETURN_VALUE }