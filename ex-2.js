// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000;
let isWeekday;
let hasBoughtProductFromITCategory;
let hasAttendedDiscountEvent;
let isPlatinum;

let hasPromotion;

lastMonthPaidMoreThan4000 = 4001 > 4000;
isWeekday = false;
hasBoughtProductFromITCategory = false;
hasAttendedDiscountEvent = true;
isPlatinum = false;
hasPromotion =
    (lastMonthPaidMoreThan4000 && isWeekday && !hasBoughtProductFromITCategory) || // Con1
    isPlatinum;

console.log(hasPromotion);