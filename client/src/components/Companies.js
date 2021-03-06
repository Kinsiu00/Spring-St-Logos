import React, {Component} from 'react';

class Companies extends Component {
    setCompany = (e) => {
        e.preventDefault()
        this.props.setCurrentCompany(this.props.currentcompany)
    }

    render(){
        const {id, name, image} = this.props.currentcompany;
        return(
            <li class="collection-item avatar" onClick={this.setCompany} key={id}>
            <img src={image} alt="" class="circle"></img>
            <span class="title center-align">{name}</span>
            </li>
        )
    }
}

export default Companies;