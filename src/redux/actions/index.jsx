const changeCharacter = (data) => {
  return {
    type: 'CHANGE_NAME',
    payload: data
  }
}

const changeState = (name) => {
  return async (dispatch) => {
    const api = await fetch(`https://anapioficeandfire.com/api/characters?name=${name}`)
    const [data] = await api.json()
    dispatch(changeCharacter(data))
  }
}

export default changeState
