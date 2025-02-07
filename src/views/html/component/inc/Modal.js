/* eslint-disable */
import React, { useEffect } from "react";

function Modal(props) {
  const { open, close } = props;
  useEffect(() => {
    if(open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      }
    }
  });
  return (
    <>
      {open ? (
        <section className={`pf_popup ${props.type}`}>
          <div className={`pop_container ${props.popSize}`}>
            <button type="button" className="btn_close svg_icon icon_close" onClick={close}></button>
            {props.children}
          </div>
          <i className="bg_close" onClick={close}></i>
        </section>
      ) : null}
    </>
  );
} 

export default Modal;