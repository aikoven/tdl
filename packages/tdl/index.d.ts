// AUTOGENERATED

import {
  Update as Td$Update,
  error as Td$error,
  Invoke,
  Execute,
  tdlibParameters$Input
} from 'tdlib-types'

import { TDLibClient, ITDLibJSON } from 'tdl-shared'

export { TDLibClient, ITDLibJSON }

export type TDLibParameters = Omit<tdlibParameters$Input, '_'>

export class TdlError extends Error {
  readonly err: any;
}

export type On =
  & ((event: 'update', listener: (update: Td$Update) => void) => Client)
  & ((event: 'error', listener: (err: Td$error | TdlError) => void) => Client)
  & ((event: 'destroy', listener: () => void) => Client)
  & ((event: 'auth-needed', listener: () => void) => Client)
  & ((event: 'auth-not-needed', listener: () => void) => Client)
  & ((event: 'response', listener: (res: any) => void) => Client)

export type Emit =
  & ((event: 'update', update: Td$Update) => void)
  & ((event: 'error', err: Td$error | TdlError) => void)
  & ((event: 'destroy') => void)
  & ((event: 'auth-needed') => void)
  & ((event: 'auth-not-needed') => void)
  & ((event: 'response', res: any) => void)

export type Off =
  & ((event: 'update', listener: (...args: any[]) => any, once?: boolean) => void)
  & ((event: 'error', listener: (...args: any[]) => any, once?: boolean) => void)
  & ((event: 'destroy', listener: (...args: any[]) => any, once?: boolean) => void)
  & ((event: 'auth-needed', listener: (...args: any[]) => any, once?: boolean) => void)
  & ((event: 'auth-not-needed', listener: (...args: any[]) => any, once?: boolean) => void)
  & ((event: 'response', listener: (...args: any[]) => any, once?: boolean) => void)

export class Client {
  constructor(tdlibInstance: ITDLibJSON, options?: ConfigType);
  static create(tdlibInstance: ITDLibJSON, options?: ConfigType): Client;
  getBackendName: () => string;
  /** Get the TDLib version in the `major.minor.patch` format. This can throw an
    * exception if the version is not (yet) available. */
  getVersion: () => string;
  connect: () => Promise<void>;
  login: (getLoginDetails?: () => LoginDetails) => Promise<void>;
  connectAndLogin: (getLoginDetails?: () => LoginDetails) => Promise<void>;
  /** @deprecated unstable */
  pause: () => void;
  /** @deprecated unstable */
  resume: () => void;
  on: On;
  once: On;
  off: Off;
  addListener: On;
  removeListener: Off;
  emit: Emit;
  invoke: Invoke;
  /** Warning: for most use cases you should use client.close() instead of client.destroy() */
  destroy: () => void;
  close: () => Promise<void>;
  /** @deprecated */
  setLogFatalErrorCallback: (fn: null | ((errorMessage: string) => void)) => void;
  execute: Execute;
}

export {
  Client as TDL,
  Client as Tdl
}

export default Client

// ---

export type LoginUser = {
  type: 'user',
  getPhoneNumber: (retry?: boolean) => Promise<string>,
  getEmailAddress: () => Promise<string>,
  getEmailCode: () => Promise<string>,
  confirmOnAnotherDevice: (link: string) => void,
  getAuthCode: (retry?: boolean) => Promise<string>,
  getPassword: (passwordHint: string, retry?: boolean) => Promise<string>,
  getName: () => Promise<{ firstName: string, lastName?: string }>
}

export type LoginBot = {
  type: 'bot',
  getToken: (retry?: boolean) => Promise<string>
}

export type LoginDetails = Partial<LoginUser> | LoginBot
export type StrictLoginDetails = LoginUser | LoginBot

export type ConfigType = Partial<StrictConfigType>

export type StrictConfigType = {
  apiId?: number,
  apiHash?: string,
  databaseDirectory: string,
  filesDirectory: string,
  databaseEncryptionKey: string,
  verbosityLevel: number,
  receiveTimeout: number,
  skipOldUpdates: boolean,
  useTestDc: boolean,
  useMutableRename: boolean,
  useDefaultVerbosityLevel: boolean,
  disableAuth: boolean,
  tdlibParameters: TDLibParameters
}
