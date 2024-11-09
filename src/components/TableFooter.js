import React from 'react'



const TableFooter = () => {
  return (


    <div className='footer-wrapper'>


      <div style={{display:'flex', gap:'10px'}} > 

      <p>Show</p>
          <select class="custom-select" id="inputGroupSelect01" style={{height:'23px'}}>
            <option selected>10</option>
            {/* <option value="1"></option> */}
            <option value="2">15</option>
            <option value="3">20</option>
          </select> 
          <p>entries</p>

      </div>






      <nav aria-label="...">
        <ul class="pagination">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item active">
            <a class="page-link" href="#">2 </a>
          </li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>







    </div>

  )
}

export default TableFooter

