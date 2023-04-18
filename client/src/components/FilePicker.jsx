import React from 'react'

import CustomButton from './CustomButton'

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      <h6>Upload Image File</h6>
      <br />
      <div className="flex flex-wrap gap-3">
        <p className="text-sm font-medium px-6">
          Sorry!  Only members have access to the Image Upload tool...
        </p>
      </div>
    </div>
  )
}

export default FilePicker