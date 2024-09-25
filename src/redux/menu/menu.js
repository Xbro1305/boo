export const reMenu = (state = true, action) => {
  switch (action.type) {
    case "MENU":
      return !state;
    default:
      return state;
  }
};

export const acMenu = () => ({ type: "MENU" });
