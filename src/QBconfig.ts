/*
const configApp = {
    APPLICATION_ID: 75949,+
    AUTH_KEY: "DdS7zxMEm5Q7DaS",
    AUTH_SECRET: "g88RhdOjnDOqFkv",+
    ACCOUNT_KEY: "uK_8uinNyz8-npTNB6tx",+
};
 */
export const QBConfig = {
  credentials: {
    appId: 0,
    accountKey: '',
    authKey: '',
    authSecret: '',
    sessionToken: '',
  },
  appConfig: {
    maxFileSize: 90 * 1000000,
    chatProtocol: {
      active: 2,
    },
    debug: {
      mode: 0,
      file: null,
    },
    endpoints: {
      api: 'api.quickblox.com',
      chat: 'chat.quickblox.com',
    },
    on: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/require-await
      async sessionExpired(handleResponse: any, retry: any) {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        console.log(`Test sessionExpired....${handleResponse} ${retry}`);
      },
    },
    streamManagement: {
      enable: true,
    },
  },
};
