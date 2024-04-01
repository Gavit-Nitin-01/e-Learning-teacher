import React from 'react'
import './Uploadvideo.css'
export default function Uploadvideo() {
    
  return (
    
    <div>

<div class="frame">
	<div class="center">
		<div class="title">
			<h1> upload video</h1>
		</div>

		<div class="dropzone">
			<img src="http://100dayscss.com/codepen/upload.svg" class="upload-icon" />
			<input type="file" class="upload-input"  />
		</div>

		<button type="button" class="bttn" name="uploadbutton">Upload file</button>

        <div className='Vinfo'>
        <label for="vinfo">Video info</label><br></br>
        <input type="text" id="vinfo" name="vinfo" placeholder='Video Title'/> 
        </div>

        <div className='discription'>
        <label for="discribe">Discription</label><br></br>
        <textarea id="discribe" name="discribe" rows="3" cols="40"></textarea> 
        </div>

	</div>
</div>
    </div>
  )
}
