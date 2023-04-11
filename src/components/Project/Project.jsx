import React from 'react'

const Project = () => {
  return (
    <div className='projects'>
      <h2>
        Projects
      </h2>
    <p>
        This is a list of my favourite project
    </p>
    <div className='project'>
    <div className="row">
        <div className="col">
        <div class="card">
        <img src="./images/m72.png" class="card-img-top" alt="..."/>
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
        <div className="col">
        <div class="card">
  <img src="./images/m52.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
        <div className="col">
        <div class="card">
  <img src="./images/reezy.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
    </div>
  </div>
</div> 
   
  )
}

export default Project
