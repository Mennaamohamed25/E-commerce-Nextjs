import React from "react";
import { Dropdown } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import styles from "../../styles/Cart.module.css";

export default function Cart() {
  return (
    <>
      <Dropdown className="position-relative">
        <Dropdown.Toggle variant="transparent" id="dropdown-basic">
          <FaShoppingCart color="#383838" />
          <span className={styles.BadgeColor}>1</span>
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ minWidth: 325 }}>
          <span className={styles.allCart}>
            <img src="/productOne.png" className={styles.imgCart} />
            <div className={styles.cartDetails}>
              <span>Nike Jordan Kids Air</span>
              <span>
                Price : EGY <span className={styles.cartPrice}>55</span>
              </span>
            </div>
            <AiFillDelete className={styles.cartIcon} />
          </span>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
