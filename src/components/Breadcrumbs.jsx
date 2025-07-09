import React from 'react'

const Breadcrumbs = ({breadcrumbData}) => {
    return (
        <section className="mt-10 d-dsk">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="breadcrumb">
                            <ul>
                                {
                                    breadcrumbData?.map((e,index)=>{
                                        return (
                                            <li><a href={e.link} key={index}>{e.label}</a></li>
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