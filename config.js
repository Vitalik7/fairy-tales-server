const host = 'localhost';

module.exports = {
    port: process.env.port || process.env.PORT || '8080',
    // mongoUrl: process.env.MONGODB_URI || `mongodb://js7:111@ds119969.mlab.com:19969/tale` // Sergii db v2
     mongoUrl: process.env.MONGODB_URI || `mongodb://test:123@ds215759.mlab.com:15759/fairy-tales`  // Vitalik db

    };
