import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import ReservationCard from "./components/ReservationCard";
import { add } from "./features/reservationSlice";

function App() {

  const [reservationInput, setReservationInput] = useState("");
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReservationInput(e.target.value);
  }

  const reservations = useSelector((state: RootState) => state.reservations.value);
  const dispatch = useDispatch();

  const handleAddReservations = () => {
    if(!reservationInput) return;
    
    dispatch(add(reservationInput));
    setReservationInput("");
  }

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((reservation, index) => {
                return <ReservationCard key={reservation} name={reservation} index={index} />;
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={reservationInput} onChange={onChangeInput} />
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          <div className="customer-food-card-container">
            <p>Selena Gomez</p>
            <div className="customer-foods-container">
              <div className="customer-food"></div>
              <div className="customer-food-input-container">
                <input />
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;