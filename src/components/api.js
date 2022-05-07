import React from "react";
import "./css/api.css";

export default function home(props) {
  return (
    <>
      <div class="IshanSingla-dark">
        <div>
          <h2>
            Key Checker #Private [<span id="reqType">Get</span>]
          </h2>
          <ul>
            <li>
              <a href="/api/key?Key=ishansss&Proxy=13.432.34" target="_blank">
                /api/key?Key=key&Proxy=13.432.34
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2>
            Mess Qr [<span id="reqType">Get</span>]
          </h2>
          <ul>
            <li>
              <a href="/api/mess?roll=2110990648&time=1" target="_blank">
                /api/mess?roll=2110990648&time=1
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2>
            Carbon Maker [<span id="reqType">Get</span>]
          </h2>
          <ul>
            <li>
              <a href="/api/carbon?code=Ishan" target="_blank">
                /api/carbon?code=Ishan
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2>
            Morse Code [<span id="reqType">GET</span>]
          </h2>
          <ul>
            <li>
              <a href="/api/morse?encode=ishan" target="_blank">
                /api/morse?encode=ishan
              </a>
            </li>
            <li>
              <a href="/api/morse?decode=.. ... .... .- -. " target="_blank">
                /api/morse?decode=.. ... .... .- -.{" "}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2>
            Lyrics [<span id="reqType">GET</span>]
          </h2>
          <ul>
            <li>
              <a href="/api/lyrics?song=blinding+lights" target="_blank">
                /api/lyrics?song=blinding+lights
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2>
            QR Code [<span id="reqType">GET</span>]
          </h2>
          <ul>
            <li>
              <a href="/api/qr?text=sampleText" target="_blank">
                /qr/gen?text=sampleText
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2>
            Notes Generator [<span id="reqType">GET</span>]
          </h2>
          <ul>
            <li>
              <a href="/api/notes?text=InducedOfficial" target="_blank">
                /api/notes?text=InducedOfficial
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2>
            Captcha Generator [<span id="reqType">GET</span>]
          </h2>
          <ul>
            <li>
              <a href="/api/captcha" target="_blank">
                /captcha
              </a>
            </li>
            <li>
              <a href="/api/captcha?options=6&length=5" target="_blank">
                /captcha?options=6&ƒlength=5
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2>
            Logo Generator [<span id="reqType">POST</span>]
          </h2>
          <ul>
            <li>
              <a href="/api/logo?text=Aditya" target="_blank">
                /logo?text=Aditya
              </a>
            </li>
          </ul>
          <div className="codeBtns">
            <button id="python">Python</button>
            <button id="node.js">Node.JS</button>
            <button id="golang">Golang</button>
            <button id="dart">Dart</button>
          </div>
          <div className="fileName"></div>
          <pre className="codeArea"></pre>
          <button
            id="copyCode"
            data-clipboard-action="copy"
            data-clipboard-target=".codeArea"
          >
            Copy Code
          </button>
        </div>
        <footer>
          <p>
            Made with 💖 by{" "}
            <a href="https://telegram.dog/InducedOfficial" target="_blank">
              InducedOfficial
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}
