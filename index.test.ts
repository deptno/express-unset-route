import {Express} from 'express'
import remove from '.'

const app = {} as Express
remove(app, '/', 'get')
