var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <meta name="viewport" content="width=device-width, initial-scale=1" />    
          <style dangerouslySetInnerHTML={{__html: "    \n* {    \n  box-sizing: border-box;    \n}    \n    \ninput[type=text], select, textarea {    \n  width: 100%;    \n  padding: 12px;    \n  border: 1px solid rgb(70, 68, 68);    \n  border-radius: 4px;    \n  resize: vertical;    \n}    \ninput[type=email], select, textarea {    \n  width: 100%;    \n  padding: 12px;    \n  border: 1px solid rgb(70, 68, 68);    \n  border-radius: 4px;    \n  resize: vertical;    \n}    \n    \nlabel {    \n  padding: 12px 12px 12px 0;    \n  display: inline-block;    \n}    \n    \ninput[type=submit] {    \n  background-color: rgb(37, 116, 161);    \n  color: white;    \n  padding: 12px 20px;    \n  border: none;    \n  border-radius: 4px;    \n  cursor: pointer;    \n  float: right;    \n}    \n    \ninput[type=submit]:hover {    \n  background-color: #45a049;    \n}    \n    \n.container {    \n  border-radius: 5px;    \n  background-color: #f2f2f2;    \n  padding: 20px;    \n}    \n    \n.col-25 {    \n  float: left;    \n  width: 25%;    \n  margin-top: 6px;    \n}    \n    \n.col-75 {    \n  float: left;    \n  width: 75%;    \n  margin-top: 6px;    \n}    \n    \n/* Clear floats after the columns */    \n.row:after {    \n  content: \"\";    \n  display: table;    \n  clear: both;    \n}    \n    \n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */    \n" }} />    
          <h2>FEED BACK FORM</h2>    
          <div className="container">    
            <form>    
              <div className="row">    
                <div className="col-25">    
                  <label htmlFor="fname">First Name</label>    
                </div>    
                <div className="col-75">    
                  <input type="text" id="fname" name="firstname" placeholder="Your name.." />    
                </div>    
              </div>    
              <div className="row">    
                <div className="col-25">    
                  <label htmlFor="lname">Last Name</label>    
                </div>    
                <div className="col-75">    
                  <input type="text" id="lname" name="lastname" placeholder="Your last name.." />    
                </div>    
              </div>    
              <div className="row">    
                <div className="col-25">    
                  <label htmlFor="email">Mail Id</label>    
                </div>    
                <div className="col-75">    
                  <input type="email" id="email" name="mailid" placeholder="Your mail id.." />    
                </div>    
              </div>
              <div className="row">    
                <div className="col-25">    
                  <label htmlFor="phone">Phone No</label>    
                </div>    
                <div className="col-75">    
                  <input type="phone" id="phone" name="phoneno" placeholder="Your phone no.." />    
                </div>    
              </div>      
              <div className="row">    
                <div className="col-25">    
                  <label htmlFor="district">District</label>    
                </div>    
                <div className="col-75">    
                  <select id="district" name="district">    
                    <option value="none">Select District</option>    
                    <option value="erode">Erode</option>    
                    <option value="tiruppur">Tiruppur</option>    
                    <option value="coimbatore">Coimbatore</option>    
                    <option value="salem">Salem</option>    
                    <option value="namakkal">Namakkal</option>    
                    <option value="karur">Karur</option>        
                  </select>    
                </div>    
              </div>    
              <div className="row">    
                <div className="col-25">    
                  <label htmlFor="feed_back">Feed Back</label>    
                </div>    
                <div className="col-75">    
                  <textarea id="subject" name="subject" placeholder="Write something.." style={{height: '200px'}} defaultValue={""} />    
                </div>    
              </div>    
              <div className="row">    
                <input type="submit" defaultValue="Submit" />    
              </div>    
            </form>    
          </div>    
        </div>
      );
    }
  });