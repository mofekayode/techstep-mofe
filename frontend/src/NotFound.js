import React from 'react'
import './Notfound.css';
import { Link, useParams,useHistory } from "react-router-dom";
function NotFound() {
    return (
        <div  class="main">
    <figure  style={{backgroundColor: 'black', padding:'60px 60px', borderRadius:'20px'}}>
	<div class="sad-mac"></div>
	<figcaption>
		<span class="sr-text">Error 404: Not Found</span>
		<span class="e"></span>
		<span class="r"></span>
		<span class="r"></span>
		<span class="o"></span>
		<span class="r"></span>
		<span class="_4"></span>
		<span class="_0"></span>
		<span class="_4"></span>
		<span class="n"></span>
		<span class="o"></span>
		<span class="t"></span>
		<span class="f"></span>
		<span class="o"></span>
		<span class="u"></span>
		<span class="n"></span>
		<span class="d"></span>
	</figcaption>
</figure>
          </div>
    )
}

export default NotFound
