import React, {Component} from 'react';
import axios from 'axios'
import Tarif from './Tarif.js'


class TarifsList extends Component {
    state = { listOfTarifs: [] };
   
    getAllTarifs = () =>{
        axios.get(`${process.env.REACT_APP_APIURL || ""}/api/prices`)
        .then(responseFromApi => {
          this.setState({
            listOfTarifs: responseFromApi.data
          })
        })
      }
      
    componentDidMount() {
    this.getAllTarifs();
    }
    
    render () {
     
        return (

          <div className="tarifsContainer">
             <div className="tarifListTitre">
                <h1>Les Tarifs</h1>
              </div>

            
                  <div className="tarifsList">
                      {this.state.listOfTarifs.map(tarif => (
                         <div className="tarif" key={tarif._id}><Tarif duree={tarif.duree} montant={tarif.montant}/></div>
                       ))}
                        
                  </div>
                  <div className="tarifListBackground">
                    <div className="tarifReduction">
                      <p>Déduction de 12€ à partir de la 2ème inscription</p>
                      <p>Possibilité de régler en trois chèques, encaissés mi-octobre, mi-novembre et fin janvier</p>
                    </div>
                  </div>
               </div>
        );
    }
}


export default TarifsList;