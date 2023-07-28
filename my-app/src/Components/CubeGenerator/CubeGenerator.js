import "./CubeGenerator.css";
function ShowCube(){
    var Get_num = document.querySelector("#taking-number").value;
    var Err_msg = document.querySelector(".Err-msg");
    var Reasult = Get_num*Get_num*Get_num;
    var Cube_reasult = document.querySelector(".cube-reasult");
    if(Get_num===""){
        Err_msg.innerHTML="Plz Enter The Number.";
        Cube_reasult.innerHTML="";
    }
    else{
        Cube_reasult.innerHTML=Reasult;
    }

}
export function CubeGeneratorComponent() {
  
    return (
     
      <div class="Main-parent-container">
        <div class="container d-flex justify-content-center">
          <div class="border p-2  w-50 small-width table-class bg-light rounded-2">
            <h3 class="text-center Main-heading-text">
              --- Online Cube Generator ---
            </h3>
            <div class="dt text-center">
              {" "}
              <label class="font_size_family">Enter Number</label>
            </div>
            <div class="dd mb-2 input-parent-div">
              <input
                placeholder="Plz Enter Number"
                className="form-control w-50"
                type="text"
                id="taking-number"
              ></input>{" "}
              <div class="text-danger Err-msg"></div>{" "}
            </div>
           <div class="d-flex justify-content-center">
           <button class="Get-table btn btn-success" onClick={ShowCube}>
              Get Cube
            </button>
           </div>
            <div class="table-div-main">
              <table class="table table-hover w-100 p-4">
                <thead>
                  <tr class="Table-header text-center">
                    <span class="Table-heading-span">
                      <span class="Reqested-number"></span>
                    </span>
                  </tr>
                </thead>
                <tbody class="table-div text-center cube-reasult"></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }