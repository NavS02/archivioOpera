<template>
    <transition>
        <div data-modal v-if="isVisible" @click.self="onBackdropClicked">
            <div data-dialog>
                <div data-content>
                    <div data-header>
                        <slot name="header">
                            <p>{{title}}</p>
                        </slot>
                        <span data-close @click="onCloseClicked">×</span>
                    </div>
                    <div data-body>
                        <slot>{{body}}</slot>
                    </div>
                    <div data-footer>
                        <slot name="footer">
                            <slot name="secondary-button">
                                <template v-if="!hideCancel">
                                    <button class="btn btn-sm btn-secondary" type="button" data-button-cancel @click="onCancelClicked" v-html="cancelText"></button>
                                </template>
                            </slot>
                            <slot name="primary-button">
                                <button class="btn btn-sm btn-primary" type="button" data-button-ok @click="onOkClicked" v-html="okText"></button>
                            </slot>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
     import Modal from './Modal'

    export default {
        setup(props, context) {
            const modal = new Modal(props, context)
            return modal.setup()
        },
        props: Modal.props(),
    }
</script>

<style scoped>

[data-modal] {
    --modal-margin: 1.75rem;
    --modal-width: 500px;
    --modal-color: rgb(0 0 0);
    --modal-bg: rgb(255 255 255);
    --modal-border-width: 1px;
    --modal-border-color: rgb(0 0 0 / 0.15);
    --modal-border-radius: 0.5rem;
    --modal-zindex: 1055;
    --modal-padding: 1rem;
    --modal-footer-gap: 0.5rem;

    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--modal-zindex);
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
    background-color: rgba(0 0 0 / 0.5);
}
[data-dialog] {
    max-width: var(--modal-width);
    margin: var(--modal-margin);
    margin-right: auto;
    margin-left: auto;
}
[data-content] {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    color: var(--modal-color);
    pointer-events: auto;
    background-color: var(--modal-bg);
    background-clip: padding-box;
    border: var(--modal-border-width) solid var(--modal-border-color);
    border-radius: var(--modal-border-radius);
    outline: 0;
}
[data-header] {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between;
    padding: var(--modal-padding);
    border-bottom: var(--modal-border-width) solid var(--modal-border-color);
    border-top-left-radius: var(--modal-border-radius);
    border-top-right-radius: var(--modal-border-radius);
}
[data-close] {
    /* padding: calc(var(--modal-padding)/4); */
    cursor: pointer;
    color: rgb(0 0 0 /.5);
    font-size: 2rem;
    line-height: 2rem;
}
[data-body] {
    position: relative;
    flex: 1 1 auto;
    padding: var(--modal-padding);
}
[data-footer] {
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    gap: var(--modal-footer-gap);
    padding: calc(var(--modal-padding) - var(--modal-footer-gap) * .5);
    background-color: var(--modal-bg);
    border-top: var(--modal-border-width) solid var(--border-color);
    border-bottom-right-radius: var(--modal-border-radius);
    border-bottom-left-radius: var(--modal-border-radius);
}
</style>