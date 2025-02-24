/*========================================*/
//  Big SCSS Comment
//  
//  Put your notes here.
//  
/*========================================*/

/* ================== */
/* ===== Imports ===== */
/* ================== */
    const imgToPDF = require('image-to-pdf');
    const fs = require('fs');

/* ============================= */
/* ===== Command Arguments ===== */
/* ============================= */
    const fileName = process.argv[2];

    //Command warnings
    if (!fileName) {
        throw "Please provide fileName as the second argument";
    }

/* ================================= */
/* ===== Image to PDF Conversion ===== */
/* ================================= */
    async function pdfConversion () {
        setTimeout(() => {
            const image = fs.readFileSync('screenshot-files/' + fileName + '.png');

            imgToPDF(image, imgToPDF.sizes.A4)
                .pipe(fs.createWriteStream('screenshot-files/' + fileName + '.pdf'))
        }, 5000);
    }



/* ============================= */
/* ===== CSS Comment Header ===== */
/* ============================= */

    //Create second PDF version
    pdfConversion();