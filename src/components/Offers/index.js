import React, { Component } from 'react'
import { Menu } from '../MenuSidebar';
import { Travel } from './Travel';
import travel from './travel.json'

export default class Offers extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         travel
    //     }
    // }

  render() {
    return (
        // <section>
        // {travel.travel.map(item => {
        //     <section style={{color: "black"}} className='Offer'>
        //         <div>
        //         <p>{item.title}</p>
        //         <span>{item.price}</span>
        //         {console.log(item.title)}
        //         </div>
        //     </section>
        // })}</section>
        <section className='main'>
          <h2 className='main__title'>Offers</h2>
          <div className='main__travels'>
            <Travel className="main__offer main__offer--1" title="Trip to Moscow" price="$600,86" />
            <Travel className="main__offer main__offer--2" title="Trip to Puerto Rico" price="$600,86" />
            <Travel className="main__offer main__offer--3" title="Trip to Honduras" price="$600,86" />
            <div className='main__chosen'>Chosen destination</div>
          </div>
          <Menu />
        </section>
    )
  }
}
