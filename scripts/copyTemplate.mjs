import fs from 'fs-extra'
import consolji from 'consolji'
import nc from '@nyxb/colors'

fs.copy('./src/templates', './dist/templates', (err) => {
   if (err)
      consolji.error(nc.nyxbred('An error occurred:', err))

   else
      consolji.log(nc.nyxbgreen('✓ Template folder was successfully copied!'))
})
