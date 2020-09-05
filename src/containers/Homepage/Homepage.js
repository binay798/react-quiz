import React from 'react';
import wave from '../../assets/wave.svg'
import classes from './Homepage.module.css';
import { GlobalContext } from '../../Store/Store';
import Categories from '../../components/Homepage/Categories/Categories';


class Homepage extends React.Component {

    state = {
        loadMore:false
    }

    static contextType = GlobalContext;

    render() {
        
        return (
            <div>
                <header className={classes.Header} style={{backgroundImage: `url(${wave})`}}>
                    <h1 className={classes.Heading}>START TRIVIA</h1>

                    <Categories load={this.state.loadMore} />

                    <button 
                    onClick={() => this.setState({loadMore: !this.state.loadMore})}
                    >Load {this.state.loadMore ? "Less":"More"}</button>
                </header> 
            </div>
        )
    }
}

export default Homepage;