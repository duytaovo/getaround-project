export const payloadCreator = (asyncFunc:any) => async (arg:any, thunkAPI:any) => {
    try {
        const res = await asyncFunc(arg);
        return res;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
  };