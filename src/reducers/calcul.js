const Calcul=(initialState=100,action)=>{
    switch(action.type){
        case 'MAX':
            return initialState+10
            case 'MIN':
            return initialState-10
            case 'REST':
            return initialState =100
            default:
                return initialState
    }
    }
    export default Calcul