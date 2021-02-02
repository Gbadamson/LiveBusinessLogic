export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        member: [action.payload, ...state.member],
      };
    case "REMOVAL":
      return {
        ...state,
        member: state.member.filter((student) => {
          return student.id !== action.payload;
        }),
      };
    case "EDITING":
      const editing = action.payload;
      const editable = state.member.map((student) => {
        if (student.id === editing.id) {
          return editing;
        } else {
          return student;
        }
      });
      return {
        student: editable,
      };
    default:
      return state;
  }
};
