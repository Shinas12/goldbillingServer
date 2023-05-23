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
export class User_Service {
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
    this.serviceName = 'User_Service';
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
      instance = new User_Service(
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
      //appendnew_flow_User_Service_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: User_Service');

    //appendnew_flow_User_Service_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: User_Service');
    //appendnew_flow_User_Service_HttpIn
  }
  //   service flows_User_Service

  async addUser_Start(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'addUser_Start',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_9fwUa8mudUK8Pxtz(bh, parentSpanInst);
      //appendnew_next_addUser_Start
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nYzhCI9A8MSWdi84',
        spanInst,
        'addUser_Start'
      );
    }
  }

  async getUser_start(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'getUser_start',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.validate_query_script(bh, parentSpanInst);
      //appendnew_next_getUser_start
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UDBzxtYuhIyRMDmE',
        spanInst,
        'getUser_start'
      );
    }
  }

  //appendnew_flow_User_Service_start

  async sd_9fwUa8mudUK8Pxtz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9fwUa8mudUK8Pxtz',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.user_Schema_validateEntity(bh, parentSpanInst);
      //appendnew_next_sd_9fwUa8mudUK8Pxtz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9fwUa8mudUK8Pxtz',
        spanInst,
        'sd_9fwUa8mudUK8Pxtz'
      );
    }
  }

  async user_Schema_validateEntity(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'user_Schema_validateEntity',
      parentSpanInst
    );
    try {
      validateNode('_EN_yimskkiw6s', bh.input.body, true);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.add_User_Mongodb(bh, parentSpanInst);
      //appendnew_next_user_Schema_validateEntity
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3psYpGaVvHwJUmsS',
        spanInst,
        'user_Schema_validateEntity'
      );
    }
  }

  async add_User_Mongodb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'add_User_Mongodb',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_rgjA4nOniJAL9Rgn',
        process.env.USER_COLLECTION,
        bh.input.body,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.addUser_script(bh, parentSpanInst);
      //appendnew_next_add_User_Mongodb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DV68RWTsryyhWg2g',
        spanInst,
        'add_User_Mongodb'
      );
    }
  }

  async addUser_script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'addUser_script',
      parentSpanInst
    );
    try {
      console.log(bh.local.session);

      bh.local.session = {
        ...bh.local.session.data,
        clientId: bh.result.insertedId,
      };

      bh.local.responces = {
        statusCode: 200,
        User: bh.result,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_JCkTdXS5FkiaEiCg(bh, parentSpanInst);
      //appendnew_next_addUser_script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hBjKuv6Rs8gNGIFW',
        spanInst,
        'addUser_script'
      );
    }
  }

  async sd_JCkTdXS5FkiaEiCg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JCkTdXS5FkiaEiCg',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.session;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_TMcfXjjM0b7QF7O0(bh, parentSpanInst);
      //appendnew_next_sd_JCkTdXS5FkiaEiCg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JCkTdXS5FkiaEiCg',
        spanInst,
        'sd_JCkTdXS5FkiaEiCg'
      );
    }
  }

  async sd_TMcfXjjM0b7QF7O0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TMcfXjjM0b7QF7O0',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session1 = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_5I9lZxSfCKYUK1Z5(bh, parentSpanInst);
      //appendnew_next_sd_TMcfXjjM0b7QF7O0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TMcfXjjM0b7QF7O0',
        spanInst,
        'sd_TMcfXjjM0b7QF7O0'
      );
    }
  }

  async sd_5I9lZxSfCKYUK1Z5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5I9lZxSfCKYUK1Z5',
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
      //appendnew_next_sd_5I9lZxSfCKYUK1Z5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5I9lZxSfCKYUK1Z5',
        spanInst,
        'sd_5I9lZxSfCKYUK1Z5'
      );
    }
  }

  async addUser_catch_script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'addUser_catch_script',
      parentSpanInst
    );
    try {
      if (bh.error?.message) {
        bh.local.responces = {
          statusCode: 404,
          message: bh.error.message,
        };
      } else if (bh.error.error.length > 0) {
        bh.filtererror = bh.error.error.map((err, index) => err.message);

        bh.local.responces = {
          statusCode: 404,
          message: bh.filtererror,
        };
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_5I9lZxSfCKYUK1Z5(bh, parentSpanInst);
      //appendnew_next_addUser_catch_script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dOhe5YhPpbK9HcZV',
        spanInst,
        'addUser_catch_script'
      );
    }
  }

  async validate_query_script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'validate_query_script',
      parentSpanInst
    );
    try {
      if (Object.keys(bh.input.query).length === 0) {
        throw 'Query is not found please provide some filed';
      }
      console.log(bh.input.query);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getUser_Mongodb(bh, parentSpanInst);
      //appendnew_next_validate_query_script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZYfq7pAxqG8NVV1h',
        spanInst,
        'validate_query_script'
      );
    }
  }

  async getUser_Mongodb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getUser_Mongodb',
      parentSpanInst
    );
    try {
      bh.user = await MongoPersistance.getInstance().find(
        'sd_rgjA4nOniJAL9Rgn',
        process.env.USER_COLLECTION,
        bh.input.query,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getUser_result_check_script(bh, parentSpanInst);
      //appendnew_next_getUser_Mongodb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vDA5Bk1Qyp4FrO5x',
        spanInst,
        'getUser_Mongodb'
      );
    }
  }

  async getUser_result_check_script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getUser_result_check_script',
      parentSpanInst
    );
    try {
      if (bh.user[0]?._id) {
        bh.local.responces = {
          statusCode: 200,
          user: bh.user[0],
        };
      } else {
        bh.local.responces = {
          statusCode: 404,
          message: 'This user is not exist Please register as new User',
        };
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_c3B1Zd7HInGllq0z(bh, parentSpanInst);
      //appendnew_next_getUser_result_check_script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LnxIdkUUWIBIq9Tz',
        spanInst,
        'getUser_result_check_script'
      );
    }
  }

  async sd_c3B1Zd7HInGllq0z(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_c3B1Zd7HInGllq0z',
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
      //appendnew_next_sd_c3B1Zd7HInGllq0z
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_c3B1Zd7HInGllq0z',
        spanInst,
        'sd_c3B1Zd7HInGllq0z'
      );
    }
  }

  async getUser_catch_script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getUser_catch_script',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 404,
        message: bh.error,
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_c3B1Zd7HInGllq0z(bh, parentSpanInst);
      //appendnew_next_getUser_catch_script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1s0ObdG0jfoKC5S3',
        spanInst,
        'getUser_catch_script'
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
      (await this.addUser_catch(bh, parentSpanInst)) ||
      (await this.getUser_catch(bh, parentSpanInst))
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
  async addUser_catch(bh, parentSpanInst) {
    const nodes = ['sd_3psYpGaVvHwJUmsS'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.addUser_catch_script(bh, parentSpanInst);
      //appendnew_next_addUser_catch
      return true;
    }
    return false;
  }
  async getUser_catch(bh, parentSpanInst) {
    const nodes = ['sd_vDA5Bk1Qyp4FrO5x', 'sd_ZYfq7pAxqG8NVV1h'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.getUser_catch_script(bh, parentSpanInst);
      //appendnew_next_getUser_catch
      return true;
    }
    return false;
  }
  //appendnew_flow_User_Service_Catch
}
