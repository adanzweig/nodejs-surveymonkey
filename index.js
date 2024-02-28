const axios = require('axios');
require('dotenv').config();

async function getSurveys()
{
    try{
        const response = await axios.get('https://api.surveymonkey.com/v3/surveys',{
            headers:{
                'Authorization': `Bearer ${process.env.TOKEN}`,
                'Content-Type':'application/json'
            }
        });
        return response.data;
    }catch(error){
        console.error(error);
    }
    
}
async function getSurveyResponses(surveyID){
    try{
        const response = await axios.get(`https://api.surveymonkey.com/v3/surveys/${surveyID}/responses`,{
            headers:{
                'Authorization': `Bearer ${process.env.TOKEN}`,
                'Content-Type':'application/json'
            }
        })
        return response.data
    }catch(error){
        console.error(error);
    }
}


(async()=>{
    const surveys = await getSurveys();
    const currentSurvey = surveys.data[0].id;

    const responses = await getSurveyResponses(currentSurvey);
    

    console.log(responses);
})()