let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import * as sd_Zjp7u8ludeGig6i7 from './idsutil'; //_splitter_
import { MongoPersistance } from '../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as mongodb from 'mongodb'; //_splitter_
import * as SSD_SERVICE_ID_sd_OQYJSSTIEwN2nkED from './Middlewares/Post_Middlewares'; //_splitter_
//append_imports_end
export class ids {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'ids';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new ids(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_ids_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: ids');

    let mw_hrefstart: Middleware = new Middleware(
      this.serviceName,
      'hrefstart',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_yKbkoygYfygBdvcg(bh, parentSpanInst);
          //appendnew_next_sd_mPBdf03EQ30nteYF
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_mPBdf03EQ30nteYF');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['hrefstart'] = mw_hrefstart;
    let mw_authorize: Middleware = new Middleware(
      this.serviceName,
      'authorize',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_o6JxpFfpo5spdjdc(bh, parentSpanInst);
          //appendnew_next_sd_I9bVXcuGKcj5cxTL
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_I9bVXcuGKcj5cxTL');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['authorize'] = mw_authorize;
    //appendnew_flow_ids_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: ids');

    this.app['get'](
      `${this.serviceBasePath}/login`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_fpJd7sReoZIf9RUa(bh, parentSpanInst);
          //appendnew_next_sd_fykHrmDh4jfYhMEC
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_fykHrmDh4jfYhMEC');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/login/cb`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_N8BlCPYQxTQnvk53(bh, parentSpanInst);
          //appendnew_next_sd_R6mFBJspwSHbebl7
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_R6mFBJspwSHbebl7');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/user/info`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_EM3WhtHkkAI4vZBa(bh, parentSpanInst);
          //appendnew_next_sd_9p3dO8ItOP1Xe9JB
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_9p3dO8ItOP1Xe9JB');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/logout`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_CnKbVfU9kglR60GE(bh, parentSpanInst);
          //appendnew_next_sd_mLZmvYKA0SffFniw
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_mLZmvYKA0SffFniw');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/logout/cb`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_eVkDr20HNRRY6upY(bh, parentSpanInst);
          //appendnew_next_sd_NJQw24aMxH1sqsna
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_NJQw24aMxH1sqsna');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_ids_HttpIn
  }
  //   service flows_ids

  async salsman_login(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'salsman_login',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_zYh4JaE7nXpgqXaP(bh, parentSpanInst);
      //appendnew_next_salsman_login
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_o1VCNXP0TAeD2YOd',
        spanInst,
        'salsman_login'
      );
    }
  }

  //appendnew_flow_ids_start

  async sd_fpJd7sReoZIf9RUa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fpJd7sReoZIf9RUa',
      parentSpanInst
    );
    try {
      bh.local.idsConfigured = false;
      if (
        settings.default.hasOwnProperty('ids') &&
        settings.default['ids'].hasOwnProperty('client_id') &&
        settings.default['ids'].hasOwnProperty('client_secret')
      ) {
        bh.local.idsConfigured = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_A9HHsWl8VRViBIgV(bh, parentSpanInst);
      //appendnew_next_sd_fpJd7sReoZIf9RUa
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fpJd7sReoZIf9RUa',
        spanInst,
        'sd_fpJd7sReoZIf9RUa'
      );
    }
  }

  async sd_A9HHsWl8VRViBIgV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_A9HHsWl8VRViBIgV',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.idsConfigured,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_AA48jen4kd7TRIbd(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_r4jRYGoqXO08Sjxr(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_A9HHsWl8VRViBIgV',
        spanInst,
        'sd_A9HHsWl8VRViBIgV'
      );
    }
  }

  async sd_AA48jen4kd7TRIbd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AA48jen4kd7TRIbd',
      parentSpanInst
    );
    try {
      bh.local.reqParams = {
        state: crypto.randomBytes(16).toString('hex'),
        nonce: crypto.randomBytes(16).toString('hex'),
        isMobile: bh.input.query.isMobile,
        redirectTo: bh.input.query.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_wd4parpTNVuyIa6z(bh, parentSpanInst);
      //appendnew_next_sd_AA48jen4kd7TRIbd
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AA48jen4kd7TRIbd',
        spanInst,
        'sd_AA48jen4kd7TRIbd'
      );
    }
  }

  async sd_wd4parpTNVuyIa6z(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wd4parpTNVuyIa6z',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_OkHEv13AkwFIa0Vr(bh, parentSpanInst);
      //appendnew_next_sd_wd4parpTNVuyIa6z
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wd4parpTNVuyIa6z',
        spanInst,
        'sd_wd4parpTNVuyIa6z'
      );
    }
  }

  async sd_OkHEv13AkwFIa0Vr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OkHEv13AkwFIa0Vr',
      parentSpanInst
    );
    try {
      const sd_Zjp7u8ludeGig6i7Instance: sd_Zjp7u8ludeGig6i7.idsutil =
        sd_Zjp7u8ludeGig6i7.idsutil.getInstance();
      let outputVariables =
        await sd_Zjp7u8ludeGig6i7Instance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_705LJKA59eHpNYuy(bh, parentSpanInst);
      //appendnew_next_sd_OkHEv13AkwFIa0Vr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OkHEv13AkwFIa0Vr',
        spanInst,
        'sd_OkHEv13AkwFIa0Vr'
      );
    }
  }

  async sd_705LJKA59eHpNYuy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_705LJKA59eHpNYuy',
      parentSpanInst
    );
    try {
      const sd_Zjp7u8ludeGig6i7Instance: sd_Zjp7u8ludeGig6i7.idsutil =
        sd_Zjp7u8ludeGig6i7.idsutil.getInstance();
      let outputVariables =
        await sd_Zjp7u8ludeGig6i7Instance.getAuthorizationParams(
          spanInst,
          undefined
        );
      bh.input.authParams = outputVariables.input.authParams;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Xt1b77YpuFklXpoE(bh, parentSpanInst);
      //appendnew_next_sd_705LJKA59eHpNYuy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_705LJKA59eHpNYuy',
        spanInst,
        'sd_705LJKA59eHpNYuy'
      );
    }
  }

  async sd_Xt1b77YpuFklXpoE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Xt1b77YpuFklXpoE',
      parentSpanInst
    );
    try {
      const authorizationRequest = Object.assign(
        {
          redirect_uri: url.resolve(bh.web.req.href, '/api/login/cb'),
          scope: 'openid profile email address phone user',
          state: bh.local.reqParams.state,
          nonce: bh.local.reqParams.nonce,
          response_type: bh.input.client.response_types[0],
        },
        bh.input.authParams
      );

      bh.local.redirectHeaders = {
        location: bh.input.client.authorizationUrl(authorizationRequest),
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_2g4co2RCeBAbFgu4(bh, parentSpanInst);
      //appendnew_next_sd_Xt1b77YpuFklXpoE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Xt1b77YpuFklXpoE',
        spanInst,
        'sd_Xt1b77YpuFklXpoE'
      );
    }
  }

  async sd_2g4co2RCeBAbFgu4(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2g4co2RCeBAbFgu4');
    }
  }

  async sd_r4jRYGoqXO08Sjxr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_r4jRYGoqXO08Sjxr',
      parentSpanInst
    );
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_qKz7TdXPkGiuhMqS(bh, parentSpanInst);
      //appendnew_next_sd_r4jRYGoqXO08Sjxr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_r4jRYGoqXO08Sjxr',
        spanInst,
        'sd_r4jRYGoqXO08Sjxr'
      );
    }
  }

  async sd_qKz7TdXPkGiuhMqS(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qKz7TdXPkGiuhMqS');
    }
  }

  async sd_yKbkoygYfygBdvcg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yKbkoygYfygBdvcg',
      parentSpanInst
    );
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_0BW1cKgp24PVpaUR(bh, parentSpanInst);
      //appendnew_next_sd_yKbkoygYfygBdvcg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yKbkoygYfygBdvcg',
        spanInst,
        'sd_yKbkoygYfygBdvcg'
      );
    }
  }

  async sd_0BW1cKgp24PVpaUR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0BW1cKgp24PVpaUR',
      parentSpanInst
    );
    try {
      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0BW1cKgp24PVpaUR',
        spanInst,
        'sd_0BW1cKgp24PVpaUR'
      );
    }
  }

  async sd_N8BlCPYQxTQnvk53(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_N8BlCPYQxTQnvk53',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.input.sessionParams = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_9aJip5hx1vJRIVmq(bh, parentSpanInst);
      //appendnew_next_sd_N8BlCPYQxTQnvk53
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_N8BlCPYQxTQnvk53',
        spanInst,
        'sd_N8BlCPYQxTQnvk53'
      );
    }
  }

  async sd_9aJip5hx1vJRIVmq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9aJip5hx1vJRIVmq',
      parentSpanInst
    );
    try {
      const sd_Zjp7u8ludeGig6i7Instance: sd_Zjp7u8ludeGig6i7.idsutil =
        sd_Zjp7u8ludeGig6i7.idsutil.getInstance();
      let outputVariables =
        await sd_Zjp7u8ludeGig6i7Instance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_HAZjIh4Y9ASdNJTk(bh, parentSpanInst);
      //appendnew_next_sd_9aJip5hx1vJRIVmq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9aJip5hx1vJRIVmq',
        spanInst,
        'sd_9aJip5hx1vJRIVmq'
      );
    }
  }

  async sd_HAZjIh4Y9ASdNJTk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HAZjIh4Y9ASdNJTk',
      parentSpanInst
    );
    try {
      bh = await this.salsman_login(spanInst, bh);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_HAZjIh4Y9ASdNJTk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HAZjIh4Y9ASdNJTk',
        spanInst,
        'sd_HAZjIh4Y9ASdNJTk'
      );
    }
  }

  async sd_EM3WhtHkkAI4vZBa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EM3WhtHkkAI4vZBa',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_JKQEmZFAZe6kA4Gp(bh, parentSpanInst);
      //appendnew_next_sd_EM3WhtHkkAI4vZBa
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EM3WhtHkkAI4vZBa',
        spanInst,
        'sd_EM3WhtHkkAI4vZBa'
      );
    }
  }

  async sd_JKQEmZFAZe6kA4Gp(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JKQEmZFAZe6kA4Gp');
    }
  }

  async sd_gCVZmuEYb6p755Nu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gCVZmuEYb6p755Nu',
      parentSpanInst
    );
    try {
      console.log(bh.error);

      bh.web.res.redirect('/api/login');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_gCVZmuEYb6p755Nu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gCVZmuEYb6p755Nu',
        spanInst,
        'sd_gCVZmuEYb6p755Nu'
      );
    }
  }

  async sd_CnKbVfU9kglR60GE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CnKbVfU9kglR60GE',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_fqHWGLd5HHUtO7JR(bh, parentSpanInst);
      //appendnew_next_sd_CnKbVfU9kglR60GE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CnKbVfU9kglR60GE',
        spanInst,
        'sd_CnKbVfU9kglR60GE'
      );
    }
  }

  async sd_fqHWGLd5HHUtO7JR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fqHWGLd5HHUtO7JR',
      parentSpanInst
    );
    try {
      bh.local.sessionExists = false;
      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset
      ) {
        bh.local.sessionData['data']['redirectTo'] =
          bh.input.query['redirectTo'];
        bh.local.sessionData['data']['isMobile'] = bh.input.query['isMobile'];
        bh.local.sessionExists = true;
      } else {
        delete bh.local.sessionData['redirectTo'];
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_UshcgYPTtOf292cv(bh, parentSpanInst);
      //appendnew_next_sd_fqHWGLd5HHUtO7JR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fqHWGLd5HHUtO7JR',
        spanInst,
        'sd_fqHWGLd5HHUtO7JR'
      );
    }
  }

  async sd_UshcgYPTtOf292cv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UshcgYPTtOf292cv',
      parentSpanInst
    );
    try {
      const sd_Zjp7u8ludeGig6i7Instance: sd_Zjp7u8ludeGig6i7.idsutil =
        sd_Zjp7u8ludeGig6i7.idsutil.getInstance();
      let outputVariables =
        await sd_Zjp7u8ludeGig6i7Instance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_8Cy4tXyNcCyIVtxu(bh, parentSpanInst);
      //appendnew_next_sd_UshcgYPTtOf292cv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UshcgYPTtOf292cv',
        spanInst,
        'sd_UshcgYPTtOf292cv'
      );
    }
  }

  async sd_8Cy4tXyNcCyIVtxu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8Cy4tXyNcCyIVtxu',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_oAYcRB3ScfbyeFYx(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_EBjA1EgMjrTSN34r(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8Cy4tXyNcCyIVtxu',
        spanInst,
        'sd_8Cy4tXyNcCyIVtxu'
      );
    }
  }

  async sd_oAYcRB3ScfbyeFYx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oAYcRB3ScfbyeFYx',
      parentSpanInst
    );
    try {
      await Promise.all([
        bh.local.sessionData.data.tokenset.access_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.access_token,
              'access_token'
            )
          : undefined,
        bh.local.sessionData.data.tokenset.refresh_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.refresh_token,
              'refresh_token'
            )
          : undefined,
      ]);

      bh.local.res = {
        idsURL: url.format(
          Object.assign(
            url.parse(bh.input.client.issuer.end_session_endpoint),
            {
              search: null,
              query: {
                id_token_hint: bh.local.sessionData.data.tokenset.id_token,
                post_logout_redirect_uri: url.resolve(
                  bh.web.req.href,
                  '/api/logout/cb'
                ),
                client_id: settings.default['ids']['client_id'],
              },
            }
          )
        ),
        sessionExists: true,
      };

      // Remove user info and tokenset before login redirect
      bh.local.sessionData.data.tokenset = null;
      bh.local.sessionData.data.userInfo = null;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dCWCI7Lqpk6tk1KJ(bh, parentSpanInst);
      //appendnew_next_sd_oAYcRB3ScfbyeFYx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oAYcRB3ScfbyeFYx',
        spanInst,
        'sd_oAYcRB3ScfbyeFYx'
      );
    }
  }

  async sd_dCWCI7Lqpk6tk1KJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dCWCI7Lqpk6tk1KJ',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.sessionData.data;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_UK9LUnF8Dti2gE8M(bh, parentSpanInst);
      //appendnew_next_sd_dCWCI7Lqpk6tk1KJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dCWCI7Lqpk6tk1KJ',
        spanInst,
        'sd_dCWCI7Lqpk6tk1KJ'
      );
    }
  }

  async sd_UK9LUnF8Dti2gE8M(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UK9LUnF8Dti2gE8M');
    }
  }

  async sd_EBjA1EgMjrTSN34r(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EBjA1EgMjrTSN34r',
      parentSpanInst
    );
    try {
      bh.local.res = {
        sessionExists: false,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_UK9LUnF8Dti2gE8M(bh, parentSpanInst);
      //appendnew_next_sd_EBjA1EgMjrTSN34r
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EBjA1EgMjrTSN34r',
        spanInst,
        'sd_EBjA1EgMjrTSN34r'
      );
    }
  }

  async sd_eVkDr20HNRRY6upY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_eVkDr20HNRRY6upY',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_a2krK34NmfrBBmL3(bh, parentSpanInst);
      //appendnew_next_sd_eVkDr20HNRRY6upY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eVkDr20HNRRY6upY',
        spanInst,
        'sd_eVkDr20HNRRY6upY'
      );
    }
  }

  async sd_a2krK34NmfrBBmL3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_a2krK34NmfrBBmL3',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_TAnOH8jqYneVAN0l(bh, parentSpanInst);
      //appendnew_next_sd_a2krK34NmfrBBmL3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_a2krK34NmfrBBmL3',
        spanInst,
        'sd_a2krK34NmfrBBmL3'
      );
    }
  }

  async sd_TAnOH8jqYneVAN0l(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TAnOH8jqYneVAN0l',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['se'](
          bh.local.sessionData.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_fa6umyE9VEKoJ0y0(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_PayHse0jroIgL3RA(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TAnOH8jqYneVAN0l',
        spanInst,
        'sd_TAnOH8jqYneVAN0l'
      );
    }
  }

  async sd_fa6umyE9VEKoJ0y0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fa6umyE9VEKoJ0y0',
      parentSpanInst
    );
    try {
      bh.local.res = `<html>
   <script>
      var _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_IvstHIiPun8oiyM2(bh, parentSpanInst);
      //appendnew_next_sd_fa6umyE9VEKoJ0y0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fa6umyE9VEKoJ0y0',
        spanInst,
        'sd_fa6umyE9VEKoJ0y0'
      );
    }
  }

  async sd_IvstHIiPun8oiyM2(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IvstHIiPun8oiyM2');
    }
  }

  async sd_PayHse0jroIgL3RA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PayHse0jroIgL3RA',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_VgV85qweKQvNeJ0O(bh, parentSpanInst);
      //appendnew_next_sd_PayHse0jroIgL3RA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PayHse0jroIgL3RA',
        spanInst,
        'sd_PayHse0jroIgL3RA'
      );
    }
  }

  async sd_VgV85qweKQvNeJ0O(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VgV85qweKQvNeJ0O');
    }
  }

  async sd_YQAr46bGyoS4y4od(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YQAr46bGyoS4y4od',
      parentSpanInst
    );
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_0Kikt17SzsWk2Gjw(bh, parentSpanInst);
      //appendnew_next_sd_YQAr46bGyoS4y4od
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YQAr46bGyoS4y4od',
        spanInst,
        'sd_YQAr46bGyoS4y4od'
      );
    }
  }

  async sd_0Kikt17SzsWk2Gjw(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0Kikt17SzsWk2Gjw');
    }
  }

  async sd_o6JxpFfpo5spdjdc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_o6JxpFfpo5spdjdc',
      parentSpanInst
    );
    try {
      bh.local = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_l7WHEbtuB86BAYBH(bh, parentSpanInst);
      //appendnew_next_sd_o6JxpFfpo5spdjdc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_o6JxpFfpo5spdjdc',
        spanInst,
        'sd_o6JxpFfpo5spdjdc'
      );
    }
  }

  async sd_l7WHEbtuB86BAYBH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_l7WHEbtuB86BAYBH',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_QlA7TJX7Az7AUfqF(bh, parentSpanInst);
      //appendnew_next_sd_l7WHEbtuB86BAYBH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_l7WHEbtuB86BAYBH',
        spanInst,
        'sd_l7WHEbtuB86BAYBH'
      );
    }
  }

  async sd_QlA7TJX7Az7AUfqF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QlA7TJX7Az7AUfqF',
      parentSpanInst
    );
    try {
      bh.local.sessionExists = false;

      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset &&
        bh.local.sessionData.data.tokenset.access_token &&
        bh.local.sessionData.data.tokenset.refresh_token
      ) {
        bh.local.sessionExists = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_kYXRtimH5DkC4nrv(bh, parentSpanInst);
      //appendnew_next_sd_QlA7TJX7Az7AUfqF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QlA7TJX7Az7AUfqF',
        spanInst,
        'sd_QlA7TJX7Az7AUfqF'
      );
    }
  }

  async sd_kYXRtimH5DkC4nrv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kYXRtimH5DkC4nrv',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_4zEgDWU3AOCVVKaR(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_L5JpIxcz0s14yRlP(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kYXRtimH5DkC4nrv',
        spanInst,
        'sd_kYXRtimH5DkC4nrv'
      );
    }
  }

  async sd_4zEgDWU3AOCVVKaR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4zEgDWU3AOCVVKaR',
      parentSpanInst
    );
    try {
      const sd_Zjp7u8ludeGig6i7Instance: sd_Zjp7u8ludeGig6i7.idsutil =
        sd_Zjp7u8ludeGig6i7.idsutil.getInstance();
      let outputVariables = await sd_Zjp7u8ludeGig6i7Instance.handleTokenExpiry(
        spanInst,
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_bA7WsdytUH6QiZdL(bh, parentSpanInst);
      //appendnew_next_sd_4zEgDWU3AOCVVKaR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4zEgDWU3AOCVVKaR',
        spanInst,
        'sd_4zEgDWU3AOCVVKaR'
      );
    }
  }

  async sd_bA7WsdytUH6QiZdL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bA7WsdytUH6QiZdL',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['false'](
          bh.local.newSession,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_wCLO26d1nUoEnOaL(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_sJWLFMwMNfNTFxyV(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bA7WsdytUH6QiZdL',
        spanInst,
        'sd_bA7WsdytUH6QiZdL'
      );
    }
  }

  async sd_wCLO26d1nUoEnOaL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wCLO26d1nUoEnOaL',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_YQAr46bGyoS4y4od(bh, parentSpanInst);
      //appendnew_next_sd_wCLO26d1nUoEnOaL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wCLO26d1nUoEnOaL',
        spanInst,
        'sd_wCLO26d1nUoEnOaL'
      );
    }
  }

  async sd_sJWLFMwMNfNTFxyV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sJWLFMwMNfNTFxyV',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.newSession.rotated,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_rGfn83YDuvJM39sI(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_bfVhmzphMC67yQe6(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sJWLFMwMNfNTFxyV',
        spanInst,
        'sd_sJWLFMwMNfNTFxyV'
      );
    }
  }

  async sd_rGfn83YDuvJM39sI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rGfn83YDuvJM39sI',
      parentSpanInst
    );
    try {
      delete bh.local.newSession.rotated;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_0SRNI6CNvtcevYPX(bh, parentSpanInst);
      //appendnew_next_sd_rGfn83YDuvJM39sI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rGfn83YDuvJM39sI',
        spanInst,
        'sd_rGfn83YDuvJM39sI'
      );
    }
  }

  async sd_0SRNI6CNvtcevYPX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0SRNI6CNvtcevYPX',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_bfVhmzphMC67yQe6(bh, parentSpanInst);
      //appendnew_next_sd_0SRNI6CNvtcevYPX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0SRNI6CNvtcevYPX',
        spanInst,
        'sd_0SRNI6CNvtcevYPX'
      );
    }
  }

  async sd_bfVhmzphMC67yQe6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bfVhmzphMC67yQe6',
      parentSpanInst
    );
    try {
      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bfVhmzphMC67yQe6',
        spanInst,
        'sd_bfVhmzphMC67yQe6'
      );
    }
  }

  async sd_L5JpIxcz0s14yRlP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_L5JpIxcz0s14yRlP',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['cont'](
          bh.input.path,
          '/user/info',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_KzYFAh1s0lnQi8Ze(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_laDVamqyw3AFUXZf(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_L5JpIxcz0s14yRlP',
        spanInst,
        'sd_L5JpIxcz0s14yRlP'
      );
    }
  }

  async sd_KzYFAh1s0lnQi8Ze(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KzYFAh1s0lnQi8Ze',
      parentSpanInst
    );
    try {
      bh.local.res = { message: 'Session expired' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_0Kikt17SzsWk2Gjw(bh, parentSpanInst);
      //appendnew_next_sd_KzYFAh1s0lnQi8Ze
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KzYFAh1s0lnQi8Ze',
        spanInst,
        'sd_KzYFAh1s0lnQi8Ze'
      );
    }
  }

  async sd_laDVamqyw3AFUXZf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_laDVamqyw3AFUXZf',
      parentSpanInst
    );
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_0Kikt17SzsWk2Gjw(bh, parentSpanInst);
      //appendnew_next_sd_laDVamqyw3AFUXZf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_laDVamqyw3AFUXZf',
        spanInst,
        'sd_laDVamqyw3AFUXZf'
      );
    }
  }

  async sd_zYh4JaE7nXpgqXaP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zYh4JaE7nXpgqXaP',
      parentSpanInst
    );
    try {
      const params = bh.input.client.callbackParams(bh.web.req);
      let tokenset = await bh.input.client.callback(
        url.resolve(bh.web.req.href, 'cb'),
        params,
        {
          nonce: bh.input.sessionParams.data.nonce,
          state: bh.input.sessionParams.data.state,
        }
      );

      bh.local.redirectTo = bh.input.sessionParams.data.redirectTo;

      bh.local.userDetails = {
        tokenset: Object.assign({}, tokenset),
        userInfo: await bh.input.client.userinfo(tokenset['access_token']),
      };
      bh.local.userDetails['tokenset']['claims'] = Object.assign(
        {},
        tokenset.claims()
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.findquery_script(bh, parentSpanInst);
      //appendnew_next_sd_zYh4JaE7nXpgqXaP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zYh4JaE7nXpgqXaP',
        spanInst,
        'sd_zYh4JaE7nXpgqXaP'
      );
    }
  }

  async findquery_script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'findquery_script',
      parentSpanInst
    );
    try {
      console.log(bh.local.userDetails.userInfo.username);
      bh.findquery = { email: bh.local.userDetails.userInfo.username };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.check_user_exist(bh, parentSpanInst);
      //appendnew_next_findquery_script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5CLnm3HJl5HfMONk',
        spanInst,
        'findquery_script'
      );
    }
  }

  async check_user_exist(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'check_user_exist',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_rgjA4nOniJAL9Rgn',
        process.env.SALESMAN_COLLECTION,
        bh.findquery,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_KGVobaLshegAr2E6(bh, parentSpanInst);
      //appendnew_next_check_user_exist
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KhCH5qq0LBYfB8Wh',
        spanInst,
        'check_user_exist'
      );
    }
  }

  async sd_KGVobaLshegAr2E6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KGVobaLshegAr2E6',
      parentSpanInst
    );
    try {
      const bcrypt = require('bcrypt');

      bh.unauthorized = false;

      if (bh.local.result.length === 0) {
        bh.local.responces = {
          statusCode: 401,
          message: 'Please provide salsman email and try again',
        };

        bh.unauthorized = true;
      } else {
        bh.local.userDetails.userId = bh.local.result[0]._id;
        bh.local.userDetails.clientId = false;
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_atqSa6aKtF0J1yuY(bh, parentSpanInst);
      //appendnew_next_sd_KGVobaLshegAr2E6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KGVobaLshegAr2E6',
        spanInst,
        'sd_KGVobaLshegAr2E6'
      );
    }
  }

  async sd_atqSa6aKtF0J1yuY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_atqSa6aKtF0J1yuY',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.unauthorized,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.unauthorized_user_Http_out(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.unauthorized,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_o1OsnBtUuk8NdBfJ(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_atqSa6aKtF0J1yuY',
        spanInst,
        'sd_atqSa6aKtF0J1yuY'
      );
    }
  }

  async unauthorized_user_Http_out(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'unauthorized_user_Http_out',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_OQYJSSTIEwN2nkEDInstance: SSD_SERVICE_ID_sd_OQYJSSTIEwN2nkED.Post_Middlewares =
        SSD_SERVICE_ID_sd_OQYJSSTIEwN2nkED.Post_Middlewares.getInstance();
      bh = await SSD_SERVICE_ID_sd_OQYJSSTIEwN2nkEDInstance.httpOut_Start(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_unauthorized_user_Http_out
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mU0CzWtWt3iykWoJ',
        spanInst,
        'unauthorized_user_Http_out'
      );
    }
  }

  async sd_o1OsnBtUuk8NdBfJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_o1OsnBtUuk8NdBfJ',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_JxlCtjj4oQQ4vwVG(bh, parentSpanInst);
      //appendnew_next_sd_o1OsnBtUuk8NdBfJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_o1OsnBtUuk8NdBfJ',
        spanInst,
        'sd_o1OsnBtUuk8NdBfJ'
      );
    }
  }

  async sd_JxlCtjj4oQQ4vwVG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JxlCtjj4oQQ4vwVG',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['se'](
          bh.input.sessionParams.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_JIKC7Ft5ud3cE5U9(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_cmCEr6RA8oVg7Psj(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JxlCtjj4oQQ4vwVG',
        spanInst,
        'sd_JxlCtjj4oQQ4vwVG'
      );
    }
  }

  async sd_JIKC7Ft5ud3cE5U9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JIKC7Ft5ud3cE5U9',
      parentSpanInst
    );
    try {
      bh.local.htmlResponse = `
 <html>
   <script>
      let _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_0SQEM44TE4cG0roK(bh, parentSpanInst);
      //appendnew_next_sd_JIKC7Ft5ud3cE5U9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JIKC7Ft5ud3cE5U9',
        spanInst,
        'sd_JIKC7Ft5ud3cE5U9'
      );
    }
  }

  async sd_0SQEM44TE4cG0roK(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0SQEM44TE4cG0roK');
    }
  }

  async sd_cmCEr6RA8oVg7Psj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cmCEr6RA8oVg7Psj',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_tk57ZpG0wWNy9uCI(bh, parentSpanInst);
      //appendnew_next_sd_cmCEr6RA8oVg7Psj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cmCEr6RA8oVg7Psj',
        spanInst,
        'sd_cmCEr6RA8oVg7Psj'
      );
    }
  }

  async sd_tk57ZpG0wWNy9uCI(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tk57ZpG0wWNy9uCI');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src, parentSpanInst?, functionName?) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (
      false ||
      (await this.sd_Vxfj6g3j4OLrT8GM(bh, parentSpanInst)) ||
      (await this.sd_WQFVawyWcUyc9fdy(bh, parentSpanInst))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async sd_Vxfj6g3j4OLrT8GM(bh, parentSpanInst) {
    const nodes = [
      'sd_705LJKA59eHpNYuy',
      'sd_R6mFBJspwSHbebl7',
      'sd_9aJip5hx1vJRIVmq',
      'sd_os7RMwwj6ivCBu66',
      'sd_N8BlCPYQxTQnvk53',
      'sd_JxlCtjj4oQQ4vwVG',
      'sd_JIKC7Ft5ud3cE5U9',
      'sd_cmCEr6RA8oVg7Psj',
      'sd_0SQEM44TE4cG0roK',
      'sd_tk57ZpG0wWNy9uCI',
      'sd_aZPvPUTWP2hAxjRu',
      'sd_KhCH5qq0LBYfB8Wh',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_gCVZmuEYb6p755Nu(bh, parentSpanInst);
      //appendnew_next_sd_Vxfj6g3j4OLrT8GM
      return true;
    }
    return false;
  }
  async sd_WQFVawyWcUyc9fdy(bh, parentSpanInst) {
    const nodes = ['sd_UKm6JAMDpbBKGd7R'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_YQAr46bGyoS4y4od(bh, parentSpanInst);
      //appendnew_next_sd_WQFVawyWcUyc9fdy
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
