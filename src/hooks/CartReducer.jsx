export const cartInitialState = {
  items: [],
};

export function cartReducer(state, action) {
  switch (action.type) {
    case "AGREGAR_ITEM": {
      const exists = state.items.find(item => item.id === action.payload.id);

      if (exists) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? {
                  ...item,
                  count: Math.min(item.count + action.payload.count, item.stock),
                }
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload }],
        };
      }
    }

    case "REMOVER_ITEM":
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };

    case "INCREMENTAR_CUENTA":
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload && item.count < item.stock
            ? { ...item, count: item.count + 1 }
            : item
        ),
      };

    case "DECREMENTAR_CUENTA":
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload && item.count > 0
            ? { ...item, count: item.count - 1 }
            : item
        ),
      };

    case "CLEAR_CART":
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
}
