import { useDispatch } from 'react-redux';
import { addCustomer } from '../features/customerSlice';
import { remove } from '../features/reservationSlice';
import { v4 as uuid } from 'uuid';

interface ReservationCardTypes {
    name: string;
    index: number;
}

const ReservationCard = ({name, index}: ReservationCardTypes) => {
    const dispatch = useDispatch();
    const onClick = () => {
        console.log("reservation", name);
        if(window.confirm(`${name}을 예약자 명단에 올리시겠습니까 ?`)) {
            dispatch(remove(index));
            dispatch(addCustomer({
                id: uuid(),
                name,
                food: []
            }));
        }
    }
    
    return (
        <div className="reservation-card-container" onClick={onClick}>{name}</div>
    );
};

export default ReservationCard;