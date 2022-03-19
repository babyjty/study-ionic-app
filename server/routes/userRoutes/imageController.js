const aws = require('aws-sdk')
const multer = require('multer')
const multers3 = require('multer-s3')
const config = require('../../config/key')

const s3 = new aws.S3({
    accessKeyId: config.S3_ACCESS_KEY,
    secretAccessKey: config.S3_SECRETACCESS,
    region: config.S3_BUCKET_REGION
})

const upload = (bucketName) => {
    storage: multers3({
        s3,
        bucket: bucketName,
        metadata: function (req, file, cb) {
            cb(null, {fieldName: file.fieldname})
        },
        key: function (req, file, cb) {
            cb(null, 'image.jpeg')
        }
    })
}


exports.setProfilePic = (req, res, next) => {
    console.log(req.files)

    const uploadSingle = upload('choibucket').single(
        "image-upload"
    )

    uploadSingle(req, res, err)

    res.status(200).json({ data: req.files})
}