import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFood, removeCustomer } from "../features/customerSlice";

interface customerType {
    id: string,
    name: string,
    food: string[]
}

interface CustomerCardTypes {
    customer: customerType,
    index: number
}

const CustomerCard = ({customer, index}: CustomerCardTypes) => {
    const [foodForm, setFoodForm] = useState({
        id: '',
        food: '',
    })
    const dispatch = useDispatch();
    const onClick = () => {
        if(window.confirm(`${customer.name}을 예약자 명단에서 삭제하시겠습니까 ?`)) {
            dispatch(removeCustomer(index));
        }
    }
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFoodForm({
            ...foodForm,
            id: customer.id,
            food: e.target.value
        })
    }
    const addFoodClick = () => {
        if(!foodForm.food)
        if(window.confirm(`${foodForm.food}를 주문 하시겠습니까 ?`)) {
            dispatch(addFood(foodForm));
        }
    }
    return (
        <div className="customer-food-card-container">
            <p onClick={onClick}>{customer.name}</p>
            <div className="customer-foods-container">
            <div className="customer-food">{customer.food.join(' ')}</div>
            <div className="customer-food-input-container">
                <input value={foodForm.food} onChange={onChangeInput}/>
                <button onClick={addFoodClick}>Add</button>
            </div>
            </div>
      </div>
    );
};

export default CustomerCard;