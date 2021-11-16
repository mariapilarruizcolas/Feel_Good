import React from 'react';
import { useEffect } from 'react';

export default function Modal(props) {
  function close() {
    <div>Close</div>;
  }
  function open() {
    <div>Open</div>;
  }

  useEffect(() => {
    props.buttonOpen.current.onclick = open;
  });

  return (
    <div>
      <h1>Adding a new Person</h1>
      <button type="button" onClick={close}>
        Close
      </button>
    </div>
  );
}
