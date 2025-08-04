export const cartInitialState = [];

export function cartReducer(state, action) {
  switch (action.type) {
    case "AGREGAR_ITEM": {
      const exists = state.find(item => item.id === action.payload.id);
      if (exists) {
        return state.map(item =>
          (item.id === action.payload.id && item.count < item.stock) 
            ? { ...item, count: item.count + 1 }
            : item
        );
      } else {
        return [...state, { ...action.payload, count: 1 }];
      }
    }

    case "REMOVER_ITEM":
      return state.filter(item => item.id !== action.payload);

    case "INCREMENTAR_CUENTA":
      return state.map(item =>
        (item.id === action.payload && item.count < item.stock)
          ? { ...item, count: item.count + 1 }
          : item
      );

    case "DECREMENTAR_CUENTA":
      return state
        .map(item =>
          item.id === action.payload && item.count > 0
            ? { ...item, count: item.count - 1 }
            : item
        )

    default:
      return state;
  }
}

