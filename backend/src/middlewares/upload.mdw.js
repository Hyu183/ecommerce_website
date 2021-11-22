import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/');
    },
    filename: function (req, file, cb) {
        const filename = file.originalname.split('.');
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, filename[0] + '-' + uniqueSuffix + '.' + filename[1]);
    },
});

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
    ) {
        cb(null, true);
    } else {
        cb(null, false);
        return cb(new Error('Wrong format: please use .png/.jpg/.jpeg'));
    }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

export default upload;
