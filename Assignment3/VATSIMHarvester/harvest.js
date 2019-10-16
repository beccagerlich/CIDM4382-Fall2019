const cron = require('node-cron');
const axios = require('axios');
require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;

class Client {

    /*
    callsign:cid:realname:clienttype:frequency:latitude:longitude:altitude:groundspeed:groundspeed:planned_tascruise:planned_depairport:planned_altitude:planned_destairport:server:protrevision:rating:transponder:facilitytype:visualrange:planned_revision:planned_flighttype:planned_deptime:planned_actdeptime:planned_hrsenroute:planned_minenroute:planned_hrsfuel:planned_minfuel:planned_altairport:planned_remarks:planned_route:planned_depairport_lat:planned_depairport_lon:planned_destairport_lat:planned_destairport_lon:atis_message:time_last_atis_received:time_logon:heading:QNH_iHg:QNH_Mb:
    */
    constructor( callsign, cid, realname, clienttype, frequency, latitude, longitude, altitude, groundspeed, planned_tascruise, planned_depairport, planned_altitude,
                 planned_destairport, server, protrevision, rating, transponder, facilitytype, visualrange, planned_revision, planned_flighttype, planned_deptime, planned_actdeptime,
                 planned_hrsenroute, planned_minenroute, planned_hrsfuel, planned_minfuel, planned_altairport, planned_remarks, planned_route, planned_depairport_lat, planned_depairport_lon,
                 planned_destairport_lat, planned_destairport_lon, atis_message, time_last_atis_received, time_logon, heading, QNH_iHg, QNH_Mb)
    {
        this.callsign = callsign;
        this.cid = cid;
        this.realname = realname;
        this.clienttype = clienttype;
        this.frequency = frequency;
        this.latitude = latitude;
        this.longitude = longitude;
        this.altitude = altitude;
        this.groundspeed = groundspeed;
        this.planned_tascruise = planned_tascruise;
        this.planned_depairport = planned_depairport;
        this.planned_altitude = planned_altitude;
        this.planned_destairport = planned_destairport;
        this.server = server;
        this.protrevision = protrevision;
        this.rating = rating;
        this.transponder = transponder;
        this.facilitytype = facilitytype;
        this.visualrange = visualrange;
        this.planned_revision = planned_revision;
        this.planned_flighttype = planned_flighttype;
        this.planned_deptime = planned_deptime;
        this.planned_actdeptime = planned_actdeptime;
        this.planned_hrsenroute = planned_hrsenroute;
        this.planned_minenroute = planned_minenroute;
        this.planned_hrsfuel = planned_hrsfuel;
        this.planned_minfuel = planned_minfuel;
        this.planned_altairport = planned_altairport;
        this.planned_remarks = planned_remarks;
        this.planned_route = planned_route;
        this.planned_depairport_lat = planned_depairport_lat;
        this.planned_depairport_lon = planned_depairport_lon;
        this.planned_destairport_lat = planned_destairport_lat;
        this.planned_destairport_lon = planned_depairport_lon;
        this.atis_message = atis_message;
        this.time_last_atis_received = time_last_atis_received;
        this.time_logon = time_logon;
        this.heading = heading;
        this.QNH_iHg = QNH_iHg;
        this.QNH_Mb = QNH_Mb;
    }

}

const writeClientToPersist = (client) => {
    const uri = "mongodb+srv://cidm4382:<password>@cidm4382-m35ko.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
      const collection = client.db("test").collection("devices");
      // perform actions on the collection object
      client.close();
    });
}


