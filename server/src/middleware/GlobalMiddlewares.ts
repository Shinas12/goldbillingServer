//append_imports_start

import * as cors from 'cors'; //_splitter_
import * as expressSession from 'express-session'; //_splitter_
import { MongoConnections } from '../utils/ndefault-mongodb/Mongodb/MongoConnections'; //_splitter_
import * as mongoconnector from 'neutrinos-mongodb-session-store'; //_splitter_
//append_imports_end
export let Middlewares = {
  cors: () => {
    let corsOptions = {
      origin: ['http://localhost:4200'],

      credentials: true,

      preflightContinue: false,
    };
    return cors(corsOptions);
  },
  globalSession: () => {
    let sess: expressSession.SessionOptions = {
      cookie: {
        secure: false,
        httpOnly: true,
        path: '/',
        maxAge: 1000 * 60 * 60 * 60 * 24,
        sameSite: 'lax',
      },

      proxy: false,

      resave: false,

      rolling: false,

      saveUninitialized: false,

      secret: 'djdnicjnc,vmlfkldem493ed',

      unset: 'keep',

      store: new (mongoconnector(expressSession))({
        client: MongoConnections.getInstance().getMongoInstance(
          'sd_rgjA4nOniJAL9Rgn'
        ),
        autoRemove: 'destroy',
      }),
    };
    return expressSession(sess);
  },
  //appendnew_flow
};
