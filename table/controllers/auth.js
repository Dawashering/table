const { json } = require("express");
const mysql = require("mysql");

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bookingmachinetable'
});
 
/*conn.query('select * from bookingvalue', (err, result, fields)=>{
  if(err){
    return console.log('hsh');
  }
  return console.log('result');
});*/

exports.data = async (req, res) =>{
  const obj = JSON.parse(JSON.stringify(req.body));
    const obj2 = (JSON.parse(obj.date));

    const equipment_num = obj2.equipmentnum;
    const time = obj2.time;
    const date = obj2.date;
  try{
    
    conn.query('INSERT INTO bookingvalue SET ?', {equipment:equipment_num, times:time, date:date}, (error, results) => {
      if(error) {
        console.log(error);
      } else {
        console.log("Data Inserted");
      }
    })
  
  }
  catch(error){
    console.error("error");
  }
} 
  
  exports.delete = async (req, res) =>{

    try{
      const obj = JSON.parse(JSON.stringify(req.body));
      const obj2 = (JSON.parse(obj.date));

      const equipment_num = obj2.equipmentnum;
      console.log(equipment_num);
      const time = obj2.time;
      console.log(time);
      const date = obj2.date;
      console.log(date);
      var sql = "DELETE FROM bookingvalue WHERE equipment = ? and times = ? and date = ? ";

      await conn.query(sql,[equipment_num,time,date],(err,result)=>{
        if(err){
          console.error(err)
        }else{
          console.log("DELETED")
        }
      });

    }
    catch(error){
      console.error(error);
    }
  }
  