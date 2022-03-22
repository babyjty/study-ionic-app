const express = require('express');
const router = express.Router();

const aws = require('aws-sdk')
const multer = require('multer')
const multers3 = require('multer-s3')
const config = require('../../config/key')
const { User } = require("../../models/User")
const cookieParser = require('cookie-parser')
const { auth } = require('../../middleware/auth')




const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.json())
router.use(cookieParser())

const s3 = new aws.S3({
    accessKeyId: config.S3_ACCESS_KEY,
    secretAccessKey: config.S3_SECRETACCESS,
    region: config.S3_BUCKET_REGION
})

const upload = (bucketName) => 
    multer({
        storage: multers3({
            s3,
            bucket: bucketName,
            metadata: function (req, file, cb) {
                cb(null, {fieldName: file.fieldname})
            },
            key: function (req, file, cb) {
                cb(null, `image-${Date.now()}.jpeg`)
            }
        })
    })


router.post('/setprofilepic', auth, (req, res, next) => {
    //console.log(req.file)

    const uploadSingle = upload('choibucket').single(
        "image-upload"
    )

    uploadSingle(req, res, (err) => {
        if (err) return res.status(400).json({ success: false, message: err.message })
        
        console.log(req.file.location)
        //res.status(200).json({data: req.file.location})
        User.findOneAndUpdate({
            _id: req.user._id
        },
        {
            photoURL: req.file.location,
            photoKey: req.file.key
        }, (err) => {
            if (err) return res.json({
                success: false,
                err
            })
            return res.status(200).send({
                success: true
            })
        })
    })
    //console.log(req.file.location)
})

router.post('/deleteprofilepic', auth, async (req, res) => {
    console.log(req.user)
    // const user = User.findById(req.user._id, err => {
    //     if (err) console.log(err)
    // })
    const user = req.user
    console.log(user)
    if (user.photoKey == 'none'){
        return res.json({
            success: false,
            message: 'No profile photo'
        })
    } else {
        const key = user.photoKey
        console.log(user.email)
        console.log(key)
        try {
            await s3.headObject({Bucket: 'choibucket', Key: key}).promise()
            console.log("File found in S3")
            try {
                await s3.deleteObject({Bucket: 'choibucket', Key: key}).promise()
                console.log('File deleted successfully')
            }
            catch (err){
                console.log('Error in file deleting: '+ JSON.stringify(err))
            }
        } 
        catch (err){
            console.log('File not found error: '+ err.code)
        }
    }
    user.photoURL = 'none'
    user.photoKey = 'none'

})

router.post('/googlesignup', (req, res) => {

})


module.exports = router