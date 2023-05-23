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
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { Middleware } from '../../../middleware/Middleware'; //_splitter_
import * as settings from '../../../config/config'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import * as SSD_SERVICE_ID_sd_NhyriMJXPMVob3jo from './Product_Service'; //_splitter_
//append_imports_end
export class Product_Api {
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
    this.serviceName = 'Product_Api';
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
      instance = new Product_Api(
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
      //appendnew_flow_Product_Api_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: Product_Api');

    //appendnew_flow_Product_Api_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: Product_Api');

    this.app['post'](
      `${this.serviceBasePath}/product`,
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
          bh = await this.addProduct_call(bh, parentSpanInst);
          //appendnew_next_sd_0DIMsFYXIQFtuDzV
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_0DIMsFYXIQFtuDzV');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/product`,
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
          bh = await this.sd_ccpTaubKER2NhCmq(bh, parentSpanInst);
          //appendnew_next_sd_o6BZAvbeMZalJMCc
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_o6BZAvbeMZalJMCc');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/product/search`,
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
          bh = await this.productNameSearch_Call(bh, parentSpanInst);
          //appendnew_next_sd_FyslH4YgNvCzB0HH
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_FyslH4YgNvCzB0HH');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/product/all`,
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
          bh = await this.allProduct_Call(bh, parentSpanInst);
          //appendnew_next_sd_AARRXBzElNrx85Mc
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_AARRXBzElNrx85Mc');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_Product_Api_HttpIn
  }
  //   service flows_Product_Api

  //appendnew_flow_Product_Api_start

  async addProduct_call(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'addProduct_call',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_NhyriMJXPMVob3joInstance: SSD_SERVICE_ID_sd_NhyriMJXPMVob3jo.Product_Service =
        SSD_SERVICE_ID_sd_NhyriMJXPMVob3jo.Product_Service.getInstance();
      bh = await SSD_SERVICE_ID_sd_NhyriMJXPMVob3joInstance.addProduct_Start(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_addProduct_call
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_m9utGfc3iHexvzkG',
        spanInst,
        'addProduct_call'
      );
    }
  }

  async sd_ccpTaubKER2NhCmq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ccpTaubKER2NhCmq',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_NhyriMJXPMVob3joInstance: SSD_SERVICE_ID_sd_NhyriMJXPMVob3jo.Product_Service =
        SSD_SERVICE_ID_sd_NhyriMJXPMVob3jo.Product_Service.getInstance();
      bh = await SSD_SERVICE_ID_sd_NhyriMJXPMVob3joInstance.getProduct_start(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_ccpTaubKER2NhCmq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ccpTaubKER2NhCmq',
        spanInst,
        'sd_ccpTaubKER2NhCmq'
      );
    }
  }

  async productNameSearch_Call(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'productNameSearch_Call',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_NhyriMJXPMVob3joInstance: SSD_SERVICE_ID_sd_NhyriMJXPMVob3jo.Product_Service =
        SSD_SERVICE_ID_sd_NhyriMJXPMVob3jo.Product_Service.getInstance();
      bh =
        await SSD_SERVICE_ID_sd_NhyriMJXPMVob3joInstance.productNameSearch_Start(
          spanInst,
          bh
        );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_productNameSearch_Call
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hdJ6towm0nJ7nBrp',
        spanInst,
        'productNameSearch_Call'
      );
    }
  }

  async allProduct_Call(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'allProduct_Call',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_NhyriMJXPMVob3joInstance: SSD_SERVICE_ID_sd_NhyriMJXPMVob3jo.Product_Service =
        SSD_SERVICE_ID_sd_NhyriMJXPMVob3jo.Product_Service.getInstance();
      bh = await SSD_SERVICE_ID_sd_NhyriMJXPMVob3joInstance.allProduct_Start(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_allProduct_Call
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eRi7j0PlEugZiM6z',
        spanInst,
        'allProduct_Call'
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
      false
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
  //appendnew_flow_Product_Api_Catch
}
