import React from 'react'
import {servicesApi} from '../../Service/apiService'
import {useParams} from 'react-router-dom'
function ProductDetails() {
    const {id} = useParams();
    const {data} = servicesApi.useGetProductQuery(id);
  return (
  <section>
      <div>
        {
            data && (
            <div>
                <img src={data.image} alt="" />
            </div>
            )
        }
        </div>
  </section>
  )
}

export default ProductDetails