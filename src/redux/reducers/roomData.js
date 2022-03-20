import rooms from "../../rooms.json";

const initialState = rooms;
function roomData(state = initialState, action) {
  switch (action.type) {
    case "FILTER":
      console.log("ishlayabti");
    default:
      return state;
  }
}
export default roomData;
