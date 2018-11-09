import {Express} from 'express'

export = (app: Express, path, method) => {
  const stack = app._router.stack
  const index = stack.findIndex(layer =>
    layer.route && layer.route.path === path && layer.route.stack[0].method === method
  )
  if (index === -1) {
    return false
  }
  stack.splice(index, 1)
  return true
}
