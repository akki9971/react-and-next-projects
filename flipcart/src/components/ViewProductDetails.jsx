import React from 'react'

export const ViewProductDetails = ({ data }) => {
    const notExist = (data?.length === 0 || data === undefined || data === null)
    if (!notExist) {
        var discountedPrice = (data?.price)
        var actualPrice = (data?.price < 50 ? data?.price + 20 : data?.price + 50)
    }
    console.log(data);
    return (
        <div>

            <h1 className="text-success">Product detail page {data?'data available '+ data.title:'data notExist'}</h1>
            {
                notExist && <div>Nothing to preview</div>
            }
            {
                notExist || <div>

                    <div className="row">
                        <div className="col-md-5 overflow-hidden">
                            <img src={data?.image} alt={data?.title} className="detailImage img-responsive" />
                        </div>
                        <div className="col-md-7">
                            <div className="detailTitle">
                                <h4>{data.title}</h4>
                            </div>
                            <div className="detailReview ms-3">
                                <p> <span className="btn btn-success mx-2">{data?.rating}</span> {Math.ceil(data?.rating * 111)} Ratings & {Math.ceil(data.rating * 123)} Reviews</p>
                                Special Price
                                <h6> <span className="mx-2 fs-3">${discountedPrice}</span><del>${actualPrice}</del>  offer {Math.ceil(((actualPrice - discountedPrice) / actualPrice) * 100)}%</h6>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
