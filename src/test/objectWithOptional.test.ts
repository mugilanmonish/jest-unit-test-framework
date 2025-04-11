import { objWithTwoOptional } from "../object/objectWithOptional";
describe('ObjectWithOptional', ()=>{

    it('check the else', ()=>{
        const personObj = true
        objWithTwoOptional(personObj)
    })

    it('check the if', ()=>{
        const obj = false
        objWithTwoOptional(obj)
    })

    it('check org', ()=>{
        const personObj = {
            orgName: 'Liminal',
            user: {
                org: 1
            }
        }     
        objWithTwoOptional(personObj)   
    })
})
