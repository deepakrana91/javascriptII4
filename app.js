var emp= [{name:"deepak rana",age:25,salary:35000,
address:{city:"gurgaon",state:"haryana",pin:122001}},
{name:"suraj",age:25,salary:35000,
address:{city:"roorkee",state:"uttrakhand",pin:247667}},
{name:"pooja rana",age:29,salary:30000,
address:{city:"noida",state:"uttarpradesh",pin:247453}},
{name:"arti",age:26,salary:35000,
address:{city:"allahbad",state:"uttarpradesh",pin:247667}},
{name:"satyapal singh",age:50,salary:40000,
address:{city:"roorkee",state:"uttrakhand",pin:247667}}];

displayemp();

function displayemp()
{
    
    for(var i=0;i<5;i++)
    {
    
        console.log(emp[i].name);
        console.log(emp[i].age);
        console.log(emp[i].salary);
        console.log(emp[i].address.city);
        console.log(emp[i].address.state);
        console.log(emp[i].address.pin);
    }
    
}