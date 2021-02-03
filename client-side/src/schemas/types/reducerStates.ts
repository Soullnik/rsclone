import { TypeUser } from "./user";

export type ReducerStates = {
  user: TypeUser | undefined | null
  loginError: boolean
}
