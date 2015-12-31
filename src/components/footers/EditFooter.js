import React, { Component } from 'react'
import { PropTypes } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { editInitialRecipe } from '../../actions/initialRecipe'

class EditFooter extends Component {
  constructor(props) {
    super(props)

    this.saveAndGoToCoffee = this.saveAndGoToCoffee.bind(this)
  }

  saveAndGoToCoffee() {
    this.props.actions.editInitialRecipe(this.props.index)
    this.context.history.replaceState(null, `coffee/${this.props.index}`)
  }

  render() {
    return (
      <div style={styles.container}>
        <a style={styles.icon} onClick={this.saveAndGoToCoffee}>
          <i className="fa fa-check" ></i>
        </a>
      </div>
    )
  }
}

EditFooter.propTypes = {
  index: React.PropTypes.number.isRequired
}

EditFooter.contextTypes = {
  history: PropTypes.history
}

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'row',
    alignItems: 'center'
  },
  icon: {
    flex: 1,
    fontSize: 25,
    textAlign: 'center',
    cursor: 'pointer'
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ editInitialRecipe }, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(EditFooter)
