import { RootStateOrAny } from "react-redux";

export const getUserName = (state: RootStateOrAny) => state.user.name
