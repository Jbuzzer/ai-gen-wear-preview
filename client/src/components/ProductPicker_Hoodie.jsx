import React from 'react'

const ProductPicker_Hoodie = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
    return (
      <div className="productpicker-container">
        <h6>Product: Hoodie</h6>
        <div className="flex flex-wrap gap-3">
          <p className="text-sm font-medium px-6 p-3">
            Sorry!  Only members have access to select different 3D products...
          </p>
        </div>
      </div>
    )
  }

export default ProductPicker_Hoodie