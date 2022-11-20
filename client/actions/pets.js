import { getPets, addNewPet, updatePet, deletePet } from '../apiClient'

export const SET_PETS = 'SET_PETS'
// export const ADD_PET = 'ADD_PET'
export const DELETE_PET = 'DELETE_PET'
export const UPDATE_PET = 'UPDATE_PET'

//GET
export function fetchPets() {
  return (dispatch) => {
    return getPets().then((pets) => {
      dispatch(setPets(pets))
    })
  }
}

export function setPets(pets) {
  return {
    type: SET_PETS,
    payload: pets,
  }
}

//ADD
export function addMorePet(pet) {
  return (dispatch) => {
    return addNewPet(pet).then((pet) => {
      dispatch(setPets(pet))
    })
  }
}

//DELETE
export function removePet(id) {
  return (dispatch) => {
    return deletePet(id).then(() => {
      dispatch(deletePets(id))
    })
  }
}

export function deletePets(id) {
  return {
    type: DELETE_PET,
    payload: id,
  }
}

//UPDATE
export function updatePets(id, newImfo) {
  return (dispatch) => {
    console.log(newImfo)
    return updatePet(id, { location: newImfo }).then((pet) => {
      console.log(pet)
      dispatch(patchPet(pet))
    })
  }
}

export function patchPet(pet) {
  return {
    type: UPDATE_PET,
    payload: pet,
  }
}
