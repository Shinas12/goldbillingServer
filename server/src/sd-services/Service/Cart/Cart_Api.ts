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
import * as SSD_SERVICE_ID_sd_v6D77QnOgMYLpYCV from './Cart_Service'; //_splitter_
//append_imports_end
export class Cart_Api {
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
    this.serviceName = 'Cart_Api';
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
      instance = new Cart_Api(
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
      //appendnew_flow_Cart_Api_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: Cart_Api');

    //appendnew_flow_Cart_Api_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: Cart_Api');

    this.app['post'](
      `${this.serviceBasePath}/cart`,
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
          bh = await this.addCart_Call(bh, parentSpanInst);
          //appendnew_next_sd_PLoEMvsKSjiJ5Ptv
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_PLoEMvsKSjiJ5Ptv');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/cart`,
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
          bh = await this.getCartDetails_Call(bh, parentSpanInst);
          //appendnew_next_sd_oEbD6kRMVw6B6tlc
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_oEbD6kRMVw6B6tlc');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/cartTotal`,
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
          bh = await this.getCartTotal_Call(bh, parentSpanInst);
          //appendnew_next_sd_Gldqxg5hX3VluTUs
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Gldqxg5hX3VluTUs');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['put'](
      `${this.serviceBasePath}/cart`,
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
          bh = await this.cartChangeQunty_Call(bh, parentSpanInst);
          //appendnew_next_sd_HrPQOyZvvESkFtey
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_HrPQOyZvvESkFtey');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['delete'](
      `${this.serviceBasePath}/cart`,
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
          bh = await this.sd_qg360wPO47BXSBO8(bh, parentSpanInst);
          //appendnew_next_sd_dxhuVc3wlxyoyLYf
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_dxhuVc3wlxyoyLYf');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_Cart_Api_HttpIn
  }
  //   service flows_Cart_Api

  //appendnew_flow_Cart_Api_start

  async addCart_Call(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'addCart_Call',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_v6D77QnOgMYLpYCVInstance: SSD_SERVICE_ID_sd_v6D77QnOgMYLpYCV.Cart_Service =
        SSD_SERVICE_ID_sd_v6D77QnOgMYLpYCV.Cart_Service.getInstance();
      bh = await SSD_SERVICE_ID_sd_v6D77QnOgMYLpYCVInstance.addCart_Start(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_addCart_Call
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nuPBHeTNaaHuOpDu',
        spanInst,
        'addCart_Call'
      );
    }
  }

  async getCartDetails_Call(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getCartDetails_Call',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_v6D77QnOgMYLpYCVInstance: SSD_SERVICE_ID_sd_v6D77QnOgMYLpYCV.Cart_Service =
        SSD_SERVICE_ID_sd_v6D77QnOgMYLpYCV.Cart_Service.getInstance();
      bh =
        await SSD_SERVICE_ID_sd_v6D77QnOgMYLpYCVInstance.getCartDetails_Start(
          spanInst,
          bh
        );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_getCartDetails_Call
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0FE3BgcTV9ozImQq',
        spanInst,
        'getCartDetails_Call'
      );
    }
  }

  async getCartTotal_Call(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getCartTotal_Call',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_v6D77QnOgMYLpYCVInstance: SSD_SERVICE_ID_sd_v6D77QnOgMYLpYCV.Cart_Service =
        SSD_SERVICE_ID_sd_v6D77QnOgMYLpYCV.Cart_Service.getInstance();
      bh = await SSD_SERVICE_ID_sd_v6D77QnOgMYLpYCVInstance.getTotal_Start(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_getCartTotal_Call
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JOfrHagg4zy4zis9',
        spanInst,
        'getCartTotal_Call'
      );
    }
  }

  async cartChangeQunty_Call(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'cartChangeQunty_Call',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_v6D77QnOgMYLpYCVInstance: SSD_SERVICE_ID_sd_v6D77QnOgMYLpYCV.Cart_Service =
        SSD_SERVICE_ID_sd_v6D77QnOgMYLpYCV.Cart_Service.getInstance();
      bh =
        await SSD_SERVICE_ID_sd_v6D77QnOgMYLpYCVInstance.cartChangeQunty_Start(
          spanInst,
          bh
        );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_cartChangeQunty_Call
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AvvrKWNM6hUMJJUX',
        spanInst,
        'cartChangeQunty_Call'
      );
    }
  }

  async sd_qg360wPO47BXSBO8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qg360wPO47BXSBO8',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_v6D77QnOgMYLpYCVInstance: SSD_SERVICE_ID_sd_v6D77QnOgMYLpYCV.Cart_Service =
        SSD_SERVICE_ID_sd_v6D77QnOgMYLpYCV.Cart_Service.getInstance();
      bh = await SSD_SERVICE_ID_sd_v6D77QnOgMYLpYCVInstance.removeCart_Start(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_qg360wPO47BXSBO8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qg360wPO47BXSBO8',
        spanInst,
        'sd_qg360wPO47BXSBO8'
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
  //appendnew_flow_Cart_Api_Catch
}
