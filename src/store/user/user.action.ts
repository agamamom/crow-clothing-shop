import { USER_ACTION_TYPES } from './user.types';
import { createAction, withMatcher, Action, ActionWithPayload } from '../../utils/reducer/reducer.utils';
import { UserData, AdditionalInformation } from '../../utils/firebase/firebase';
import { User } from 'firebase/auth';

export type checkUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;

export type googleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;

export type setCurrentUser = ActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER, UserData>;

export type emailSignInStart = ActionWithPayload<USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email: string, password: string }>;

export type signInSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS, UserData>;

export type signInFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_FAILED, Error>;

export type signUpStart = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_START, { email: string, password: string, displayName: string }>;

export type signUpSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user: User, additionalDetails: AdditionalInformation }>;

export type signUpFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_FAILED, Error>;

export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;

export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;

export type SignOutFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_OUT_FAILED, Error>

export const checkUserSession = withMatcher((): checkUserSession =>
    createAction(USER_ACTION_TYPES.CHECK_USER_SESSION));

export const googleSignInStart = withMatcher((): googleSignInStart =>
    createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START));

export const setCurrentUser = withMatcher((user: UserData): setCurrentUser =>
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));

export const emailSignInStart = withMatcher((email: string, password: string) =>
    createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password }));

export const signInSuccess = withMatcher((user: UserData & { id: string }): signInSuccess =>
    createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user));

export const signInFailed = withMatcher((error: Error): signInFailed =>
    createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error));

export const signUpStart = withMatcher((email: string, password: string, displayName: string): signUpStart =>
    createAction(USER_ACTION_TYPES.SIGN_UP_START, {
        email,
        password,
        displayName,
    }));

export const signUpSuccess = withMatcher((user: User, additionalDetails: AdditionalInformation): signUpSuccess =>
    createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails }));

export const signUpFailed = withMatcher((error: Error): signUpFailed =>
    createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error));

export const signOutStart = withMatcher((): SignOutStart =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_START)
);

export const signOutSuccess = withMatcher((): SignOutSuccess =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)
);

export const signOutFailed = withMatcher((error: Error): SignOutFailed =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error)
);