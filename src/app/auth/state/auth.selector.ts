import { createFeatureSelector } from "@ngrx/store";
import { AuthState } from "./auth.state";

export const AUTH_STATE_NAME = 'auth';

const getLoginState = createFeatureSelector<AuthState>(AUTH_STATE_NAME);

