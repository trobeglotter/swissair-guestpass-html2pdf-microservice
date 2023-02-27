
let docContent = document.getElementById('doc');

var opt = {
    margin: .5,
    filename: 'myfile.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
};
// Uncomment to print pdf
html2pdf().from(docContent).set(opt).save();

// after saving what to do to make the gmail connection?