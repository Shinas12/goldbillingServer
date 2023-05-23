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
import * as safeStringify from 'fast-safe-stringify'; //_splitter_
//append_imports_end
export class Product_Service {
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
    this.serviceName = 'Product_Service';
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
      instance = new Product_Service(
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
      //appendnew_flow_Product_Service_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: Product_Service');

    //appendnew_flow_Product_Service_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: Product_Service');
    //appendnew_flow_Product_Service_HttpIn
  }
  //   service flows_Product_Service

  async addProduct_Start(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'addProduct_Start',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.product_Validation(bh, parentSpanInst);
      this.sd_NMhVbGJsi8QhC1oJ(bh, parentSpanInst);
      //appendnew_next_addProduct_Start
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7CRGTCYHhXUEL41V',
        spanInst,
        'addProduct_Start'
      );
    }
  }

  async getProduct_start(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'getProduct_start',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getproduct_query_script(bh, parentSpanInst);
      //appendnew_next_getProduct_start
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eul4V8JXk5s1Mh7B',
        spanInst,
        'getProduct_start'
      );
    }
  }

  async productNameSearch_Start(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'productNameSearch_Start',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.productNameSearch_Script(bh, parentSpanInst);
      //appendnew_next_productNameSearch_Start
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pSk5A5O392e6OUtX',
        spanInst,
        'productNameSearch_Start'
      );
    }
  }

  async allProduct_Start(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'allProduct_Start',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.allProduct_Mongodb(bh, parentSpanInst);
      //appendnew_next_allProduct_Start
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EIYvBUrFxBrUrHUf',
        spanInst,
        'allProduct_Start'
      );
    }
  }

  //appendnew_flow_Product_Service_start

  async product_Validation(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'product_Validation',
      parentSpanInst
    );
    try {
      validateNode('_EN_vwyalqhzqt', bh.input.body, true);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.addProduct_Mongodb(bh, parentSpanInst);
      //appendnew_next_product_Validation
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Yh6eKzRHGjwWyl1W',
        spanInst,
        'product_Validation'
      );
    }
  }

  async addProduct_Mongodb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'addProduct_Mongodb',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().insertOne(
        'sd_rgjA4nOniJAL9Rgn',
        process.env.PRODUCT_COLLECTION,
        bh.input.body,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.addProduct_Script(bh, parentSpanInst);
      //appendnew_next_addProduct_Mongodb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PnUUxGHsHdeHdR46',
        spanInst,
        'addProduct_Mongodb'
      );
    }
  }

  async addProduct_Script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'addProduct_Script',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 200,
        result: {
          id: bh.local.result.insertedId,
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.addProduct_HttpOut_Callservice(bh, parentSpanInst);
      //appendnew_next_addProduct_Script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZtoA4FSTB4sLKKfS',
        spanInst,
        'addProduct_Script'
      );
    }
  }

  async addProduct_HttpOut_Callservice(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'addProduct_HttpOut_Callservice',
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
      //appendnew_next_addProduct_HttpOut_Callservice
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QYRrOAtngBuJl79k',
        spanInst,
        'addProduct_HttpOut_Callservice'
      );
    }
  }

  async sd_NMhVbGJsi8QhC1oJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NMhVbGJsi8QhC1oJ',
      parentSpanInst
    );
    try {
      let logobj: any = bh.input.body.image;
      if (logobj instanceof Error) {
        log.info(logobj);
      } else {
        log.info(safeStringify.default(logobj));
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_NMhVbGJsi8QhC1oJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NMhVbGJsi8QhC1oJ',
        spanInst,
        'sd_NMhVbGJsi8QhC1oJ'
      );
    }
  }

  async addProduct_Catch_Script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'addProduct_Catch_Script',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 404,
        message: bh.error.message,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.addProduct_HttpOut_Callservice(bh, parentSpanInst);
      //appendnew_next_addProduct_Catch_Script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KE6ocgzyWYMXyjTe',
        spanInst,
        'addProduct_Catch_Script'
      );
    }
  }

  async getproduct_query_script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getproduct_query_script',
      parentSpanInst
    );
    try {
      let ObjectID = require('mongodb').ObjectID;

      if (bh.input.query?.id) {
        bh.findquery = { _id: ObjectID(bh.input.query) };
      } else {
        throw Error('document id is not found Please provide a _id');
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getproduct_Mongodb(bh, parentSpanInst);
      //appendnew_next_getproduct_query_script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pd0A9nH566tjRqYq',
        spanInst,
        'getproduct_query_script'
      );
    }
  }

  async getproduct_Mongodb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getproduct_Mongodb',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().find(
        'sd_rgjA4nOniJAL9Rgn',
        process.env.PRODUCT_COLLECTION,
        bh.findquery,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getproduct_response_script(bh, parentSpanInst);
      //appendnew_next_getproduct_Mongodb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_C7JDb75KMY1KZtwp',
        spanInst,
        'getproduct_Mongodb'
      );
    }
  }

  async getproduct_response_script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getproduct_response_script',
      parentSpanInst
    );
    try {
      if (bh.result.length === 0) {
        bh.local.responces = {
          statusCode: 404,
          message: 'This _id is not exist in database',
        };
      } else {
        bh.local.responces = {
          statusCode: 200,
          product: bh.result[0],
        };
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getProduct_HttpOut_Callservice(bh, parentSpanInst);
      //appendnew_next_getproduct_response_script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yWb7eHCnNjp8mZUV',
        spanInst,
        'getproduct_response_script'
      );
    }
  }

  async getProduct_HttpOut_Callservice(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getProduct_HttpOut_Callservice',
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
      //appendnew_next_getProduct_HttpOut_Callservice
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HRJAoE1RNohBeepr',
        spanInst,
        'getProduct_HttpOut_Callservice'
      );
    }
  }

  async getproduct_catch_script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getproduct_catch_script',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 404,
        message: bh.error.message,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getProduct_HttpOut_Callservice(bh, parentSpanInst);
      //appendnew_next_getproduct_catch_script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mIhZJ8AzqSoUtl5z',
        spanInst,
        'getproduct_catch_script'
      );
    }
  }

  async productNameSearch_Script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'productNameSearch_Script',
      parentSpanInst
    );
    try {
      console.log(bh.input.query);
      console.log('here');
      if (bh.input.query?.name) {
        bh.local.query = { name: new RegExp(bh.input.query.name, 'i') };
      } else {
        throw Error('document id is not found Please provide a _id');
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.productNameSearch_Mongodb(bh, parentSpanInst);
      //appendnew_next_productNameSearch_Script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xu3qaIx9GiQ5vT4o',
        spanInst,
        'productNameSearch_Script'
      );
    }
  }

  async productNameSearch_Mongodb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'productNameSearch_Mongodb',
      parentSpanInst
    );
    try {
      bh.local.product = await MongoPersistance.getInstance().find(
        'sd_rgjA4nOniJAL9Rgn',
        process.env.PRODUCT_COLLECTION,
        bh.local.query,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.productFound_switch(bh, parentSpanInst);
      //appendnew_next_productNameSearch_Mongodb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WDqonnQtXDIc72Ta',
        spanInst,
        'productNameSearch_Mongodb'
      );
    }
  }

  async productFound_switch(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'productFound_switch',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['neq'](
          bh.local.product.length,
          0,
          undefined,
          undefined
        )
      ) {
        bh = await this.productNameSearch_respons_script(bh, parentSpanInst);
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
        bh = await this.noproduct_respons_script(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4ddkxlA2KkvAMYW3',
        spanInst,
        'productFound_switch'
      );
    }
  }

  async productNameSearch_respons_script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'productNameSearch_respons_script',
      parentSpanInst
    );
    try {
      console.log(bh.local.product.length);
      bh.local.responces = {
        statusCode: 200,
        result: {
          product: bh.local.product,
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.productNameSearch_HttpOut_Callservice(bh, parentSpanInst);
      //appendnew_next_productNameSearch_respons_script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IZVusSWdFzcFlDCn',
        spanInst,
        'productNameSearch_respons_script'
      );
    }
  }

  async productNameSearch_HttpOut_Callservice(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'productNameSearch_HttpOut_Callservice',
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
      //appendnew_next_productNameSearch_HttpOut_Callservice
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JrAJXVWqjYn6KBAF',
        spanInst,
        'productNameSearch_HttpOut_Callservice'
      );
    }
  }

  async noproduct_respons_script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'noproduct_respons_script',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 200,
        result: {
          message: 'No product Found.',
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.productNameSearch_HttpOut_Callservice(bh, parentSpanInst);
      //appendnew_next_noproduct_respons_script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_h86vDSZ5OsYPeyMX',
        spanInst,
        'noproduct_respons_script'
      );
    }
  }

  async productNameSearch_catch_script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'productNameSearch_catch_script',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 404,
        message: bh.error.message,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.productNameSearch_HttpOut_Callservice(bh, parentSpanInst);
      //appendnew_next_productNameSearch_catch_script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_g3BGNaLB7AxUPZmb',
        spanInst,
        'productNameSearch_catch_script'
      );
    }
  }

  async allProduct_Mongodb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'allProduct_Mongodb',
      parentSpanInst
    );
    try {
      bh.local.product = await MongoPersistance.getInstance().find(
        'sd_rgjA4nOniJAL9Rgn',
        process.env.PRODUCT_COLLECTION,
        bh.local.query,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.allProduct_response_script(bh, parentSpanInst);
      //appendnew_next_allProduct_Mongodb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4tA848R9aVSVV5HW',
        spanInst,
        'allProduct_Mongodb'
      );
    }
  }

  async allProduct_response_script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'allProduct_response_script',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 200,
        result: {
          product: bh.local.product,
        },
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.allProduct_HttpOut_Callservice(bh, parentSpanInst);
      //appendnew_next_allProduct_response_script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_orLTuyO5U3n7avK9',
        spanInst,
        'allProduct_response_script'
      );
    }
  }

  async allProduct_HttpOut_Callservice(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'allProduct_HttpOut_Callservice',
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
      //appendnew_next_allProduct_HttpOut_Callservice
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eOBkJqhXSYiIi1eH',
        spanInst,
        'allProduct_HttpOut_Callservice'
      );
    }
  }

  async allProduct_catch_script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'allProduct_catch_script',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 404,
        message: bh.error.message,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.allProduct_HttpOut_Callservice(bh, parentSpanInst);
      //appendnew_next_allProduct_catch_script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1fyzzr6WIoVYWRwb',
        spanInst,
        'allProduct_catch_script'
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
      (await this.addProduct_Catch(bh, parentSpanInst)) ||
      (await this.getproduct_catch(bh, parentSpanInst)) ||
      (await this.productNameSearch_catch(bh, parentSpanInst)) ||
      (await this.allProduct_catch(bh, parentSpanInst))
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
  async addProduct_Catch(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_KE6ocgzyWYMXyjTe', 'sd_QYRrOAtngBuJl79k'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.addProduct_Catch_Script(bh, parentSpanInst);
    //appendnew_next_addProduct_Catch
    return true;
  }
  async getproduct_catch(bh, parentSpanInst) {
    const nodes = ['sd_PnUUxGHsHdeHdR46'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.getproduct_catch_script(bh, parentSpanInst);
      //appendnew_next_getproduct_catch
      return true;
    }
    return false;
  }
  async productNameSearch_catch(bh, parentSpanInst) {
    const nodes = [
      'sd_pSk5A5O392e6OUtX',
      'sd_xu3qaIx9GiQ5vT4o',
      'sd_WDqonnQtXDIc72Ta',
      'sd_IZVusSWdFzcFlDCn',
      'sd_h86vDSZ5OsYPeyMX',
      'sd_4ddkxlA2KkvAMYW3',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.productNameSearch_catch_script(bh, parentSpanInst);
      //appendnew_next_productNameSearch_catch
      return true;
    }
    return false;
  }
  async allProduct_catch(bh, parentSpanInst) {
    const nodes = [
      'sd_EIYvBUrFxBrUrHUf',
      'sd_orLTuyO5U3n7avK9',
      'sd_4tA848R9aVSVV5HW',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.allProduct_catch_script(bh, parentSpanInst);
      //appendnew_next_allProduct_catch
      return true;
    }
    return false;
  }
  //appendnew_flow_Product_Service_Catch
}
