import "./App.css";
import QRCode from "react-qr-code";
import { QrScanner } from "@yudiel/react-qr-scanner";

function App() {
  return (
    <div className="App">
      <h1>QR Spike!</h1>
      <QRCode size={200} bgColor="white" fgColor="black" value="1234" />
      <QrScanner
        className="scanner"
        constraints={{ facingMode: "environment" }}
        onDecode={(result) => console.log(result)}
        onError={(error) => console.log(error?.message)}
      />
    </div>
  );
}

export default App;
