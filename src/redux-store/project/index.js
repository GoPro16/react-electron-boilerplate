import { handleActions, createAction } from "redux-actions";

const base = "project/";

const INITIAL_STATE = {
  test: "test"
};

const setError = createAction(`${base}ERROR`);
const testProp = createAction(`${base}TEST`);

export default handleActions(
  {
    [setError]: (state, { payload }) => ({
      ...state,
      error: payload
    }),
    [testProp]: (state, { payload }) => ({
      ...state,
      test:payload.test
    }),
  },
  INITIAL_STATE
);