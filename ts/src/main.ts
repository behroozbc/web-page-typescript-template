
const outputElement = document.getElementById('output');
if (outputElement) {
  outputElement.innerHTML = `<h1>ts-demo-webpack</h1>
  Current date and time: ${new Date().toISOString()}
  `;
}