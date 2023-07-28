function ShowTable(i) {
  var i = document.querySelector("#taking-number").value;
  if (i == "") {
    // alert("Plz inter number which you want table.");
    document.querySelector(".Err-msg").innerHTML =
      "Plz Enter number which you want table.";
    var shown_data = document.querySelector(".table-div");
    shown_data.innerHTML = "";
  } else {
    document.querySelector(".Err-msg").innerHTML = "";
    var shown_data = document.querySelector(".table-div");
    shown_data.innerHTML = "";
    document.querySelector(
      ".Reqested-number"
    ).innerHTML = `Multiplication table for - ${i}`;
    var a = 1;
    var EndTable=10
    for (a = 1; a <= EndTable; a++) {
      var tr = document.createElement("tr");
      var reasult = document.createElement("td");
      reasult.className = "reasult-added-class";
      reasult.innerHTML = i * a;
      tr.appendChild(reasult);
      shown_data.appendChild(tr);
    }
  }
}
export function MultiplicatingComponent() {
  
  return (
   
    <div class="Main-parent-container">
      <div class="container d-flex justify-content-center">
        <div class="border p-2  w-50 small-width table-class bg-light rounded-2">
          <h3 class="text-center Main-heading-text">
            --- Online table Generator ---
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
         <button class="Get-table btn btn-success" onClick={ShowTable}>
            Get table
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
              <tbody class="table-div"></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
