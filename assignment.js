//function kilomeeterToMeter
function kilomeeterToMeter(kilometer){
    var meter = kilometer * 1000 ;
    return meter ;
}
var data = [2 ,3, 5]
var kiloMeter = kilometerToMeter(data[0]);
//console.log(kiloMeter);


//function budgetCalculator
function budgetCalculator (watch, phone, laptop){
    var watchPrice = 50, phoneprice =100, laptopprice = 500;
    if ( watch >= 0,  phone >= 0,  laptop >= 0){
        return ( water * waterPrice) + (phone * phonePrice) + (laptop * laptopPrice);
    }
    else{
        return"It has no value ";
    }
}



//function hotelCost
function hotelCost(day){
    switch(true){
        case day >=0, day <=10:
            return day * 100;
            
            case day > 10, day <=20:
                return 1000 + (day - 10) *80;
                
            case day > 20:
                return 1800 + (day - 20) *50;

                default:
                    return"It has no value ";
    }

}



//function megaFreiend
function megaFreiend ( 'alam' 'kamal' 'jamal Uddin')
var maxName =megaFreiend[0]
for (var i= 0; i<megaFreiend.length; i++){
 var element = marks[i];
 if(element > maxName){

 }
}
//console.log("Higtest value is ",maxName)