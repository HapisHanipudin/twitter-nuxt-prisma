import mitt from "mitt";

const emitter = mitt();

export const useEmitter = () => {
  return {
    $on: emitter.on,
    $emit: emitter.emit,
  };
};
