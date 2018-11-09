# express unset route

It is **Hack** for dynamic remove pre registered method in `express.js`

### install
```bash
npm install express-unset-route
```

### usage
```typescript
import express from 'express'
import unset from 'express-unset-route'

const app = express()
const isRemoved = unset(app, '/', 'get')
```

### License
MIT
