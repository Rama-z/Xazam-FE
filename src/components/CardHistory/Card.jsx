import Image from "next/image";
import React from "react";
import styles from "../CardHistory/Card.module.css";
import { useRouter } from "next/router";

import cineone from "../../assets/images/cineone.png";

function CardHistory(props) {
  const router = useRouter();
  return (
    <>
      <div className={`card d-flex pt-4 justify-content-center ${styles["hist"]}`}>
        <div className={` d-flex px-5 ${styles["history-ticket"]}`}>
          <p className={`mb-0 ${styles.date}`}>{props.time}</p>
          <div className={`d-flex justify-content-between ${styles.div1}`}>
            <p className={`mb-0 ${styles.homecoming}`}>{props.movie}</p>
            <Image className={`${styles.logo1}`} src={cineone} alt="/" />
          </div>
        </div>
        <hr />
        <div className={`container d-flex justify-content-between ${styles.collapse}`}>
          {props.status === "Active" ? <div className={` card ${styles.ticketz} ${styles.cursor} `}>{props.status}</div> : <div className={` card ${styles.ticketznon}  `}>{props.status}</div>}
          <div className={` ${styles.cursor}`} aria-controls="example-collapse-text" aria-expanded={open}>
            <div className="d-flex gap-3 align-items-center">
              <p className={` mb-0 ${styles.cursor}`} onClick={() => router.push("/ticketresult")}>
                Show Ticket &nbsp; &#8250;
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardHistory;
