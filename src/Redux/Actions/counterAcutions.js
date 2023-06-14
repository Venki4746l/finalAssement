export const increase = (value) => ({
  type: "INCREMENT",
  payload:value
});
export const decrease = (value) => ({
  type: "DECREMENT",
  payload:value
});
