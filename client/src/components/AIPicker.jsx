import React from 'react'

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <h6>Text-2-Image Tool</h6>
      <div className="flex flex-wrap gap-3">
        <p className="text-sm font-medium px-6">
          Sorry!  Only members have access to the OpenAI DALL-E text-2-image prompting tool...
        </p>
      </div>
    </div>
  )
}

export default AIPicker