import { SET_PETS, DELETE_PET, UPDATE_PET } from '../actions/pets'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_PETS:
      return payload
    case DELETE_PET:
      return state.filter((pet) => {
        return pet.id !== payload
      })
    // return [...state, payload]
    case UPDATE_PET:
      return state.map((pet) => {
        if (pet.id !== payload.id) {
          return pet
        } else {
          console.log(payload)
          return payload
        }
      })
    default:
      return state
  }
}

export default reducer
