import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import {AppRouter} from "./infrastructure/AppRouter";
import {Navigator} from "./infrastructure/Navigator";
import Amplify from "aws-amplify";
import config from "./amplify-config";
import 'mdbreact/dist/css/mdb.css';

Amplify.configure({
    Auth: {
        mandatorySignIn: true,
        region: config.cognito.REGION,
        userPoolId: config.cognito.USER_POOL_ID,
        identityPoolId: config.cognito.IDENTITY_POOL_ID,
        userPoolWebClientId: config.cognito.APP_CLIENT_ID
    },
    API: {
        endpoints: [
            {
                name: "competitions",
                endpoint: config.apiGateway.URL,
                region: config.apiGateway.REGION
            },
        ]
    }
});

ReactDOM.render(
  <HashRouter>
      <AppRouter
          navigator={new Navigator()}
      />
  </HashRouter>,
  document.getElementById('root') as HTMLElement
);
