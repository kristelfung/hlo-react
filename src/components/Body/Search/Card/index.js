import React, { Component } from 'react';

class Card extends Component {
    render(){
        return(
            <div class="search-card">
                <a href="profile.html">
                    <span class="link-spanner"></span>
                </a>
                <img src="images/search/dp.jpg" class="card-dp"/>
                <div class="card-desc">
                    <h4>Jane Doe</h4>
                    <p>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star-half-o" aria-hidden="true"></i>
                        (10)
                    </p>
                    <p>
                        <span class="label label-success">Wan Chai</span>
                        <span class="label label-success">Central</span>
                    </p>
                    <p class="card-about">I am a nursing student studying at HKU, living in Central. Looking for...</p>
                </div>
            </div>
        );
    }
}

export default Card;