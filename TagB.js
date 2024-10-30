import './Header.css'
let a = true;
export default function TagB({name = '',children}){
    
        return(
            
            <div><button onClick={s} className={"b"}>
                {name}
                <div> {children}</div>
                </button>
                </div>
            
            
                    
        )
            
    
}
function s(){
    a = prompt('hello user : ')
    console.log(a)
}