import "./App.css";
import QRCode from "react-qr-code";
import { QrScanner } from "@yudiel/react-qr-scanner";

function App() {
  return (
    <div className="App">
      <h1>QR Spike!</h1>
      <QRCode
        size={200}
        bgColor="white"
        fgColor="black"
        value="https://www.wikipedia.org"
      />
      <div id="scanner-container">
        <QrScanner
          videoStyle={{
            objectFit: "cover",
          }}
          className="scanner"
          constraints={{ facingMode: "environment" }}
          onDecode={(result) => alert(`${result}`)}
          onError={(error) => console.log(error?.message)}
        />
      </div>
    </div>
  );
}

export default App;
