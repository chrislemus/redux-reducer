export function manageFriends(state, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      const newFriendsList = [...state.friends, action.friend];
      return { ...state, friends: newFriendsList };
    case "REMOVE_FRIEND":
      const filteredFriendsList = state.friends.filter(
        (friend) => friend.id !== action.id
      );
      return { ...state, friends: filteredFriendsList };
    default:
      return state;
  }
}
