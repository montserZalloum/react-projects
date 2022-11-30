import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import useHttp from '../../../hooks/useHttp';
import { uiActions } from '../../../store/ui-slice';
import RemoveModal from '../ui/RemoveModal';
import BikeCol from './BikeCol';

function BikesList(props) {
    const [selectedToRemove,setSelectedToRemove] = useState(null);
    const {sendRequest} = useHttp();
    const dispatch = useDispatch()

    const onRemoveHandler = (bikeID) => setSelectedToRemove(bikeID);

    const submitRemoveHandler = () => {
        sendRequest({method: 'DELETE',url: `bike/${selectedToRemove}`},afterRemoveBike)
    }

    const afterRemoveBike = () => {
        onRemoveHandler(null);
        dispatch(uiActions.showNotification('the bike deleted successfully!'))
        props.refreshData();
    }


  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((col,index) => {
            return <BikeCol
              key={col._id}
              id={col._id}
              name={col.name}
              price={col.price}
              quantity={col.quantity}
              onRemove={onRemoveHandler}
            />;
          })}
        </tbody>
      </table>
      <RemoveModal onSubmitRemove={submitRemoveHandler} onClose={()=>onRemoveHandler(null)} isOpen={selectedToRemove !== null}  />
    </>
  )
}

export default BikesList