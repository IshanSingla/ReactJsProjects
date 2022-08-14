import React, { useState } from "react";

export default function Faqs() {
  const [readMore, setReadMore] = useState([false, true]);
  console.log(readMore[0]);
  let extraContent = [
    readMore[0] && (
      <p className="extra-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
        consectetur neque ab porro quasi culpa nulla rerum quis minus
        voluptatibus sed hic ad quo sint, libero commodi officia aliquam!
        Maxime.
      </p>
    ),
  ];
  const non = (
    <svg
      style={{ marginLeft: "50px" }}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      className="bi bi-arrows-angle-contract"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707zM15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707z"
      />
    </svg>
  );
  const yesn = (
    <svg
      style={{ marginLeft: "50px" }}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      className="bi bi-arrows-angle-expand"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"
      />
    </svg>
  );

  const linkName = [readMore[0] ? non : yesn];

  const [readMore1, setReadMore1] = useState(false);
  let extraContent1 = readMore1 ? (
    <>
      <br />
      <br />
      <p className="extra-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
        consectetur neque ab porro quasi culpa nulla rerum quis minus
        voluptatibus sed hic ad quo sint, libero commodi officia aliquam!
        Maxime.
      </p>
    </>
  ) : (
    <></>
  );
  const linkName1 = readMore1 ? (
    <svg
      style={{ marginLeft: "50px" }}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      className="bi bi-arrows-angle-contract"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707zM15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707z"
      />
    </svg>
  ) : (
    <svg
      style={{ marginLeft: "50px" }}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      className="bi bi-arrows-angle-expand"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"
      />
    </svg>
  );

  const [readMore2, setReadMore2] = useState(false);
  let extraContent2 = readMore2 ? (
    <>
      <br />
      <br />
      <p className="extra-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
        consectetur neque ab porro quasi culpa nulla rerum quis minus
        voluptatibus sed hic ad quo sint, libero commodi officia aliquam!
        Maxime.
      </p>
    </>
  ) : (
    <></>
  );
  const linkName2 = readMore2 ? (
    <svg
      style={{ marginLeft: "50px" }}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      className="bi bi-arrows-angle-contract"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707zM15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707z"
      />
    </svg>
  ) : (
    <svg
      style={{ marginLeft: "50px" }}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      className="bi bi-arrows-angle-expand"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"
      />
    </svg>
  );

  const [readMore3, setReadMore3] = useState(false);
  let extraContent3 = readMore3 ? (
    <>
      <br />
      <br />
      <p className="extra-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
        consectetur neque ab porro quasi culpa nulla rerum quis minus
        voluptatibus sed hic ad quo sint, libero commodi officia aliquam!
        Maxime.
      </p>
    </>
  ) : (
    <></>
  );
  const linkName3 = readMore3 ? (
    <svg
      style={{ marginLeft: "50px" }}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      className="bi bi-arrows-angle-contract"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707zM15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707z"
      />
    </svg>
  ) : (
    <svg
      style={{ marginLeft: "50px" }}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      className="bi bi-arrows-angle-expand"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"
      />
    </svg>
  );

  const [readMore4, setReadMore4] = useState(false);
  let extraContent4 = readMore4 ? (
    <>
      <br />
      <br />
      <p className="extra-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
        consectetur neque ab porro quasi culpa nulla rerum quis minus
        voluptatibus sed hic ad quo sint, libero commodi officia aliquam!
        Maxime.
      </p>
    </>
  ) : (
    <></>
  );
  const linkName4 = readMore4 ? (
    <svg
      style={{ marginLeft: "50px" }}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      className="bi bi-arrows-angle-contract"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707zM15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707z"
      />
    </svg>
  ) : (
    <svg
      style={{ marginLeft: "50px" }}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      className="bi bi-arrows-angle-expand"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"
      />
    </svg>
  );

  const [readMore5, setReadMore5] = useState(false);
  let extraContent5 = readMore5 ? (
    <>
      <br />
      <br />
      <p className="extra-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
        consectetur neque ab porro quasi culpa nulla rerum quis minus
        voluptatibus sed hic ad quo sint, libero commodi officia aliquam!
        Maxime.
      </p>
    </>
  ) : (
    <></>
  );
  const linkName5 = readMore5 ? (
    <svg
      style={{ marginLeft: "50px" }}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      className="bi bi-arrows-angle-contract"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707zM15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707z"
      />
    </svg>
  ) : (
    <svg
      style={{ marginLeft: "50px" }}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      className="bi bi-arrows-angle-expand"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"
      />
    </svg>
  );

  return (
    <div className="container">
      <div className="row justify-content-between">
        <h3 className="pl-3 md-2">InducedOfficial's (FAQs)</h3>
        <br />
        <br />
        <br />
        <div className="col-md-7 pl-3">
          <h5 className="font-weight-bold spanborder">
            <span>License and Subscription {readMore[0]}</span>{" "}
          </h5>
          <div
            className="pl-4 "
            onClick={() => {
              setReadMore([!readMore[0]]);
            }}
          >
            <strong>I already have an account, how do I upgrade1?</strong>{" "}
            {linkName[0]}
            <br />
            <br /> {extraContent[0]}
          </div>
          <hr />
          <div
            className="pl-4 "
            onClick={() => {
              setReadMore2(!readMore2);
            }}
          >
            <strong>I already have an account, how do I upgrade2?</strong>{" "}
            {linkName2} {extraContent2}
          </div>
          <hr />
          <div
            className="pl-4 "
            onClick={() => {
              setReadMore3(!readMore3);
            }}
          >
            <strong>I already have an account, how do I upgrade3?</strong>{" "}
            {linkName3} {extraContent3}
          </div>
          <hr />
          <div
            className="pl-4 "
            onClick={() => {
              setReadMore4(!readMore4);
            }}
          >
            <strong>I already have an account, how do I upgrade4?</strong>{" "}
            {linkName4} {extraContent4}
          </div>
          <hr />
          <div
            className="pl-4 "
            onClick={() => {
              setReadMore5(!readMore5);
            }}
          >
            <strong>I already have an account, how do I upgrade5?</strong>{" "}
            {linkName5} {extraContent5}
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}
