/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import User from '#models/user'
import router from '@adonisjs/core/services/router'
import UserTransformer from '#transformers/user_transformer'

router.get('/', async ({ inertia }) => {
  return inertia.render('home', {
    user: inertia.always(UserTransformer.transform(await User.findOrFail(1))),
  })
})
