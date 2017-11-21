import React, { Component } from 'react';

class Stars extends Component {
    constructor(props){
        super(props);
        this.final = false;
        this.mouseEnter = this.mouseEnter.bind(this);
        this.onSelect = this.onSelect.bind(this);
    }
    

    mouseEnter(stars){
        if(this.props.setter && !this.final) {
            this.props.onChange(stars);
        }else    
            return;
    }

    onSelect(stars){
        if(this.props.setter) {
            this.props.onChange(stars);
            this.final = true;
        }else    
            return;
    }

    render() {
        let stars = [];
        if(this.props.setter){
            stars.push(<i onClick={() => this.onSelect(1)} onMouseEnter={() => this.mouseEnter(1)} className={this.props.stars < 1 ? "fa fa-star-o" : "fa fa-star"} aria-hidden="true" ></i>);
            stars.push(<i onClick={() => this.onSelect(2)} onMouseEnter={() => this.mouseEnter(2)} className={this.props.stars < 2 ? "fa fa-star-o" : "fa fa-star"} aria-hidden="true" ></i>);
            stars.push(<i onClick={() => this.onSelect(3)} onMouseEnter={() => this.mouseEnter(3)} className={this.props.stars < 3 ? "fa fa-star-o" : "fa fa-star"} aria-hidden="true" ></i>);
            stars.push(<i onClick={() => this.onSelect(4)} onMouseEnter={() => this.mouseEnter(4)} className={this.props.stars < 4 ? "fa fa-star-o" : "fa fa-star"} aria-hidden="true" ></i>);
            stars.push(<i onClick={() => this.onSelect(5)} onMouseEnter={() => this.mouseEnter(5)} className={this.props.stars < 5 ? "fa fa-star-o" : "fa fa-star"} aria-hidden="true" ></i>);            
        }else{
            let i;
            for (i=0; i < Math.floor(this.props.stars); i++) {
                stars.push(<i className="fa fa-star" aria-hidden="true" ></i>);
            }
            if(this.props.stars - i > 0){
                stars.push(<i className="fa fa-star-half-o" aria-hidden="true" ></i>);
            }
            for (i=0; i < 5-Math.ceil(this.props.stars); i++) {
                stars.push(<i className="fa fa-star-o" aria-hidden="true" ></i>);
            }
        }

        return (
            <div>
                {stars}
            </div>
        );
    }
}

export default Stars;