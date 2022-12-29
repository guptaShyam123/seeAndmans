import React,{useState} from "react";
import DatePicker from "react-datepicker";
import styles from "./bannerinput.module.scss";
import "react-datepicker/dist/react-datepicker.css";

const BannerInput = () => {


  const [startDate, setStartDate] = useState(new Date());

  var update = JSON.parse(localStorage.getItem("person"))
   console.log("update is my " , update)

   
 
  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.inputContainer}>
          <div className={styles.inputTextWrapper}>
          
            <span>Locations</span>
            <div className={styles.green}>
            <select>
            <option >{update?.locations}</option>
            <option value="port blair">havlock</option>

            <option value="port blair">Roos garden</option>
            </select>
            </div>
          </div>
          <div className={styles.inputTextWrapper}>
           
            <div>
            <div className={styles.datepicker}>
            <span>Check in</span>
            <div>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              value={update?.startDate}
            />
            </div>
           
          </div>
            </div>
          </div>
          <div className={styles.datepicker}>
            <span>Check Out</span>
            <div>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            </div>
           
          </div>
          <div className={styles.inputTextWrapper1}>
          <span>Guest & Rooms</span>
        <input type="text" defaultValue="2 Adults. 0 Child. 1 Room"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerInput;