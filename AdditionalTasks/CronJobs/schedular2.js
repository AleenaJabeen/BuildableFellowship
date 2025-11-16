const cron=require("node-cron");
const fs=require("fs");
const path=require("path");

const invoices=require("./data/invoice.json");

const archiveInvoicesTask=()=>{
console.log("Running task");
try {
    const paidInvoices=invoices.filter((item)=>{
        return item.status==="paid"
    });
    if(paidInvoices.length>0){
        paidInvoices.forEach((item)=>{
            invoices.splice(invoices.findIndex((e)=>{e.status===item.status}))
        }),1
    }
    fs.writeFileSync(
        path.join(__dirname,"./","data","invoice.json"),JSON.stringify(invoices),"utf-8"
    );
     fs.writeFileSync(
        path.join(__dirname,"./","data","archive.json"),JSON.stringify(paidInvoices),"utf-8"
    );
    console.log("archive ended")
    
} catch (error) {
    console.log("err",error)
    
}

};

cron.schedule("*/30 * * * * *",archiveInvoicesTask);