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
import { validateNode } from '../../../utils/ndefault-datamodel/find/validateUtil'; //_splitter_
import { MongoPersistance } from '../../../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as mongodb from 'mongodb'; //_splitter_
import * as SSD_SERVICE_ID_sd_OQYJSSTIEwN2nkED from '../../Middlewares/Post_Middlewares'; //_splitter_
//append_imports_end
export class Salesman_Service {
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
    this.serviceName = 'Salesman_Service';
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
      instance = new Salesman_Service(
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
      //appendnew_flow_Salesman_Service_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: Salesman_Service');

    //appendnew_flow_Salesman_Service_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: Salesman_Service');
    //appendnew_flow_Salesman_Service_HttpIn
  }
  //   service flows_Salesman_Service

  async addSalesman_Start(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'addSalesman_Start',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.salesman_Validate(bh, parentSpanInst);
      //appendnew_next_addSalesman_Start
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7xkOtcdYnAM7jsq7',
        spanInst,
        'addSalesman_Start'
      );
    }
  }

  //appendnew_flow_Salesman_Service_start

  async salesman_Validate(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'salesman_Validate',
      parentSpanInst
    );
    try {
      validateNode('_EN_q2wasl4tdd', bh.input.body, true);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.qurery(bh, parentSpanInst);
      //appendnew_next_salesman_Validate
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_z0ZMejkRtwnVing8',
        spanInst,
        'salesman_Validate'
      );
    }
  }

  async qurery(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('qurery', parentSpanInst);
    try {
      const bcrypt = require('bcrypt');

      bh.input.body.password = await bcrypt.hash(bh.input.body.password, 10);

      bh.local.qurery = {
        $or: [{ email: bh.input.body.email }, { phone: bh.input.body.phone }],
      };
      bh.input.body.block = false;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getSalesman_Mongodb(bh, parentSpanInst);
      //appendnew_next_qurery
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4s1JLXiefqCQhyO9',
        spanInst,
        'qurery'
      );
    }
  }

  async getSalesman_Mongodb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getSalesman_Mongodb',
      parentSpanInst
    );
    try {
      bh.local.Salesman = await MongoPersistance.getInstance().find(
        'sd_rgjA4nOniJAL9Rgn',
        process.env.SALESMAN_COLLECTION,
        bh.local.qurery,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.salesman_Exist(bh, parentSpanInst);
      //appendnew_next_getSalesman_Mongodb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_erRyUudqETOYwFvj',
        spanInst,
        'getSalesman_Mongodb'
      );
    }
  }

  async salesman_Exist(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'salesman_Exist',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['empty'](
          bh.local.Salesman,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.addSalesman_Mongodb(bh, parentSpanInst);
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
        bh = await this.salesman_Existing_Script(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eQvUFhAN1zRm2Jqx',
        spanInst,
        'salesman_Exist'
      );
    }
  }

  async addSalesman_Mongodb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'addSalesman_Mongodb',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().insertOne(
        'sd_rgjA4nOniJAL9Rgn',
        process.env.SALESMAN_COLLECTION,
        bh.input.body,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.addSalesman_Script(bh, parentSpanInst);
      //appendnew_next_addSalesman_Mongodb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xCbvd7njrGG5NWLn',
        spanInst,
        'addSalesman_Mongodb'
      );
    }
  }

  async addSalesman_Script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'addSalesman_Script',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 200,
        result: {
          message: 'Registration completed successfully',
          id: bh.local.result.insertedId,
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpOut_Call(bh, parentSpanInst);
      //appendnew_next_addSalesman_Script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WMwk4yH2j9wjWGRa',
        spanInst,
        'addSalesman_Script'
      );
    }
  }

  async httpOut_Call(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'httpOut_Call',
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
      //appendnew_next_httpOut_Call
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_N4s4ppFfFPfXI7iB',
        spanInst,
        'httpOut_Call'
      );
    }
  }

  async salesman_Existing_Script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'salesman_Existing_Script',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 404,
        result: {
          status: false,
          message: 'Existing user. ',
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpOut_Call(bh, parentSpanInst);
      //appendnew_next_salesman_Existing_Script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_a3V3fJbx9SPn0pTG',
        spanInst,
        'salesman_Existing_Script'
      );
    }
  }

  async catch_Script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'catch_Script',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 404,
        message: bh.error.message,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.httpOut_Call(bh, parentSpanInst);
      //appendnew_next_catch_Script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GGqiMLNPglTMd0WD',
        spanInst,
        'catch_Script'
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
      (await this.catch_Node(bh, parentSpanInst))
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
  async catch_Node(bh, parentSpanInst) {
    const nodes = [
      'sd_7xkOtcdYnAM7jsq7',
      'sd_xCbvd7njrGG5NWLn',
      'sd_WMwk4yH2j9wjWGRa',
      'sd_4s1JLXiefqCQhyO9',
      'sd_erRyUudqETOYwFvj',
      'sd_z0ZMejkRtwnVing8',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.catch_Script(bh, parentSpanInst);
      //appendnew_next_catch_Node
      return true;
    }
    return false;
  }
  //appendnew_flow_Salesman_Service_Catch
}
