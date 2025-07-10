import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumbs = ({breadcrumbData}) => {
    return (
        <section className="mt-10 d-dsk">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="breadcrumb">
                            <ul>
                                {
                                    breadcrumbData?.map((e)=>{
                                        return (
                                            <li key={e.link}><Link to={e.link} key={e.link}>{e.label}</Link></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Breadcrumbs