const parseCLIENT = (client) => {
    // callsign:
    let callsign = parts[0];    
    
    // cid:
    let cid = parts[1];
    
    // realname:
    let realname = parts[2];
    
    // clienttype:
    let clienttype = parts[3];
    
    // frequency:
    let frequency = parts[4];

    // latitude:
    let latitude = parts[5];

    // longitude:
    let longitude = parts[6];

    // altitude:
    let altitude = parts[7];

    // groundspeed:
    let groundspeed = parts[8];

    // planned_aircraft:
    let planned_aircraft = parts[9];

    // planned_tascruise:
    let planned_tascruise = parts[10];

    // planned_depairport:
    let planned_depairport = parts[11];

    // planned_altitude:
    let planned_altitude = parts[12];

    // planned_destairport:
    let planned_destairport = parts[13];

    // server:
    let server = parts[14];

    // protrevision:
    let protrevision = parts[15];

    // rating:
    let rating = parts[16];

    // transponder:
    let transponder = parts[17];

    // facilitytype:
    let facilitytype = parts[18];

    // visualrange:
    let visualrange = parts[19];

    // planned_revision:
    let planned_revision = parts[20];

    // planned_flighttype:
    let planned_flighttype = parts[21];

    // planned_deptime:
    let planned_deptime = parts[22];

    // planned_actdeptime:
    let planned_actdeptime = parts[23];

    // planned_hrsenroute:
    let planned_hrsenroute = parts[24];

    // planned_minenroute:
    let planned_minenroute = parts[25];

    // planned_hrsfuel:
    let planned_hrsfuel = parts[26];

    // planned_minfuel:
    let planned_minfuel = parts[27];
    
    // planned_altairport:
    let planned_altairport = parts[28];

    // planned_remarks:
    let planned_remarks = parts[29];

    // planned_route:
    let planned_route = parts[30];

    // planned_depairport_lat:
    let planned_depairport_lat = parts[31];

    // planned_depairport_lon:
    let planned_depairport_lon = parts[32];

    // planned_destairport_lat:
    let planned_destairport_lat = parts[33];

    // planned_destairport_lon:
    let planned_destairport_lon = parts[34];
    
    // atis_message:
    let atis_message = parts[35];

    // time_last_atis_received:
    let time_last_atis_received = parts[36];
    
    // time_logon:
    let time_logon = parts[37];

    // heading:
    let heading = parts[38];

    // QNH_iHg:
    let QNH_iHg = parts[39];

    // QNH_Mb:
    let QNH_Mb = parts[40];    
}

