const cron=require("node-cron");
const fs=require("fs");
const path=require("path");

const archives=require("./data/archive.json");

const houseKeeping=()=>{

    console.log("Start cleaning")

    try {
archives.map((item,index)=>{
    const presentDate=new Date().getTime();
    const recordDate=new Date(item.date).getTime();
    console.log("The numbe rof days",Math.floor((presentDate-recordDate)/(1000*60*60)))

    if(Math.floor((presentDate-recordDate)/(1000*60*60))>180){
           
                archives.splice(index,1);
                 fs.writeFileSync(
            path.join(__dirname,"./","data","archive.json"),JSON.stringify(archives),"utf-8"
        );
            
        }
       
        
});


        
    } catch (error) {
            console.log("err",error)

    }

    console.log("end")

}

cron.schedule("* * * * * *",houseKeeping)