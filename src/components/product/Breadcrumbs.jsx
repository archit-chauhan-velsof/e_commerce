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
                                    breadcrumbData?.map((e)=>{
                                        return (
                                            <li key={e.link}><a href={e.link} key={e.link}>{e.label}</a></li>
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