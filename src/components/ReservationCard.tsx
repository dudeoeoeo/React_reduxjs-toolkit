import { useDispatch } from 'react-redux';
import { remove } from '../features/reservationSlice';

interface ReservationCardTypes {
    name: string;
    index: number;
}

const ReservationCard = ({name, index}: ReservationCardTypes) => {
    const dispatch = useDispatch();
    const onClick = () => {
        console.log("reservation", name);
        if(window.confirm(`${name} 예약을 취소하시겠습니까 ?`))
            dispatch(remove(index));
    }
    
    return (
        <div className="reservation-card-container" onClick={onClick}>{name}</div>
    );
};

export default ReservationCard;