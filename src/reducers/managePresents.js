export function managePresents(state = { numberOfPresents: 0 }, action) {
  switch (action.type) {
    case "INCREASE":
      const newNum = state.numberOfPresents + 1;
      return { numberOfPresents: newNum };
    default:
      return { numberOfPresents: 0 };
  }
}
