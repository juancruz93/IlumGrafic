const express = require('express');
const router = express.Router();
//const NQMarketDepthInfo = require('../model/NQMarketDepthInfo')

const { MongoClient } = require('mongodb')
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

// Database Name
const dbName = 'ALPHAS'



router.get('/', async (req, res) =>{

res.render('index');

});


router.get('/consultaaskandbid', async (req, res) =>{

   await client.connect()
   const db = client.db(dbName)
   const collection = db.collection('NQMarketDepthInfo')

   const ask = await collection.aggregate([
      {
         "$match": {
            "DataType": {
                 "$gte": 1
             }
         }
      },
      {"$group" : {"_id": {"Price": "$Price", "Volume":  "$Volume", "DataType": "$DataType", "Time": "$Time"}, "total": 
      {"$sum": {"$toInt": "$Volume" }}}
      }     
   ]).sort({"total":-1}).limit(5).toArray();

   const bid = await collection.aggregate([
      {
         "$match": {
            "DataType": {
                 "$gte": 0
             }
         }
      },
      {"$group" : {"_id": {"Price": "$Price", "Volume":  "$Volume", "DataType": "$DataType", "Time": "$Time"}, "total": 
      {"$sum": {"$toInt": "$Volume" }}}
      }     
   ]).sort({"total":-1}).limit(5).toArray(); 

   const ultimo = await collection.find().sort({"_id":-1}).limit(1).toArray(); 
   

   res.json({ask,bid,ultimo});
}); 

router.get('/consultaaskl', async (req, res) =>{

   await client.connect()
   const db = client.db(dbName)
   const collection = db.collection('NQMarketDepthInfo')

   const findResult = await collection.aggregate([
      {
         "$match": {
            "DataType": {
                 "$gte": 1
             }
         }
      },
      {"$group" : {"_id": "$Price", "total": 
      {"$sum": {"$toInt": "$Volume" }}}
      }     
   ]).sort({"total":-1}).limit(5).toArray();
   res.json(findResult);
});  

router.get('/consultabidl', async (req, res) =>{

   await client.connect()
   const db = client.db(dbName)
   const collection = db.collection('NQMarketDepthInfo')

   const findResult = await collection.aggregate([
      {
         "$match": {
            "DataType": {
                 "$gte": 0
             }
         }
      },
      {"$group" : {"_id": "$Price", "total": 
      {"$sum": {"$toInt": "$Volume" }}}
      }     
   ]).toArray(); 
   res.json(findResult);
});  

router.get('/consultaasktotal', async (req, res) =>{

   await client.connect()
   const db = client.db(dbName)
   const collection = db.collection('NQMarketDepthInfo')

   const findResult = await collection.aggregate([
      {
         "$match": {
            "DataType": {
                 "$gte": 1
             }
         }
      },
      {"$group" : {"_id": null,"total": 
      {"$sum": {"$toInt": "$Volume" }}}
      }     
   ]).toArray(); 
   res.json(findResult);
});  

router.get('/consultabidtotal', async (req, res) =>{

   await client.connect()
   const db = client.db(dbName)
   const collection = db.collection('NQMarketDepthInfo')

   const findResult = await collection.aggregate([
      {
         "$match": {
            "DataType": {
                 "$gte": 0
             }
         }
      },
      {"$group" : {"_id": null,"total": 
      {"$sum": {"$toInt": "$Volume" }}}
      }     
   ]).toArray(); 
   res.json(findResult);
});  

router.get('/deleteall', async (req, res) =>{

   await client.connect()
   const db = client.db(dbName)
   const collection = db.collection('NQMarketDepthInfo')

   //const findResult = await collection.find().sort().limit(1).toArray(); 

   const findResult = await collection.deleteMany({"DataType" : {"$gte" : 1 }});
   const findResult2 = await collection.deleteMany({"DataType" : {"$gte" : 0 }});

});  


module.exports = router;


  

  /*
select top 10 mkprice as precio, sum(mkvolume) as total, mkvolume as vol, mkdatatype as tipo, mktime as time
        from NQMarketDepthInfo where mkdatatype = 'Ask' and mktime > '".$nueva_fechai."' and mktime < '".$nueva_fechaf."'
        group by mkprice, mkvolume, mkdatatype, mktime order by total desc        
        
        
        
     select top 10 mkprice as precio, sum(mkvolume) as total, mkvolume as vol, mkdatatype as tipo, mktime as time
        from NQMarketDepthInfo where mkdatatype = 'Bid' and  mktime > '".$nueva_fechai."' and mktime < '".$nueva_fechaf."'
        group by mkprice, mkvolume, mkdatatype, mktime order by total desc   
        
        
        */