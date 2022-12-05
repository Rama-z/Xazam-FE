import styles from "../seat/seat.module.css";

const Seat = () => {
  return (
    <>
      <div className="choose-your-seat">
        <form action="payment.html">
          <h2>Choose Your Seat</h2>
          <div className="card-seat">
            <h5>Screen</h5>
            <hr />
            <table>
              <tr>
                <td className="seats">A</td>
                <td>
                  <input type="checkbox" value="A1" />
                </td>
                <td>
                  <input type="checkbox" value="A2" />
                </td>
                <td>
                  <input type="checkbox" value="A3" />
                </td>
                <td>
                  <input type="checkbox" value="A4" />
                </td>
                <td>
                  <input type="checkbox" value="A5" />
                </td>
                <td>
                  <input type="checkbox" value="A6" disabled />
                </td>
                <td>
                  <input type="checkbox" value="A7" />
                </td>
                <td className="seatGap"></td>
                <td>
                  <input type="checkbox" value="A8" />
                </td>
                <td>
                  <input type="checkbox" value="A9" />
                </td>
                <td>
                  <input type="checkbox" value="A10" />
                </td>
                <td>
                  <input type="checkbox" value="A11" />
                </td>
                <td>
                  <input type="checkbox" value="A12" disabled />
                </td>
                <td>
                  <input type="checkbox" value="A13" />
                </td>
                <td>
                  <input type="checkbox" value="A14" />
                </td>
              </tr>
              <tr>
                <td className="seats">B</td>
                <td>
                  <input type="checkbox" value="B1" />
                </td>
                <td>
                  <input type="checkbox" value="B2" disabled />
                </td>
                <td>
                  <input type="checkbox" value="B3" disabled />
                </td>
                <td>
                  <input type="checkbox" value="B4" />
                </td>
                <td>
                  <input type="checkbox" value="B5" />
                </td>
                <td>
                  <input type="checkbox" value="B6" />
                </td>
                <td>
                  <input type="checkbox" value="B7" />
                </td>
                <td className="seatGap"></td>
                <td>
                  <input type="checkbox" value="B8" />
                </td>
                <td>
                  <input type="checkbox" value="B9" />
                </td>
                <td>
                  <input type="checkbox" value="B10" />
                </td>
                <td>
                  <input type="checkbox" value="B11" />
                </td>
                <td>
                  <input type="checkbox" value="B12" />
                </td>
                <td>
                  <input type="checkbox" value="B13" />
                </td>
                <td>
                  <input type="checkbox" value="B14" />
                </td>
              </tr>
              <tr>
                <td className="seats">C</td>
                <td>
                  <input type="checkbox" value="C1" />
                </td>
                <td>
                  <input type="checkbox" value="C2" />
                </td>
                <td>
                  <input type="checkbox" value="C3" />
                </td>
                <td>
                  <input type="checkbox" value="C4" />
                </td>
                <td>
                  <input type="checkbox" value="C5" />
                </td>
                <td>
                  <input type="checkbox" value="C6" />
                </td>
                <td>
                  <input type="checkbox" value="C7" />
                </td>
                <td className="seatGap"></td>
                <td>
                  <input type="checkbox" value="C8" />
                </td>
                <td>
                  <input type="checkbox" value="C9" disabled />
                </td>
                <td>
                  <input type="checkbox" value="C10" />
                </td>
                <td>
                  <input type="checkbox" value="C11" />
                </td>
                <td>
                  <input type="checkbox" value="C12" disabled />
                </td>
                <td>
                  <input type="checkbox" value="C13" />
                </td>
                <td>
                  <input type="checkbox" value="C14" />
                </td>
              </tr>
              <tr>
                <td className="seats">D</td>
                <td>
                  <input type="checkbox" value="D1" />
                </td>
                <td>
                  <input type="checkbox" value="D2" disabled />
                </td>
                <td>
                  <input type="checkbox" value="D3" />
                </td>
                <td>
                  <input type="checkbox" value="D4" />
                </td>
                <td>
                  <input type="checkbox" value="D5" />
                </td>
                <td>
                  <input type="checkbox" value="D6" />
                </td>
                <td>
                  <input type="checkbox" value="D7" />
                </td>
                <td className="seatGap"></td>
                <td>
                  <input type="checkbox" value="D8" />
                </td>
                <td>
                  <input type="checkbox" value="D9" disabled />
                </td>
                <td>
                  <input type="checkbox" value="D10" />
                </td>
                <td>
                  <input type="checkbox" value="D11" />
                </td>
                <td>
                  <input type="checkbox" value="D12" disabled />
                </td>
                <td>
                  <input type="checkbox" value="D13" />
                </td>
                <td>
                  <input type="checkbox" value="D14" />
                </td>
              </tr>
              <tr>
                <td className="seats">E</td>
                <td>
                  <input type="checkbox" value="E1" />
                </td>
                <td>
                  <input type="checkbox" value="E2" />
                </td>
                <td>
                  <input type="checkbox" value="E3" />
                </td>
                <td>
                  <input type="checkbox" value="E4" disabled />
                </td>
                <td>
                  <input type="checkbox" value="E5" />
                </td>
                <td>
                  <input type="checkbox" value="E6" />
                </td>
                <td>
                  <input type="checkbox" value="E7" />
                </td>
                <td className="seatGap"></td>
                <td>
                  <input type="checkbox" value="E8" />
                </td>
                <td>
                  <input type="checkbox" value="E9" />
                </td>
                <td>
                  <input type="checkbox" value="E10" />
                </td>
                <td>
                  <input type="checkbox" value="E11" />
                </td>
                <td>
                  <input type="checkbox" value="E12" />
                </td>
                <td>
                  <input type="checkbox" value="E13" />
                </td>
                <td>
                  <input type="checkbox" value="E14" />
                </td>
              </tr>
              <tr>
                <td className="seats">F</td>
                <td>
                  <input type="checkbox" value="F1" />
                </td>
                <td>
                  <input type="checkbox" value="F2" />
                </td>
                <td>
                  <input type="checkbox" value="F3" />
                </td>
                <td>
                  <input type="checkbox" value="F4" />
                </td>
                <td>
                  <input type="checkbox" value="F5" />
                </td>
                <td>
                  <input type="checkbox" value="F6" />
                </td>
                <td>
                  <input type="checkbox" value="F7" />
                </td>
                <td className="seatGap"></td>
                <td>
                  <input type="checkbox" value="F8" />
                </td>
                <td>
                  <input type="checkbox" value="F9" />
                </td>
                <td>
                  <input type="checkbox" value="F10" />
                </td>
                <td>
                  <input type="checkbox" value="F11" />
                </td>
                <td>
                  <input type="checkbox" value="F12" />
                </td>
                <td>
                  <input type="checkbox" value="F13" disabled />
                </td>
                <td>
                  <input type="checkbox" value="F14" />
                </td>
              </tr>
              <tr>
                <td className="seats">G</td>
                <td>
                  <input type="checkbox" value="G1" />
                </td>
                <td>
                  <input type="checkbox" value="G2" />
                </td>
                <td>
                  <input type="checkbox" value="G3" disabled />
                </td>
                <td>
                  <input type="checkbox" value="G4" />
                </td>
                <td>
                  <input type="checkbox" value="G5" />
                </td>
                <td>
                  <input type="checkbox" value="C6" />
                </td>
                <td>
                  <input type="checkbox" value="G7" />
                </td>
                <td className="seatGap"></td>
                <td>
                  <input type="checkbox" value="G8" />
                </td>
                <td>
                  <input type="checkbox" value="G9" />
                </td>
                <td>
                  <input type="checkbox" value="G10" />
                </td>
                <td>
                  <input type="checkbox" value="G11" />
                </td>
                <td>
                  <input type="checkbox" value="G12" />
                </td>
                <td>
                  <input type="checkbox" value="G13" />
                </td>
                <td>
                  <input type="checkbox" value="G14" />
                </td>
              </tr>
              <tr className="seats-number">
                <td></td>
                <td style="height: 40px">1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td className="seatGap"></td>
                <td>8</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
                <td>14</td>
              </tr>
            </table>
            <div className="seating-key">
              <h4>Seating key</h4>
              <div className="row">
                <div className="col-md-1 col-1">
                  <div className="available"></div>
                </div>
                <div className="col-md-2 col-5">
                  <p>Available</p>
                </div>
                <div className="col-md-1 col-1">
                  <div className="selected"></div>
                </div>
                <div className="col-md-2 col-5">
                  <p>Selected</p>
                </div>
                <div className="col-md-1 col-1">
                  <div className="sold"></div>
                </div>
                <div className="col-md-2 col-5">
                  <p>Sold</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col d-none d-md-block">
              <a href="list.html" className="btn btn-your-movie py-2">
                Change your movie
              </a>
            </div>
            <div className="col mb-5 text-end">
              <a href="payment.html" className="btn btn-checkout py-2">
                Checkout now
              </a>
            </div>
          </div>
        </form>
      </div>
      ;
    </>
  );
};

export default Seat;
