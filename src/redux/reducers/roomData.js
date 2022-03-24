import rooms from "../../rooms.json";

const initialState = { rooms: rooms };
function roomData(state = initialState, action) {
  switch (action.type) {
    case "FILTER":
      return {
        ...state,
        rooms: rooms.filter((i) =>
          (action.payload.roomType === "" ||
            i.room_type === action.payload.roomType) &&
          (i.Max_Capacity === action.payload.guests ||
            action.payload.guests === "") &&
          i.Price <= action.payload.price &&
          i.Size >= action.payload.roomSize1 &&
          i.Size <= action.payload.roomSize2 &&
          action.payload.breakfast === false
            ? i.Price <= action.payload.price
            : i.Breakfast === action.payload.breakfast &&
              (action.payload.pets === false
                ? i.Price <= action.payload.price
                : i.Pets === action.payload.pets)
        ),
      };
    default:
      return state;
  }
}
export default roomData;
