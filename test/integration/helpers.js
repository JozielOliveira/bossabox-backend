import supertest from 'supertest';
import chai from 'chai';
import app from '../../src/index';

global.app = app;
global.request = supertest(app);
global.expect = chai.expect;
