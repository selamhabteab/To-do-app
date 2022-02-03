import React, {Component} from 'react';

class Header extends Component{
    
    render(){
        const date = new Date();
        const hours = date.getHours();
        let timeOfDay
      
        if (hours < 12) {
            timeOfDay = "Morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "Afternoon"
        } else {
            timeOfDay = "Night"
        }
        return(
            <div className="header">
                <p>Good {timeOfDay}!</p>
                <p>Your Very Own To-Do List!</p>
            </div>
        )
    }
}

export default Header;
