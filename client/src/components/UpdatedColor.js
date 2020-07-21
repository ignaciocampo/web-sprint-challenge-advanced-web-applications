

import React from "react";
import { useHistory } from "react-router-dom";

function UpdatedColor() {

  const history = useHistory();
  return (
<div className="App">


<h2>UPDATED</h2>

<div>
  <ul>
  <li>
<button
        className="go-back" onClick={() => history.push(`/bubblepage`)}
      >
        Go Check it
      </button>
      </li>
      </ul>
</div>
      </div>
 
  );
}

export default UpdatedColor
