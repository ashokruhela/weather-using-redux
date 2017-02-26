import React, {Component} from 'React';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchWeather} from '../action'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''}
    }

    componentDidMount() {
    }

    onInputChange(event) {
        event.preventDefault();
        this.setState({
            term: event.target.value
        })
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({
            term: ''
        })
    }

    render(){
        return (
            <form className="input-group" onSubmit={this.onFormSubmit.bind(this)}>
                <input 
                    placeholder = "Enter the city to search weather"
                    className = "form-control"
                    value = {this.state.term}
                    onChange = {this.onInputChange.bind(this)}
                />
                <span className="input-group-btn">
                    <button className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchWeather}, dispatch);
}
// export default SearchBar;
export default connect(null, mapDispatchToProps)(SearchBar);