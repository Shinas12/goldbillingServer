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
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { Middleware } from '../../middleware/Middleware'; //_splitter_
import * as settings from '../../config/config'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import * as SSD_SERVICE_ID_sd_OQYJSSTIEwN2nkED from './Post_Middlewares'; //_splitter_
//append_imports_end
export class Pre_Middlewares {
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
    this.serviceName = 'Pre_Middlewares';
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
      instance = new Pre_Middlewares(
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
      //appendnew_flow_Pre_Middlewares_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: Pre_Middlewares');

    let mw_authorizationUserId: Middleware = new Middleware(
      this.serviceName,
      'authorizationUserId',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_Qlo0lSp1ZCLm1CBZ(bh, parentSpanInst);
          //appendnew_next_sd_4QDCC0rdnEI1cc84
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_4QDCC0rdnEI1cc84');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['authorizationUserId'] =
      mw_authorizationUserId;
    let mw_Admin_authorization: Middleware = new Middleware(
      this.serviceName,
      'Admin_authorization',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.admin_authorization_script(bh, parentSpanInst);
          //appendnew_next_sd_bUjcWAB6mBjCsBYS
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_bUjcWAB6mBjCsBYS');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['Admin_authorization'] =
      mw_Admin_authorization;
    let mw_authorizationClientId: Middleware = new Middleware(
      this.serviceName,
      'authorizationClientId',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_kgYK7pSp79eFFL0S(bh, parentSpanInst);
          //appendnew_next_sd_kmgWgXaSTEeC2Mrn
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_kmgWgXaSTEeC2Mrn');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['authorizationClientId'] =
      mw_authorizationClientId;
    //appendnew_flow_Pre_Middlewares_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: Pre_Middlewares');
    //appendnew_flow_Pre_Middlewares_HttpIn
  }
  //   service flows_Pre_Middlewares

  //appendnew_flow_Pre_Middlewares_start

  async sd_Qlo0lSp1ZCLm1CBZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Qlo0lSp1ZCLm1CBZ',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ve5Lg1V6lPRpg1C4(bh, parentSpanInst);
      //appendnew_next_sd_Qlo0lSp1ZCLm1CBZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Qlo0lSp1ZCLm1CBZ',
        spanInst,
        'sd_Qlo0lSp1ZCLm1CBZ'
      );
    }
  }

