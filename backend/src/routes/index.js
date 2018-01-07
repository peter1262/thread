import express from 'express';
import account from './account'
import post from './post'

const router = express.Router()

router.use('/auth', account)
router.use('/post', post)

router.get('/heart_beat', (req,res) => {
    return res.send('It works!')
})

export default router;