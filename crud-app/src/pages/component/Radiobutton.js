import React from "react";

export default function Radio() {
  return (
    <div className="radiobutton">
        <div onChange={event => this.setMenuName(event)}>
            <input type="radio" value="Kopi Hitam" name="coffee" /> Kopi Hitam
            <input type="radio" value="Kopi Putih" name="coffee"/> Kopi Putih
        </div>
    </div>
  );
}