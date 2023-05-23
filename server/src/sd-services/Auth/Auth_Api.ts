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
import * as SSD_SERVICE_ID_sd_FRvfiH6V1AZoTDKz from './Auth_Service'; //_splitter_
import * as SSD_SERVICE_ID_sd_OQYJSSTIEwN2nkED from '../Middlewares/Post_Middlewares'; //_splitter_
//append_imports_end
export class Auth_Api {
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
    this.serviceName = 'Auth_Api';
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
      instance = new Auth_Api(
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
      //appendnew_flow_Auth_Api_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: Auth_Api');

    //appendnew_flow_Auth_Api_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: Auth_Api');

    this.app['post'](
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
          bh = await this.sd_muVofkx9qE69LhSn(bh, parentSpanInst);
          //appendnew_next_sd_RU6mm5FfNmqBRRbb
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_RU6mm5FfNmqBRRbb');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/check`,
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
          bh = await this.sd_jE6vIlotsOCiOWlu(bh, parentSpanInst);
          //appendnew_next_sd_bAOsmsogPKRQEzE2
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_bAOsmsogPKRQEzE2');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/admin/login`,
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
          bh = await this.sd_LrMSBGWaEs7aNxfk(bh, parentSpanInst);
          //appendnew_next_sd_NQD08ComEak6udV4
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_NQD08ComEak6udV4');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/admin`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'ADMIN_AuthroizedAPIS',
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
          bh = await this.sd_mX11gA0gIMyQlWdG(bh, parentSpanInst);
          //appendnew_next_sd_h9omO4bcMw5Uh3bf
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_h9omO4bcMw5Uh3bf');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'ADMIN_AuthroizedAPIS',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/admin/logout`,
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
          bh = await this.sd_LXXNfO10psOAERMf(bh, parentSpanInst);
          //appendnew_next_sd_xj3piElPc09eVW7N
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_xj3piElPc09eVW7N');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
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
          bh = await this.sd_YTLI7lOP48SPOCXc(bh, parentSpanInst);
          //appendnew_next_sd_coFdiyIJq4l3Yj3f
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_coFdiyIJq4l3Yj3f');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_Auth_Api_HttpIn
  }
  //   service flows_Auth_Api

  //appendnew_flow_Auth_Api_start

  async sd_muVofkx9qE69LhSn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_muVofkx9qE69LhSn',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_FRvfiH6V1AZoTDKzInstance: SSD_SERVICE_ID_sd_FRvfiH6V1AZoTDKz.Auth_Service =
        SSD_SERVICE_ID_sd_FRvfiH6V1AZoTDKz.Auth_Service.getInstance();
      bh = await SSD_SERVICE_ID_sd_FRvfiH6V1AZoTDKzInstance.salsman_login_start(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_muVofkx9qE69LhSn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_muVofkx9qE69LhSn',
        spanInst,
        'sd_muVofkx9qE69LhSn'
      );
    }
  }

  async sd_jE6vIlotsOCiOWlu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jE6vIlotsOCiOWlu',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_FRvfiH6V1AZoTDKzInstance: SSD_SERVICE_ID_sd_FRvfiH6V1AZoTDKz.Auth_Service =
        SSD_SERVICE_ID_sd_FRvfiH6V1AZoTDKz.Auth_Service.getInstance();
      bh = await SSD_SERVICE_ID_sd_FRvfiH6V1AZoTDKzInstance.authCheckSession(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_jE6vIlotsOCiOWlu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jE6vIlotsOCiOWlu',
        spanInst,
        'sd_jE6vIlotsOCiOWlu'
      );
    }
  }

  async sd_YLVATfvPzOHPk5to(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YLVATfvPzOHPk5to',
      parentSpanInst
    );
    try {
      console.log(bh.error);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_YLVATfvPzOHPk5to
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YLVATfvPzOHPk5to',
        spanInst,
        'sd_YLVATfvPzOHPk5to'
      );
    }
  }

  async sd_LrMSBGWaEs7aNxfk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LrMSBGWaEs7aNxfk',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_FRvfiH6V1AZoTDKzInstance: SSD_SERVICE_ID_sd_FRvfiH6V1AZoTDKz.Auth_Service =
        SSD_SERVICE_ID_sd_FRvfiH6V1AZoTDKz.Auth_Service.getInstance();
      bh = await SSD_SERVICE_ID_sd_FRvfiH6V1AZoTDKzInstance.admin_login_start(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_LrMSBGWaEs7aNxfk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LrMSBGWaEs7aNxfk',
        spanInst,
        'sd_LrMSBGWaEs7aNxfk'
      );
    }
  }

  async sd_mX11gA0gIMyQlWdG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mX11gA0gIMyQlWdG',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 200,
        message: 'admin verify',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_HBV9aOFyWQdXuzAn(bh, parentSpanInst);
      //appendnew_next_sd_mX11gA0gIMyQlWdG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mX11gA0gIMyQlWdG',
        spanInst,
        'sd_mX11gA0gIMyQlWdG'
      );
    }
  }

  async sd_HBV9aOFyWQdXuzAn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HBV9aOFyWQdXuzAn',
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
      //appendnew_next_sd_HBV9aOFyWQdXuzAn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HBV9aOFyWQdXuzAn',
        spanInst,
        'sd_HBV9aOFyWQdXuzAn'
      );
    }
  }

  async sd_LXXNfO10psOAERMf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LXXNfO10psOAERMf',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_FRvfiH6V1AZoTDKzInstance: SSD_SERVICE_ID_sd_FRvfiH6V1AZoTDKz.Auth_Service =
        SSD_SERVICE_ID_sd_FRvfiH6V1AZoTDKz.Auth_Service.getInstance();
      bh = await SSD_SERVICE_ID_sd_FRvfiH6V1AZoTDKzInstance.admin_logout(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_LXXNfO10psOAERMf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LXXNfO10psOAERMf',
        spanInst,
        'sd_LXXNfO10psOAERMf'
      );
    }
  }

  async sd_YTLI7lOP48SPOCXc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YTLI7lOP48SPOCXc',
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
      bh = await this.sd_4fRDaWNDU2XKwF0q(bh, parentSpanInst);
      //appendnew_next_sd_YTLI7lOP48SPOCXc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YTLI7lOP48SPOCXc',
        spanInst,
        'sd_YTLI7lOP48SPOCXc'
      );
    }
  }

  async sd_4fRDaWNDU2XKwF0q(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4fRDaWNDU2XKwF0q',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 200,
        message: 'successfull logout',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Vp2FOnZ3x38sPB9u(bh, parentSpanInst);
      //appendnew_next_sd_4fRDaWNDU2XKwF0q
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4fRDaWNDU2XKwF0q',
        spanInst,
        'sd_4fRDaWNDU2XKwF0q'
      );
    }
  }

  async sd_Vp2FOnZ3x38sPB9u(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Vp2FOnZ3x38sPB9u',
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
      //appendnew_next_sd_Vp2FOnZ3x38sPB9u
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Vp2FOnZ3x38sPB9u',
        spanInst,
        'sd_Vp2FOnZ3x38sPB9u'
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
      (await this.sd_QMvla9vTCoa7bcbQ(bh, parentSpanInst))
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
  async sd_QMvla9vTCoa7bcbQ(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_YLVATfvPzOHPk5to'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_YLVATfvPzOHPk5to(bh, parentSpanInst);
    //appendnew_next_sd_QMvla9vTCoa7bcbQ
    return true;
  }
  //appendnew_flow_Auth_Api_Catch
}
