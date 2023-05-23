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
import * as SSD_SERVICE_ID_sd_OQYJSSTIEwN2nkED from '../../Middlewares/Post_Middlewares'; //_splitter_
import { MongoPersistance } from '../../../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as mongodb from 'mongodb'; //_splitter_
//append_imports_end
export class Cart_Service {
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
    this.serviceName = 'Cart_Service';
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
      instance = new Cart_Service(
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
      //appendnew_flow_Cart_Service_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: Cart_Service');

    //appendnew_flow_Cart_Service_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: Cart_Service');
    //appendnew_flow_Cart_Service_HttpIn
  }
  //   service flows_Cart_Service

  async addCart_Start(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'addCart_Start',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.addCart_Session(bh, parentSpanInst);
      //appendnew_next_addCart_Start
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JRStBohH0W9USyQr',
        spanInst,
        'addCart_Start'
      );
    }
  }

  async getCartDetails_Start(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'getCartDetails_Start',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getCart_Session(bh, parentSpanInst);
      //appendnew_next_getCartDetails_Start
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JXf9ip5F3hDbpQPW',
        spanInst,
        'getCartDetails_Start'
      );
    }
  }

  async getTotal_Start(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'getTotal_Start',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getCartTotal_Session(bh, parentSpanInst);
      //appendnew_next_getTotal_Start
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_E1Mcx7jBs98jMUAP',
        spanInst,
        'getTotal_Start'
      );
    }
  }

  async cartChangeQunty_Start(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'cartChangeQunty_Start',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.condtion_Script(bh, parentSpanInst);
      //appendnew_next_cartChangeQunty_Start
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_r7IilBkGPIxYzgRu',
        spanInst,
        'cartChangeQunty_Start'
      );
    }
  }

  async removeCart_Start(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'removeCart_Start',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.removeCart_Script(bh, parentSpanInst);
      //appendnew_next_removeCart_Start
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vOZ7s4pYUC6S6w6q',
        spanInst,
        'removeCart_Start'
      );
    }
  }

  //appendnew_flow_Cart_Service_start

  async addCart_Session(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'addCart_Session',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.ifSesstion_Script(bh, parentSpanInst);
      //appendnew_next_addCart_Session
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SoGCjMyFhTf18ir1',
        spanInst,
        'addCart_Session'
      );
    }
  }

  async ifSesstion_Script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'ifSesstion_Script',
      parentSpanInst
    );
    try {
      console.log('here', bh.local.session);

      if (bh.local.session.data.clientId) {
        bh.local.clientId = bh.local.session.data.clientId;
      } else {
        bh.local.clientId = false;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.check_ClientId(bh, parentSpanInst);
      //appendnew_next_ifSesstion_Script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8NgcYZpIkVSgfFzw',
        spanInst,
        'ifSesstion_Script'
      );
    }
  }

  async check_ClientId(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'check_ClientId',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['false'](
          bh.local.clientId,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.error_Responce(bh, parentSpanInst);
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
        bh = await this.addCart_Script(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BJaJKB5DnPZzmLOD',
        spanInst,
        'check_ClientId'
      );
    }
  }

  async error_Responce(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'error_Responce',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 200,
        result: {
          status: false,
          message: 'ClientId Not Found.',
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.addCart_Call(bh, parentSpanInst);
      //appendnew_next_error_Responce
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Zo2ATswqjshbiabQ',
        spanInst,
        'error_Responce'
      );
    }
  }

  async addCart_Call(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'addCart_Call',
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
      //appendnew_next_addCart_Call
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6OwIyTrhscNIxAAn',
        spanInst,
        'addCart_Call'
      );
    }
  }

  async addCart_Script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'addCart_Script',
      parentSpanInst
    );
    try {
      const { ObjectId } = require('mongodb');
      bh.local.salesmanId = bh.local.session.data.userId;
      console.log(bh.local.salesmanId);

      bh.local.proObj = {
        iteam: ObjectId(bh.input.body.proid),
        quantity: 1,
      };
      bh.local.findCartQuery = { user: ObjectId(bh.local.clientId) };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.addCart_findCart(bh, parentSpanInst);
      //appendnew_next_addCart_Script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0BRXKNUBtoBqgIr9',
        spanInst,
        'addCart_Script'
      );
    }
  }

  async addCart_findCart(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'addCart_findCart',
      parentSpanInst
    );
    try {
      bh.local.userCart = await MongoPersistance.getInstance().find(
        'sd_rgjA4nOniJAL9Rgn',
        process.env.CART_COLLECTION,
        bh.local.findCartQuery,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.addCart_UserCart_Exist(bh, parentSpanInst);
      //appendnew_next_addCart_findCart
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CARPa8XZKgTloI8k',
        spanInst,
        'addCart_findCart'
      );
    }
  }

  async addCart_UserCart_Exist(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'addCart_UserCart_Exist',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['sne'](
          bh.local.userCart.length,
          0,
          undefined,
          undefined
        )
      ) {
        bh = await this.proExt_Script(bh, parentSpanInst);
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
        bh = await this.addToCart_Script(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eSnPuS6N5E09PJdD',
        spanInst,
        'addCart_UserCart_Exist'
      );
    }
  }

  async proExt_Script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'proExt_Script',
      parentSpanInst
    );
    try {
      bh.local.proExt = bh.local.userCart[0].productId.findIndex(
        (product) => product.iteam == bh.input.body.proid
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.proExt_Check(bh, parentSpanInst);
      //appendnew_next_proExt_Script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZVjGKPrQmjLKA4Ik',
        spanInst,
        'proExt_Script'
      );
    }
  }

  async proExt_Check(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'proExt_Check',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['sne'](
          bh.local.proExt,
          -1,
          undefined,
          undefined
        )
      ) {
        bh = await this.updatePro_Script(bh, parentSpanInst);
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
        bh = await this.addPro_Script(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0TQcqbtVgju4M1CU',
        spanInst,
        'proExt_Check'
      );
    }
  }

  async updatePro_Script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updatePro_Script',
      parentSpanInst
    );
    try {
      const { ObjectId } = require('mongodb');
      // console.log(bh.input.body.userId)
      // console.log('here')
      bh.local.quentUpdateQuery = {
        $inc: { 'productId.$.quantity': 1 },
      };
      bh.local.quentFiltter = {
        user: ObjectId(bh.local.clientId),
        'productId.iteam': ObjectId(bh.input.body.proid),
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.updatePro_Mongo(bh, parentSpanInst);
      //appendnew_next_updatePro_Script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_O5kv9WL5YmDze38D',
        spanInst,
        'updatePro_Script'
      );
    }
  }

  async updatePro_Mongo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updatePro_Mongo',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().updateOne(
        'sd_rgjA4nOniJAL9Rgn',
        process.env.CART_COLLECTION,
        bh.local.quentFiltter,
        bh.local.quentUpdateQuery,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.updatePro_Response(bh, parentSpanInst);
      //appendnew_next_updatePro_Mongo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uxc00M1b8kXePV1z',
        spanInst,
        'updatePro_Mongo'
      );
    }
  }

  async updatePro_Response(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updatePro_Response',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 200,
        result: {
          message: 'Product added successfuly.',
          id: bh.local.result.insertedId,
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.addCart_Call(bh, parentSpanInst);
      //appendnew_next_updatePro_Response
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rLyJH5ggXqXVEoz8',
        spanInst,
        'updatePro_Response'
      );
    }
  }

  async addPro_Script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'addPro_Script',
      parentSpanInst
    );
    try {
      const { ObjectId } = require('mongodb');
      bh.local.quentUpdateQuery = {
        $push: { productId: bh.local.proObj },
      };

      bh.local.quentFiltter = { user: ObjectId(bh.local.clientId) };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.addPro_Mongo(bh, parentSpanInst);
      //appendnew_next_addPro_Script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_khJicHkcuHrmi2V1',
        spanInst,
        'addPro_Script'
      );
    }
  }

  async addPro_Mongo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'addPro_Mongo',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().updateOne(
        'sd_rgjA4nOniJAL9Rgn',
        process.env.CART_COLLECTION,
        bh.local.quentFiltter,
        bh.local.quentUpdateQuery,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.addPro_Response(bh, parentSpanInst);
      //appendnew_next_addPro_Mongo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_InVmt6fXK8a3idZL',
        spanInst,
        'addPro_Mongo'
      );
    }
  }

  async addPro_Response(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'addPro_Response',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 200,
        result: {
          message: 'Product added successfuly.',
          id: bh.local.result.insertedId,
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.addCart_Call(bh, parentSpanInst);
      //appendnew_next_addPro_Response
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8x5TleqeHpGKbj4D',
        spanInst,
        'addPro_Response'
      );
    }
  }

  async addToCart_Script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'addToCart_Script',
      parentSpanInst
    );
    try {
      const { ObjectId } = require('mongodb');
      bh.local.cartObjQuery = {
        user: ObjectId(bh.local.clientId),
        productId: [bh.local.proObj],
        salesManId: ObjectId(bh.local.salesmanId),
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.addToCart_Mongo(bh, parentSpanInst);
      //appendnew_next_addToCart_Script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eoXYAyf4A47aeDqE',
        spanInst,
        'addToCart_Script'
      );
    }
  }

  async addToCart_Mongo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'addToCart_Mongo',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().insertOne(
        'sd_rgjA4nOniJAL9Rgn',
        process.env.CART_COLLECTION,
        bh.local.cartObjQuery,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.addToCart_Response_Script(bh, parentSpanInst);
      //appendnew_next_addToCart_Mongo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Wrvq0rS0nHRCJl2J',
        spanInst,
        'addToCart_Mongo'
      );
    }
  }

  async addToCart_Response_Script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'addToCart_Response_Script',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 200,
        result: {
          message: 'Product added successfuly.',
          id: bh.local.result.insertedId,
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.addCart_Call(bh, parentSpanInst);
      //appendnew_next_addToCart_Response_Script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PNz9lrCMNDzyHzJO',
        spanInst,
        'addToCart_Response_Script'
      );
    }
  }

  async addCart_ChScript(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'addCart_ChScript',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 404,
        message: bh.error.message,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.addCart_Call(bh, parentSpanInst);
      //appendnew_next_addCart_ChScript
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Osvmcj6lmzoYHpve',
        spanInst,
        'addCart_ChScript'
      );
    }
  }

  async getCart_Session(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getCart_Session',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getCartDetails_Script(bh, parentSpanInst);
      //appendnew_next_getCart_Session
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vOvdLnWSVm30nkVe',
        spanInst,
        'getCart_Session'
      );
    }
  }

  async getCartDetails_Script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getCartDetails_Script',
      parentSpanInst
    );
    try {
      const { ObjectId } = require('mongodb');
      if (bh.local.session.data.clientId) {
        bh.local.pipleline = [
          {
            $match: { user: ObjectId(bh.local.session.data.clientId) },
          },

          {
            $unwind: '$productId',
          },
          {
            $project: {
              iteam: '$productId.iteam',
              quantity: '$productId.quantity',
            },
          },
          {
            //to join anothtre table fields to current table
            $lookup: {
              from: process.env.PRODUCT_COLLECTION,
              localField: 'iteam',
              foreignField: '_id',
              as: 'product',
            },
          },
          {
            $project: {
              iteam: 1,
              quantity: 1,
              product: { $arrayElemAt: ['$product', 0] },
              //arrayElemAt userd to convert array to object
            },
          },
        ];
      } else {
        throw Error('document id is not found Please provide a _id');
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getCartDetails_Mongo(bh, parentSpanInst);
      //appendnew_next_getCartDetails_Script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ji7lBpKQAzd9rtUB',
        spanInst,
        'getCartDetails_Script'
      );
    }
  }

  async getCartDetails_Mongo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getCartDetails_Mongo',
      parentSpanInst
    );
    try {
      bh.local.cartDetails = await MongoPersistance.getInstance().aggregate(
        'sd_rgjA4nOniJAL9Rgn',
        process.env.CART_COLLECTION,
        bh.local.pipleline,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getCartDetails_Response(bh, parentSpanInst);
      //appendnew_next_getCartDetails_Mongo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_l9UA0Gydj65uH1Cz',
        spanInst,
        'getCartDetails_Mongo'
      );
    }
  }

  async getCartDetails_Response(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getCartDetails_Response',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 200,
        result: bh.local.cartDetails,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_2nXimFk0AVOPOys4(bh, parentSpanInst);
      //appendnew_next_getCartDetails_Response
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_89OoHZU2zxwwB4xX',
        spanInst,
        'getCartDetails_Response'
      );
    }
  }

  async sd_2nXimFk0AVOPOys4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2nXimFk0AVOPOys4',
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
      //appendnew_next_sd_2nXimFk0AVOPOys4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2nXimFk0AVOPOys4',
        spanInst,
        'sd_2nXimFk0AVOPOys4'
      );
    }
  }

  async getCartDetails_ChScript(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getCartDetails_ChScript',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 404,
        message: bh.error.message,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_2nXimFk0AVOPOys4(bh, parentSpanInst);
      //appendnew_next_getCartDetails_ChScript
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0Qkx4FpiJS7gjhuI',
        spanInst,
        'getCartDetails_ChScript'
      );
    }
  }

  async getCartTotal_Session(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getCartTotal_Session',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getTotal_Script(bh, parentSpanInst);
      //appendnew_next_getCartTotal_Session
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8MPvyEbFwO4kBR5v',
        spanInst,
        'getCartTotal_Session'
      );
    }
  }

  async getTotal_Script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getTotal_Script',
      parentSpanInst
    );
    try {
      const { ObjectId } = require('mongodb');
      bh.local.pipleline = [
        {
          $match: { user: ObjectId(bh.local.session.data.clientId) },
        },

        {
          $unwind: '$productId',
        },
        {
          $project: {
            iteam: '$productId.iteam',
            quantity: '$productId.quantity',
          },
        },
        {
          //to join anothtre table fields to current table
          $lookup: {
            from: process.env.PRODUCT_COLLECTION,
            localField: 'iteam',
            foreignField: '_id',
            as: 'product',
          },
        },
        {
          $project: {
            iteam: 1,
            quantity: 1,
            product: { $arrayElemAt: ['$product', 0] },
            //arrayElemAt userd to convert array to object
          },
        },
        {
          $group: {
            _id: null,
            total: { $sum: { $multiply: ['$quantity', '$product.price'] } },
            //arrayElemAt userd to convert array to object
          },
        },
      ];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getTotal_Mongo(bh, parentSpanInst);
      //appendnew_next_getTotal_Script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_w70IDx7EMzhCeScn',
        spanInst,
        'getTotal_Script'
      );
    }
  }

  async getTotal_Mongo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getTotal_Mongo',
      parentSpanInst
    );
    try {
      bh.local.cartDetails = await MongoPersistance.getInstance().aggregate(
        'sd_rgjA4nOniJAL9Rgn',
        process.env.CART_COLLECTION,
        bh.local.pipleline,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getTotal_Response(bh, parentSpanInst);
      //appendnew_next_getTotal_Mongo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4r4YfpJN7Nwm2Yr6',
        spanInst,
        'getTotal_Mongo'
      );
    }
  }

  async getTotal_Response(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getTotal_Response',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 200,
        result: bh.local.cartDetails,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getTotal_CallOut(bh, parentSpanInst);
      //appendnew_next_getTotal_Response
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xkdk0oMya5jxeIjm',
        spanInst,
        'getTotal_Response'
      );
    }
  }

  async getTotal_CallOut(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getTotal_CallOut',
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
      //appendnew_next_getTotal_CallOut
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZaFdxC52DQjVhKWg',
        spanInst,
        'getTotal_CallOut'
      );
    }
  }

  async getTotal_ChScript(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getTotal_ChScript',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 404,
        message: bh.error.message,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getTotal_CallOut(bh, parentSpanInst);
      //appendnew_next_getTotal_ChScript
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lpEVer5Sd0pIKkNB',
        spanInst,
        'getTotal_ChScript'
      );
    }
  }

  async condtion_Script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'condtion_Script',
      parentSpanInst
    );
    try {
      bh.local.delecting = false;
      if (bh.input.body.count == -1 && bh.input.body.quantity == 1) {
        bh.local.delecting = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.cartChangeQunty_Switch(bh, parentSpanInst);
      //appendnew_next_condtion_Script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3geNxbeBWTa2an33',
        spanInst,
        'condtion_Script'
      );
    }
  }

  async cartChangeQunty_Switch(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'cartChangeQunty_Switch',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.delecting,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.delecting_Script(bh, parentSpanInst);
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
        bh = await this.updation_Script(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tKPn2Te4r2Sk5tnm',
        spanInst,
        'cartChangeQunty_Switch'
      );
    }
  }

  async delecting_Script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'delecting_Script',
      parentSpanInst
    );
    try {
      const { ObjectId } = require('mongodb');
      console.log('delecting');
      bh.local.quentUpdateQuery = {
        //delecting that array object
        $pull: { productId: { iteam: ObjectId(bh.input.body.productId) } },
      };
      bh.local.quentFiltter = { _id: ObjectId(bh.input.body.CartId) };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.qunty_Delete_Mongo(bh, parentSpanInst);
      //appendnew_next_delecting_Script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ctDTkX5x4evpNnjE',
        spanInst,
        'delecting_Script'
      );
    }
  }

  async qunty_Delete_Mongo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'qunty_Delete_Mongo',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().updateOne(
        'sd_rgjA4nOniJAL9Rgn',
        process.env.CART_COLLECTION,
        bh.local.quentFiltter,
        bh.local.quentUpdateQuery,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.delete_Response(bh, parentSpanInst);
      //appendnew_next_qunty_Delete_Mongo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_id2H7eWv2QZcWL76',
        spanInst,
        'qunty_Delete_Mongo'
      );
    }
  }

  async delete_Response(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'delete_Response',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 200,
        result: {
          message: 'Product removed.',
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.cartChangeQunty_CallOut(bh, parentSpanInst);
      //appendnew_next_delete_Response
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_R7aMYfIoUPoReaOO',
        spanInst,
        'delete_Response'
      );
    }
  }

  async cartChangeQunty_CallOut(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'cartChangeQunty_CallOut',
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
      //appendnew_next_cartChangeQunty_CallOut
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aoTkT7MZ8fzqzlXN',
        spanInst,
        'cartChangeQunty_CallOut'
      );
    }
  }

  async updation_Script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'updation_Script',
      parentSpanInst
    );
    try {
      const { ObjectId } = require('mongodb');
      console.log('qun update');
      bh.local.quentUpdateQuery = {
        $inc: { 'productId.$.quantity': bh.input.body.count },
      };
      bh.local.quentFiltter = {
        _id: ObjectId(bh.input.body.CartId),
        'productId.iteam': ObjectId(bh.input.body.productId),
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.cartChangeQuntY_Mongo(bh, parentSpanInst);
      //appendnew_next_updation_Script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4GKWsFWgModG9TE4',
        spanInst,
        'updation_Script'
      );
    }
  }

  async cartChangeQuntY_Mongo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'cartChangeQuntY_Mongo',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().updateOne(
        'sd_rgjA4nOniJAL9Rgn',
        process.env.CART_COLLECTION,
        bh.local.quentFiltter,
        bh.local.quentUpdateQuery,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.update_Response(bh, parentSpanInst);
      //appendnew_next_cartChangeQuntY_Mongo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4P0yrumQM66yB6Fl',
        spanInst,
        'cartChangeQuntY_Mongo'
      );
    }
  }

  async update_Response(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'update_Response',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 200,
        result: {
          message: 'Product qunty updated.',
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.cartChangeQunty_CallOut(bh, parentSpanInst);
      //appendnew_next_update_Response
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ge5VDPTYxHpO4U6H',
        spanInst,
        'update_Response'
      );
    }
  }

  async cartChangeQunty_ChScript(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'cartChangeQunty_ChScript',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 404,
        message: bh.error.message,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.cartChangeQunty_CallOut(bh, parentSpanInst);
      //appendnew_next_cartChangeQunty_ChScript
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_D1JRCR6L6PUPcNHf',
        spanInst,
        'cartChangeQunty_ChScript'
      );
    }
  }

  async removeCart_Script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'removeCart_Script',
      parentSpanInst
    );
    try {
      const { ObjectId } = require('mongodb');

      bh.local.quentUpdateQuery = {
        //delecting that array object
        $pull: { productId: { iteam: ObjectId(bh.input.body.productid) } },
      };

      bh.local.quentFiltter = { _id: ObjectId(bh.input.body.cartid) };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.removeCart_Mongo(bh, parentSpanInst);
      //appendnew_next_removeCart_Script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gZ14wFy97JjGggZl',
        spanInst,
        'removeCart_Script'
      );
    }
  }

  async removeCart_Mongo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'removeCart_Mongo',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().updateOne(
        'sd_rgjA4nOniJAL9Rgn',
        process.env.CART_COLLECTION,
        bh.local.quentFiltter,
        bh.local.quentUpdateQuery,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.removeCart_Response(bh, parentSpanInst);
      //appendnew_next_removeCart_Mongo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rakfHK4EDPLhgaRF',
        spanInst,
        'removeCart_Mongo'
      );
    }
  }

  async removeCart_Response(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'removeCart_Response',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 200,
        result: {
          message: 'Product removed from cart.',
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.removeCart_CallOut(bh, parentSpanInst);
      //appendnew_next_removeCart_Response
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fyk3U0PtRkFjeKGz',
        spanInst,
        'removeCart_Response'
      );
    }
  }

  async removeCart_CallOut(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'removeCart_CallOut',
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
      //appendnew_next_removeCart_CallOut
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nao3O0Tw3yhL37jf',
        spanInst,
        'removeCart_CallOut'
      );
    }
  }

  async removeCart_ChScript(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'removeCart_ChScript',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 404,
        message: bh.error.message,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.removeCart_CallOut(bh, parentSpanInst);
      //appendnew_next_removeCart_ChScript
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ox8pOswqATFaQ9Pp',
        spanInst,
        'removeCart_ChScript'
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
      (await this.addCartCatch(bh, parentSpanInst)) ||
      (await this.getCartDetails_Catch(bh, parentSpanInst)) ||
      (await this.getTotal_Catch(bh, parentSpanInst)) ||
      (await this.cartChangeQunty_Catch(bh, parentSpanInst)) ||
      (await this.removeCart_Catch(bh, parentSpanInst))
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
  async addCartCatch(bh, parentSpanInst) {
    const nodes = [
      'sd_JRStBohH0W9USyQr',
      'sd_0BRXKNUBtoBqgIr9',
      'sd_CARPa8XZKgTloI8k',
      'sd_eSnPuS6N5E09PJdD',
      'sd_eoXYAyf4A47aeDqE',
      'sd_Wrvq0rS0nHRCJl2J',
      'sd_PNz9lrCMNDzyHzJO',
      'sd_ZVjGKPrQmjLKA4Ik',
      'sd_0TQcqbtVgju4M1CU',
      'sd_O5kv9WL5YmDze38D',
      'sd_rLyJH5ggXqXVEoz8',
      'sd_InVmt6fXK8a3idZL',
      'sd_khJicHkcuHrmi2V1',
      'sd_8x5TleqeHpGKbj4D',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.addCart_ChScript(bh, parentSpanInst);
      //appendnew_next_addCartCatch
      return true;
    }
    return false;
  }
  async getCartDetails_Catch(bh, parentSpanInst) {
    const nodes = [
      'sd_JXf9ip5F3hDbpQPW',
      'sd_ji7lBpKQAzd9rtUB',
      'sd_l9UA0Gydj65uH1Cz',
      'sd_iGBavQgvQSQYMSuU',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.getCartDetails_ChScript(bh, parentSpanInst);
      //appendnew_next_getCartDetails_Catch
      return true;
    }
    return false;
  }
  async getTotal_Catch(bh, parentSpanInst) {
    const nodes = [
      'sd_E1Mcx7jBs98jMUAP',
      'sd_w70IDx7EMzhCeScn',
      'sd_4r4YfpJN7Nwm2Yr6',
      'sd_xkdk0oMya5jxeIjm',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.getTotal_ChScript(bh, parentSpanInst);
      //appendnew_next_getTotal_Catch
      return true;
    }
    return false;
  }
  async cartChangeQunty_Catch(bh, parentSpanInst) {
    const nodes = [
      'sd_r7IilBkGPIxYzgRu',
      'sd_tKPn2Te4r2Sk5tnm',
      'sd_3geNxbeBWTa2an33',
      'sd_ctDTkX5x4evpNnjE',
      'sd_4GKWsFWgModG9TE4',
      'sd_id2H7eWv2QZcWL76',
      'sd_4P0yrumQM66yB6Fl',
      'sd_R7aMYfIoUPoReaOO',
      'sd_ge5VDPTYxHpO4U6H',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.cartChangeQunty_ChScript(bh, parentSpanInst);
      //appendnew_next_cartChangeQunty_Catch
      return true;
    }
    return false;
  }
  async removeCart_Catch(bh, parentSpanInst) {
    const nodes = [
      'sd_r7IilBkGPIxYzgRu',
      'sd_tKPn2Te4r2Sk5tnm',
      'sd_3geNxbeBWTa2an33',
      'sd_ctDTkX5x4evpNnjE',
      'sd_4GKWsFWgModG9TE4',
      'sd_vOZ7s4pYUC6S6w6q',
      'sd_rakfHK4EDPLhgaRF',
      'sd_gZ14wFy97JjGggZl',
      'sd_fyk3U0PtRkFjeKGz',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.removeCart_ChScript(bh, parentSpanInst);
      //appendnew_next_removeCart_Catch
      return true;
    }
    return false;
  }
  //appendnew_flow_Cart_Service_Catch
}
