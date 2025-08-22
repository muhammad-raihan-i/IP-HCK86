const request = require('supertest');
const app = require('../app');
const { User } = require('../models');
const { hash } = require('../helpers/bcrypt');

