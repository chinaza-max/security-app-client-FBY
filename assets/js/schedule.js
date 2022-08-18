


let interval=1
let mySchedule=""
let activeTab='Daily'
let schedule={
    repeat:"daily",
    interval
}
let weekdays=["sun","mon","Tue","Wen","Thu","Fri","Sat"]
let dayInterval=["First","Second","Third","Fourth","Fifth","Sixth","Seventh","Eighth",
            "Ninth","Tenth","Eleventh","Twelfth","Thirteenth","Fourteenth", "Fifteenth","Sixteenth","Seventeenth",
            "Eighteenth","Nineteenth","Twentieth","Twenty-first","Twenty-second","Twenty-third",
            "Twenty-fourth","Twenty-fifth","Twenty-sixth","Twenty-seventh","Twenty-eighth","Twenty-ninth","Thirtieth","Thirty-first",
            "Last","Penultimate","Third to last","Fourth to last","Fifth to last","Sixth to last","Seventh to last","Eighth to last", 
            "Ninth to last","Tenth to last","Eleventh to last","Twelfth to last","Thirteenth to last","Fourteenth to last","Fifteenth to last", 
            "Sixteenth to last","Seventeenth to last","Eighteenth to last","Nineteenth to last","Twentieth to last","Twenty-first to last",
            "Twenty-second to last","Twenty-third to last","Twenty-fourth to last","Twenty-fifth to last","Twenty-sixth to last",
            "Twenty-seventh to last","Twenty-eighth to last","Twenty-ninth to last","Thirtieth to last"]
let dayPosition=["First","Second","Third","Fourth","Last"]
let input=document.querySelectorAll(".interval")
let checkBox=document.querySelectorAll(".checkBox")
let navLink=document.querySelectorAll(".nav-link")
let saveChangeButton=document.getElementById("saveData")
let optionMonthly1=document.getElementById("monthly1")
let optionMonthly2=document.getElementById("monthly2")
let optionMonthly3=document.getElementById("monthly3")


let selectedWeekdaysW=[]
let monthlyweekdaysSelected="sun"


function formatObj(val){
    if(val.repeat=="daily"){
        mySchedule=`Recurring ${val.repeat}; Repeat every ${val.interval} day(s);`
    }
    else if(val.repeat=="weekly"){
        mySchedule=`Recurring ${val.repeat}; Repeat every ${val.interval} week(s) on ${val.weekdays};`
    }
    else if(val.repeat=="monthly"){
        
    }
    else if(val.repeat=="yearly"){
        
    }
    document.getElementById("scheduleData").innerHTML=mySchedule
}
formatObj(schedule)
document.getElementById("scheduleData").innerHTML=mySchedule


input.forEach((e)=>{
        e.addEventListener('change', (e) => {
            interval=e.target.value
             
            input.forEach((e)=>{
                e.value=interval
            })
        })  
    }  
)

checkBox.forEach((e)=>{
    e.addEventListener('click', (e) => {
        if(e.target.checked){
            selectedWeekdaysW.push(weekdays[e.target.value])
        }
        else{

            selectedWeekdaysW= selectedWeekdaysW.filter(remove);
            function remove(val) {
                return val != weekdays[e.target.value];
            }
        }
    })  
})

navLink.forEach((e)=>{
    e.addEventListener('click', (e) => {
        activeTab=e.target.innerHTML
    })  
})

saveChangeButton.addEventListener('click', (e) => {

    if(activeTab=="Daily"){
         daily()
    }
    else if(activeTab=="Weekly"){
        console.log(activeTab)
        weekly()
    }
    else if(activeTab=="Monthly"){
        monthly()
    }
    else if(activeTab=="Yearly"){
        yearly()
    }
})

optionMonthly1.addEventListener('change', (e) => {
    document.getElementById("monthly1CheckRadio").checked=true
    let index=e.target.value;
    if(index>0){
        console.log(dayInterval[index-1])
    }
    else{
        console.log(dayInterval[(index*-1)+30])
    }
})

optionMonthly2.addEventListener('change', (e) => {
    document.getElementById("monthly2CheckRadio").checked=true
    let index=e.target.value;
    if(index>0){
        console.log(dayPosition[index-1])
    }
    else{
        console.log(dayPosition[4])
    }
})

optionMonthly3.addEventListener('change', (e) => {
    document.getElementById("monthly2CheckRadio").checked=true
    let index=e.target.value;
   
    console.log(weekdays[index-1])

})

function daily(){
    let schedule={
        repeat:"daily",
        interval
    }
    formatObj(schedule)
}

function weekly(){
    let schedule={
        repeat:"weekly",
        weekdays:selectedWeekdaysW.join(','),
        interval
    }
    formatObj(schedule)
}

function monthly(){
    
}

function yearly(){
    
}