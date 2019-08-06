import React, {Component} from 'react';
import {Container} from "@material-ui/core";
import {Link} from "react-router-dom";

const subHeaderStyle = {
    fontFamily: 'Helvetica Black Extended',
    fontSize: '2.0em',
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'black'
};

class PartiesBasicInfo extends Component {
    render() {
        return (
            <div>
                <Container display='flex' maxWidth='lg'>
                    {
                        this.props.parties.map((party, index) => {
                            return <div key={index} style={{ marginBottom: '1em' }}>
                                <div>
                                    <span style={subHeaderStyle}>{party._id}</span> <br />
                                    <span>
                                      <a href={`https://wikipedia.org/wiki/${party.ideology}`}>
                                          <img src='/icons/wiki_w.svg' width='16px' />
                                          {party.ideology}
                                      </a>
                                  </span>
                                    <br />
                                    <span>
                                      <a href={`https://wikipedia.org/wiki/${party.politicianPosition}`}>
                                          <img src='/icons/wiki_w.svg' width='16px' />
                                          {party.politicianPosition}
                                      </a>
                                  </span>
                                </div>
                                <span style={{ fontFamily: 'Fact-ExpandedMedium' }}>Councillors in {party._id}:</span>
                                <br />
                                {this.props.politicianArray.map(arrayItem => {
                                        return arrayItem.politicians.map((individualPolitician, index) => {
                                            if (arrayItem.party === party._id) {
                                                return (
                                                    <span key={individualPolitician.party + index}>
                                                      <Link to={`/politicians?${individualPolitician._id}`}>
                                                          {individualPolitician.firstname} {individualPolitician.lastname}
                                                      </Link>
                                                      <br/>
                                                  </span>
                                                );
                                            }
                                        });
                                    }
                                )}
                            </div>;
                        })
                    }
                </Container>
            </div>
        );
    }
}

export default PartiesBasicInfo;