document.getElementById('customFileInputButton').addEventListener('click', () => {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', () => {
    const fileInput = document.getElementById('fileInput');
    const fileName = document.getElementById('fileName');
    if (fileInput.files.length > 0) {
        fileName.textContent = `Selected file: ${fileInput.files[0].name}`;
    } else {
        fileName.textContent = '';
    }
});

document.getElementById('convertButton').addEventListener('click', async () => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput.files.length === 0) {
        alert('Please select a file.');
        return;
    }

    const file = fileInput.files[0];
    const fileName = file.name.split('.')[0];
    const fileExtension = file.name.split('.').pop().toLowerCase();

    let pdfDoc;
    if (fileExtension === 'docx') {
        pdfDoc = await convertDocxToPdf(file);
    } else if (['jpg', 'jpeg', 'png', 'bmp', 'gif'].includes(fileExtension)) {
        pdfDoc = await convertImageToPdf(file);
    } else {
        alert('Unsupported file format.');
        return;
    }

    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);

    const downloadLink = document.getElementById('downloadLink');
    downloadLink.href = url;
    downloadLink.download = `${fileName}.pdf`;
    downloadLink.style.display = 'block';
    downloadLink.textContent = 'Download PDF';
});

async function convertDocxToPdf(file) {
    const arrayBuffer = await file.arrayBuffer();
    const zip = new PizZip(arrayBuffer);
    const doc = new window.Docxtemplater().loadZip(zip);
    const text = doc.getFullText();

    const pdfDoc = await PDFLib.PDFDocument.create();
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();
    const fontSize = 12;

    page.drawText(text, {
        x: 50,
        y: height - 4 * fontSize,
        size: fontSize,
        maxWidth: width - 100,
    });

    return pdfDoc;
}

async function convertImageToPdf(file) {
    const imageBytes = await file.arrayBuffer();
    const pdfDoc = await PDFLib.PDFDocument.create();
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();

    let image;
    const fileExtension = file.name.split('.').pop().toLowerCase();
    if (fileExtension === 'png') {
        image = await pdfDoc.embedPng(imageBytes);
    } else {
        image = await pdfDoc.embedJpg(imageBytes);
    }

    const imageDims = image.scaleToFit(width, height);

    page.drawImage(image, {
        x: (width - imageDims.width) / 2,
        y: (height - imageDims.height) / 2,
        width: imageDims.width,
        height: imageDims.height,
    });

    return pdfDoc;
}