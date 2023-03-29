<template>
  <div data-drawer v-if="isVisible" @click.self="onBackdropClicked">
    <div data-wrapper>
      <span data-close @click="onCloseClicked">
        <font-awesome-icon icon="fa-solid fa-times" fixed-width />
      </span>

      <div data-content>
        <div data-header>
          <slot name="header">
            <p>{{ title }}</p>
          </slot>
        </div>

        <div data-body>
          <slot>{{ body }}</slot>
        </div>
        <div data-footer>
          <slot name="footer">
            <slot name="secondary-button">
              <template v-if="!hideCancel">
                <button
                  class="btn btn-sm btn-secondary"
                  type="button"
                  data-button-cancel
                  @click="onCancelClicked"
                  v-html="cancelText"
                ></button>
              </template>
            </slot>
            <slot name="primary-button">
              <button
                class="btn btn-sm btn-primary"
                type="button"
                @click="onOkClicked"
                v-html="okText"
              ></button>
            </slot>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "./Modal";
// override the default for disableOutsideClick using the visitor function
const propsVisitor = (props) => (props.disableOutsideClick.default = true);

export default {
  setup(props, context) {
    const modal = new Modal(props, context);
    return modal.setup();
  },
  props: Modal.props(propsVisitor),
};
</script>

<style scoped>
/* Screen Many2Many */
[data-drawer] {
  --drawer-margin: 1.75rem;
  --drawer-width: 40vw;
  --drawer-color: rgb(0 0 0);
  --drawer-bg: rgb(255 255 255);
  --drawer-border-width: 1px;
  --drawer-border-color: rgb(0 0 0 / 0.15);
  --drawer-border-radius: 0.5rem;
  --drawer-zindex: 1055;
  --drawer-padding: 1rem;
  --drawer-footer-gap: 0.5rem;

  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--drawer-zindex);
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  background-color: rgba(0 0 0 / 0.5);
}
[data-wrapper] {
  max-width: var(--drawer-width);
  margin: 0;
  margin-left: auto;
  position: relative;
}
[data-content] {
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: var(--drawer-color);
  pointer-events: auto;
  background-clip: padding-box;
  border: var(--drawer-border-width) solid var(--drawer-border-color);
  /* border-radius: var(--drawer-border-radius); */
  outline: 0;
}
[data-header] {
  background-color: var(--drawer-bg);
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  padding: var(--drawer-padding);
  border-bottom: var(--drawer-border-width) solid var(--drawer-border-color);
  /* border-top-left-radius: var(--drawer-border-radius); */
  /* border-top-right-radius: 0; */
}
[data-close] {
  /* padding: calc(var(--drawer-padding)/4);  */
  cursor: pointer;
  color: rgb(255 255 255 / 1);
  /* font-size: 2rem;  */
  line-height: 2rem;
  position: fixed;
  top: 10px;
  right: 42%;
  z-index: 1;
  background-color: rgba(35, 34, 34, 0.5);
  border-radius: 50%;
  height: 44px;
  width: 44px;
  align-items: center;
  justify-content: center;
  display: grid;
}
[data-close]:hover {
  background-color: rgba(0 0 0 / 0.25);
}
[data-body] {
  background-color: var(--drawer-bg);
  position: relative;
  flex: 1 1 auto;
  padding: var(--drawer-padding);
}
[data-footer] {
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: var(--drawer-footer-gap);
  padding: calc(var(--drawer-padding) - var(--drawer-footer-gap) * 0.5);
  background-color: var(--drawer-bg);
  border-top: var(--drawer-border-width) solid var(--border-color);
  /* border-bottom-right-radius: 0; */
  /* border-bottom-left-radius: var(--drawer-border-radius); */
}
</style>
