import generatePDF, { Resolution, Margin } from "react-to-pdf";

const options = {
  filename: "advanced-example.pdf",
  method: "save",
  // default is Resolution.MEDIUM = 3, which should be enough, higher values
  // increases the image quality but also the size of the PDF, so be careful
  // using values higher than 10 when having multiple pages generated, it
  // might cause the page to crash or hang.
  resolution: Resolution.EXTREME,
  page: {
    // margin is in MM, default is Margin.NONE = 0
    margin: Margin.SMALL,
    // default is 'A4'
    format: "letter",
    // default is 'portrait'
    orientation: "landscape",
  },
  canvas: {
    // default is 'image/jpeg' for better size performance
    mimeType: "image/jpeg",
    qualityRatio: 1,
  },
  // Customize any value passed to the jsPDF instance and html2canvas
  // function. You probably will not need this and things can break,
  // so use with caution.
  overrides: {
    // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
    pdf: {
      compress: true,
    },
    // see https://html2canvas.hertzen.com/configuration for more options
    canvas: {
      useCORS: true,
    },
  },
};

// you can also use a function to return the target element besides using React refs
const getTargetElement = () => document.getElementById("container");

const downloadPdf = () => generatePDF(getTargetElement, options);

const PDFGenerator = ({children}) => {
  return (
    <div>
      <button onClick={downloadPdf} className="border px-2 py-1 border-primary text-primary hover:text-white hover:bg-primary transition-all duration-150">Download Invoice</button>
      <div id="container">
        {children}
      </div>
    </div>
  );
};

export default PDFGenerator;