  async sd_ve5Lg1V6lPRpg1C4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ve5Lg1V6lPRpg1C4',
      parentSpanInst
    );
    try {
      bh.local.isUserId = false;

      if (bh.local?.session?.data?.userId) {
        bh.local.isUserId = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.checkTokenExistSwitch(bh, parentSpanInst);
      //appendnew_next_sd_ve5Lg1V6lPRpg1C4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ve5Lg1V6lPRpg1C4',
        spanInst,
        'sd_ve5Lg1V6lPRpg1C4'
      );
    }
  }

  async checkTokenExistSwitch(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'checkTokenExistSwitch',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.isUserId,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_QxuWYjQs4CQZiDdc(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isUserId,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_UTNUihwHccUtBFVp(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MCsamAxqYTMDOvXs',
        spanInst,
        'checkTokenExistSwitch'
      );
    }
  }

  async sd_QxuWYjQs4CQZiDdc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QxuWYjQs4CQZiDdc',
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
        'sd_QxuWYjQs4CQZiDdc',
        spanInst,
        'sd_QxuWYjQs4CQZiDdc'
      );
    }
  }

  async sd_UTNUihwHccUtBFVp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UTNUihwHccUtBFVp',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 401,
        result: {
          status: false,
          message: 'UserId Not Found',
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_fpdvMOi5Ym4RDg2I(bh, parentSpanInst);
      //appendnew_next_sd_UTNUihwHccUtBFVp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UTNUihwHccUtBFVp',
        spanInst,
        'sd_UTNUihwHccUtBFVp'
      );
    }
  }

  async sd_fpdvMOi5Ym4RDg2I(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fpdvMOi5Ym4RDg2I',
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
      //appendnew_next_sd_fpdvMOi5Ym4RDg2I
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fpdvMOi5Ym4RDg2I',
        spanInst,
        'sd_fpdvMOi5Ym4RDg2I'
      );
    }
  }

  async admin_authorization_script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'admin_authorization_script',
      parentSpanInst
    );
    try {
      const jwt = require('jsonwebtoken');

      bh.local.adminLogined = false;

      if (!bh.input && !bh.input.cookies && !bh.input.cookies.accessToken) {
        throw 'Tokken is not found';
      }
      const check_accesstoken = await jwt.verify(
        bh.input.cookies.accessToken,
        process.env.JWT_PRIVET_KEY,
        (error, done) => {
          if (error) {
            throw error;
          } else if (done.data === 'adminLogined') {
            bh.local.adminLogined = true;
          } else {
            bh.local.responces = {
              statusCode: 401,
              message: 'salesman logined',
            };
          }
        }
      );

      console.log(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_fWonr7MxQfhm8dnT(bh, parentSpanInst);
      //appendnew_next_admin_authorization_script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_26zazPGuGn9ixcet',
        spanInst,
        'admin_authorization_script'
      );
    }
  }

  async sd_fWonr7MxQfhm8dnT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fWonr7MxQfhm8dnT',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.adminLogined,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_dWUwJUIDsakCpHrF(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.adminLogined,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_GJq6ZLNxblKgkRNy(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fWonr7MxQfhm8dnT',
        spanInst,
        'sd_fWonr7MxQfhm8dnT'
      );
    }
  }

  async sd_dWUwJUIDsakCpHrF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dWUwJUIDsakCpHrF',
      parentSpanInst
    );
    try {
      bh.web.res.set({ type: 'bh', value: '' });

      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dWUwJUIDsakCpHrF',
        spanInst,
        'sd_dWUwJUIDsakCpHrF'
      );
    }
  }

  async sd_GJq6ZLNxblKgkRNy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GJq6ZLNxblKgkRNy',
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
      //appendnew_next_sd_GJq6ZLNxblKgkRNy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GJq6ZLNxblKgkRNy',
        spanInst,
        'sd_GJq6ZLNxblKgkRNy'
      );
    }
  }

  async sd_QAqtMaMLYNQSKHMF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QAqtMaMLYNQSKHMF',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 401,
        message: bh.error.message || bh.error,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_JscSxWvJsLDMFUDY(bh, parentSpanInst);
      //appendnew_next_sd_QAqtMaMLYNQSKHMF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QAqtMaMLYNQSKHMF',
        spanInst,
        'sd_QAqtMaMLYNQSKHMF'
      );
    }
  }

  async sd_JscSxWvJsLDMFUDY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JscSxWvJsLDMFUDY',
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
      //appendnew_next_sd_JscSxWvJsLDMFUDY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JscSxWvJsLDMFUDY',
        spanInst,
        'sd_JscSxWvJsLDMFUDY'
      );
    }
  }

  async sd_kgYK7pSp79eFFL0S(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kgYK7pSp79eFFL0S',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_OGogR1gTxhUyIqX1(bh, parentSpanInst);
      //appendnew_next_sd_kgYK7pSp79eFFL0S
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kgYK7pSp79eFFL0S',
        spanInst,
        'sd_kgYK7pSp79eFFL0S'
      );
    }
  }

  async sd_OGogR1gTxhUyIqX1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OGogR1gTxhUyIqX1',
      parentSpanInst
    );
    try {
      bh.local.isClientId = false;

      if (bh.local?.session?.data?.clientId) {
        bh.local.isClientId = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.checkTokenExistSwitch2(bh, parentSpanInst);
      //appendnew_next_sd_OGogR1gTxhUyIqX1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OGogR1gTxhUyIqX1',
        spanInst,
        'sd_OGogR1gTxhUyIqX1'
      );
    }
  }

  async checkTokenExistSwitch2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'checkTokenExistSwitch2',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.isClientId,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_70izGFLy0Ffu5KqF(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isClientId,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_qz5G4iKi8zydlTYI(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_W57Iy9UVsozNioFo',
        spanInst,
        'checkTokenExistSwitch2'
      );
    }
  }

  async sd_70izGFLy0Ffu5KqF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_70izGFLy0Ffu5KqF',
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
        'sd_70izGFLy0Ffu5KqF',
        spanInst,
        'sd_70izGFLy0Ffu5KqF'
      );
    }
  }

  async sd_qz5G4iKi8zydlTYI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qz5G4iKi8zydlTYI',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 401,
        result: {
          status: false,
          message: 'ClientId Not Found',
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_hMwragA3tpGNK3DV(bh, parentSpanInst);
      //appendnew_next_sd_qz5G4iKi8zydlTYI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qz5G4iKi8zydlTYI',
        spanInst,
        'sd_qz5G4iKi8zydlTYI'
      );
    }
  }

  async sd_hMwragA3tpGNK3DV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hMwragA3tpGNK3DV',
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
      //appendnew_next_sd_hMwragA3tpGNK3DV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hMwragA3tpGNK3DV',
        spanInst,
        'sd_hMwragA3tpGNK3DV'
      );
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
      (await this.sd_y2zLKPnVzM3tnPsI(bh, parentSpanInst))
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
  async sd_y2zLKPnVzM3tnPsI(bh, parentSpanInst) {
    const nodes = [
      'sd_QV81LWmLPXnoc1Pf',
      'sd_bUjcWAB6mBjCsBYS',
      'sd_26zazPGuGn9ixcet',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_QAqtMaMLYNQSKHMF(bh, parentSpanInst);
      //appendnew_next_sd_y2zLKPnVzM3tnPsI
      return true;
    }
    return false;
  }
  //appendnew_flow_Pre_Middlewares_Catch
}