const parseVATSIM = (data) => {

    let start = false;

    lines = data.split("\n");

    lines.forEach(element => {

        parts = element.split(':');
        
        // callsign:
        let callsign = parts[0];

        if(callsign.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!callsign.startsWith(";") && !callsign.startsWith(" ") && start){
            console.log(`Callsign: ${callsign}`);
        } 

        if(callsign.startsWith("!CLIENTS")){
            start = true;
        }         
        
        // cid:
        let cid = parts[1];

        if(cid.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!cid.startsWith(";") && !cid.startsWith(" ") && start){
            console.log(`cid: ${cid}`);
        } 

        if(cid.startsWith("!CLIENTS")){
            start = true;
        }

        // realname:
        let realname = parts[2];

        if(realname.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!realname.startsWith(";") && !realname.startsWith(" ") && start){
            console.log(`realname: ${realname}`);
        } 

        if(realname.startsWith("!CLIENTS")){
            start = true;
        }

        // clienttype:
        let clienttype = parts[3];

        if(clienttype.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!clienttype.startsWith(";") && !clienttype.startsWith(" ") && start){
            console.log(`clienttype: ${clienttype}`);
        } 

        if(clienttype.startsWith("!CLIENTS")){
            start = true;
        }

        // frequency:
        let frequency = parts[4];

        if(frequency.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!frequency.startsWith(";") && !frequency.startsWith(" ") && start){
            console.log(`frequency: ${frequency}`);
        } 

        if(frequency.startsWith("!CLIENTS")){
            start = true;
        }

        // latitude:
        let latitude = parts[5];

        if(latitude.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!latitude.startsWith(";") && !latitude.startsWith(" ") && start){
            console.log(`latitude: ${latitude}`);
        } 

        if(latitude.startsWith("!CLIENTS")){
            start = true;
        }

        // longitude:
        let longitude = parts[6];

        if(longitude.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!longitude.startsWith(";") && !longitude.startsWith(" ") && start){
            console.log(`longitude: ${longitude}`);
        } 

        if(longitude.startsWith("!CLIENTS")){
            start = true;
        }

        // altitude:
        let altitude = parts[7];

        if(altitude.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!altitude.startsWith(";") && !altitude.startsWith(" ") && start){
            console.log(`altitude: ${altitude}`);
        } 

        if(altitude.startsWith("!CLIENTS")){
            start = true;
        }

        // groundspeed:
        let groundspeed = parts[8];

        if(groundspeed.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!groundspeed.startsWith(";") && !groundspeed.startsWith(" ") && start){
            console.log(`groundspeed: ${groundspeed}`);
        } 

        if(groundspeed.startsWith("!CLIENTS")){
            start = true;
        }

        // planned_aircraft:
        let planned_aircraft = parts[9];

        if(planned_aircraft.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!planned_aircraft.startsWith(";") && !planned_aircraft.startsWith(" ") && start){
            console.log(`planned_aircraft: ${planned_aircraft}`);
        } 

        if(planned_aircraft.startsWith("!CLIENTS")){
            start = true;
        }

        // planned_tascruise:
        let planned_tascruise = parts[10];

        if(planned_tascruise.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!planned_tascruise.startsWith(";") && !planned_tascruise.startsWith(" ") && start){
            console.log(`planned_tascruise: ${planned_tascruise}`);
        } 

        if(planned_tascruise.startsWith("!CLIENTS")){
            start = true;
        }

        // planned_depairport:
        let planned_depairport = parts[11];

        if(planned_depairport.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!planned_depairport.startsWith(";") && !planned_depairport.startsWith(" ") && start){
            console.log(`planned_depairport: ${planned_depairport}`);
        } 

        if(planned_depairport.startsWith("!CLIENTS")){
            start = true;
        }

        // planned_altitude:
        let planned_altitude = parts[12];

        if(planned_altitude.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!planned_altitude.startsWith(";") && !planned_altitude.startsWith(" ") && start){
            console.log(`planned_altitude: ${planned_altitude}`);
        } 

        if(planned_altitude.startsWith("!CLIENTS")){
            start = true;
        }

        // planned_destairport:
        let planned_destairport = parts[13];

        if(planned_destairport.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!planned_destairport.startsWith(";") && !planned_destairport.startsWith(" ") && start){
            console.log(`planned_destairport: ${planned_destairport}`);
        } 

        if(planned_destairport.startsWith("!CLIENTS")){
            start = true;
        }

        // server:
        let server = parts[14];

        if(server.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!server.startsWith(";") && !server.startsWith(" ") && start){
            console.log(`server: ${server}`);
        } 

        if(server.startsWith("!CLIENTS")){
            start = true;
        }

        // protrevision:
        let protrevision = parts[15];

        if(protrevision.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!protrevision.startsWith(";") && !protrevision.startsWith(" ") && start){
            console.log(`protrevision: ${protrevision}`);
        } 

        if(protrevision.startsWith("!CLIENTS")){
            start = true;
        }

        // rating:
        let rating = parts[16];

        if(rating.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!rating.startsWith(";") && !rating.startsWith(" ") && start){
            console.log(`groundspeed: ${rating}`);
        } 

        if(rating.startsWith("!CLIENTS")){
            start = true;
        }

        // transponder:
        let transponder = parts[17];

        if(transponder.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!transponder.startsWith(";") && !transponder.startsWith(" ") && start){
            console.log(`transponder: ${transponder}`);
        } 

        if(transponder.startsWith("!CLIENTS")){
            start = true;
        }

        // facilitytype:
        let facilitytype = parts[18];

        if(facilitytype.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!facilitytype.startsWith(";") && !facilitytype.startsWith(" ") && start){
            console.log(`facilitytype: ${facilitytype}`);
        } 

        if(facilitytype.startsWith("!CLIENTS")){
            start = true;
        }

        // visualrange:
        let visualrange = parts[19];

        if(visualrange.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!visualrange.startsWith(";") && !visualrange.startsWith(" ") && start){
            console.log(`visualrange: ${visualrange}`);
        } 

        if(visualrange.startsWith("!CLIENTS")){
            start = true;
        }

        // planned_revision:
        let planned_revision = parts[20];

        if(planned_revision.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!planned_revision.startsWith(";") && !planned_revision.startsWith(" ") && start){
            console.log(`planned_revision: ${planned_revision}`);
        } 

        if(planned_revision.startsWith("!CLIENTS")){
            start = true;
        }

        // planned_flighttype:
        let planned_flighttype = parts[21];

        if(planned_flighttype.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!planned_flighttype.startsWith(";") && !planned_flighttype.startsWith(" ") && start){
            console.log(`planned_flighttype: ${planned_flighttype}`);
        } 

        if(planned_flighttype.startsWith("!CLIENTS")){
            start = true;
        }

        // planned_deptime:
        let planned_deptime = parts[22];

        if(planned_deptime.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!planned_deptime.startsWith(";") && !planned_deptime.startsWith(" ") && start){
            console.log(`planned_deptime: ${planned_deptime}`);
        } 

        if(planned_deptime.startsWith("!CLIENTS")){
            start = true;
        }

        // planned_actdeptime:
        let planned_actdeptime = parts[23];

        if(planned_actdeptime.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!planned_actdeptime.startsWith(";") && !planned_actdeptime.startsWith(" ") && start){
            console.log(`planned_actdeptime: ${planned_actdeptime}`);
        } 

        if(planned_actdeptime.startsWith("!CLIENTS")){
            start = true;
        }

        // planned_hrsenroute:
        let planned_hrsenroute = parts[24];

        if(planned_hrsenroute.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!planned_hrsenroute.startsWith(";") && !planned_hrsenroute.startsWith(" ") && start){
            console.log(`planned_hrsenroute: ${planned_hrsenroute}`);
        } 

        if(planned_hrsenroute.startsWith("!CLIENTS")){
            start = true;
        }

        // planned_minenroute:
        let planned_minenroute = parts[25];

        if(planned_minenroute.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!planned_minenroute.startsWith(";") && !planned_minenroute.startsWith(" ") && start){
            console.log(`planned_minenroute: ${planned_minenroute}`);
        } 

        if(planned_minenroute.startsWith("!CLIENTS")){
            start = true;
        }

        // planned_hrsfuel:
        let planned_hrsfuel = parts[26];

        if(planned_hrsfuel.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!planned_hrsfuel.startsWith(";") && !planned_hrsfuel.startsWith(" ") && start){
            console.log(`planned_hrsfuel: ${planned_hrsfuel}`);
        } 

        if(planned_hrsfuel.startsWith("!CLIENTS")){
            start = true;
        }

        // planned_minfuel:
        let planned_minfuel = parts[27];

        if(planned_minfuel.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!planned_minfuel.startsWith(";") && !planned_minfuel.startsWith(" ") && start){
            console.log(`planned_minfuel: ${planned_minfuel}`);
        } 

        if(planned_minfuel.startsWith("!CLIENTS")){
            start = true;
        }

        // planned_altairport:
        let planned_altairport = parts[28];

        if(planned_altairport.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!planned_altairport.startsWith(";") && !planned_altairport.startsWith(" ") && start){
            console.log(`planned_altairport: ${planned_altairport}`);
        } 

        if(planned_altairport.startsWith("!CLIENTS")){
            start = true;
        }

        // planned_remarks:
        let planned_remarks = parts[29];

        if(planned_remarks.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!planned_remarks.startsWith(";") && !planned_remarks.startsWith(" ") && start){
            console.log(`planned_remarks: ${planned_remarks}`);
        } 

        if(planned_remarks.startsWith("!CLIENTS")){
            start = true;
        }

        // planned_route:
        let planned_route = parts[30];

        if(planned_route.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!planned_route.startsWith(";") && !planned_route.startsWith(" ") && start){
            console.log(`planned_route: ${planned_route}`);
        } 

        if(planned_route.startsWith("!CLIENTS")){
            start = true;
        }

        // planned_depairport_lat:
        let planned_depairport_lat = parts[31];

        if(planned_depairport_lat.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!planned_depairport_lat.startsWith(";") && !planned_depairport_lat.startsWith(" ") && start){
            console.log(`planned_depairport_lat: ${planned_depairport_lat}`);
        } 

        if(planned_depairport_lat.startsWith("!CLIENTS")){
            start = true;
        }

        // planned_depairport_lon:
        let planned_depairport_lon = parts[32];

        if(planned_depairport_lon.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!planned_depairport_lon.startsWith(";") && !planned_depairport_lon.startsWith(" ") && start){
            console.log(`planned_depairport_lon: ${planned_depairport_lon}`);
        } 

        if(planned_depairport_lon.startsWith("!CLIENTS")){
            start = true;
        }

        // planned_destairport_lat:
        let planned_destairport_lat = parts[33];

        if(planned_destairport_lat.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!planned_destairport_lat.startsWith(";") && !planned_destairport_lat.startsWith(" ") && start){
            console.log(`planned_destairport_lat: ${planned_destairport_lat}`);
        } 

        if(planned_destairport_lat.startsWith("!CLIENTS")){
            start = true;
        }

        // planned_destairport_lon:
        let planned_destairport_lon = parts[34];

        if(planned_destairport_lon.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!planned_destairport_lon.startsWith(";") && !planned_destairport_lon.startsWith(" ") && start){
            console.log(`planned_destairport_lon: ${planned_destairport_lon}`);
        } 

        if(planned_destairport_lon.startsWith("!CLIENTS")){
            start = true;
        }

        // atis_message:
        let atis_message = parts[35];

        if(atis_message.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!atis_message.startsWith(";") && !atis_message.startsWith(" ") && start){
            console.log(`atis_message: ${atis_message}`);
        } 

        if(atis_message.startsWith("!CLIENTS")){
            start = true;
        }

        // time_last_atis_received:
        let time_last_atis_received = parts[36];

        if(time_last_atis_received.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!time_last_atis_received.startsWith(";") && !time_last_atis_received.startsWith(" ") && start){
            console.log(`time_last_atis_received: ${time_last_atis_received}`);
        } 

        if(time_last_atis_received.startsWith("!CLIENTS")){
            start = true;
        }

        // time_logon:
        let time_logon = parts[37];

        if(time_logon.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!time_logon.startsWith(";") && !time_logon.startsWith(" ") && start){
            console.log(`time_logon: ${time_logon}`);
        } 

        if(time_logon.startsWith("!CLIENTS")){
            start = true;
        }

        // heading:
        let heading = parts[38];

        if(heading.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!heading.startsWith(";") && !heading.startsWith(" ") && start){
            console.log(`heading: ${heading}`);
        } 

        if(heading.startsWith("!CLIENTS")){
            start = true;
        }

        // QNH_iHg:
        let QNH_iHg = parts[39];

        if(QNH_iHg.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!QNH_iHg.startsWith(";") && !QNH_iHg.startsWith(" ") && start){
            console.log(`QNH_iHg: ${QNH_iHg}`);
        } 

        if(QNH_iHg.startsWith("!CLIENTS")){
            start = true;
        }

        // QNH_Mb:
        let QNH_Mb = parts[40];

        if(QNH_Mb.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!QNH_Mb.startsWith(";") && !QNH_Mb.startsWith(" ") && start){
            console.log(`QNH_Mb: ${QNH_Mb}`);
        } 

        if(QNH_Mb.startsWith("!CLIENTS")){
            start = true;
        }
    

    });

    console.log("DUDE " + new Date().toTimeString());    

};

let task = cron.schedule('*/2 * * * *', () => {

   axios.get('http://us.data.vatsim.net/vatsim-data.txt')
    .then( (response) => {
        parseVATSIM(response.data);
    })
    .catch( (error) => {
        console.log(error);
    });

});

