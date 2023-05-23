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
import { validateNode } from '../../utils/ndefault-datamodel/find/validateUtil'; //_splitter_
import { MongoPersistance } from '../../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as mongodb from 'mongodb'; //_splitter_
import * as SSD_SERVICE_ID_sd_OQYJSSTIEwN2nkED from '../Middlewares/Post_Middlewares'; //_splitter_
//append_imports_end
export class Auth_Service {
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
    this.serviceName = 'Auth_Service';
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
      instance = new Auth_Service(
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
      //appendnew_flow_Auth_Service_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: Auth_Service');

    //appendnew_flow_Auth_Service_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: Auth_Service');
    //appendnew_flow_Auth_Service_HttpIn
  }
  //   service flows_Auth_Service

  async salsman_login_start(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'salsman_login_start',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_UPTkwl1QYMU6UQVv(bh, parentSpanInst);
      //appendnew_next_salsman_login_start
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FmadbpBK1GIe5FO7',
        spanInst,
        'salsman_login_start'
      );
    }
  }

  async refresh_Token_Start(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'refresh_Token_Start',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.cookie_exist_check_script(bh, parentSpanInst);
      //appendnew_next_refresh_Token_Start
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9L5hh5tHTHYMQd2g',
        spanInst,
        'refresh_Token_Start'
      );
    }
  }

  async authCheckSession(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'authCheckSession',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sessionExistCheck(bh, parentSpanInst);
      //appendnew_next_authCheckSession
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qDy5LWoMUqrajFtP',
        spanInst,
        'authCheckSession'
      );
    }
  }

  async admin_login_start(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'admin_login_start',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.admin_Login(bh, parentSpanInst);
      //appendnew_next_admin_login_start
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GYaHrpDhMY7v0Ksv',
        spanInst,
        'admin_login_start'
      );
    }
  }

  async admin_logout(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'admin_logout',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_KaWsxlIwXb8grycj(bh, parentSpanInst);
      //appendnew_next_admin_logout
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vhqWbxAWiMskaGfV',
        spanInst,
        'admin_logout'
      );
    }
  }

  //appendnew_flow_Auth_Service_start

  async sd_UPTkwl1QYMU6UQVv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UPTkwl1QYMU6UQVv',
      parentSpanInst
    );
    try {
      console.log(bh.input.body);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.login_data_validate_entity(bh, parentSpanInst);
      //appendnew_next_sd_UPTkwl1QYMU6UQVv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UPTkwl1QYMU6UQVv',
        spanInst,
        'sd_UPTkwl1QYMU6UQVv'
      );
    }
  }

  async login_data_validate_entity(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'login_data_validate_entity',
      parentSpanInst
    );
    try {
      validateNode('_EN_f7leu7hlyc', bh.input.body, true);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.findquery_script(bh, parentSpanInst);
      //appendnew_next_login_data_validate_entity
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NRZEeQO57WTd1ewU',
        spanInst,
        'login_data_validate_entity'
      );
    }
  }

  async findquery_script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'findquery_script',
      parentSpanInst
    );
    try {
      bh.findquery = { email: bh.input.body.email };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.check_user_exist(bh, parentSpanInst);
      //appendnew_next_findquery_script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ljZctLttt1P1OEuQ',
        spanInst,
        'findquery_script'
      );
    }
  }

  async check_user_exist(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'check_user_exist',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().find(
        'sd_rgjA4nOniJAL9Rgn',
        process.env.SALESMAN_COLLECTION,
        bh.findquery,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ZXlUCTQVUZiN4VWf(bh, parentSpanInst);
      //appendnew_next_check_user_exist
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eZSNouItStvu92Cr',
        spanInst,
        'check_user_exist'
      );
    }
  }

  async sd_ZXlUCTQVUZiN4VWf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZXlUCTQVUZiN4VWf',
      parentSpanInst
    );
    try {
      const bcrypt = require('bcrypt');

      bh.unauthorized = false;

      if (bh.result.length === 0) {
        bh.local.responces = {
          statusCode: 401,
          message: 'This email is not found',
        };

        bh.unauthorized = true;
      } else {
        bh.result = bh.result[0];
        const password_checking = await bcrypt.compare(
          bh.input.body.password,
          bh.result.password
        );

        if (password_checking === false) {
          bh.local.responces = {
            statusCode: 401,
            message: 'Password is not correct Please try again',
          };

          bh.unauthorized = true;
        }
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_3dIT2LHUM5k8VFws(bh, parentSpanInst);
      //appendnew_next_sd_ZXlUCTQVUZiN4VWf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZXlUCTQVUZiN4VWf',
        spanInst,
        'sd_ZXlUCTQVUZiN4VWf'
      );
    }
  }

  async sd_3dIT2LHUM5k8VFws(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3dIT2LHUM5k8VFws',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.unauthorized,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.unauthorized_user_Http_out(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.unauthorized,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_beGU03ZgdGuROcDa(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3dIT2LHUM5k8VFws',
        spanInst,
        'sd_3dIT2LHUM5k8VFws'
      );
    }
  }

  async unauthorized_user_Http_out(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'unauthorized_user_Http_out',
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
      //appendnew_next_unauthorized_user_Http_out
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lUwK8o6pmfBImNRI',
        spanInst,
        'unauthorized_user_Http_out'
      );
    }
  }

  async sd_beGU03ZgdGuROcDa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_beGU03ZgdGuROcDa',
      parentSpanInst
    );
    try {
      const { password, _id, ...others } = bh.result;
      others.userId = _id;

      bh.local.userDetail = others;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_kI40xmJQeIWuX8bu(bh, parentSpanInst);
      //appendnew_next_sd_beGU03ZgdGuROcDa
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_beGU03ZgdGuROcDa',
        spanInst,
        'sd_beGU03ZgdGuROcDa'
      );
    }
  }

  async sd_kI40xmJQeIWuX8bu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kI40xmJQeIWuX8bu',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetail;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_cnBbnyuPt0opOB17(bh, parentSpanInst);
      //appendnew_next_sd_kI40xmJQeIWuX8bu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kI40xmJQeIWuX8bu',
        spanInst,
        'sd_kI40xmJQeIWuX8bu'
      );
    }
  }

  async sd_cnBbnyuPt0opOB17(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cnBbnyuPt0opOB17',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 200,
        message: 'loggedin',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_kAWPm25A7UToNAa0(bh, parentSpanInst);
      //appendnew_next_sd_cnBbnyuPt0opOB17
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cnBbnyuPt0opOB17',
        spanInst,
        'sd_cnBbnyuPt0opOB17'
      );
    }
  }

  async sd_kAWPm25A7UToNAa0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kAWPm25A7UToNAa0',
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
      //appendnew_next_sd_kAWPm25A7UToNAa0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kAWPm25A7UToNAa0',
        spanInst,
        'sd_kAWPm25A7UToNAa0'
      );
    }
  }

  async cookie_exist_check_script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'cookie_exist_check_script',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_cookie_exist_check_script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ENxU5mjOsQDaDADj',
        spanInst,
        'cookie_exist_check_script'
      );
    }
  }

  async login_catch_script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'login_catch_script',
      parentSpanInst
    );
    try {
      console.log(bh.error);

      bh.local.responces = {
        statusCode: 404,
        message: bh.error.message,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_nSiOXIqkzd6u3Vxo(bh, parentSpanInst);
      //appendnew_next_login_catch_script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1nFGZEfIBEfVNHGo',
        spanInst,
        'login_catch_script'
      );
    }
  }

  async sd_nSiOXIqkzd6u3Vxo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nSiOXIqkzd6u3Vxo',
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
      //appendnew_next_sd_nSiOXIqkzd6u3Vxo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nSiOXIqkzd6u3Vxo',
        spanInst,
        'sd_nSiOXIqkzd6u3Vxo'
      );
    }
  }

  async sessionExistCheck(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sessionExistCheck',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 200,
        result: 'Checked',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_E7EAEYxyllfXVY0v(bh, parentSpanInst);
      //appendnew_next_sessionExistCheck
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wfX5pNCmQ7F5HbBH',
        spanInst,
        'sessionExistCheck'
      );
    }
  }

  async sd_E7EAEYxyllfXVY0v(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_E7EAEYxyllfXVY0v',
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
      //appendnew_next_sd_E7EAEYxyllfXVY0v
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_E7EAEYxyllfXVY0v',
        spanInst,
        'sd_E7EAEYxyllfXVY0v'
      );
    }
  }

  async admin_Login(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'admin_Login',
      parentSpanInst
    );
    try {
      validateNode('_EN_3x39ao2y1a', bh.input.body, true);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_kRaJ8XWT71Mrxc9A(bh, parentSpanInst);
      //appendnew_next_admin_Login
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YEE43TSIvTwb4Dml',
        spanInst,
        'admin_Login'
      );
    }
  }

  async sd_kRaJ8XWT71Mrxc9A(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kRaJ8XWT71Mrxc9A',
      parentSpanInst
    );
    try {
      bh.local.query = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.admin_Details_fatching(bh, parentSpanInst);
      //appendnew_next_sd_kRaJ8XWT71Mrxc9A
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kRaJ8XWT71Mrxc9A',
        spanInst,
        'sd_kRaJ8XWT71Mrxc9A'
      );
    }
  }

  async admin_Details_fatching(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'admin_Details_fatching',
      parentSpanInst
    );
    try {
      bh.local.adminDetails = await MongoPersistance.getInstance().find(
        'sd_rgjA4nOniJAL9Rgn',
        process.env.ADMIN_COLLECTION,
        bh.local.query,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.adminVerify(bh, parentSpanInst);
      //appendnew_next_admin_Details_fatching
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ii7sVBSXThdGKHQT',
        spanInst,
        'admin_Details_fatching'
      );
    }
  }

  async adminVerify(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'adminVerify',
      parentSpanInst
    );
    try {
      const bcrypt = require('bcrypt');
      const jwt = require('jsonwebtoken');

      if (bh.local.adminDetails[0].email !== bh.input.body.email) {
        throw 'This is a invalid Email Please provied correct details';
      }

      const passwordChecking = await bcrypt.compare(
        bh.input.body.password,
        bh.local.adminDetails[0].password
      );

      if (!passwordChecking) {
        throw 'Password is incorrect please try again';
      }

      const accessToken = await jwt.sign(
        {
          data: 'adminLogined',
        },
        process.env.JWT_PRIVET_KEY,
        { expiresIn: '10m' }
      );
      const refreshToken = await jwt.sign(
        {
          data: 'adminLogined',
        },
        process.env.JWT_PRIVET_KEY,
        { expiresIn: '1d' }
      );

      bh.local.cookie_data = {
        accessToken: {
          value: accessToken,
          options: {
            expires: new Date(Date.now() + 1000),
            httpOnly: 'true',
            path: '/',
            secure: 'false',
            sameSite: 'lx',
          },
        },

        refreshToken: {
          value: refreshToken,
          options: {
            expires: new Date(Date.now() + 1000),
            httpOnly: 'true',
            path: '/',
            secure: 'false',
            sameSite: 'lx',
          },
        },
      };

      bh.local.responces = {
        statusCode: 200,
        message: 'Login successfuly completed',
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_fJnafSZGGvdmGdYs(bh, parentSpanInst);
      //appendnew_next_adminVerify
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3GIEedfo0V9ap5KV',
        spanInst,
        'adminVerify'
      );
    }
  }

  async sd_fJnafSZGGvdmGdYs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fJnafSZGGvdmGdYs',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_OQYJSSTIEwN2nkEDInstance: SSD_SERVICE_ID_sd_OQYJSSTIEwN2nkED.Post_Middlewares =
        SSD_SERVICE_ID_sd_OQYJSSTIEwN2nkED.Post_Middlewares.getInstance();
      bh = await SSD_SERVICE_ID_sd_OQYJSSTIEwN2nkEDInstance.http_Out_And_Cookie(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_fJnafSZGGvdmGdYs
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fJnafSZGGvdmGdYs',
        spanInst,
        'sd_fJnafSZGGvdmGdYs'
      );
    }
  }

  async admin_login_catch_script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'admin_login_catch_script',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 404,
        message: bh.error.message || bh.error,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_SZS5HcABZZkddkCQ(bh, parentSpanInst);
      //appendnew_next_admin_login_catch_script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XCrIydjR7jMQuQCT',
        spanInst,
        'admin_login_catch_script'
      );
    }
  }

  async sd_SZS5HcABZZkddkCQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SZS5HcABZZkddkCQ',
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
      //appendnew_next_sd_SZS5HcABZZkddkCQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SZS5HcABZZkddkCQ',
        spanInst,
        'sd_SZS5HcABZZkddkCQ'
      );
    }
  }

  async sd_KaWsxlIwXb8grycj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KaWsxlIwXb8grycj',
      parentSpanInst
    );
    try {
      bh.local.cookie_data = {
        accessToken: {
          value: 'accessToken',
          options: {
            expires: Date(0),
          },
        },

        refreshToken: {
          value: 'refreshToken',
          options: {
            expires: new Date(0),
            httpOnly: 'true',
            path: '/',
            secure: 'false',
            sameSite: 'lx',
          },
        },
      };

      bh.local.responces = {
        statusCode: 200,
        message: 'Logout successfuly completed',
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_csgPtNX6uN1InhAD(bh, parentSpanInst);
      //appendnew_next_sd_KaWsxlIwXb8grycj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KaWsxlIwXb8grycj',
        spanInst,
        'sd_KaWsxlIwXb8grycj'
      );
    }
  }

  async sd_csgPtNX6uN1InhAD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_csgPtNX6uN1InhAD',
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
      bh = await this.sd_ddAU8w5wpLyiRnpt(bh, parentSpanInst);
      //appendnew_next_sd_csgPtNX6uN1InhAD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_csgPtNX6uN1InhAD',
        spanInst,
        'sd_csgPtNX6uN1InhAD'
      );
    }
  }

  async sd_ddAU8w5wpLyiRnpt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ddAU8w5wpLyiRnpt',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_OQYJSSTIEwN2nkEDInstance: SSD_SERVICE_ID_sd_OQYJSSTIEwN2nkED.Post_Middlewares =
        SSD_SERVICE_ID_sd_OQYJSSTIEwN2nkED.Post_Middlewares.getInstance();
      bh = await SSD_SERVICE_ID_sd_OQYJSSTIEwN2nkEDInstance.http_Out_And_Cookie(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_ddAU8w5wpLyiRnpt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ddAU8w5wpLyiRnpt',
        spanInst,
        'sd_ddAU8w5wpLyiRnpt'
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
      (await this.login_catch(bh, parentSpanInst)) ||
      (await this.admin_login(bh, parentSpanInst))
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
  async login_catch(bh, parentSpanInst) {
    const nodes = ['sd_NRZEeQO57WTd1ewU', 'sd_eZSNouItStvu92Cr'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.login_catch_script(bh, parentSpanInst);
      //appendnew_next_login_catch
      return true;
    }
    return false;
  }
  async admin_login(bh, parentSpanInst) {
    const nodes = [
      'sd_Ii7sVBSXThdGKHQT',
      'sd_YEE43TSIvTwb4Dml',
      'sd_3GIEedfo0V9ap5KV',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.admin_login_catch_script(bh, parentSpanInst);
      //appendnew_next_admin_login
      return true;
    }
    return false;
  }
  //appendnew_flow_Auth_Service_Catch
}
