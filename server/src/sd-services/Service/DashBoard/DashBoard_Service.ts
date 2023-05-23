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
import { MongoPersistance } from '../../../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as mongodb from 'mongodb'; //_splitter_
import * as SSD_SERVICE_ID_sd_OQYJSSTIEwN2nkED from '../../Middlewares/Post_Middlewares'; //_splitter_
//append_imports_end
export class DashBoard_Service {
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
    this.serviceName = 'DashBoard_Service';
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
      instance = new DashBoard_Service(
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
      //appendnew_flow_DashBoard_Service_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: DashBoard_Service');

    //appendnew_flow_DashBoard_Service_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: DashBoard_Service');
    //appendnew_flow_DashBoard_Service_HttpIn
  }
  //   service flows_DashBoard_Service

  async salesMan_DashBoard_Start(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'salesMan_DashBoard_Start',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_73Rfz1ffRlOwrR9I(bh, parentSpanInst);
      //appendnew_next_salesMan_DashBoard_Start
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_93tVkzJOtOJliNnl',
        spanInst,
        'salesMan_DashBoard_Start'
      );
    }
  }

  //appendnew_flow_DashBoard_Service_start

  async sd_73Rfz1ffRlOwrR9I(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_73Rfz1ffRlOwrR9I',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.salesMan_DashBoard_Scrit(bh, parentSpanInst);
      //appendnew_next_sd_73Rfz1ffRlOwrR9I
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_73Rfz1ffRlOwrR9I',
        spanInst,
        'sd_73Rfz1ffRlOwrR9I'
      );
    }
  }

  async salesMan_DashBoard_Scrit(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'salesMan_DashBoard_Scrit',
      parentSpanInst
    );
    try {
      console.log(bh.local.session.data.clientId);
      const { ObjectId } = require('mongodb');
      bh.local.pipeline = [
        { $match: { salesManId: ObjectId(bh.local.session.data.clientId) } },
        {
          $group: {
            _id: '$status',
            count: { $sum: 1 },
          },
        },
      ];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.salesMan_DashBoard_Mongo(bh, parentSpanInst);
      //appendnew_next_salesMan_DashBoard_Scrit
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xnxFjQ5W6wTwnv4E',
        spanInst,
        'salesMan_DashBoard_Scrit'
      );
    }
  }

  async salesMan_DashBoard_Mongo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'salesMan_DashBoard_Mongo',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().aggregate(
        'sd_rgjA4nOniJAL9Rgn',
        process.env.ORDER_COLLECTION,
        bh.local.pipeline,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.salesMan_DashBoard_Response_Script(bh, parentSpanInst);
      //appendnew_next_salesMan_DashBoard_Mongo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_e42NYHHQcF9pVERZ',
        spanInst,
        'salesMan_DashBoard_Mongo'
      );
    }
  }

  async salesMan_DashBoard_Response_Script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'salesMan_DashBoard_Response_Script',
      parentSpanInst
    );
    try {
      // bh.local.output={
      //     Pending:bh.local
      // }

      bh.local.responces = {
        statusCode: 200,
        result: {
          DashBoard: bh.local.result,
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.salesMan_DashBoard_HttpOut(bh, parentSpanInst);
      //appendnew_next_salesMan_DashBoard_Response_Script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ScOnffFLtfE1zdxR',
        spanInst,
        'salesMan_DashBoard_Response_Script'
      );
    }
  }

  async salesMan_DashBoard_HttpOut(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'salesMan_DashBoard_HttpOut',
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
      //appendnew_next_salesMan_DashBoard_HttpOut
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_s90qbLdWDtYC9V9z',
        spanInst,
        'salesMan_DashBoard_HttpOut'
      );
    }
  }

  async salesMan_DashBoard_Error_Response(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'salesMan_DashBoard_Error_Response',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 404,
        message: bh.error.message,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.salesMan_DashBoard_HttpOut(bh, parentSpanInst);
      //appendnew_next_salesMan_DashBoard_Error_Response
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4QG9Td2WlVh9OtVL',
        spanInst,
        'salesMan_DashBoard_Error_Response'
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
      (await this.salesMan_DashBoard_Catch(bh, parentSpanInst))
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
  async salesMan_DashBoard_Catch(bh, parentSpanInst) {
    const nodes = [
      'sd_93tVkzJOtOJliNnl',
      'sd_xnxFjQ5W6wTwnv4E',
      'sd_ScOnffFLtfE1zdxR',
      'sd_e42NYHHQcF9pVERZ',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.salesMan_DashBoard_Error_Response(bh, parentSpanInst);
      //appendnew_next_salesMan_DashBoard_Catch
      return true;
    }
    return false;
  }
  //appendnew_flow_DashBoard_Service_Catch
}
