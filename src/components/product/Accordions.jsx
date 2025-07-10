import React from 'react'
import { Remarkable } from 'remarkable'

const Accordions = (props) => {
    
    return (
        <div className="accordion mt-30" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <b>Description</b>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
            {
                props.otherDetails?.map((e) => {
                    return (
                        <div className="accordion-item" key={e.name}>
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <b>{e.name}</b>
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    {e.value}
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Accordions