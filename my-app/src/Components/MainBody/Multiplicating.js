export function MultiplicatingComponent(){
    return(
        <div class="Main-parent-container">
    <div class="container d-flex justify-content-center">
     <div class="border p-2  w-50 small-width table-class bg-light">
      <h3 class="text-center Main-heading-text">--- Online table Generator ---</h3>
      <div class="dt"> <label class="font_size_family">Inter Number</label></div>
       <div class="dd mb-2"><input class="form-control w-50" type="text" id="taking-number"></input> <div class="text-danger Err-msg"></div> </div>
       <button class="Get-table btn btn-success" onclick="ShowTable()">Get table</button>
       <div class="table-div-main">
        <table class="table table-hover w-25 border p-4">
         <thead>
           <tr class="Table-header">
             <span class="Table-heading-span"><span class="Reqested-number"></span></span>
           </tr>
         </thead>
         <tbody class="table-div">
          
         </tbody>
        </table>
       </div>
     </div>
   
    </div>
 
  </div>
    )
}