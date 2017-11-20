import React, { Component } from 'react';

class Stars extends Component {
    render() {
        var num;
        //console.log(this.props.star);
        if (this.props.stars === 0){
            num=        
            <p>
                <i className="fa fa-star-half-o" aria-hidden="true" ></i>
                <i className="fa fa-star-o" aria-hidden="true" ></i>
                <i className="fa fa-star-o" aria-hidden="true" ></i>
                <i className="fa fa-star-o" aria-hidden="true" ></i>
                <i className="fa fa-star-o" aria-hidden="true" ></i>
            </p>
        }
        else if (this.props.stars === 0.5){
            num=        
            <p>
                <i className="fa fa-star-half-o" aria-hidden="true" ></i>
                <i className="fa fa-star-o" aria-hidden="true" ></i>
                <i className="fa fa-star-o" aria-hidden="true" ></i>
                <i className="fa fa-star-o" aria-hidden="true" ></i>
                <i className="fa fa-star-o" aria-hidden="true" ></i>
            </p>
        }
        else if(this.props.stars === 1){
            num=
            <p>
                <i className="fa fa-star" aria-hidden="true" ></i>
                <i className="fa fa-star-o" aria-hidden="true" ></i>
                <i className="fa fa-star-o" aria-hidden="true" ></i>
                <i className="fa fa-star-o" aria-hidden="true" ></i>
                <i className="fa fa-star-o" aria-hidden="true" ></i>
            </p>            }
        else if(this.props.stars === 1.5){
            num=
            <p>
                <i className="fa fa-star" aria-hidden="true" ></i>
                <i className="fa fa-star-half-o" aria-hidden="true" ></i>
                <i className="fa fa-star-o" aria-hidden="true" ></i>
                <i className="fa fa-star-o" aria-hidden="true" ></i>
                <i className="fa fa-star-o" aria-hidden="true" ></i>
            </p>
        }
        else if(this.props.stars === 2){
            num=
            <p>
                <i className="fa fa-star" aria-hidden="true" ></i>
                <i className="fa fa-star" aria-hidden="true" ></i>
                <i className="fa fa-star-o" aria-hidden="true" ></i>
                <i className="fa fa-star-o" aria-hidden="true" ></i>
                <i className="fa fa-star-o" aria-hidden="true" ></i>
            </p>
        }
        else if(this.props.stars === 2.5){
            num=
            <p>
                <i className="fa fa-star" aria-hidden="true" ></i>
                <i className="fa fa-star" aria-hidden="true" ></i>
                <i className="fa fa-star-half-o" aria-hidden="true" ></i>
                <i className="fa fa-star-o" aria-hidden="true" ></i>
                <i className="fa fa-star-o" aria-hidden="true" ></i>
            </p>
        }
        else if(this.props.stars === 3){
            num=
            <p>
                <i className="fa fa-star" aria-hidden="true" ></i>
                <i className="fa fa-star" aria-hidden="true" ></i>
                <i className="fa fa-star" aria-hidden="true" ></i>
                <i className="fa fa-star-o" aria-hidden="true" ></i>
                <i className="fa fa-star-o" aria-hidden="true" ></i>
            </p>
        }
        else if(this.props.stars === 3.5){
            num=
            <p>
                <i className="fa fa-star" aria-hidden="true" ></i>
                <i className="fa fa-star" aria-hidden="true" ></i>
                <i className="fa fa-star" aria-hidden="true" ></i>
                <i className="fa fa-star-half-o" aria-hidden="true" ></i>
                <i className="fa fa-star-o" aria-hidden="true" ></i>
            </p>
        }
        else if(this.props.stars === 4){
            num=
            <p>
                <i className="fa fa-star" aria-hidden="true" ></i>
                <i className="fa fa-star" aria-hidden="true" ></i>
                <i className="fa fa-star" aria-hidden="true" ></i>
                <i className="fa fa-star" aria-hidden="true" ></i>
                <i className="fa fa-star-o" aria-hidden="true" ></i>
            </p>
        }
        else if(this.props.stars === 4.5){
            num=
            <p>
                <i className="fa fa-star" aria-hidden="true" ></i>
                <i className="fa fa-star" aria-hidden="true" ></i>
                <i className="fa fa-star" aria-hidden="true" ></i>
                <i className="fa fa-star" aria-hidden="true" ></i>
                <i className="fa fa-star-half-o" aria-hidden="true" ></i>
            </p>
        }
        else if(this.props.stars === 5){
            num=
            <p>
                <i className="fa fa-star" aria-hidden="true" ></i>
                <i className="fa fa-star" aria-hidden="true" ></i>
                <i className="fa fa-star" aria-hidden="true" ></i>
                <i className="fa fa-star" aria-hidden="true" ></i>
                <i className="fa fa-star" aria-hidden="true" ></i>
            </p>
        }
  
        return (
            <div>
                {num}
            </div>
            
        );

    }
}

export default Stars;