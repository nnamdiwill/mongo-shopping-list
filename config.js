exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                         'mongodb://nnamdiwill:s4lw2Etbs@ds049466.mlab.com:49466/mongo-shopping-list' :
                            'mongodb://localhost/shopping-list-dev');
exports.PORT = process.env.PORT || 8080;