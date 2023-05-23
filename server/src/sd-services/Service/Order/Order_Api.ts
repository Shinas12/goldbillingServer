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
import * as SSD_SERVICE_ID_sd_0Ko3DUkd1DwZloeF from './Order_Service'; //_splitter_
//append_imports_end
export class Order_Api {
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
    this.serviceName = 'Order_Api';
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
      instance = new Order_Api(
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
      //appendnew_flow_Order_Api_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: Order_Api');

    //appendnew_flow_Order_Api_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: Order_Api');

    this.app['post'](
      `${this.serviceBasePath}/ordder`,
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
          bh = await this.placeOdde_call(bh, parentSpanInst);
          //appendnew_next_sd_fwSPENAUCV1BkRv1
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_fwSPENAUCV1BkRv1');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/order`,
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
          bh = await this.allOrder_Call(bh, parentSpanInst);
          //appendnew_next_sd_CMtt6Hy2NSzovmaT
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_CMtt6Hy2NSzovmaT');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/order/:id`,
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
          bh = await this.fullOrderDetails_Call(bh, parentSpanInst);
          //appendnew_next_sd_FDwzSNDDZgUoZV61
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_FDwzSNDDZgUoZV61');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/order/sales/salesman`,
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
          bh = await this.sd_C4wfqt5Q95ha0aZM(bh, parentSpanInst);
          //appendnew_next_sd_87i4lMYq6Lml0sAt
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_87i4lMYq6Lml0sAt');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/razorpay/callback`,
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
          bh = await this.sd_cBmMsvUooKFs2B0f(bh, parentSpanInst);
          //appendnew_next_sd_9hQ76JnG9bexckIg
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_9hQ76JnG9bexckIg');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/salesMan/order/all`,
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
          bh = await this.sd_SkfqE0buH6B9sUBE(bh, parentSpanInst);
          //appendnew_next_sd_Gvco3PTa4J4wGVda
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Gvco3PTa4J4wGVda');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_Order_Api_HttpIn
  }
  //   service flows_Order_Api

  //appendnew_flow_Order_Api_start

  async placeOdde_call(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'placeOdde_call',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_0Ko3DUkd1DwZloeFInstance: SSD_SERVICE_ID_sd_0Ko3DUkd1DwZloeF.Order_Service =
        SSD_SERVICE_ID_sd_0Ko3DUkd1DwZloeF.Order_Service.getInstance();
      bh = await SSD_SERVICE_ID_sd_0Ko3DUkd1DwZloeFInstance.placeOrder_Start(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_placeOdde_call
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_g5th6UuCQPGN9iSW',
        spanInst,
        'placeOdde_call'
      );
    }
  }

  async allOrder_Call(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'allOrder_Call',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_0Ko3DUkd1DwZloeFInstance: SSD_SERVICE_ID_sd_0Ko3DUkd1DwZloeF.Order_Service =
        SSD_SERVICE_ID_sd_0Ko3DUkd1DwZloeF.Order_Service.getInstance();
      bh = await SSD_SERVICE_ID_sd_0Ko3DUkd1DwZloeFInstance.allOrder_Start(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_allOrder_Call
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_s83d0y0R3KgRBw67',
        spanInst,
        'allOrder_Call'
      );
    }
  }

  async fullOrderDetails_Call(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'fullOrderDetails_Call',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_0Ko3DUkd1DwZloeFInstance: SSD_SERVICE_ID_sd_0Ko3DUkd1DwZloeF.Order_Service =
        SSD_SERVICE_ID_sd_0Ko3DUkd1DwZloeF.Order_Service.getInstance();
      bh =
        await SSD_SERVICE_ID_sd_0Ko3DUkd1DwZloeFInstance.fullOrderDetails_Start(
          spanInst,
          bh
        );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_fullOrderDetails_Call
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tlLY0NWcoTGnlXk7',
        spanInst,
        'fullOrderDetails_Call'
      );
    }
  }

  async sd_C4wfqt5Q95ha0aZM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_C4wfqt5Q95ha0aZM',
      parentSpanInst
    );
    try {
      console.log('??????????????????????????????????');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.salesManOrder_Call(bh, parentSpanInst);
      //appendnew_next_sd_C4wfqt5Q95ha0aZM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_C4wfqt5Q95ha0aZM',
        spanInst,
        'sd_C4wfqt5Q95ha0aZM'
      );
    }
  }

  async salesManOrder_Call(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'salesManOrder_Call',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_0Ko3DUkd1DwZloeFInstance: SSD_SERVICE_ID_sd_0Ko3DUkd1DwZloeF.Order_Service =
        SSD_SERVICE_ID_sd_0Ko3DUkd1DwZloeF.Order_Service.getInstance();
      bh = await SSD_SERVICE_ID_sd_0Ko3DUkd1DwZloeFInstance.salesManOrder_Start(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_salesManOrder_Call
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZkzS3VFJcWMsSM5C',
        spanInst,
        'salesManOrder_Call'
      );
    }
  }

  async sd_cBmMsvUooKFs2B0f(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cBmMsvUooKFs2B0f',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_0Ko3DUkd1DwZloeFInstance: SSD_SERVICE_ID_sd_0Ko3DUkd1DwZloeF.Order_Service =
        SSD_SERVICE_ID_sd_0Ko3DUkd1DwZloeF.Order_Service.getInstance();
      bh =
        await SSD_SERVICE_ID_sd_0Ko3DUkd1DwZloeFInstance.razorpay_callback_start(
          spanInst,
          bh
        );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_cBmMsvUooKFs2B0f
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cBmMsvUooKFs2B0f',
        spanInst,
        'sd_cBmMsvUooKFs2B0f'
      );
    }
  }

  async sd_SkfqE0buH6B9sUBE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SkfqE0buH6B9sUBE',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_0Ko3DUkd1DwZloeFInstance: SSD_SERVICE_ID_sd_0Ko3DUkd1DwZloeF.Order_Service =
        SSD_SERVICE_ID_sd_0Ko3DUkd1DwZloeF.Order_Service.getInstance();
      bh =
        await SSD_SERVICE_ID_sd_0Ko3DUkd1DwZloeFInstance.fullOrderDetailsBySId_Start(
          spanInst,
          bh
        );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_SkfqE0buH6B9sUBE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SkfqE0buH6B9sUBE',
        spanInst,
        'sd_SkfqE0buH6B9sUBE'
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
  //appendnew_flow_Order_Api_Catch
}
