import {
  createContext,
  useContext,
  // Reducer,
  // Dispatch,
  // PropsWithChildren,
  // useReducer
} from "react";

// function useContextReducer<StateType, ActionType>(
//   reducer: Reducer<StateType, ActionType>,
//   initialState: StateType
// ) {
//   const defaultDispatch: Dispatch<ActionType> = () => initialState;
//   const ctx = createContext({
//     state: initialState,
//     dispatch: defaultDispatch
//   });

//   function Provider(props: PropsWithChildren<{}>) {
//     const [state, dispatch] = useReducer<Reducer<StateType, ActionType>>(
//       reducer,
//       initialState
//     );
//     return <ctx.Provider value={{ state, dispatch }} {...props} />;
//   }

//   return [ctx, Provider] as const;
// }

function useContextReducer<A>() {
  const ctx = createContext<A | undefined>(undefined);
  function useCtx() {
    const c = useContext(ctx);
    if (!c) throw new Error("useCtx must be inside a Provider with a value");
    return c;
  }
  return [useCtx, ctx.Provider] as const;
}

export default useContextReducer;
