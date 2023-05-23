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
export class Order_Service {
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
    this.serviceName = 'Order_Service';
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
      instance = new Order_Service(
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
      //appendnew_flow_Order_Service_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: Order_Service');

    //appendnew_flow_Order_Service_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: Order_Service');
    //appendnew_flow_Order_Service_HttpIn
  }
  //   service flows_Order_Service

  async placeOrder_Start(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'placeOrder_Start',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.placeOrderr_Validation(bh, parentSpanInst);
      //appendnew_next_placeOrder_Start
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_B1nzqn4bGetlpde5',
        spanInst,
        'placeOrder_Start'
      );
    }
  }

  async allOrder_Start(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'allOrder_Start',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.allOrder_Script(bh, parentSpanInst);
      //appendnew_next_allOrder_Start
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_V8NxEpZpRz47kX51',
        spanInst,
        'allOrder_Start'
      );
    }
  }

  async salesManOrder_Start(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'salesManOrder_Start',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.salesMan_Session(bh, parentSpanInst);
      //appendnew_next_salesManOrder_Start
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iG3eSh9eVTanVjVf',
        spanInst,
        'salesManOrder_Start'
      );
    }
  }

  async razorpay_link_send_start(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'razorpay_link_send_start',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.razorpay_link_generation_script(bh, parentSpanInst);
      //appendnew_next_razorpay_link_send_start
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CfgSe6eplR6bK2nw',
        spanInst,
        'razorpay_link_send_start'
      );
    }
  }

  async razorpay_callback_start(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'razorpay_callback_start',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_QiyUffPCyKkTPSTe(bh, parentSpanInst);
      //appendnew_next_razorpay_callback_start
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_L7EjrS0OsexjOy7Y',
        spanInst,
        'razorpay_callback_start'
      );
    }
  }

  async whatsappmessage_Send(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'whatsappmessage_Send',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_48CkuM1MIvbLH5Bf(bh, parentSpanInst);
      //appendnew_next_whatsappmessage_Send
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mu3acLrrXT280GK0',
        spanInst,
        'whatsappmessage_Send'
      );
    }
  }

  async remove_From_Cart(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'remove_From_Cart',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.delete_Script(bh, parentSpanInst);
      //appendnew_next_remove_From_Cart
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZWHiNCVaDeoyJoNh',
        spanInst,
        'remove_From_Cart'
      );
    }
  }

  async fullOrderDetails_Start(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'fullOrderDetails_Start',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.fullOrderDetails_Script(bh, parentSpanInst);
      //appendnew_next_fullOrderDetails_Start
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jtiHYWrZOES2I1tW',
        spanInst,
        'fullOrderDetails_Start'
      );
    }
  }

  async fullOrderDetailsBySId_Start(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'fullOrderDetailsBySId_Start',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.salesMan_Id_Session(bh, parentSpanInst);
      //appendnew_next_fullOrderDetailsBySId_Start
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_g6F5QUuJhGNjTr2A',
        spanInst,
        'fullOrderDetailsBySId_Start'
      );
    }
  }

  //appendnew_flow_Order_Service_start

  async placeOrderr_Validation(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'placeOrderr_Validation',
      parentSpanInst
    );
    try {
      validateNode('_EN_nov39so0nv', bh.input.body, true);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.plaseOrder_Session(bh, parentSpanInst);
      //appendnew_next_placeOrderr_Validation
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_L2ATuQl61hrCxBrX',
        spanInst,
        'placeOrderr_Validation'
      );
    }
  }

  async plaseOrder_Session(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'plaseOrder_Session',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.placeOrder_Script(bh, parentSpanInst);
      //appendnew_next_plaseOrder_Session
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2hOR8ztgFfYYZYdy',
        spanInst,
        'plaseOrder_Session'
      );
    }
  }

  async placeOrder_Script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'placeOrder_Script',
      parentSpanInst
    );
    try {
      const { ObjectId } = require('mongodb');
      bh.local.query = { user: ObjectId(bh.local.session.data.clientId) };
      bh.local.option = { projection: { _id: 0 } };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.placeOrder_Mongodb(bh, parentSpanInst);
      //appendnew_next_placeOrder_Script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Hq4m0Corpoo4rb94',
        spanInst,
        'placeOrder_Script'
      );
    }
  }

  async placeOrder_Mongodb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'placeOrder_Mongodb',
      parentSpanInst
    );
    try {
      bh.local.cartDetails = await MongoPersistance.getInstance().find(
        'sd_rgjA4nOniJAL9Rgn',
        process.env.CART_COLLECTION,
        bh.local.query,
        bh.local.option
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.payment_Switch(bh, parentSpanInst);
      //appendnew_next_placeOrder_Mongodb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Dwy4s3wymm00ySj3',
        spanInst,
        'placeOrder_Mongodb'
      );
    }
  }

  async payment_Switch(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'payment_Switch',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['sne'](
          bh.input.body.paymentmethod,
          'cash',
          undefined,
          undefined
        )
      ) {
        bh = await this.online_Script(bh, parentSpanInst);
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
        bh = await this.cash_Script(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pyqk6Po4olipAFTZ',
        spanInst,
        'payment_Switch'
      );
    }
  }

  async online_Script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'online_Script',
      parentSpanInst
    );
    try {
      bh.local.cartDetails = {
        ...bh.local.cartDetails[0],
        realtime: new Date(),
        total: bh.input.body.total,
        paymentmethod: bh.input.body.paymentmethod,
        status: 'Pending',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.placeOrder_Cash_Mongodb(bh, parentSpanInst);
      //appendnew_next_online_Script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pvoKtEdspYKi0YWw',
        spanInst,
        'online_Script'
      );
    }
  }

  async placeOrder_Cash_Mongodb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'placeOrder_Cash_Mongodb',
      parentSpanInst
    );
    try {
      bh.input.cartDetails = await MongoPersistance.getInstance().insertOne(
        'sd_rgjA4nOniJAL9Rgn',
        process.env.ORDER_COLLECTION,
        bh.local.cartDetails,
        bh.local.option
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.userDetails_Script(bh, parentSpanInst);
      //appendnew_next_placeOrder_Cash_Mongodb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hlUXkN6py0ff4X7o',
        spanInst,
        'placeOrder_Cash_Mongodb'
      );
    }
  }

  async userDetails_Script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'userDetails_Script',
      parentSpanInst
    );
    try {
      const { ObjectId } = require('mongodb');
      console.log(bh.local.cartDetails.user);
      bh.local.query = { _id: ObjectId(bh.local.cartDetails.user) };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.findUser_Mongodb(bh, parentSpanInst);
      //appendnew_next_userDetails_Script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MbOY0r1ITgwa01xc',
        spanInst,
        'userDetails_Script'
      );
    }
  }

  async findUser_Mongodb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'findUser_Mongodb',
      parentSpanInst
    );
    try {
      bh.local.userDetails = await MongoPersistance.getInstance().find(
        'sd_rgjA4nOniJAL9Rgn',
        process.env.USER_COLLECTION,
        bh.local.query,
        bh.local.option
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_KjrGsxOvUBRqq7uO(bh, parentSpanInst);
      //appendnew_next_findUser_Mongodb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hiL5CENQdg5Vfbt8',
        spanInst,
        'findUser_Mongodb'
      );
    }
  }

  async sd_KjrGsxOvUBRqq7uO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KjrGsxOvUBRqq7uO',
      parentSpanInst
    );
    try {
      bh = await this.razorpay_link_send_start(spanInst, bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_wtQ0h3GFbKX4xqd4(bh, parentSpanInst);
      //appendnew_next_sd_KjrGsxOvUBRqq7uO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KjrGsxOvUBRqq7uO',
        spanInst,
        'sd_KjrGsxOvUBRqq7uO'
      );
    }
  }

  async sd_wtQ0h3GFbKX4xqd4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wtQ0h3GFbKX4xqd4',
      parentSpanInst
    );
    try {
      bh = await this.remove_From_Cart(spanInst, bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.addUser_script(bh, parentSpanInst);
      //appendnew_next_sd_wtQ0h3GFbKX4xqd4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wtQ0h3GFbKX4xqd4',
        spanInst,
        'sd_wtQ0h3GFbKX4xqd4'
      );
    }
  }

  async addUser_script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'addUser_script',
      parentSpanInst
    );
    try {
      bh.local.session = {
        tokenset: { ...bh.local.session.data.tokenset },
        userInfo: { ...bh.local.session.data.userInfo },
        userId: bh.local.session.data.userId,
        clientId: false,
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_KyOJGl4bSd4XlXE0(bh, parentSpanInst);
      //appendnew_next_addUser_script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RdT7y4qMKTnN2fCJ',
        spanInst,
        'addUser_script'
      );
    }
  }

  async sd_KyOJGl4bSd4XlXE0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KyOJGl4bSd4XlXE0',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.session;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.response_Script(bh, parentSpanInst);
      //appendnew_next_sd_KyOJGl4bSd4XlXE0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KyOJGl4bSd4XlXE0',
        spanInst,
        'sd_KyOJGl4bSd4XlXE0'
      );
    }
  }

  async response_Script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'response_Script',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 200,
        result: {
          message: 'Order Placed',
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_9gG2IZQb0Pqqa316(bh, parentSpanInst);
      //appendnew_next_response_Script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dD4XOGWLmxlbYNnq',
        spanInst,
        'response_Script'
      );
    }
  }

  async sd_9gG2IZQb0Pqqa316(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9gG2IZQb0Pqqa316',
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
      //appendnew_next_sd_9gG2IZQb0Pqqa316
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9gG2IZQb0Pqqa316',
        spanInst,
        'sd_9gG2IZQb0Pqqa316'
      );
    }
  }

  async cash_Script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'cash_Script',
      parentSpanInst
    );
    try {
      bh.local.cartDetails = {
        ...bh.local.cartDetails[0],
        realtime: new Date(),
        total: bh.input.body.total,
        paymentmethod: bh.input.body.paymentmethod,
        status: 'Completed',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.placeOrder_Cash_Mongodb(bh, parentSpanInst);
      //appendnew_next_cash_Script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GedSmTcidbGbW34h',
        spanInst,
        'cash_Script'
      );
    }
  }

  async sd_FSRKDG3dV8mi9fSI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FSRKDG3dV8mi9fSI',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 404,
        message: bh.error.message,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_9gG2IZQb0Pqqa316(bh, parentSpanInst);
      //appendnew_next_sd_FSRKDG3dV8mi9fSI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FSRKDG3dV8mi9fSI',
        spanInst,
        'sd_FSRKDG3dV8mi9fSI'
      );
    }
  }

  async allOrder_Script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'allOrder_Script',
      parentSpanInst
    );
    try {
      console.log('hi');
      bh.local.pipeline = [
        {
          $lookup: {
            from: process.env.USER_COLLECTION,
            localField: 'user',
            foreignField: '_id',
            as: 'user',
          },
        },
        {
          $lookup: {
            from: process.env.SALESMAN_COLLECTION,
            localField: 'salesManId',
            foreignField: '_id',
            as: 'salesman',
          },
        },

        {
          $project: {
            _id: 1,
            realtime: 1,
            total: 1,
            paymentmethod: 1,
            status: 1,
            user: { $arrayElemAt: ['$user', 0] },
            salesman: { $arrayElemAt: ['$salesman', 0] },
          },
        },
        {
          $project: {
            user: { city: 0, address: 0, phone: 0, email: 0 },
            salesman: { block: 0, password: 0, dob: 0, email: 0, phone: 0 },
          },
        },
      ];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.allOrder_Mongodb(bh, parentSpanInst);
      //appendnew_next_allOrder_Script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xjP8SoqPztMmK33o',
        spanInst,
        'allOrder_Script'
      );
    }
  }

  async allOrder_Mongodb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'allOrder_Mongodb',
      parentSpanInst
    );
    try {
      bh.local.orders = await MongoPersistance.getInstance().aggregate(
        'sd_rgjA4nOniJAL9Rgn',
        process.env.ORDER_COLLECTION,
        bh.local.pipeline,
        bh.local.option
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.allOrder_Response_Script(bh, parentSpanInst);
      //appendnew_next_allOrder_Mongodb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YMhrlgnNRmnCxed7',
        spanInst,
        'allOrder_Mongodb'
      );
    }
  }

  async allOrder_Response_Script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'allOrder_Response_Script',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 200,
        result: {
          orders: bh.local.orders,
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.allOrder_HttpOut(bh, parentSpanInst);
      //appendnew_next_allOrder_Response_Script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UuiPda7Mk19ibGSA',
        spanInst,
        'allOrder_Response_Script'
      );
    }
  }

  async allOrder_HttpOut(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'allOrder_HttpOut',
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
      //appendnew_next_allOrder_HttpOut
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PDfSBeNbOpZwTyIf',
        spanInst,
        'allOrder_HttpOut'
      );
    }
  }

  async allOrder_Error_Response(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'allOrder_Error_Response',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.allOrder_HttpOut(bh, parentSpanInst);
      //appendnew_next_allOrder_Error_Response
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4D3xzAK1sn41FgXk',
        spanInst,
        'allOrder_Error_Response'
      );
    }
  }

  async salesMan_Session(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'salesMan_Session',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.salesManOrder_Script(bh, parentSpanInst);
      //appendnew_next_salesMan_Session
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rDMNpmwycBShQmuH',
        spanInst,
        'salesMan_Session'
      );
    }
  }

  async salesManOrder_Script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'salesManOrder_Script',
      parentSpanInst
    );
    try {
      const { ObjectId } = require('mongodb');
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
      console.log(bh.local.session);
      console.log(bh.local.session.data.userId, 'salesman id');
      bh.local.pipeline = [
        {
          $match: { salesManId: ObjectId(bh.local.session.data.userId) },
        },

        {
          $lookup: {
            from: process.env.USER_COLLECTION,
            localField: 'user',
            foreignField: '_id',
            as: 'user',
          },
        },
        {
          $lookup: {
            from: process.env.SALESMAN_COLLECTION,
            localField: 'salesManId',
            foreignField: '_id',
            as: 'salesman',
          },
        },

        {
          $project: {
            _id: 1,
            realtime: 1,
            total: 1,
            paymentmethod: 1,
            status: 1,
            user: { $arrayElemAt: ['$user', 0] },
            salesman: { $arrayElemAt: ['$salesman', 0] },
          },
        },
        {
          $project: {
            user: { city: 0, address: 0, phone: 0, email: 0 },
            salesman: { block: 0, password: 0, dob: 0, email: 0, phone: 0 },
          },
        },
      ];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.salesManOrder_Mongodb(bh, parentSpanInst);
      //appendnew_next_salesManOrder_Script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WYBuHRdPs60cu3JW',
        spanInst,
        'salesManOrder_Script'
      );
    }
  }

  async salesManOrder_Mongodb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'salesManOrder_Mongodb',
      parentSpanInst
    );
    try {
      bh.local.orders = await MongoPersistance.getInstance().aggregate(
        'sd_rgjA4nOniJAL9Rgn',
        process.env.ORDER_COLLECTION,
        bh.local.pipeline,
        bh.local.option
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.salesManOrder_Response_Script(bh, parentSpanInst);
      //appendnew_next_salesManOrder_Mongodb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_e7N5vgRjzz6O1I6c',
        spanInst,
        'salesManOrder_Mongodb'
      );
    }
  }

  async salesManOrder_Response_Script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'salesManOrder_Response_Script',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 200,
        result: {
          orders: bh.local.orders,
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.salesManOrder_HttpOut(bh, parentSpanInst);
      //appendnew_next_salesManOrder_Response_Script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sweqwCr1gEpSk8mL',
        spanInst,
        'salesManOrder_Response_Script'
      );
    }
  }

  async salesManOrder_HttpOut(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'salesManOrder_HttpOut',
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
      //appendnew_next_salesManOrder_HttpOut
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nTWmXeqz3J6ieQda',
        spanInst,
        'salesManOrder_HttpOut'
      );
    }
  }

  async salesManOrder_Error_Response(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'salesManOrder_Error_Response',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.salesManOrder_HttpOut(bh, parentSpanInst);
      //appendnew_next_salesManOrder_Error_Response
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QRspHWTKvsOx5cEZ',
        spanInst,
        'salesManOrder_Error_Response'
      );
    }
  }

  async razorpay_link_generation_script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'razorpay_link_generation_script',
      parentSpanInst
    );
    try {
      const Razorpay = require('razorpay');
      const razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
      });

      bh.local.userDetails = bh.local.userDetails[0];

      console.log(bh.local.userDetails.name);

      const paymentLink_options = {
        amount: bh.local.cartDetails.total * 100,
        currency: 'INR',
        accept_partial: false,
        description: 'Gold Billing payment',
        customer: {
          name: `${bh.local.userDetails.name}`,
          email: `${bh.local.userDetails.email}`,
          contact: `${bh.local.userDetails.phone}`,
        },
        notify: {
          sms: true,
          email: true,
          notify_on_wa: true,
        },
        reminder_enable: true,
        notes: {
          policy_name: 'Jeevan Bima',
          order_id: bh.local.cartDetails._id,
        },
      };

      razorpay.paymentLink.create(paymentLink_options, (error, PaymentLInk) => {
        if (error) {
          throw error;
        }
        console.log(PaymentLInk);
      });
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_razorpay_link_generation_script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uyDx8KoPbjYQbbxR',
        spanInst,
        'razorpay_link_generation_script'
      );
    }
  }

  async sd_QiyUffPCyKkTPSTe(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QiyUffPCyKkTPSTe',
      parentSpanInst
    );
    try {
      const crypto = require('crypto');
      console.log('success');
      const RAZORPAY_SECRET_KEY = process.env.RAZORPAY_WEBHOOK_SECRET;

      const webhookSignature = bh.input.headers['x-razorpay-signature'];
      const webhookBody = bh.input.body;

      // Verify the signature
      const hmac = crypto.createHmac('sha256', RAZORPAY_SECRET_KEY);
      hmac.update(JSON.stringify(webhookBody));
      const calculatedSignature = hmac.digest('hex');

      if (webhookSignature === calculatedSignature) {
        // Signature is valid, continue processing the webhook
        const eventType = webhookBody.event;
        const paymentId = webhookBody.payload.payment.entity.id;
        const paymentAmount = webhookBody.payload.payment.entity.amount;

        // Verify the event type
        if (eventType === 'payment.captured') {
          console.log('Payment success');

          bh.local.responces = {
            statusCode: 200,
            message: 'payment success',
          };
        } else {
          // Event type is not payment.captured, ignore the webhook

          console.log('Invalid event type');

          res.status(400).send();
          bh.local.responces = {
            statusCode: 200,
            message: 'Invalid event type',
          };
        }
      } else {
        // Signature is invalid, ignore the webhook

        console.log('Invalid singnature');

        bh.local.responces = {
          statusCode: 400,
          message: 'Invalid signature',
        };
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_IiNjKbSEkzigMDF8(bh, parentSpanInst);
      //appendnew_next_sd_QiyUffPCyKkTPSTe
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QiyUffPCyKkTPSTe',
        spanInst,
        'sd_QiyUffPCyKkTPSTe'
      );
    }
  }

  async sd_IiNjKbSEkzigMDF8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IiNjKbSEkzigMDF8',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['se'](
          bh.local.responces.message,
          'payment success',
          undefined,
          undefined
        )
      ) {
      } else if (
        this.sdService.operators['sne'](
          bh.local.responces.message,
          'Invalid event type',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_jGsMXJJjjUGP6alQ(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IiNjKbSEkzigMDF8',
        spanInst,
        'sd_IiNjKbSEkzigMDF8'
      );
    }
  }

  async sd_jGsMXJJjjUGP6alQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jGsMXJJjjUGP6alQ',
      parentSpanInst
    );
    try {
      const { ObjectId } = require('mongodb');

      bh.local.status_update = { $set: { status: 'Completed' } };

      bh.local.findquery = {
        _id: ObjectId(bh.input.body.payload.payment.entity.notes.order_id),
      };

      console.log(bh.input.body.payload.payment.entity.notes.order_id);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_eWPOQu23SwkYKHOl(bh, parentSpanInst);
      //appendnew_next_sd_jGsMXJJjjUGP6alQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jGsMXJJjjUGP6alQ',
        spanInst,
        'sd_jGsMXJJjjUGP6alQ'
      );
    }
  }

  async sd_eWPOQu23SwkYKHOl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_eWPOQu23SwkYKHOl',
      parentSpanInst
    );
    try {
      bh.local.updateResult = await MongoPersistance.getInstance().updateOne(
        'sd_rgjA4nOniJAL9Rgn',
        process.env.ORDER_COLLECTION,
        bh.local.findquery,
        bh.local.status_update,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_oktxZ3dZ2Hmb6Fx3(bh, parentSpanInst);
      //appendnew_next_sd_eWPOQu23SwkYKHOl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eWPOQu23SwkYKHOl',
        spanInst,
        'sd_eWPOQu23SwkYKHOl'
      );
    }
  }

  async sd_oktxZ3dZ2Hmb6Fx3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oktxZ3dZ2Hmb6Fx3',
      parentSpanInst
    );
    try {
      console.log(bh.local.updateResult);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_oktxZ3dZ2Hmb6Fx3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oktxZ3dZ2Hmb6Fx3',
        spanInst,
        'sd_oktxZ3dZ2Hmb6Fx3'
      );
    }
  }

  async sd_48CkuM1MIvbLH5Bf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_48CkuM1MIvbLH5Bf',
      parentSpanInst
    );
    try {
      var axios = require('axios');

      const data = await axios.post(
        'https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NmQwNTZiMDYzZTA0MzE1MjY1NTUzMCI_3D_pc',
        { data: 'ansif' }
      );

      // var data = JSON.stringify({
      //     "token": process.env.ULTRA_MSG_TOKEN,
      //     "to": "+919633374031",
      //     "body": "WhatsApp API on UltraMsg.com works good",
      //     "priority": 1,
      //     "referenceId": "",
      //     "msgId": "",
      //     "mentions": ""
      // });

      // var config = {
      //   method: 'post',
      //   url: `https://api.ultramsg.com/${process.env.ULTRA_MSG_INSTANCE_ID}/messages/chat`,
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded'
      //   },
      //   data : data
      // };

      // axios(config)
      // .then(function (response) {
      //   console.log(JSON.stringify(response.data));
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_48CkuM1MIvbLH5Bf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_48CkuM1MIvbLH5Bf',
        spanInst,
        'sd_48CkuM1MIvbLH5Bf'
      );
    }
  }

  async sd_F1Wi2YZY7OUHQaUW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_F1Wi2YZY7OUHQaUW',
      parentSpanInst
    );
    try {
      console.log(bh.error);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_F1Wi2YZY7OUHQaUW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_F1Wi2YZY7OUHQaUW',
        spanInst,
        'sd_F1Wi2YZY7OUHQaUW'
      );
    }
  }

  async delete_Script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'delete_Script',
      parentSpanInst
    );
    try {
      const { ObjectId } = require('mongodb');
      bh.local.deleteQuery = { user: ObjectId(bh.local.session.data.clientId) };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.removeCart_Mongodb(bh, parentSpanInst);
      //appendnew_next_delete_Script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_z42oDEIgtplRwLVz',
        spanInst,
        'delete_Script'
      );
    }
  }

  async removeCart_Mongodb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'removeCart_Mongodb',
      parentSpanInst
    );
    try {
      bh.local.details = await MongoPersistance.getInstance().deleteOne(
        'sd_rgjA4nOniJAL9Rgn',
        process.env.CART_COLLECTION,
        bh.local.deleteQuery,
        bh.local.option
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_removeCart_Mongodb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UB5PpM4UQmugK2He',
        spanInst,
        'removeCart_Mongodb'
      );
    }
  }

  async fullOrderDetails_Error_Response(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'fullOrderDetails_Error_Response',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 404,
        message: bh.error.message,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.fullOrderDetails_HttpOut(bh, parentSpanInst);
      //appendnew_next_fullOrderDetails_Error_Response
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eBEx38brvIcHJI1W',
        spanInst,
        'fullOrderDetails_Error_Response'
      );
    }
  }

  async fullOrderDetails_HttpOut(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'fullOrderDetails_HttpOut',
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
      //appendnew_next_fullOrderDetails_HttpOut
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nGKgXHqknnCXud61',
        spanInst,
        'fullOrderDetails_HttpOut'
      );
    }
  }

  async fullOrderDetails_Script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'fullOrderDetails_Script',
      parentSpanInst
    );
    try {
      const { ObjectId } = require('mongodb');
      bh.local.pipelineCommen = [
        {
          $match: { _id: ObjectId(bh.input.params.id) },
        },

        {
          $lookup: {
            from: process.env.USER_COLLECTION,
            localField: 'user',
            foreignField: '_id',
            as: 'user',
          },
        },
        {
          $lookup: {
            from: process.env.SALESMAN_COLLECTION,
            localField: 'salesManId',
            foreignField: '_id',
            as: 'salesman',
          },
        },

        {
          $project: {
            _id: 1,
            realtime: 1,
            total: 1,
            paymentmethod: 1,
            status: 1,
            user: { $arrayElemAt: ['$user', 0] },
            salesman: { $arrayElemAt: ['$salesman', 0] },
          },
        },
        {
          $project: {
            user: { city: 0, address: 0, phone: 0, email: 0 },
            salesman: { block: 0, password: 0, dob: 0, email: 0, phone: 0 },
          },
        },
      ];

      bh.local.pipelineProduct = [
        {
          $match: { _id: ObjectId(bh.input.params.id) },
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
          },
        },
      ];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.fullOrderDetails_Mongodb(bh, parentSpanInst);
      //appendnew_next_fullOrderDetails_Script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3Mp1Nyu4EiHh8uSH',
        spanInst,
        'fullOrderDetails_Script'
      );
    }
  }

  async fullOrderDetails_Mongodb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'fullOrderDetails_Mongodb',
      parentSpanInst
    );
    try {
      bh.local.order = await MongoPersistance.getInstance().aggregate(
        'sd_rgjA4nOniJAL9Rgn',
        process.env.ORDER_COLLECTION,
        bh.local.pipelineCommen,
        bh.local.option
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.productDetails_Mongodb(bh, parentSpanInst);
      //appendnew_next_fullOrderDetails_Mongodb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_O1sQnLZizYP4XuNe',
        spanInst,
        'fullOrderDetails_Mongodb'
      );
    }
  }

  async productDetails_Mongodb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'productDetails_Mongodb',
      parentSpanInst
    );
    try {
      bh.local.product = await MongoPersistance.getInstance().aggregate(
        'sd_rgjA4nOniJAL9Rgn',
        process.env.ORDER_COLLECTION,
        bh.local.pipelineProduct,
        bh.local.option
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.fullOrderDetails_Response_Script(bh, parentSpanInst);
      //appendnew_next_productDetails_Mongodb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_W8cd52rv74X450Qt',
        spanInst,
        'productDetails_Mongodb'
      );
    }
  }

  async fullOrderDetails_Response_Script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'fullOrderDetails_Response_Script',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 200,
        result: {
          orders: bh.local.order,
          product: bh.local.product,
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.fullOrderDetails_HttpOut(bh, parentSpanInst);
      //appendnew_next_fullOrderDetails_Response_Script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IxgnlYmAF6aD4n6n',
        spanInst,
        'fullOrderDetails_Response_Script'
      );
    }
  }

  async fullOrderDetailsBySId_Error_Response(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'fullOrderDetailsBySId_Error_Response',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 404,
        message: bh.error.message,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.fullOrderDetailsBySId_HttpOut(bh, parentSpanInst);
      //appendnew_next_fullOrderDetailsBySId_Error_Response
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_beycAm2x1SljBg8j',
        spanInst,
        'fullOrderDetailsBySId_Error_Response'
      );
    }
  }

  async fullOrderDetailsBySId_HttpOut(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'fullOrderDetailsBySId_HttpOut',
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
      //appendnew_next_fullOrderDetailsBySId_HttpOut
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_65lq8ukLzNYa7JIq',
        spanInst,
        'fullOrderDetailsBySId_HttpOut'
      );
    }
  }

  async salesMan_Id_Session(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'salesMan_Id_Session',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.fullOrderDetailsBySId_Script(bh, parentSpanInst);
      //appendnew_next_salesMan_Id_Session
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oyZB9QfKbGNQJDR0',
        spanInst,
        'salesMan_Id_Session'
      );
    }
  }

  async fullOrderDetailsBySId_Script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'fullOrderDetailsBySId_Script',
      parentSpanInst
    );
    try {
      const { ObjectId } = require('mongodb');
      bh.local.pipelineCommen = [
        {
          $match: { salesManId: ObjectId(bh.local.session.data.userId) },
        },

        {
          $lookup: {
            from: process.env.USER_COLLECTION,
            localField: 'user',
            foreignField: '_id',
            as: 'user',
          },
        },
        {
          $lookup: {
            from: process.env.SALESMAN_COLLECTION,
            localField: 'salesManId',
            foreignField: '_id',
            as: 'salesman',
          },
        },

        {
          $project: {
            _id: 1,
            realtime: 1,
            total: 1,
            paymentmethod: 1,
            status: 1,
            user: { $arrayElemAt: ['$user', 0] },
            salesman: { $arrayElemAt: ['$salesman', 0] },
          },
        },
        {
          $project: {
            user: { city: 0, address: 0, phone: 0, email: 0 },
            salesman: { block: 0, password: 0, dob: 0, email: 0, phone: 0 },
          },
        },
      ];

      bh.local.pipelineProduct = [
        {
          $match: { salesManId: ObjectId(bh.local.session.data.userId) },
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
          },
        },
      ];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.fullOrderDetailsBySId_Mongodb(bh, parentSpanInst);
      //appendnew_next_fullOrderDetailsBySId_Script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rDKKZ0WcottDIfwI',
        spanInst,
        'fullOrderDetailsBySId_Script'
      );
    }
  }

  async fullOrderDetailsBySId_Mongodb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'fullOrderDetailsBySId_Mongodb',
      parentSpanInst
    );
    try {
      bh.local.order = await MongoPersistance.getInstance().aggregate(
        'sd_rgjA4nOniJAL9Rgn',
        process.env.ORDER_COLLECTION,
        bh.local.pipelineCommen,
        bh.local.option
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.productDetails_S_Mongodb(bh, parentSpanInst);
      //appendnew_next_fullOrderDetailsBySId_Mongodb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Iva9xYI5cmm9x9dg',
        spanInst,
        'fullOrderDetailsBySId_Mongodb'
      );
    }
  }

  async productDetails_S_Mongodb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'productDetails_S_Mongodb',
      parentSpanInst
    );
    try {
      bh.local.product = await MongoPersistance.getInstance().aggregate(
        'sd_rgjA4nOniJAL9Rgn',
        process.env.ORDER_COLLECTION,
        bh.local.pipelineProduct,
        bh.local.option
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.fullOrderDetailsBySId_Response_Script(bh, parentSpanInst);
      //appendnew_next_productDetails_S_Mongodb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BuHvkcw3vzVG1FPw',
        spanInst,
        'productDetails_S_Mongodb'
      );
    }
  }

  async fullOrderDetailsBySId_Response_Script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'fullOrderDetailsBySId_Response_Script',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 200,
        result: {
          orders: bh.local.order,
          product: bh.local.product,
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.fullOrderDetailsBySId_HttpOut(bh, parentSpanInst);
      //appendnew_next_fullOrderDetailsBySId_Response_Script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JtUhijM7QFWgDeqO',
        spanInst,
        'fullOrderDetailsBySId_Response_Script'
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
      (await this.odder_Catch(bh, parentSpanInst)) ||
      (await this.allOrder_Catch(bh, parentSpanInst)) ||
      (await this.salesManOrder_Catch(bh, parentSpanInst)) ||
      (await this.sd_mQzAxeeB1zrNoqUY(bh, parentSpanInst)) ||
      (await this.fullOrderDetails_Catch(bh, parentSpanInst)) ||
      (await this.fullOrderDetailsBySId_Catch(bh, parentSpanInst))
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
  async odder_Catch(bh, parentSpanInst) {
    const nodes = [
      'sd_B1nzqn4bGetlpde5',
      'sd_Hq4m0Corpoo4rb94',
      'sd_L2ATuQl61hrCxBrX',
      'sd_Dwy4s3wymm00ySj3',
      'sd_GedSmTcidbGbW34h',
      'sd_pyqk6Po4olipAFTZ',
      'sd_pvoKtEdspYKi0YWw',
      'sd_hlUXkN6py0ff4X7o',
      'sd_hiL5CENQdg5Vfbt8',
      'sd_MbOY0r1ITgwa01xc',
      'sd_khjZvOFHFYgfWRs0',
      'sd_z42oDEIgtplRwLVz',
      'sd_UB5PpM4UQmugK2He',
      'sd_dD4XOGWLmxlbYNnq',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_FSRKDG3dV8mi9fSI(bh, parentSpanInst);
      //appendnew_next_odder_Catch
      return true;
    }
    return false;
  }
  async allOrder_Catch(bh, parentSpanInst) {
    const nodes = [
      'sd_V8NxEpZpRz47kX51',
      'sd_xjP8SoqPztMmK33o',
      'sd_YMhrlgnNRmnCxed7',
      'sd_UuiPda7Mk19ibGSA',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.allOrder_Error_Response(bh, parentSpanInst);
      //appendnew_next_allOrder_Catch
      return true;
    }
    return false;
  }
  async salesManOrder_Catch(bh, parentSpanInst) {
    const nodes = [
      'sd_iG3eSh9eVTanVjVf',
      'sd_WYBuHRdPs60cu3JW',
      'sd_e7N5vgRjzz6O1I6c',
      'sd_sweqwCr1gEpSk8mL',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.salesManOrder_Error_Response(bh, parentSpanInst);
      //appendnew_next_salesManOrder_Catch
      return true;
    }
    return false;
  }
  async sd_mQzAxeeB1zrNoqUY(bh, parentSpanInst) {
    const nodes = [
      'sd_IiNjKbSEkzigMDF8',
      'sd_jGsMXJJjjUGP6alQ',
      'sd_eWPOQu23SwkYKHOl',
      'sd_oktxZ3dZ2Hmb6Fx3',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_F1Wi2YZY7OUHQaUW(bh, parentSpanInst);
      //appendnew_next_sd_mQzAxeeB1zrNoqUY
      return true;
    }
    return false;
  }
  async fullOrderDetails_Catch(bh, parentSpanInst) {
    const nodes = [
      'sd_jtiHYWrZOES2I1tW',
      'sd_3Mp1Nyu4EiHh8uSH',
      'sd_O1sQnLZizYP4XuNe',
      'sd_IxgnlYmAF6aD4n6n',
      'sd_W8cd52rv74X450Qt',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.fullOrderDetails_Error_Response(bh, parentSpanInst);
      //appendnew_next_fullOrderDetails_Catch
      return true;
    }
    return false;
  }
  async fullOrderDetailsBySId_Catch(bh, parentSpanInst) {
    const nodes = [
      'sd_IxgnlYmAF6aD4n6n',
      'sd_W8cd52rv74X450Qt',
      'sd_O1sQnLZizYP4XuNe',
      'sd_3Mp1Nyu4EiHh8uSH',
      'sd_jtiHYWrZOES2I1tW',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.fullOrderDetailsBySId_Error_Response(bh, parentSpanInst);
      //appendnew_next_fullOrderDetailsBySId_Catch
      return true;
    }
    return false;
  }
  //appendnew_flow_Order_Service_Catch
}
