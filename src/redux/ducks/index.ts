import reducer from './houseReducer';
import * as saga from './saga';

export { saga };
export default reducer;

export type RootState = ReturnType<typeof reducer>;
