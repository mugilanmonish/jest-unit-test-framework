export function objWithTwoOptional(obj: any): any {
    if(!obj.user?.org?.id) {
        console.log('IF CONDITION');
    } else {
        console.log('ELSE CONDITION');
    }
}