import React, { Component } from 'react'
import { connect } from 'react-redux'
import changeState from './redux/actions'
import PropTypes from 'prop-types'

class App extends Component {
  state = {
    name: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleClick = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    const { name } = this.state
    dispatch(changeState(name))
  }

  render() {
    const { name, url } = this.props
    return (
      <main>
        <header>
          <h1>Game of Thunks</h1>
        </header>
        <section>
          <form>
            <input type="text" name="name" onChange={this.handleChange} />
            <button type="submit" onClick={this.handleClick}>
              Pesquisar
            </button>
          </form>
        </section>
        <section>
          {name && <h2>{name}</h2>}
          {url && (
            <a href={url} target="_blank" rel="noreferrer">
              {url}
            </a>
          )}
        </section>
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  name: state.data.name,
  url: state.data.url
})

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(App)
